import { products as initialProducts } from "./mocks/products.json"
import { Products } from "./components/Products.jsx"
import { useContext, useState } from "react"
import { Header } from "./components/Header.jsx"
import { Footer } from "./components/Footer.jsx"
import { IS_DEVELOPMENT } from "./config"
import { FiltersContext } from "./context/filters.jsx"


function useFilters() {

  const { filters, setFilters } = useContext(FiltersContext)
  console.log(filters);

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }
  return { filters, filterProducts, setFilters }
}

function App() {
  const [products] = useState(initialProducts)
  const { filters, filterProducts, setFilters } = useFilters()
  const filteredProducts = filterProducts(products)
  return (
    <>
      <Header chageFilters={setFilters} />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </>
  )
}

export default App
//https://www.youtube.com/watch?v=B9tDYAZZxcE&t=119s

//57:00