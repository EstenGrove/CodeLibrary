import React, { useState } from "react";
import { createContext } from "react";

// TODOS:
// - Add 'expiry' to 'authData' state object ✓
// - Add 'isSuperUser' to 'authData' state object ✓
// - Consider removing 'isLOA' from 'authData' object (duplicate from currentUser obj)
// - Consider removing 'isAdmin' from 'authData' object (duplicate from currentUser obj)

const initialAuthState = {
	username: null,
	password: null,
	token: null,
	sessionID: null,
	expiry: null,
	isAuthenticated: false,
};

const AuthContext = createContext(initialAuthState);

const AuthProvider = ({ children }) => {
	const [authData, setAuthData] = useState(initialAuthState);

	return (
		<AuthContext.Provider value={{ authData, setAuthData }}>
			{children}
		</AuthContext.Provider>
	);
};

export { initialAuthState, AuthContext, AuthProvider };
