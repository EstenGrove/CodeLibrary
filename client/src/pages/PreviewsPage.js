import React from "react";
import styles from "../css/pages/PreviewsPage.module.scss";
import { Route, Switch, useLocation, useRouteMatch } from "react-router-dom";
import { PropTypes } from "prop-types";
import SnippetsPreviewView from "../views/SnippetsPreviewView";
import NewSnippetPage from "./NewSnippetPage";
import SnippetDetailsPage from "./SnippetDetailsPage";

// REQUIREMENTS:
// - Shows all snippet previews
// - Enables sorting by type, language, tag etc
// - Enables clicking a snippet for details or to edit it.

const PreviewsPage = () => {
	const match = useRouteMatch();

	return (
		<div className={styles.PreviewsPage}>
			<SnippetsPreviewView />

			{/* DEFINE SUB-ROUTES */}
			<Switch>
				<Route path={`${match.path}/new`} component={NewSnippetPage} />
				<Route path={`${match.path}/details`} component={SnippetDetailsPage} />
			</Switch>
		</div>
	);
};

export default PreviewsPage;

PreviewsPage.defaultProps = {};

PreviewsPage.propTypes = {};
