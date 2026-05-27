import { Link } from "react-router-dom";

function Products() {
  return (
    <div>

      <h1>Products Page</h1>

      <Link to="/admin/products/1">
        Product 1
      </Link>

      <br />

      <Link to="/admin/products/2">
        Product 2
      </Link>

    </div>
  );
}

export default Products;