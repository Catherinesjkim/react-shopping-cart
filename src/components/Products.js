// Step 4 - Consuming data with Product Context
// Now that my ProductContext is providing data, I can consume it!
// Import the useContext hook as well as my ProductContext

// React and useContext hook
import React, { useContext } from 'react';

// Contexts
import ProductContext from '../contexts/ProductContext';

// Components
import Product from './Product';

// In the component, call the useContext hook and pass in the context object we want to use into it
// When I do this, useContext is going to return value passed by our ProductContext Provider value prop. In my case, I'm getting back an object with two properties. A products property and a addItem property. I can go ahead and deestructure thos. 

// Removed props from the function param
const Products = () => {
	const { products, addItem } = useContext(ProductContext);
	console.log("product", products )

	// Now that I have all of the data I need, I can refactor my Products component from using props.
	// To do so, I just need to remove every instance of props
	// Removed props from the products map
	// Removed it from addItem prop
	// Now my Products component is getting its data solely from Context API!
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
