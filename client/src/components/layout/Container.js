import React from "react";
import styles from "../../css/layout/Container.module.scss";
import { PropTypes } from "prop-types";

const Container = ({ customStyles = {}, children, ...rest }) => {
	return (
		<div className={styles.Container} style={customStyles} {...rest}>
			{children}
			{/*  */}
			{/*  */}
		</div>
	);
};

export default Container;

Container.defaultProps = {};

Container.propTypes = {};
