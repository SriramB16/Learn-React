export default function SearchBar({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}){
    return(
        <div>
            <input type="text" placeholder="Search..." value={filterText}  onChange={(e) => onFilterTextChange(e.target.value)}/>
            <label>
                <input type="checkbox" checked={inStockOnly} onChange={(e) => onInStockOnlyChange(e.target.checked)}/> Only show products in stock
            </label>
        </div>
    )
}