

// import React, { createContext, useContext, useReducer } from 'react';
//import { useDispatch, useSelector } from "react-redux";

// Prepares the dataLayer
// const StateContext = createContext();
import CurrencyFormat from 'react-currency-format';


import React,  { useDispatch, useSelector } from "react-redux";




function CheckOutpage( ) {
  
  //const [{ basket }, dispatch] useDispatch();
  
  
  const [{ basket }, dispatch] = useDispatch();
   let product = useSelector((state) => state.product)
  const { id,image, title, price, category,hideButton} = product;



const removeFromBasket = () => {
  dispatch({
    type: 'REMOVE_FROM_BASKET',
    id: id,
  });
};
  return (
      <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__title">{category}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={price.data.amount / 100}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
       
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}{' '}
      </div>
    </div>
  )
}

export default CheckOutpage;
