const path = require("path")

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
          parents {
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

  /* =======================
      STRONY KOTÓW
     ======================= */

  oldCats.forEach(oldCat =>
    createPage({
      path: `/dojrzale-koty/${oldCat.slug}`,
      component: catTemplate,
      context: {
        id: oldCat.id,
        slug: oldCat.slug,
      },
    })
  )

  youngCats.forEach(youngCat => {
    const litter = youngCat.parents?.find(p => p?.slug)
    if (!litter) return

    createPage({
      path: `/mioty/${litter.slug}/${youngCat.slug}`,
      component: catTemplate,
      context: {
        id: youngCat.id,
        slug: youngCat.slug,
      },
    })
  })

  litters.forEach((litter, i, array) => {
    createPage({
      path: `/mioty/${litter.slug}`,
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
}
