export const initialState = {
	isSignIn: false,
	isOpenSidebar: false,
	isLoading: false,
};

export const ACTION_TYPE = {
	USER: "USER",
	SIGN_IN: "SIGN_IN",
	SIGN_OUT: "SIGN_OUT",
	START_LOADING: "START_LOADING",
	FINISH_LOADING: "FINISH_LOADING",
	TOGGLE_SIDEBAR: "TOGGLE_SIDEBAR",
};

const reducer = (state, action) => {
	// eslint-disable-next-line default-case
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

		case ACTION_TYPE.TOGGLE_SIDEBAR:
			return {
				...state,
				isOpenSidebar: true,
			};

		case ACTION_TYPE.START_LOADING:
			console.log(action.type + " " + action.isLoading);
			return {
				...state,
				isLoading: !state.isLoading,
			};
		case ACTION_TYPE.FINISH_LOADING:
			return {
				...state,
				isLoading: false,
			};
	}
};

export default reducer;
