import React from "react";
import styles from "../../css/snippets/SnippetPreviewImg.module.scss";
import { PropTypes } from "prop-types";

const SnippetPreviewImg = ({ src, alt = `Code Snippet` }) => {
	return (
		<div className={styles.SnippetPreviewImg}>
			<img className={styles.SnippetPreviewImg_img} src={src} alt={alt} />
		</div>
	);
};

export default SnippetPreviewImg;

SnippetPreviewImg.defaultProps = {};

SnippetPreviewImg.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
};
