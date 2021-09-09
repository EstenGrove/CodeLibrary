import React, { useContext } from "react";
import styles from "../css/pages/PreviewsPage.module.scss";
import { PropTypes } from "prop-types";
import SnippetsPreviewView from "../views/SnippetsPreviewView";
import NewSnippetPage from "./NewSnippetPage";
import SnippetDetailsPage from "./SnippetDetailsPage";
import { GlobalStateContext } from "../state/GlobalState";

// REQUIREMENTS:
// - Shows all snippet previews
// - Enables sorting by type, language, tag etc
// - Enables clicking a snippet for details or to edit it.

const PreviewsPage = () => {
	const { state: globalState, dispatch: dispatchToState } =
		useContext(GlobalStateContext);

	// FETCH ALL SNIPPETS (OR AT LEAST 20/30 OF THEM)

	return (
		<div className={styles.PreviewsPage}>
			<SnippetsPreviewView
				globalState={globalState}
				dispatchToState={dispatchToState}
			/>
		</div>
	);
};

export default PreviewsPage;

PreviewsPage.defaultProps = {};

PreviewsPage.propTypes = {};
