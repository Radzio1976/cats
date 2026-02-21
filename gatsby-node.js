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

  const catTemplate = path.resolve("src/templates/catTemplate.js")
  const litterTemplate = path.resolve("src/templates/litterTemplate.js")
  const languages = ["pl", "en", "de"]

  /* =======================
      STRONY KOTÓW
     ======================= */

  languages.forEach(lang =>
    oldCats.forEach(oldCat =>
      createPage({
        path:
          lang === "pl"
            ? `/${oldCat.sex === "male" ? "kocury" : "kotki"}/${oldCat.slug}`
            : lang === "en"
            ? `/${oldCat.sex === "male" ? "male-cats" : "female-cats"}/${
                oldCat.slug
              }`
            : `/${oldCat.sex === "male" ? "kater" : "katzen"}/${oldCat.slug}`,
        component: catTemplate,
        context: {
          id: oldCat.id,
          slug: oldCat.slug,
        },
      })
    )
  )

  languages.forEach(lang => {
    youngCats.forEach(youngCat => {
      const litter = youngCat.litter?.find(p => p?.slug)
      if (!litter) return

      createPage({
        path:
          lang === "pl"
            ? `/mioty/${litter.slug}/${youngCat.slug}`
            : lang === "en"
            ? `/litters/${litter.slug}/${youngCat.slug}`
            : `/wuerfe/${litter.slug}/${youngCat.slug}`,
        component: catTemplate,
        context: {
          id: youngCat.id,
          slug: youngCat.slug,
        },
      })
    })
  })

  languages.forEach(lang => {
    litters.forEach((litter, i, array) => {
      createPage({
        path:
          lang === "pl"
            ? `/mioty/${litter.slug}`
            : lang === "en"
            ? `/litters/${litter.slug}`
            : `/wuerfe/${litter.slug}`,
        component: litterTemplate,
        context: {
          id: litter.id,
          slug: litter.slug,
          prevId: array[i - 1]?.id,
          prevSlug: array[i - 1]?.slug,
          nextId: array[i + 1]?.id,
          nextSlug: array[i + 1]?.slug,
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
