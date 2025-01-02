import React, { useContext, useState, useEffect } from 'react';
import { CDN_URL } from '../utils/constant.js';
import CartContext from '../utils/CartContext.js';
import { useDispatch } from "react-redux";
import { additems } from "../utils/cartSlice";

function ItemCard(props) {
    const { items, setcartItem } = useContext(CartContext);
    const [ss, setss] = useState([]);
    const data = props.data;

    const dispatch=useDispatch();

    const addItems=()=>{
         dispatch(additems(data))
    }

    // Handle adding to cart by updating both local and global state
    const addinCart = () => {
        setss(prevItems => [...prevItems, data]); // Update local state
        setcartItem(prevItems => [...prevItems, data]); // Update global state
    };

    useEffect(() => {
        console.log("Updated ss:", ss); // Log the local state
        console.log("Updated items from context:", items); // Log the global items
        console.log("This is data:", data); // Log the data being added
    }, [ss, items]); // Effect will run whenever ss or items change

    return (
        <div className='my-4 bg-yellow-50 border-b-2 relative flex justify-start'>
            <div className='p-4 w-2/12 relative flex'>
                <button
                    className='absolute px-2 py-1 bg-black text-white rounded-lg flex items-center self-end'
                    onClick={addItems}
                >
                    Add
                </button>
                <img src={CDN_URL + data.imageId} className='w-full' />
            </div>
            <div className='p-4 w-10/12'>
                <p className='text-start'>{data.name}</p>
                <p className='text-start'>{data?.description}</p>
                <p className='text-start'>Price: &#8377; {data.price / 100}</p>
                <b>{JSON.stringify(items)}</b>
            </div>
        </div>
    );
}

export default ItemCard;
