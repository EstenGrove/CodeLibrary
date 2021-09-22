import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { AppProviders } from "./state/AppProviders";
import "./App.scss";

// components
import Main from "./components/Main";
import Navbar from "./components/app/Navbar";
import FloatingNav from "./components/app/FloatingNav";
// pages
import PreviewsPage from "./pages/PreviewsPage";
import HomePage from "./pages/HomePage";
import ToolsPage from "./pages/ToolsPage";
import ColorConverterPage from "./pages/ColorConverterPage";
import BoxShadowPage from "./pages/BoxShadowPage";
import ParserPage from "./pages/ParserPage";
import CssFiltersPage from "./pages/CssFiltersPage";
import MetaGeneratorPage from "./pages/MetaGeneratorPage";
import OpenGraphGeneratorPage from "./pages/OpenGraphGeneratorPage";
// playground page
import DemoPage from "./pages/DemoPage";
import PlaygroundPage from "./pages/PlaygroundPage";
import SnippetDetailsPage from "./pages/SnippetDetailsPage";
// // test run
// import vars from "./sass/_variables.scss";

const history = createBrowserHistory();

function App() {
	return (
		<Router history={history}>
			<AppProviders>
				<div className="App">
					<Navbar />
					<FloatingNav />
					<Main>
						<Switch>
							<Route exact path="/" component={HomePage} />
							<Route exact path="/snippets" component={PreviewsPage} />
							<Route exact path="/tools" component={ToolsPage} />
							{/* "SNIPPETS" SUB-ROUTES */}
							<Route
								path={`/snippets/details`}
								component={SnippetDetailsPage}
							/>
							<Route path={`/snippets/new`} component={SnippetDetailsPage} />
							{/* "TOOLS" SUB-ROUTES */}
							<Route path={`/tools/colors`} component={ColorConverterPage} />
							<Route path={`/tools/shadows`} component={BoxShadowPage} />
							<Route path={`/tools/parser`} component={ParserPage} />
							<Route path={`/tools/filters`} component={CssFiltersPage} />
							<Route path={`/tools/meta`} component={MetaGeneratorPage} />
							<Route path={`/tools/og`} component={OpenGraphGeneratorPage} />

							{/* PLAYGROUND PAGE */}
							<Route path="/demo" component={DemoPage} />
							<Route path="/playground" component={PlaygroundPage} />
						</Switch>
					</Main>
				</div>
			</AppProviders>
		</Router>
	);
}

export default App;
