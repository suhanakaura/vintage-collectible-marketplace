import React, { createContext, useState } from "react";
import data_product from "../components/Assets/data"


// export const ShopContext = createContext(data_product);
export const ShopContext = createContext();

// creating empty cart
//     key - product id , value - quantity of product
    const getDefaultCart = ()=>{
        let cart = {};

        // creating key-value pairs:
        for (let index = 0; index < data_product.length+1; index++) {
            cart[index] = 0;
            
        }
        return cart;

    }
const ShopContextProvider = (props) =>{
    const [cartItem,setCartItem] = useState(getDefaultCart());
    
    const addToCart = (itemId) =>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFromCart = (itemId) =>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItem)
        {
            if(cartItem[item]>0){
                let itemInfo = data_product.find((product)=>product.id===Number(item));
                totalAmount += itemInfo.new_price * cartItem[item];
            }
        }
        return totalAmount;
    }
    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItem)
        {
            if(cartItem[item]>0){
                totalItem+=cartItem[item];
            }
        }
        return totalItem;
    }
   
    return(
        <ShopContext.Provider value={{getTotalCartItems,getTotalCartAmount,data_product,cartItem,addToCart,removeFromCart}}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider