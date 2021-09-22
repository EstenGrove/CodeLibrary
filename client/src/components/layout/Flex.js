import React from "react";
import styles from "../../css/layout/Flex.module.scss";
import { PropTypes } from "prop-types";

/**
 * 'Flex-Basis': is synonymous with 'width' except it corresponds to the width along the main axis.
 */

const base = {
	flexDirection: "row", // 'flex-direction'
	spacing: "2", // units in rem
	justifyContent: "flex-start", // main axis alignment (ie justify-content)
	alignItems: "flex-start", // cross axis alignment (ie align-items)
	flexWrap: "no-wrap",
	padding: "0",
	margin: "0",
};

const Flex = ({
	children,
	width = "auto",
	height = "auto",
	flexDirection = "row",
	justifyContent = "flex-start",
	alignItems = "center",
	flexBasis = "auto",
	flexWrap = "no-wrap",
	padding = "0",
	margin = "0",
	spacing = "0",
	customStyles = {},
}) => {
	const custom = {
		display: "flex",
		width,
		height,
		flexDirection,
		justifyContent,
		alignItems,
		flexWrap,
		flexBasis,
		...customStyles,
	};

	const withProps = React.Children.map(children, (child, i) => {
		if (!child) return;
		return React.cloneElement(child, {
			padding,
			margin,
			spacing,
			dir: flexDirection,
		});
	});

	return (
		<div className={styles.Flex} style={custom}>
			{withProps}
			{/*  */}
			{/*  */}
		</div>
	);
};

export default Flex;

Flex.defaultProps = {};

Flex.propTypes = {};
