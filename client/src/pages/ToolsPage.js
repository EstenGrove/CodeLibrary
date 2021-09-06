import React from "react";
import styles from "../css/pages/ToolsPage.module.scss";
import { PropTypes } from "prop-types";
import { pageCards } from "../helpers/utils_routes";
import { Route, Switch, useRouteMatch } from "react-router-dom";
// pages
import BoxShadowPage from "./BoxShadowPage";
import ColorConverterPage from "./ColorConverterPage";
import ParserPage from "./ParserPage";
import CssFiltersPage from "./CssFiltersPage";
import OpenGraphGeneratorPage from "./OpenGraphGeneratorPage";
import MetaGeneratorPage from "./MetaGeneratorPage";
// components
import PageCards from "../components/app/PageCards";

const ToolsPage = () => {
	const match = useRouteMatch("/tools");

	console.log("match", match);
	return (
		<div className={styles.ToolsPage}>
			<section className={styles.ToolsPage_options}>
				<PageCards pageCards={pageCards.tools} baseRoute={match.path} />
			</section>
			<div className={styles.ToolsPage_content}>
				{/* DEFINE SUB-ROUTES */}
				<Switch>
					<Route path={`${match.path}/colors`} component={ColorConverterPage} />
					<Route path={`${match.path}/shadows`} component={BoxShadowPage} />
					<Route path={`${match.path}/parser`} component={ParserPage} />
					<Route path={`${match.path}/filters`} component={CssFiltersPage} />
					<Route path={`${match.path}/meta`} component={MetaGeneratorPage} />
					<Route path={`${match.path}/og`} component={OpenGraphGeneratorPage} />
				</Switch>
			</div>
		</div>
	);
};

export default ToolsPage;

ToolsPage.defaultProps = {};

ToolsPage.propTypes = {};
