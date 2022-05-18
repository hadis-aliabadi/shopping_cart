import React,{useState, useEffect} from 'react';
 //Api
 import { getProducts } from '../services/api';

 export const ProductContext = React.createContext();

const ProductContextProvider = ({children}) => {

    const [products,setProducts]= useState([]);
    useEffect(()=>{
        const fetchApi= async ()=>{
                setProducts(await getProducts());
        }

        fetchApi();
    },[])
    return (
        <ProductContext.Provider value={products}>
                {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;