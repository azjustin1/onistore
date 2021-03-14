import React, { createContext, useContext, useReducer } from "react";

export const actionType = {
	USER: "USER",
	SIGN_IN: "SIGN_IN",
	SIGN_OUT: "SIGN_OUT",
	START_LOADING: "START_LOADING",
	FINISH_LOADING: "FINISH_LOADING",
};

export let initialState = {
	isSignIn: false,
};

const reducer = (state, action) => {
	switch (action.type) {
		case ACTION_TYPE.SIGN_IN:
			initialState = { ...state, isSignIn: true };
			return {
				...state,
				isSignIn: true,
			};
		case ACTION_TYPE.SIGN_OUT:
			return {
				...state,
				isSignIn: false,
			};
	}
};

const GlobalContext = createContext();

const GlobalStateProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<GlobalContext.Provider value={{ state, dispatch, actionType }}>
			{children}
		</GlobalContext.Provider>
	);
};
export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalStateProvider;
