import React from "react";
import styles from "../css/pages/AllToolsPage.module.scss";
import { PropTypes } from "prop-types";
import BoxShadowPage from "./BoxShadowPage";
import ColorConverterPage from "./ColorConverterPage";
import ParserPage from "./ParserPage";
import CssFiltersPage from "./CssFiltersPage";
import OpenGraphGeneratorPage from "./OpenGraphGeneratorPage";
import MetaGeneratorPage from "./MetaGeneratorPage";
import { Route, Switch, useRouteMatch } from "react-router-dom";

const AllToolsPage = () => {
	const match = useRouteMatch();

	console.log("match", match);
	return (
		<>
			{/* DEFINE SUB-ROUTES */}
			<Switch>
				<Route path={`${match.path}/colors`} component={ColorConverterPage} />
				<Route path={`${match.path}/shadows`} component={BoxShadowPage} />
				<Route path={`${match.path}/parser`} component={ParserPage} />
				<Route path={`${match.path}/filters`} component={CssFiltersPage} />
				<Route path={`${match.path}/meta`} component={MetaGeneratorPage} />
				<Route path={`${match.path}/og`} component={OpenGraphGeneratorPage} />
			</Switch>
		</>
	);
};

export default AllToolsPage;

AllToolsPage.defaultProps = {};

AllToolsPage.propTypes = {};
