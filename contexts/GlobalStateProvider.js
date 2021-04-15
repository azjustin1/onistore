import React, { createContext, useContext, useEffect, useReducer } from "react";

import { removeClientToken, setClientToken } from "../api/axios";

import axios from "axios";

export const ACTION_TYPE = {
	USER: "USER",
	SIGN_IN: "SIGN_IN",
	AUTHENTICATE: "AUTHENTICATE",
	SIGN_OUT: "SIGN_OUT",
	START_LOADING: "START_LOADING",
	FINISH_LOADING: "FINISH_LOADING",
};

const initialState = {
	isSignIn: false,
	isLoading: false,
	token: "",
	username: "",
};

function parseJwt(token) {
	if (!token) {
		return;
	}
	const base64Url = token.split(".")[1];
	const base64 = base64Url.replace("-", "+").replace("_", "/");
	return JSON.parse(window.atob(base64));
}

const reducer = (state, action) => {
	switch (action.type) {
		case ACTION_TYPE.SIGN_IN:
			localStorage.setItem("token", action.token);

			return {
				...state,
				isSignIn: true,
				username: parseJwt(action.token).sub,
			};
		case ACTION_TYPE.SIGN_OUT:
			localStorage.removeItem("token");
			removeClientToken();
			return {
				...state,
				isSignIn: false,
			};

		case ACTION_TYPE.AUTHENTICATE: {
			const token = localStorage.getItem("token");
			if (token) {
				return {
					...state,
					isSignIn: true,
					username: parseJwt(token).sub,
					token: token,
				};
			}
			return {
				...state,
				isSignIn: false,
				token: "",
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
	const [state, dispatchGlobal] = useReducer(reducer, initialState);
	return (
		<GlobalContext.Provider value={{ state, dispatchGlobal, ACTION_TYPE }}>
			{children}
		</GlobalContext.Provider>
	);
};
export const useGlobalState = () => useContext(GlobalContext);

export default GlobalStateProvider;
