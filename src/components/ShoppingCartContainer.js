import React from 'react';
import ShoppingCart from './ShoppingCart';
import TotalPrice  from './TotalPrice';

const ShoppingCartContainer = ( {hiddenMenu, cartItems, totalPrice, itemCount, removeItem}) => {

    return (
        <div className ={`shoppingCartContainer ${!hiddenMenu ? "" : "hidden"}`}>
            <ShoppingCart cartItems={cartItems} removeItem={removeItem}/>
            <TotalPrice totalPrice={totalPrice} itemCount={itemCount}/>
        </div>
    )
}

export default ShoppingCartContainer;