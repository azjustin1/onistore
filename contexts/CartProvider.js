import { createContext, useContext, useReducer } from "react";

export const CART_ACTION = {
	ADD_TO_CART: "ADD_TO_CART",
};

const initialState = {
	products: [],
};

const reducer = (state, action) => {
	switch (action.type) {
		case CART_ACTION.ADD_TO_CART:
			// if (state.products.map((item) => item.id === action.item.id)) {
			// 	console.log("Increase");
			// }
			let cart = [];
			localStorage.getItem("cart")
				? (cart = JSON.parse(localStorage.getItem("cart")))
				: localStorage.setItem("cart", []);
			cart.map((item) => {
				if (item.id === action.item.id) item.amount = action.amount;
			});

			return {
				...state,
			};
	}
};

const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<CartContext.Provider value={{ state, dispatch }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
