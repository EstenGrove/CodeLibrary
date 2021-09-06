import React from "react";
import styles from "../css/pages/MetaGeneratorPage.module.scss";
import { PropTypes } from "prop-types";
import Header from "../components/app/Header";
import ParserView from "../views/ParserView";
import MetaTagView from "../views/MetaTagView";

const MetaGeneratorPage = () => {
	console.log(`MetaGeneratorPage`);
	return (
		<div className={styles.MetaGeneratorPage}>
			<Header
				title="Meta Tags Generator"
				subtitle="Generators for meta tags for website, webapp and others."
			/>
			<MetaTagView />
		</div>
	);
};

export default MetaGeneratorPage;

MetaGeneratorPage.defaultProps = {};

MetaGeneratorPage.propTypes = {};
