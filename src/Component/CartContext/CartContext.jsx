import React, { createContext, useCallback, useEffect, useState } from "react";

export const CartContext = createContext();

export default function Cartprovider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const increaseProduct = useCallback((id)=> {
   setCartItems(prevItems => prevItems.map(
    item => item.id === id? {...item , quantity: item.quantity + 1} : item
   ))
  })
  const decreaseProduct = useCallback((id) => {
    setCartItems(prevItems => prevItems.map(
      item => item.id === id && item.quantity > 1 ? {...item , quantity: item.quantity - 1} : item 
    ))
  })
 const removeProduct = useCallback((id) => {
  setCartItems(prevItems => prevItems.filter(item => item.id !== id))
 })
  const addToCart = useCallback((item) => {
    setCartItems((prevItems) => [...prevItems, {...item , quantity:1}]);
  }, []);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart ,increaseProduct , decreaseProduct , removeProduct }}>
      {children}
    </CartContext.Provider>
  );
}
