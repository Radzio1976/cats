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

  console.log(result.data.highgraph.oldCats)

  const oldMaleCats = result.data.highgraph.oldCats.filter(
    cat => cat.sex === "male"
  )
  const oldFemaleCats = result.data.highgraph.oldCats.filter(
    cat => cat.sex === "female"
  )
  const litters = result.data.highgraph.oldCats.litters

  /* =======================
     ŚCIEŻKI DO SZABLONÓW
     ======================= */

  const catTemplate = path.resolve("src/templates/old-cat.js")
  const litterTemplate = path.resolve("src/templates/litter.js")

  /* =======================
      STRONY KOTÓW
     ======================= */

  oldMaleCats.forEach(cat => {
    console.log("Tworzę stronę kocura:", cat.slug, cat.id)
    createPage({
      path: `/kocury/${cat.slug}`,
      component: catTemplate,
      context: {
        id: cat.id,
        slug: cat.slug,
      },
    })
  })

  oldFemaleCats.forEach(cat => {
    createPage({
      path: `/kotki/${cat.slug}`,
      component: catTemplate,
      context: {
        id: cat.id,
        slug: cat.slug,
      },
    })
  })
}
