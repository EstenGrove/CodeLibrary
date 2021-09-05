import React from "react";
import styles from "../css/pages/HomePage.module.scss";
import { PropTypes } from "prop-types";
import Header from "../components/app/Header";
import Section from "../components/sections/Section";

// REQUIREMENTS:
// - Shows links to:
//    - Snippets Preview page
//    - Dev tools page

const HomePage = () => {
	return (
		<div className={styles.HomePage}>
			<Header
				title="Code, Snippets & Tools Library"
				subtitle="A collection of snippets, utils, components and various developer tools for quick & accessible usage."
			/>
			<Section title="Recently Viewed Snippets">
				{/*  */}
				{/*  */}
				{/*  */}
			</Section>
		</div>
	);
};

export default HomePage;

HomePage.defaultProps = {};

HomePage.propTypes = {};
