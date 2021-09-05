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

const history = createBrowserHistory();

function App() {
	return (
		<Router history={history}>
			<div className="App">
				<Main>
					<Navbar />
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/tools" component={ToolsPage} />
						{/* '/snippets' has sub-routes */}
						<Route exact path="/snippets" component={PreviewsPage} />
						{/* PLAYGROUND PAGE */}
						<Route path="/demo" component={DemoPage} />
					</Switch>
				</Main>
			</div>
		</Router>
	);
}

export default App;