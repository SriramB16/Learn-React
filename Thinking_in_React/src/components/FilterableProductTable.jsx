import SearchBar from "./SearchBar.jsx";
import ProductTable from "./ProductTable.jsx";

export default function FilterableProductTable({products}) {
  return (
    <>
      <SearchBar />
      <ProductTable products={products}/>
    </>
  );
}
