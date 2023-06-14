import { products as initialProducts } from "./mocks/products.json"
import { Products } from "./components/Products.jsx"
import { useState } from "react"
import { Header } from "./components/Header.jsx"
import { Footer } from "./components/Footer.jsx"
import { IS_DEVELOPMENT } from "./config"
import { useFilters } from "./hooks/useFilters"

function App() {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)
  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </>
  )
}

export default App
//https://www.youtube.com/watch?v=B9tDYAZZxcE&t=119s

//01:04