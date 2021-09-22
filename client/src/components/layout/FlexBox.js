import React from "react";
import styles from "../../css/layout/FlexBox.module.scss";
import { PropTypes } from "prop-types";

const getStyles = (props) => {
	const { dir, mainAxis, crossAxis, wrap, basis, bgColor, ...rest } = props;

	return {
		display: "flex",
		flexDirection: dir,
		justifyContent: mainAxis,
		alignItems: crossAxis,
		flexWrap: wrap,
		flexBasis: basis,
		backgroundColor: bgColor,
		...rest,
	};
};

const getClasses = (classes) => {
	const active = classes
		.filter((cn) => {
			if (cn.isActive) {
				return cn;
			} else {
				return null;
			}
		})
		.map((x) => x.name);

	return active.join(" ");
};

const getScssClasses = (classes) => {
	const scssClasses = classes.reduce((newClasses, cn) => {
		if (cn.isActive) {
			newClasses += `${styles[cn.name]} `;
			return newClasses;
		}
		// return newClasses;
		return newClasses.replace(/(undefined)/gi, "");
	}, ``);

	console.log("scssClasses", scssClasses);
	return scssClasses;
};

const FlexBox = ({
	dir = "row",
	mainAxis = "flex-start",
	crossAxis = "center",
	wrap = "nowrap",
	basis = "content", // initial, inherit, revert, unset, fill, max-content, min-content, fit-content, auto
	bgColor = "inherit",
	classes = [],
	children,
	...rest
}) => {
	const flexStyles = getStyles({
		dir,
		mainAxis,
		crossAxis,
		wrap,
		basis,
		bgColor,
		...rest,
	});
	const activeClasses = getClasses(classes);
	const scssClasses = getScssClasses(classes);

	console.log("activeClasses", activeClasses);

	return (
		// <div className={styles.FlexBox} style={flexStyles}>
		// <div className={activeClasses} style={flexStyles}>
		<div className={scssClasses} style={flexStyles}>
			{children}
			{/*  */}
			{/*  */}
			{/*  */}
		</div>
	);
};

export default FlexBox;

FlexBox.defaultProps = {};

FlexBox.propTypes = {};
