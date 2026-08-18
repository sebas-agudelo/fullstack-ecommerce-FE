import { Footer } from "../../components/Footer/Footer";
import { ProductDetails } from "./compoenents/ProductDetails";

export default function GetProduct() {

  return (
    <>
    <main className="product-page">
      <div className="">
        <ProductDetails />
      </div>
    </main>
    <Footer />
      </>
  );
}
