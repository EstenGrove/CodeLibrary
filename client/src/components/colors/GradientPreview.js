import React from "react";
import styles from "../../css/colors/GradientPreview.module.scss";
import { PropTypes } from "prop-types";

const GradientPreview = ({ gradient = "" }) => {
	const custom = {
		background: gradient,
	};
	return (
		<div className={styles.GradientPreview}>
			<div className={styles.GradientPreview_top}>
				<span>Preview:</span>
			</div>
			<div className={styles.GradientPreview_preview} style={custom}></div>
		</div>
	);
};

export default GradientPreview;

GradientPreview.defaultProps = {};

GradientPreview.propTypes = {};
