import React, { useContext, useEffect } from "react";
import styles from "../css/pages/PreviewsPage.module.scss";
import { PropTypes } from "prop-types";
import SnippetsPreviewView from "../views/SnippetsPreviewView";
import NewSnippetPage from "./NewSnippetPage";
import SnippetDetailsPage from "./SnippetDetailsPage";
import { GlobalStateContext } from "../state/GlobalState";
import { getDepMaps } from "../helpers/utils_initialResource";

// REQUIREMENTS:
// - Shows all snippet previews
// - Enables sorting by type, language, tag etc
// - Enables clicking a snippet for details or to edit it.

const PreviewsPage = () => {
	const { state: globalState, dispatch: dispatchToState } =
		useContext(GlobalStateContext);
	const { tags, languages, snippets } = globalState;
	// FETCH ALL SNIPPETS (OR AT LEAST 20/30 OF THEM)

	// processes & syncs deps to global store
	const setDependencies = () => {
		const { tagsMap, langsMap, snippetsMap } = getDepMaps({
			tags: tags.records,
			languages: languages.records,
			snippets: snippets.records,
		});

		dispatchToState({
			type: "INITIAL_RESOURCE",
			data: {
				tagsMap,
				langsMap,
				snippetsMap,
			},
		});
	};

	useEffect(() => {
		let isMounted = true;
		if (!isMounted) {
			return;
		}

		setDependencies();

		return () => {
			isMounted = false;
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
