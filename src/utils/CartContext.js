import { createContext } from "react";

const CartContext = createContext({
    items: [], // Cart items array
    setcartItem: () => {}, // Function to add an item to the cart
    removeItem: () => {}, // Optional: Function to remove an item
});

export default CartContext;
