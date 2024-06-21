import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Navbar from "./component/common/navabar/Navbar";
import Footer from "./component/common/footer/Footer";
import Cart from "./pages/cart/Cart";
import ShopID from "./pages/[shopID]/page";
import "./App.css";
import Comparison from "./pages/comparison/Comparison";
import Checkout from "./pages/checkout/Checkout";
import Blog from "./pages/blog/Blog";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:shopID" element={<ShopID />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
