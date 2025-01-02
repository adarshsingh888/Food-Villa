import React ,{useContext, useState} from 'react'
import CartContext from '../utils/CartContext'
import ItemCard from './ItemCard';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice';

function Cart() {
  const {items}=useContext(CartContext)
  const [cartItem,setcartItem]=useState([]);
  const cartitems=useSelector((store)=> store.cart.items);
  console.log(cartitems)
  const dispatch=useDispatch();
  const clearallCart=()=>{
         dispatch(clearCart());
  }

  return (
    <div>
        <CartContext.Provider value={{items:cartItem , setcartItem}}>
              <div className='flex flex-col flex-wrap bg-slate-300 items-center p-4 w-7/12 justify-self-center px-12'>
                 <p className='font-bold text-3xl'>Cart</p>
                 <button className='p-2 m-4 bg-black text-white rounded-md' onClick={clearallCart}>Clear Cart</button>
                  {cartitems.length===0 ? <h1 className='text-lg'>Please add item in cart.</h1>:""}
                  {cartitems.map((item,id)=>{
                    return (<ItemCard data={item} key={id}/>)
                  })}

              </div>
        </CartContext.Provider>



    </div>
  )
}

export default Cart