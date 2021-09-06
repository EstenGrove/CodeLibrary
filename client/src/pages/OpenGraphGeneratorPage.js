import React from "react";
import styles from "../css/pages/OpenGraphGeneratorPage.module.scss";
import { PropTypes } from "prop-types";
import Header from "../components/app/Header";
import ParserView from "../views/ParserView";

const OpenGraphGeneratorPage = () => {
	return (
		<div className={styles.OpenGraphGeneratorPage}>
			<Header
				title="Open Graph(og) Generator"
				subtitle="Generators for Open Graph(og) tags for websites, webapps and others."
			/>
		</div>
	);
};

export default OpenGraphGeneratorPage;

OpenGraphGeneratorPage.defaultProps = {};

OpenGraphGeneratorPage.propTypes = {};
