import { PopularProducts } from './PopularProducts';
import { PromoBanner } from "./PromoBanner";
import { Latest } from "./Latest";
import { Footer } from "../../components/Footer/Footer";


export default function Home() {
  return (
    <>
      <main className="home bg-white">
        <PopularProducts />
        <PromoBanner />
        <Latest />
      </main>
      <Footer />
    </>
  );
}
