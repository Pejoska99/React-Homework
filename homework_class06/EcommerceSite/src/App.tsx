import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { ProductProvider } from "./Contex/ProductContex";
import AddProduct from "./pages/AddProduct/AddProduct";
import { Container } from "./Container/Container";


function App() {
 
  return (
    <ProductProvider>
      <Container>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </Router>
      </Container>
    </ProductProvider>
  );
}

export default App;
