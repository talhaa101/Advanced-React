import { useParams } from "react-router-dom";
import { products } from "../data";

function ProductDetails() {

  const { id } = useParams();

  const singleProduct = products.find(
    (product) => product.id === Number(id)
  );

   if (!singleProduct) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div>

      <h1>Product Details</h1>

      <h2>{singleProduct.name}</h2>

      <p>Price: {singleProduct.price}</p>

    </div>
  );
}

export default ProductDetails;