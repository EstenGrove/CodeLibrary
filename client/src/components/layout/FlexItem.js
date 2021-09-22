import React from "react";
import styles from "../../css/layout/FlexItem.module.scss";
import { PropTypes } from "prop-types";

const getSpacing = (spacing, dir) => {
	switch (dir) {
		case "row": {
			return {
				marginLeft: spacing + "rem",
				marginRight: spacing + "rem",
			};
		}
		case "column": {
			return {
				marginTop: spacing + "1rem",
				marginBottom: spacing + "1rem",
			};
		}
		default:
			return;
	}
};

const FlexItem = ({
	spacing = 2,
	dir,
	width = "auto",
	height = "auto",
	justifySelf = "center",
	alignSelf = "center",
	flexGrow = "initial",
	flexShrink = "initial",
	padding = "0",
	margin = "0",
	customStyles = {},
	children,
}) => {
	const custom = {
		width,
		height,
		justifySelf,
		alignSelf,
		flexGrow,
		flexShrink,
		padding,
		margin,
		...getSpacing(spacing, dir),
		...customStyles,
	};

	console.log("custom", custom);

	return (
		<div className={styles.FlexItem} style={custom}>
			{children}
			{/*  */}
			{/*  */}
			{/*  */}
		</div>
	);
};

export default FlexItem;

FlexItem.defaultProps = {};

FlexItem.propTypes = {};
