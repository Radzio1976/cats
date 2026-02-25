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
  const oldMaleCatsTemplate = path.resolve(
    "src/templates/oldMaleCatsTemplate.js"
  )
  const oldFemaleCatsTemplate = path.resolve(
    "src/templates/oldFemaleCatsTemplate.js"
  )
  const contactTemplate = path.resolve("src/templates/contactTemplate.js")
  const littersTemplate = path.resolve("src/templates/littersTemplate.js")
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
      oldMaleCats: "kocury",
      oldFemaleCats: "kotki",
      litters: "mioty",
      contact: "kontakt",
    },
    {
      lang: "en",
      maleCats: "male-cats",
      femaleCats: "female-cats",
      litters: "litters",
      home: "breeding",
      aboutUs: "about-us",
      oldMaleCats: "male-cats",
      oldFemaleCats: "female-cats",
      litters: "litters",
      contact: "contact",
    },
    {
      lang: "de",
      maleCats: "kater",
      femaleCats: "katzen",
      litters: "wuerfe",
      home: "zucht",
      aboutUs: "uber-uns",
      oldMaleCats: "kater",
      oldFemaleCats: "katzen",
      litters: "wuerfe",
      contact: "kontakt",
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
      STRONA DOJRZAŁE KOCURY
     ======================= */

  languages.forEach((item, i, languages) => {
    createPage({
      path: `/${item.oldMaleCats}`,
      component: oldMaleCatsTemplate,
      context: {
        allLanguagesPaths: {
          pl: `/${languages[0].oldMaleCats}`,
          en: `/${languages[1].oldMaleCats}`,
          de: `/${languages[2].oldMaleCats}`,
        },
      },
    })
  })

  /* =======================
      STRONA DOJRZAŁE KOTKI
     ======================= */

  languages.forEach((item, i, languages) => {
    createPage({
      path: `/${item.oldFemaleCats}`,
      component: oldFemaleCatsTemplate,
      context: {
        allLanguagesPaths: {
          pl: `/${languages[0].oldFemaleCats}`,
          en: `/${languages[1].oldFemaleCats}`,
          de: `/${languages[2].oldFemaleCats}`,
        },
      },
    })
  })

  /* =======================
      STRONA MIOTY
     ======================= */

  languages.forEach((item, i, languages) => {
    createPage({
      path: `/${item.litters}`,
      component: littersTemplate,
      context: {
        allLanguagesPaths: {
          pl: `/${languages[0].litters}`,
          en: `/${languages[1].litters}`,
          de: `/${languages[2].litters}`,
        },
      },
    })
  })

  /* =======================
      STRONA KONTAKT
     ======================= */

  languages.forEach((item, i, languages) => {
    createPage({
      path: `/${item.contact}`,
      component: contactTemplate,
      context: {
        allLanguagesPaths: {
          pl: `/${languages[0].contact}`,
          en: `/${languages[1].contact}`,
          de: `/${languages[2].contact}`,
        },
      },
    })
  })

  /* =======================
      STRONY POJEDYŃCZYCH KOTÓW
     ======================= */

  languages.forEach(item => {
    oldCats.forEach(oldCat => {
      return createPage({
        path: `/${oldCat.sex === "male" ? item.maleCats : item.femaleCats}/${
          oldCat.slug
        }`,
        component: catTemplate,
        context: {
          id: oldCat.id,
          slug: oldCat.slug,
          allLanguagesPaths: {
            pl: `/${
              oldCat.sex === "male"
                ? languages[0].maleCats
                : languages[0].femaleCats
            }/${oldCat.slug}`,
            en: `/${
              oldCat.sex === "male"
                ? languages[1].maleCats
                : languages[1].femaleCats
            }/${oldCat.slug}`,
            de: `/${
              oldCat.sex === "male"
                ? languages[2].maleCats
                : languages[2].femaleCats
            }/${oldCat.slug}`,
          },
        },
      })
    })
  })

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
