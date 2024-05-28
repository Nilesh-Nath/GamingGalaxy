import Admin from "./admin/page";
import About from "./components/About/About";
import BestProducts from "./components/BestProducts/BestProducts";
import BestProducts1 from "./components/BestProducts/BestProducts1";
import BestSeller from "./components/BestSeller/page";
import Blogs from "./components/Blogs/Blogs";
import Categories from "./components/Categories/Categories";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/page";
import WishList from "./wishlist/page";

export default function Home() {
  return (
    <>
      <Hero />
      <BestSeller />
      <Categories />
      <Contact />
      <BestProducts />
      <BestProducts1 />
      <About />
      <Blogs />
      {/* <Admin /> */}
    </>
  );
}
