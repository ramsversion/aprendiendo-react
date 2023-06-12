import { Filters } from './Filters.jsx'

export function Header({ chageFilters }) {
    return (
        <header>
            <h1>React Shop 🛒</h1>
            <Filters onChange={chageFilters} />
        </header>
    )
}