import React, { useReducer } from "react";
import styles from "../../css/app/RecentlyViewed.module.scss";
import { PropTypes } from "prop-types";
import { GlobalStateContext } from "../../state/GlobalState";
import SnippetCardList from "../snippets/SnippetCardList";

const RecentlyViewed = () => {
	const { state: globalState, dispatch: dispatchToState } =
		useReducer(GlobalStateContext);

	return (
		<div className={styles.RecentlyViewed}>
			<SnippetCardList
				snippetTypes={globalState?.snippetTypes}
				snippets={globalState?.snippets}
				tags={globalState?.tags}
				languages={globalState?.languages}
				dispatchToState={dispatchToState}
			/>
		</div>
	);
};

export default RecentlyViewed;

RecentlyViewed.defaultProps = {};

RecentlyViewed.propTypes = {};
