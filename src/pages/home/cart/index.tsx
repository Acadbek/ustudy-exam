import { ProductsContext } from "@/store/products"
import { useContext } from "react"

const Cart = () => {
    const { products } = useContext(ProductsContext)
    return (
        <h1>Cart {JSON.stringify(products)}</h1>
    )
}

export default Cart