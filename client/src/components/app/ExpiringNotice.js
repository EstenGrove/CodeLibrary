import React from "react";
import styles from "../../css/app/ExpiringNotice.module.scss";
import { PropTypes } from "prop-types";

const ExpiringNotice = ({ children }) => {
	return <div className={styles.ExpiringNotice}>{children}</div>;
};

export default ExpiringNotice;

ExpiringNotice.defaultProps = {};

ExpiringNotice.propTypes = {};
