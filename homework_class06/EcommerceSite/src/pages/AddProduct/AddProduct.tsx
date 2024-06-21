import { useState, useContext } from 'react';
import { ProductContext } from '../../Contex/ProductContex';
import { Product } from '../../types/types';
import { createProduct } from '../../services/product.service';
import './AddProduct.css';

const AddProduct = () => {
  const { addProduct} = useContext(ProductContext);
  const [newProduct, setNewProduct,] = useState({
  title: '',
  price: 0,
  description: '',
  image: '',
  category: '',
  rating: { rate: 0, count: 0 }
  });
  
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, key: string) => {
  const value = key === 'price' ? parseFloat(event.target.value) || 0 : event.target.value;
  
  setNewProduct({
  ...newProduct,
  [key]: value,
  });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      
      console.log('Submit form:', newProduct);
      const createdProduct: Product = await createProduct({
        ...newProduct,
        id: Date.now().toString()
      });
      console.log('Product created successfully:', createdProduct);
      addProduct(createdProduct);
    } catch (error) {
      console.error('Failed to create product:', error);
    }
  };
  
  
  return (
  <form onSubmit={handleSubmit}>
      <input type="text" 
      placeholder="Title" 
      value={newProduct.title} 
      onChange={(e) => handleChangeInput(e, 'title')} required
      />

      <input
      type="number"
      placeholder="Price"
      value={newProduct.price}
      onChange={(e) => handleChangeInput(e, 'price')}
      required
      />

      <input
      type="text"
      placeholder="Description"
      value={newProduct.description}
      onChange={(e) => handleChangeInput(e, 'description')}
      required
      />

      <input
      type="text"
      placeholder="Image URL"
      value={newProduct.image}
      onChange={(e) => handleChangeInput(e, 'image')}
      required
      />

      <select
      value={newProduct.category}
      onChange={(e) => handleChangeInput(e, 'category')}
      required
      >
      <option value="">Select Category</option>
      <option value="electronics">Electronics</option>
      <option value="jewelery">Jewelery</option>
      <option value="men's clothing">Men's Clothing</option>
      <option value="women's clothing">Women's Clothing</option>
      </select>
     <button type="submit">Add Product</button>
     </form>
  );
  };

  export default AddProduct

