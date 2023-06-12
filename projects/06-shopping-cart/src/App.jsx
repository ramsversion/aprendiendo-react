import { products as initialProducts } from "./mocks/products.json"
import { Products } from "./components/Products.jsx"
import { useState } from "react"
import { Header } from "./components/Header"


function App() {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

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

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header chageFilters={setFilters} />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
//https://www.youtube.com/watch?v=B9tDYAZZxcE&t=119s

//29:00