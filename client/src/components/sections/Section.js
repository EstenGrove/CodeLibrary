import React from "react";
import styles from "../../css/sections/Section.module.scss";
import { PropTypes } from "prop-types";
import SectionHeader from "./SectionHeader";

const Section = ({ title, subtitle, children }) => {
	return (
		<div className={styles.Section}>
			<SectionHeader title={title} subtitle={subtitle} />
			<div className={styles.Section_content}>{children}</div>
		</div>
	);
};

export default Section;

Section.defaultProps = {};

Section.propTypes = {};
