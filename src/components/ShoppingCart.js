// Step 7 The final stretch completed - MVP Met
// My cart data is now being provided to me from my CartContext - time to consume it!
// First, went to my ShoppingCart component and imported the useContext hook and CartContext
// Now in the component, passed CartContext to the useContext hook and assigned it to a variable named cart
// Removed all instances of props inside of my component
// Removed the props param
// Removed the props portion in my getCartTotal function
// Removed props when I'm mapping over my cart

// Stretch 1 - Create a removeItem function that allows you to remove an item from your cart with a click of a button. 
// This removeItem function should be able to be consumed from your ShoppingCartItem component. 
// Remember each item has an id this will help out a lot while creating your removeItem function!

// useContext Hook
import React, { useContext } from 'react';

// Components
import Item from './ShoppingCartItem';

// Contexts
import CartContext from '../contexts/CartContext';

// In the component, pass CartContext to the useContext hook and assign it to a variable named cart
const ShoppingCart = () => {
	const { cart, removeItem } = useContext(CartContext);
	console.log(cart);
		
		const getCartTotal = () => {
			return cart.reduce((acc, value) => {
				return acc + value.price;
			}, 0).toFixed(2);
		};

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} {...item} removeItem={removeItem} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
