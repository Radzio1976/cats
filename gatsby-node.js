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
          parent {
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

  const oldMaleCats = result.data.highgraph.oldCats.filter(
    cat => cat.sex === "male"
  )
  const oldFemaleCats = result.data.highgraph.oldCats.filter(
    cat => cat.sex === "female"
  )
  const youngMaleCats = result.data.highgraph.youngCats.filter(
    cat => cat.sex === "male"
  )
  const youngFemaleCats = result.data.highgraph.youngCats.filter(
    cat => cat.sex === "female"
  )
  const litters = result.data.highgraph.litters

  /* =======================
     ŚCIEŻKI DO SZABLONÓW
     ======================= */

  const catTemplate = path.resolve("src/templates/cat.js")
  const litterTemplate = path.resolve("src/templates/litter.js")

  /* =======================
      STRONY KOTÓW
     ======================= */

  oldMaleCats.forEach(cat => {
    console.log("Tworzę stronę kocura:", cat.slug, cat.id)
    createPage({
      path: `/dojrzale-koty/kocury/${cat.slug}`,
      component: catTemplate,
      context: {
        id: cat.id,
        slug: cat.slug,
      },
    })
  })

  oldFemaleCats.forEach(cat => {
    createPage({
      path: `/dojrzale-koty/kotki/${cat.slug}`,
      component: catTemplate,
      context: {
        id: cat.id,
        slug: cat.slug,
      },
    })
  })

  youngMaleCats.forEach(cat => {
    const litter = cat.parent?.find(p => p?.slug)
    if (!litter) return

    createPage({
      path: `/mioty/${litter.slug}/mlode-kocury/${cat.slug}`,
      component: catTemplate,
      context: {
        id: cat.id,
        slug: cat.slug,
      },
    })
  })

  youngFemaleCats.forEach(cat => {
    const litter = cat.parent?.find(p => p?.slug)
    if (!litter) return

    createPage({
      path: `/mioty/${litter.slug}/mlode-kotki/${cat.slug}`,
      component: catTemplate,
      context: {
        id: cat.id,
        slug: cat.slug,
      },
    })
  })

  litters.forEach(litter => {
    createPage({
      path: `/mioty/${litter.slug}`,
      component: litterTemplate,
      context: {
        id: litter.id,
        slug: litter.slug,
      },
    })
  })
}
