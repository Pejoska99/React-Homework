
import { createContext, useEffect, useState, ReactNode } from 'react';
import { Product, ProductContextType } from '../types/types';

// interface Product {
//   id: string;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
// }

// interface ProductContextType {
//   products: Product[];
//   addProduct: (product: Product) => void;

// }

const defaultProducts: Product[] = [];


const defaultContextValues: ProductContextType = {
  products: defaultProducts,

  addProduct: () => {},
  deleteProduct:() => {},
  
};

export const ProductContext = createContext<ProductContextType>(defaultContextValues);
interface productProviderProps {
  children: ReactNode;
}

export const ProductProvider = ({ children }:productProviderProps) => {
  const [products, setProducts] = useState<Product[]>(defaultProducts);
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data: Product[] = await response.json();
        console.log('Fetched products:', data);
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };
    fetchProducts();
  }, []);

  const addProduct = (newProduct: Product) => {
    setProducts((prevProducts) => [...prevProducts, {...newProduct, id:Date.now().toString()}]);
  };

  const deleteProduct = (productId: string) => {
    setProducts((prevProducts) => prevProducts.filter(product => product.id !== productId));
};



return (
  <ProductContext.Provider value={{ products, addProduct, deleteProduct}}>
    {children}
  </ProductContext.Provider>
);
};


//  localStorage


// const defaultProducts: Product[] = JSON.parse(localStorage.getItem('products') || '[]');

// const defaultContextValues: ProductContextType = {
//   products: defaultProducts,
//   addProduct: () => {},
//   deleteProduct: () => {},
// };

// export const ProductContext = createContext<ProductContextType>(defaultContextValues);

// interface ProductProviderProps {
//   children: ReactNode;
// }

// export const ProductProvider = ({ children }: ProductProviderProps) => {
//   const [products, setProducts] = useState<Product[]>(defaultProducts);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         const data: Product[] = await response.json();
//           console.log('Fetched products:', data);
//         setProducts(data);
//         localStorage.setItem('products', JSON.stringify(data));
//       } catch (error) {
//         console.error('Failed to fetch products:', error);
//       }
//     };
//     if (!defaultProducts.length) {
//       fetchProducts();
//     }
//   }, []);

//   const addProduct = (newProduct: Product) => {
//     setProducts((prevProducts) => {
//    const updatedProducts = [...prevProducts, newProduct];
//      localStorage.setItem('products', JSON.stringify(updatedProducts));
//      return updatedProducts;

//     });
//   };

//   const deleteProduct = (productId: string) => {
//     setProducts((prevProducts) => {
//    const updatedProducts = prevProducts.filter(product => product.id !== productId);
//       localStorage.setItem('products', JSON.stringify(updatedProducts));
//       return updatedProducts;

//     });
//   };

//   return (
//     <ProductContext.Provider value={{ products, addProduct, deleteProduct }}>
//       {children}
//     </ProductContext.Provider>
//   );
// };