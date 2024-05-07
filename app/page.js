import Image from "next/image";
import ProductCard from "./components/card";
import Header from "./components/header";
export default function Home() {
  return (
    <section className="w-full   bg-slate-300  flex justify-center  ">
      <Header />
      <div className="grid md:grid-cols-3  mt-20 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />

      </div>
    </section>

  );
}
