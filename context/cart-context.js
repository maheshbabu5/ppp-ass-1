import React from "react";

const CartContext = React.createContext();

const CartProvider = () => {
    return (
        <CartContext.Provider>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider };