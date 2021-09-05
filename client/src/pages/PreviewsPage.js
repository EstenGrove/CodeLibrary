import React from "react";
import styles from "../css/pages/PreviewsPage.module.scss";
import { Route, Switch, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";
import SnippetsPreviewView from "../views/SnippetsPreviewView";
import NewSnippetPage from "./NewSnippetPage";
import SnippetDetailsPage from "./SnippetDetailsPage";

// REQUIREMENTS:
// - Shows all snippet previews
// - Enables sorting by type, language, tag etc
// - Enables clicking a snippet for details or to edit it.

const PreviewsPage = () => {
	const location = useLocation();
	const { pathname } = location; // route: "/snippets"

	return (
		<div className={styles.PreviewsPage}>
			<SnippetsPreviewView />

			{/* DEFINE SUB-ROUTES */}
			<Switch>
				<Route path={`${pathname}/new`} component={NewSnippetPage} />
				<Route path={`${pathname}/details`} component={SnippetDetailsPage} />
			</Switch>
		</div>
	);
};

export default PreviewsPage;

PreviewsPage.defaultProps = {};

PreviewsPage.propTypes = {};
