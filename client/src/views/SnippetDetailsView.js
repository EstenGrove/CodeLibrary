import React from "react";
import styles from "../css/views/SnippetDetailsView.module.scss";
import { PropTypes } from "prop-types";
import Header from "../components/app/Header";
// mock img
import img1 from "../assets/images/MusicPlayer-Snippet.png";
import DetailsViewMeta from "../components/details/DetailsViewMeta";
import TagsList from "../components/tags/TagsList";

const SnippetDetailsView = ({
	snippet,
	snippetTags = [],
	tags = [],
	languages = [],
	dispatchToState,
}) => {
	return (
		<div className={styles.SnippetDetailsView}>
			<div className={styles.SnippetDetailsView_main}>
				<DetailsViewMeta
					snippet={snippet}
					allTags={tags}
					allLanguages={languages}
				/>
				<TagsList tags={snippetTags} />
			</div>
		</div>
	);
};

export default SnippetDetailsView;

SnippetDetailsView.defaultProps = {};

SnippetDetailsView.propTypes = {};
