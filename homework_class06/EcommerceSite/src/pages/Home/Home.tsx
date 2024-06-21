import { useContext } from "react";
import { Container } from "../../Container/Container";
import { ProductContext } from "../../Contex/ProductContex";
import ProductCard from "../../components/ProductCard/ProductCart";
import "./Home.css";

const Home = () => {
  const context = useContext(ProductContext);

  const { products } = context;

  return (
    <Container>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
};

export default Home;



