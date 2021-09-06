import React from "react";
import styles from "../css/pages/ToolsPage.module.scss";
import { PropTypes } from "prop-types";
import { Route, Switch, useLocation, useRouteMatch } from "react-router-dom";
import BoxShadowPage from "./BoxShadowPage";
import ColorConverterPage from "./ColorConverterPage";

const ToolsPage = () => {
	const match = useRouteMatch();

	console.log("match", match);

	return (
		<div className={styles.ToolsPage}>
			{/* DEFINE SUB-ROUTES */}
			<Switch>
				<Route path={`${match.path}/colors`} component={ColorConverterPage} />
				<Route path={`${match.path}/shadows`} component={BoxShadowPage} />
			</Switch>
		</div>
	);
};

export default ToolsPage;

ToolsPage.defaultProps = {};

ToolsPage.propTypes = {};
