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
              pl
              en
              de
            }
          }
        }
        litters {
          id
          pl
          en
          de
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
      maleCats: "/kocury",
      femaleCats: "/kotki",
      litters: "/mioty",
      home: "/",
      aboutUs: "/o-nas",
      oldMaleCats: "/kocury",
      oldFemaleCats: "/kotki",
      litters: "/mioty",
      contact: "/kontakt",
    },
    {
      lang: "en",
      maleCats: "/male-cats",
      femaleCats: "/female-cats",
      litters: "/litters",
      home: "/breeding",
      aboutUs: "/about-us",
      oldMaleCats: "/male-cats",
      oldFemaleCats: "/female-cats",
      litters: "/litters",
      contact: "/contact",
    },
    {
      lang: "de",
      maleCats: "/kater",
      femaleCats: "/katzen",
      litters: "/wuerfe",
      home: "/zucht",
      aboutUs: "/uber-uns",
      oldMaleCats: "/kater",
      oldFemaleCats: "/katzen",
      litters: "/wuerfe",
      contact: "/kontakt",
    },
  ]

  /* =======================
      STRONA HOME
     ======================= */

  languages.forEach((item, i, languages) => {
    const allLanguagesPaths = {}

    languages.forEach(langItem => {
      allLanguagesPaths[langItem.lang] = `${langItem.home}`
    })
    createPage({
      path: `${item.home}`,
      component: homeTemplate,
      context: {
        allLanguagesPaths,
      },
    })
  })

  /* =======================
      STRONA O NAS
     ======================= */

  languages.forEach((item, i, languages) => {
    const allLanguagesPaths = {}

    languages.forEach(langItem => {
      allLanguagesPaths[langItem.lang] = `${langItem.aboutUs}`
    })
    createPage({
      path: `${item.aboutUs}`,
      component: aboutUsTemplate,
      context: {
        allLanguagesPaths,
      },
    })
  })

  /* =======================
      STRONA DOJRZAŁE KOCURY
     ======================= */

  languages.forEach((item, i, languages) => {
    const allLanguagesPaths = {}

    languages.forEach(langItem => {
      allLanguagesPaths[langItem.lang] = `${langItem.oldMaleCats}`
    })
    createPage({
      path: `${item.oldMaleCats}`,
      component: oldMaleCatsTemplate,
      context: {
        allLanguagesPaths,
      },
    })
  })

  /* =======================
      STRONA DOJRZAŁE KOTKI
     ======================= */

  languages.forEach((item, i, languages) => {
    const allLanguagesPaths = {}

    languages.forEach(langItem => {
      allLanguagesPaths[langItem.lang] = `${langItem.oldFemaleCats}`
    })
    createPage({
      path: `${item.oldFemaleCats}`,
      component: oldFemaleCatsTemplate,
      context: {
        allLanguagesPaths,
      },
    })
  })

  /* =======================
      STRONA MIOTY
     ======================= */

  languages.forEach((item, i, languages) => {
    const allLanguagesPaths = {}

    languages.forEach(langItem => {
      allLanguagesPaths[langItem.lang] = `${langItem.litters}`
    })
    createPage({
      path: `${item.litters}`,
      component: littersTemplate,
      context: {
        allLanguagesPaths,
      },
    })
  })

  /* =======================
      STRONA KONTAKT
     ======================= */

  languages.forEach((item, i, languages) => {
    const allLanguagesPaths = {}

    languages.forEach(langItem => {
      allLanguagesPaths[langItem.lang] = `${langItem.contact}`
    })
    createPage({
      path: `${item.contact}`,
      component: contactTemplate,
      context: {
        allLanguagesPaths,
      },
    })
  })

  /* =======================
      STRONY POJEDYŃCZYCH DOJRZAŁYCH KOTÓW
     ======================= */

  languages.forEach(item => {
    oldCats.forEach(oldCat => {
      const allLanguagesPaths = {}

      languages.forEach(langItem => {
        allLanguagesPaths[langItem.lang] = `/${
          oldCat.sex === "male" ? langItem.maleCats : langItem.femaleCats
        }/${oldCat.slug}`
      })
      return createPage({
        path: `${oldCat.sex === "male" ? item.maleCats : item.femaleCats}/${
          oldCat.slug
        }`,
        component: catTemplate,
        context: {
          id: oldCat.id,
          slug: oldCat.slug,
          allLanguagesPaths,
        },
      })
    })
  })

  /* =======================
      STRONY POJEDYŃCZYCH MŁODYCH KOTÓW
     ======================= */

  languages.forEach((item, i, languages) => {
    youngCats.forEach(youngCat => {
      const litter = youngCat.litter?.find(p => p?.[item.lang])
      if (!litter) return
      const allLanguagesPaths = {}

      languages.forEach(langItem => {
        allLanguagesPaths[langItem.lang] = `${langItem.litters}/${
          litter[langItem.lang]
        }/${youngCat.slug}`
      })
      createPage({
        path: `${item.litters}/${litter[item.lang]}/${youngCat.slug}`,
        component: catTemplate,
        context: {
          id: youngCat.id,
          slug: youngCat.slug,
          allLanguagesPaths,
        },
      })
    })
  })

  /* =======================
      STRONY POJEDYŃCZYCH MIOTÓW
     ======================= */

  languages.forEach((item, i, languages) => {
    litters.forEach((litter, i, array) => {
      const allLanguagesPaths = {}

      languages.forEach(langItem => {
        allLanguagesPaths[langItem.lang] = `${langItem.litters}/${
          litter[langItem.lang]
        }`
      })
      createPage({
        path: `${item.litters}/${litter[item.lang]}`,
        component: litterTemplate,
        context: {
          id: litter.id,
          slug: litter.slug,
          prevId: array[i - 1]?.id,
          prevSlug: array[i - 1]?.slug,
          nextId: array[i + 1]?.id,
          nextSlug: array[i + 1]?.slug,
          allLanguagesPaths,
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
