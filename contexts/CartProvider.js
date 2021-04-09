import { createContext, useContext, useReducer } from "react";

export const CART_ACTION = {
	FETCH_CART: "FETCH_CART",
	ADD_TO_CART: "ADD_TO_CART",
	DELETE_FROM_CART: "DELETE_FROM_CART",
	INCREASE_QUANTITY: "INCREASE_QUANTiTY",
	DECREASE_QUANTITY: "DECREASE_QUANTITY",
};

const initialState = {
	products: [],
	count: 0,
};

const reducer = (state, action) => {
	switch (action.type) {
		case CART_ACTION.FETCH_CART:
			return {
				...state,
				products: localStorage.getItem("cart")
					? JSON.parse(localStorage.getItem("cart"))
					: localStorage.setItem("cart", []),
			};

		case CART_ACTION.ADD_TO_CART:
			if (state.products.find((item) => item.id === action.product.id)) {
				const existItem = state.products.find(
					(item) => item.id === action.product.id
				);
				existItem.quantity = existItem.quantity + action.quantity;
			} else {
				state.products.push(action.product);
			}
			localStorage.setItem("cart", JSON.stringify(state.products));

			return {
				...state,
			};
		case CART_ACTION.DELETE_FROM_CART:
			state.products = state.products.filter(
				(item) => item.id !== action.productId
			);
			localStorage.setItem("cart", JSON.stringify(state.products));
			return {
				...state,
			};

		case CART_ACTION.INCREASE_QUANTITY:
			return {
				...state,
				products: state.products.map((item) =>
					item.id === action.productId
						? { ...item, quantity: item.quantity++ }
						: item
				),
			};

		case CART_ACTION.DECREASE_QUANTITY:
			return {
				...state,
				products: state.products.map((item) =>
					item.id === action.productId
						? { ...item, quantity: item.quantity-- }
						: item
				),
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
