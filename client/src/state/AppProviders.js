import React from "react";
import { AuthProvider } from "./AuthState";
import { GlobalStateProvider } from "./GlobalState";

const AppProviders = ({ children }) => {
	return (
		<AuthProvider>
			<GlobalStateProvider>{children}</GlobalStateProvider>
		</AuthProvider>
	);
};

export { AppProviders };
