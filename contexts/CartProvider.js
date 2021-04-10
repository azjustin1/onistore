import { createContext, useContext, useReducer } from "react";

export const CART_ACTION = {
	FETCH_CART: "FETCH_CART",
	UPDATE_CART: "UPDATE_CART",
	ADD_TO_CART: "ADD_TO_CART",
	DELETE_FROM_CART: "DELETE_FROM_CART",
	INCREASE_QUANTITY: "INCREASE_QUANTiTY",
	DECREASE_QUANTITY: "DECREASE_QUANTITY",
};

const initialState = {
	cart: [],
	subTotal: 0,
	fee: 0,
	total: 0,
};

const reducer = (state, action) => {
	switch (action.type) {
		case CART_ACTION.FETCH_CART:
			let sum = 0;
			if (localStorage.getItem("cart")) {
				state.cart = JSON.parse(localStorage.getItem("cart"));
			}
			state.cart.map((item) => {
				sum = sum + item.product.price * item.amount;
			});
			return {
				...state,
				cart: localStorage.getItem("cart")
					? JSON.parse(localStorage.getItem("cart"))
					: localStorage.setItem("cart", []),
				subTotal: sum,
			};

		case CART_ACTION.UPDATE_CART:
			localStorage.setItem("cart", JSON.stringify(state.cart));
			return {
				...state,
			};

		case CART_ACTION.ADD_TO_CART:
			// Increase the amount of item if it has been added before
			if (state.cart.find((item) => item.product.id === action.product.id)) {
				return {
					...state,
					cart: state.cart.map((item) =>
						item.product.id === action.product.id
							? { ...item, amount: item.amount + 1 }
							: item
					),
				};
			}
			return {
				...state,
				cart: [
					...state.cart,
					{ product: action.product, amount: action.amount },
				],
				subTotal: state.subTotal + action.product.price * action.amount,
			};
		case CART_ACTION.DELETE_FROM_CART:
			let item = state.cart.find(
				(item) => item.product.id === action.productId
			);
			return {
				...state,
				cart: state.cart.filter((item) => item.product.id !== action.productId),
				subTotal: state.subTotal - item.product.price * item.amount,
			};

		case CART_ACTION.INCREASE_QUANTITY:
			item = state.cart.find((item) => item.product.id === action.productId);
			return {
				...state,
				cart: state.cart.map((item) =>
					item.product.id === action.productId
						? { ...item, amount: item.amount + 1 }
						: item
				),
				subTotal: state.subTotal + item.product.price,
			};

		case CART_ACTION.DECREASE_QUANTITY:
			item = state.cart.find((item) => item.product.id === action.productId);
			return {
				...state,
				cart: state.cart.map((item) =>
					item.product.id === action.productId
						? { ...item, amount: item.amount - 1 }
						: item
				),
				subTotal: state.subTotal - item.product.price,
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
