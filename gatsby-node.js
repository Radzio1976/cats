const path = require("path")
const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  /* =======================
      POBIERANIE DANYCH
     ======================= */

  const result = await graphql(`
    {
      highgraph {
        oldCats {
          id
          slug
          sex
        }
        youngCats {
          id
          slug
          sex
          litter {
            ... on HIGHGRAPH_Litter {
              id
              slug
            }
          }
        }
        litters {
          id
          slug
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const oldCats = result.data.highgraph.oldCats
  const youngCats = result.data.highgraph.youngCats
  const litters = result.data.highgraph.litters

  /* =======================
     ŚCIEŻKI DO SZABLONÓW
     ======================= */

  const homeTemplate = path.resolve("src/templates/homeTemplate.js")
  const aboutUsTemplate = path.resolve("src/templates/aboutUsTemplate.js")
  const catTemplate = path.resolve("src/templates/catTemplate.js")
  const litterTemplate = path.resolve("src/templates/litterTemplate.js")
  const languages = [
    {
      lang: "pl",
      maleCats: "kocury",
      femaleCats: "kotki",
      litters: "mioty",
      home: "",
      aboutUs: "o-nas",
    },
    {
      lang: "en",
      maleCats: "male-cats",
      femaleCats: "female-cats",
      litters: "litters",
      home: "breeding",
      aboutUs: "about-us",
    },
    {
      lang: "de",
      maleCats: "kater",
      femaleCats: "katzen",
      litters: "wuerfe",
      home: "zucht",
      aboutUs: "uber-uns",
    },
  ]

  /* =======================
      STRONA HOME
     ======================= */

  languages.forEach((item, i, languages) => {
    createPage({
      path: `/${item.home}`,
      component: homeTemplate,
      context: {
        allLanguagesPaths: {
          pl: `/${languages[0].home}`,
          en: `/${languages[1].home}`,
          de: `/${languages[2].home}`,
        },
      },
    })
  })

  /* =======================
      STRONA O NAS
     ======================= */

  languages.forEach((item, i, languages) => {
    createPage({
      path: `/${item.aboutUs}`,
      component: aboutUsTemplate,
      context: {
        allLanguagesPaths: {
          pl: `/${languages[0].aboutUs}`,
          en: `/${languages[1].aboutUs}`,
          de: `/${languages[2].aboutUs}`,
        },
      },
    })
  })

  /* =======================
      STRONY KOTÓW
     ======================= */

  languages.forEach(item =>
    oldCats.forEach(oldCat =>
      createPage({
        path: `/${oldCat.sex === "male" ? item.maleCats : item.femaleCats}/${
          oldCat.slug
        }`,
        component: catTemplate,
        context: {
          id: oldCat.id,
          slug: oldCat.slug,
        },
      })
    )
  )

  languages.forEach(item => {
    youngCats.forEach(youngCat => {
      const litter = youngCat.litter?.find(p => p?.slug)
      if (!litter) return

      createPage({
        path: `/${item.litters}/${litter.slug}/${youngCat.slug}`,
        component: catTemplate,
        context: {
          id: youngCat.id,
          slug: youngCat.slug,
        },
      })
    })
  })

  languages.forEach((item, i, languages) => {
    litters.forEach((litter, i, array) => {
      createPage({
        path: `/${item.litters}/${litter.slug}`,
        component: litterTemplate,
        context: {
          id: litter.id,
          slug: litter.slug,
          prevId: array[i - 1]?.id,
          prevSlug: array[i - 1]?.slug,
          nextId: array[i + 1]?.id,
          nextSlug: array[i + 1]?.slug,
          allLanguagesPaths: {
            pl: `/${languages[0].litters}/${litter.slug}`,
            en: `/${languages[1].litters}/${litter.slug}`,
            de: `/${languages[2].litters}/${litter.slug}`,
          },
        },
      })
    })
  })
}

/* =======================
      TWORZENIE LOKALNYCH FILE NODES
     ======================= */

exports.createResolvers = async ({
  createResolvers,
  cache,
  store,
  reporter,
  actions,
  createNodeId,
}) => {
  const { createNode } = actions

  createResolvers({
    HIGHGRAPH_Asset: {
      localFile: {
        type: "File",
        async resolve(source) {
          if (!source.url) return null

          return await createRemoteFileNode({
            url: source.url,
            cache,
            store,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}
