import {
	createContext,
	useReducer,
	useState,
	useEffect,
	useContext,
} from "react";

const initialState = {
	snippets: {},
	tags: {},
	languages: {},
};

const GlobalStateContext = createContext();

const stateReducer = (state, action) => {
	switch (action.type) {
		case "INITIAL_RESOUCE": {
			return { ...state };
		}

		default:
			return { ...state };
	}
};

const GlobalStateProvider = ({ children }) => {
	const [state, dispatch] = useReducer(stateReducer, initialState);

	return (
		<GlobalStateContext.Provider value={{ state, dispatch }}>
			{children}
		</GlobalStateContext.Provider>
	);
};

export { initialState, GlobalStateContext, GlobalStateProvider };
