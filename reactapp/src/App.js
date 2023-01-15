import "./App.css";
import Laptops from "./komponente/Laptops";
import NavMeni from "./komponente/NavMeni";
import {
  useState,
  useEffect,
} from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cart from "./komponente/Cart";
import Home from "./komponente/Home";
import Contact from "./komponente/Contact";

function App() {
  const [input, setInput] =
    useState("");
  const [output, setOutput] = useState(
    []
  );
  useEffect(() => {
    setOutput([]);
    products.filter((val) => {
      if (
        val.title
          .toLowerCase()
          .includes(input.toLowerCase())
      ) {
        setOutput((output) => [
          ...output,
          val,
        ]);
      }
    });
  }, [input]);
  const [cartNum, setCartNum] =
    useState(0);
  const [
    cartProducts,
    setCartProducts,
  ] = useState([]);
  const [products] = useState([
    {
      id: 1,
      title:
        "LENOVO IdeaPad 3 14ADA05 81W000M0PB",
      img: "https://img.gigatron.rs/img/products/large/image6135e0e9b547f.png",
      price: "90000 RSD",
      description:
        "    EAN:195348948685 Model procesora:AMD® Picasso Ryzen 3 3250U do 3.5GHz Dijagonala ekrana:14 Tip grafičke karte:Integrisana Radeon RX Vega 3 RAM memorija:8GB HDD SSD:512GB SSD",
      amount: 0,
    },
    {
      id: 2,
      title:
        "ACER Aspire 3 A315-23 - NX.HVTEX.009",
      img: "https://img.gigatron.rs/img/products/large/image5fa046b1528ea.png",
      price: "100000 RSD",
      description:
        "    EAN:4710886044659 Model procesora:AMD® Picasso Ryzen 5 3500U do 3.7GHz Dijagonala ekrana:15.6 Tip grafičke karte:Integrisana Radeon™ RX Vega 8 RAM memorija:4GB HDD SSD:256GB SSD",
      amount: 0,
    },
    {
      id: 3,
      title:
        "LENOVO IdeaPad IP 3 14IIL05 81WD008QYA",
      img: "https://img.gigatron.rs/img/products/large/image5f1eccec512ee.png",
      price: "120000 RSD",
      description:
        "    EAN:195042411409 Model procesora:Intel® Core™ i5 1035G4 do 3.7GHz Dijagonala ekrana:14 Tip grafičke karte:Integrisana Iris Plus Graphics G4 RAM memorija:8GB HDD SSD:256GB SSD",
      amount: 0,
    },
    {
      id: 4,
      title:
        "ACER Aspire 3 A315 - NOT16450",
      img: "https://img.gigatron.rs/img/products/large/1-min-57.png",
      price: "110000 RSD",
      description:
        "    EAN:4710886109563 Model procesora:Intel® Core™ i3 1005G1 do 3.4GHz Dijagonala ekrana:15.6 Tip grafičke karte:GeForce MX330 RAM memorija:8GB HDD SSD:256GB SSD",
      amount: 0,
    },
  ]);
  function refresh() {
    let newProducts = products.filter(
      (prod) => prod.amount > 0
    );
    setCartProducts(newProducts);
  }
  function addProduct(id) {
    setCartNum(cartNum + 1);
    products.forEach((prod) => {
      if (prod.id === id) {
        prod.amount++;
      }
    });
    refresh();
  }

  return (
    <BrowserRouter className="App">
      <NavMeni
        cartNum={cartNum}
        setInput={setInput}
      />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/laptops"
          element={
            <Laptops
              products={products}
              onAdd={addProduct}
              output={output}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              products={cartProducts}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;