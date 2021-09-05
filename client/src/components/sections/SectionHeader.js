import React from "react";
import styles from "../../css/sections/SectionHeader.module.scss";
import { PropTypes } from "prop-types";

const SectionHeader = ({ title, subtitle }) => {
	return (
		<div className={styles.SectionHeader}>
			<h4 className={styles.SectionHeader_title}>{title}</h4>
			<p className={styles.SectionHeader_subtitle}>{subtitle}</p>
		</div>
	);
};

export default SectionHeader;

SectionHeader.defaultProps = {};

SectionHeader.propTypes = {};
