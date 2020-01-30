// Step 5 - Create the CartContext
// Now that I have refactored my Products component to utilize Context API, I will refactor my Cart and Navigation Components to use Context API 
// This context is going to be utilized by my ShoppingCart and Navigation components

// Import createContext and create a new context name CartContext
import { createContext } from 'react';

const CartContext = createContext();
console.log(CartContext);

export default CartContext;
