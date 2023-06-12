import { useState, useId } from 'react'
import './Filters.css'

export function Filters({ onChange }) {
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleCangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        onChange(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleCangeCategory = (event) => {
        onChange(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }


    return (
        <section className="filters">
            <div>
                <label htmlFor="minPriceFilterId">Precio a partir de:</label>
                <input
                    type="range"
                    id="minPriceFilterId"
                    min='0'
                    max='1000'
                    onChange={handleCangeMinPrice}
                />
                <span>${minPrice}</span>
            </div>

            <div>
                <label htmlFor="categoryFilterId">Categoría</label>
                <select id="categoryFilterId" onChange={handleCangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Portátiles</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}