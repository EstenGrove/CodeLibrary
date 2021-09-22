import React from "react";
import styles from "../../css/layout/FlexBoxItem.module.scss";
import { PropTypes } from "prop-types";

const getFlexItemStyles = (props) => {
	const { mainAxis, crossAxis, grow, shrink } = props;

	return {
		justifySelf: mainAxis,
		alignSelf: crossAxis,
		flexGrow: grow,
		flexShrink: shrink,
	};
};

const mergeClasses = (classes) => {
	return [...classes].join(" ");
};

const FlexBoxItem = ({
	mainAxis = "center",
	crossAxis = "center",
	grow = "0",
	shrink = "0",
	children,
	...rest
}) => {
	const itemStyles = getFlexItemStyles({
		mainAxis,
		crossAxis,
		grow,
		shrink,
	});
	const classes = mergeClasses([rest.className ?? "", styles.FlexBoxItem]);

	return (
		// <div className={styles.FlexBoxItem} style={itemStyles} {...rest}>
		<div className={classes} style={itemStyles} {...rest}>
			{children}
			{/*  */}
		</div>
	);
};

export default FlexBoxItem;

FlexBoxItem.defaultProps = {};

FlexBoxItem.propTypes = {};
