import { useState } from 'react'
import SearchBar from "./SearchBar.jsx";
import ProductTable from "./ProductTable.jsx";

export default function FilterableProductTable({products}) {
    const [] = useState();
  return (
    <>
      <SearchBar />
      <ProductTable products={products}/>
    </>
  );
}
