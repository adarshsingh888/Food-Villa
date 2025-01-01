import React ,{useContext, useState} from 'react'
import CartContext from '../utils/CartContext'
import ItemCard from './ItemCard';
function Cart() {
  const {items}=useContext(CartContext)
  const [cartItem,setcartItem]=useState([]);
  return (
    <div>
        <CartContext.Provider value={{items:cartItem , setcartItem}}>

               
               {items.length}

        </CartContext.Provider>



    </div>
  )
}

export default Cart