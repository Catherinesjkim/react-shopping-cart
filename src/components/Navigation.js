// Step 7 - Went to Navigation component and imported the useContext hook and CartContext
// Now in the component, passed CartContext to the useContext hook and assigned it to a variable named cart
// Removed all instances of props inside of my component
// Removed the props param
// Removed the props 

// useContext Hook
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../contexts/CartContext';

// pass my CartContext to the useContext hook and assign it to a variable named cart
const Navigation = () => {
	const { cart } = useContext(CartContext);

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
