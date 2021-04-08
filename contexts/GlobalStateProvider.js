import React, { createContext, useContext, useEffect, useReducer } from "react";

import { removeClientToken, setClientToken } from "../api/axios";

export const ACTION_TYPE = {
	USER: "USER",
	SIGN_IN: "SIGN_IN",
	AUTHENTICATE: "AUTHENTICATE",
	SET_TOKEN: "SET_TOKEN",
	SIGN_OUT: "SIGN_OUT",
	START_LOADING: "START_LOADING",
	FINISH_LOADING: "FINISH_LOADING",
};

const initialState = {
	isSignIn: false,
	isLoading: false,
	token: "",
};

const reducer = (state, action) => {
	switch (action.type) {
		case ACTION_TYPE.SIGN_IN:
			return {
				...state,
				isSignIn: true,
			};
		case ACTION_TYPE.SIGN_OUT:
			localStorage.removeItem("token");
			removeClientToken();
			return {
				...state,
				isSignIn: false,
			};

		case ACTION_TYPE.SET_TOKEN:
			localStorage.setItem("token", action.payload);
			setClientToken(action.payload);
			return {
				...state,
				token: action.payload,
			};
		case ACTION_TYPE.AUTHENTICATE: {
			const token = localStorage.getItem("token");
			setClientToken(token);
			if (token) {
				return {
					...state,
					isSignIn: true,
				};
			}
			return {
				...state,
				isSignIn: false,
			};
		}

		case ACTION_TYPE.START_LOADING:
			return {
				...state,
				isLoading: true,
			};
		case ACTION_TYPE.FINISH_LOADING:
			return {
				...state,
				isLoading: false,
			};
	}
};

const GlobalContext = createContext();

const GlobalStateProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<GlobalContext.Provider value={{ state, dispatch, ACTION_TYPE }}>
			{children}
		</GlobalContext.Provider>
	);
};
export const useGlobalState = () => useContext(GlobalContext);

export default GlobalStateProvider;
