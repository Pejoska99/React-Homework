

import { useContext } from 'react';
import { Product } from '../../types/types';
import { ProductContext } from '../../Contex/ProductContex';
import './ProductCard.css';

const ProductCard = ({ product }: { product: Product }) => {
  const { deleteProduct } = useContext(ProductContext);
  const { image, title, description, price, rating } = product;

  const handleDelete = () => {
    deleteProduct(product.id);
    console.log('Product deleted successfully');
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>${price}</p>
      {rating ? (
        <p>Rating: {rating.rate} ({rating.count} reviews)</p>
      ) : (
        <p>No ratings available</p>
      )}
      <button onClick={handleDelete}>Delete</button> 
    </div>
  );
};

export default ProductCard;

