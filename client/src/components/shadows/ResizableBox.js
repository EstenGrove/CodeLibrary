import React from "react";
import styles from "../../css/shadows/ResizableBox.module.scss";
import { PropTypes } from "prop-types";

const ResizableBox = ({
	width,
	height,
	shadow,
	color = "#333",
	customStyles = {},
	children,
}) => {
	const custom = {
		width,
		height,
		backgroundColor: color,
		boxShadow: shadow,
	};

	console.log("shadow", shadow);

	return (
		<div className={styles.ResizableBox} style={custom}>
			{children}
		</div>
	);
};

export default ResizableBox;

ResizableBox.defaultProps = {};

ResizableBox.propTypes = {
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
