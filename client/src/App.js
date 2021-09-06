import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.scss";
// components
import Main from "./components/Main";
import Navbar from "./components/app/Navbar";
// pages
import PreviewsPage from "./pages/PreviewsPage";
import HomePage from "./pages/HomePage";
import ToolsPage from "./pages/ToolsPage";
// playground page
import DemoPage from "./pages/DemoPage";
import { AppProviders } from "./state/AppProviders";

const history = createBrowserHistory();

function App() {
	return (
		<Router history={history}>
			<AppProviders>
				<div className="App">
					<Main>
						<Navbar />
						<Switch>
							<Route exact path="/" component={HomePage} />
							<Route path="/tools" component={ToolsPage} />
							{/* '/snippets' has sub-routes */}
							<Route path="/snippets" component={PreviewsPage} />
							{/* PLAYGROUND PAGE */}
							<Route path="/demo" component={DemoPage} />
						</Switch>
					</Main>
				</div>
			</AppProviders>
		</Router>
	);
}

export default App;
