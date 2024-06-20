import { Product } from '../types/types';

export const createProduct = async (product: Product): Promise<Product> => {
  const response = await fetch('https://fakestoreapi.com/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  
  const data = await response.json();
  console.log(data)
  return data;
};

export const deleteProduct = async (productId: string) => {
  const response = await fetch(`https://fakestoreapi.com/products/${productId}`, {
    method: "DELETE",
  });
  
  const data = await response.json();
  console.log(`Product with ID ${productId} was successfully deleted.`);

  return data;
};


// fetch('https://fakestoreapi.com/products/6',{
//   method:"DELETE"
// })
//   .then(res=>res.json())
//   .then(json=>console.log(json))







