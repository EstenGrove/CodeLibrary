import React from "react";
import styles from "../css/pages/CssFiltersPage.module.scss";
import { PropTypes } from "prop-types";
import Header from "../components/app/Header";
import ParserView from "../views/ParserView";

const CssFiltersPage = () => {
	return (
		<div className={styles.CssFiltersPage}>
			<Header
				title="CSS Filters"
				subtitle="Demo & code generator for CSS background-filters."
			/>
		</div>
	);
};

export default CssFiltersPage;

CssFiltersPage.defaultProps = {};

CssFiltersPage.propTypes = {};
