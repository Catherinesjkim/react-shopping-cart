import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// STEP 3 - Providing data with ProductContext
// Import ProductContext into App.js
import ProductContext from './contexts/ProductContext';

// SETP 6 - Providing data with CartContext
// Import CartConext into App.js
import CartContext from './contexts/CartContext';

// Two state properties - product + cart
function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	// Step 1 - Add item functionality
	const addItem = item => {
		// add the given item to the cart
		console.log('item', item)
		setCart(cart => [ ...cart, item ])
	};
	
	// Step 3 - Wrap all of your components/routes in App.js inside of ProductContext.Provider component
	// Next pass a value prop to your Provider
	// In the value prop, I'll pass in the products state, and an addItem function that wil allow me to add books to the cart
	// Now that I'm providing my products state and addItem function we can refactor our products route to no longer use render props.
	return (
		<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value={{ cart }}>
				<div className="App">
					<Navigation />
					{/* Routes */}
					<Route exact path="/" component={Products} />
					<Route path="/cart" component={ShoppingCart} />
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
