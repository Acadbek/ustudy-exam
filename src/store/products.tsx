import React, { createContext } from "react";

export const ProductsContext = createContext([])

const ProductsProvider = ({ children }) => {

    const [products, setProducts] = React.useState([])

    const addToCart = (product: object) => {
        setProducts((prevProduct) => [...prevProduct, product])
        console.log('Works', products);
    }

    return (
        <ProductsContext.Provider value={{ products, addToCart }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider