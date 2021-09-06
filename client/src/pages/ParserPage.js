import React from "react";
import styles from "../css/pages/ParserPage.module.scss";
import { PropTypes } from "prop-types";
import Header from "../components/app/Header";
import ParserView from "../views/ParserView";

const ParserPage = () => {
	return (
		<div className={styles.ParserPage}>
			<Header
				title="CSS/JS Parsers"
				subtitle="Various parsing utilities for css and js styles."
			/>
			<ParserView />
		</div>
	);
};

export default ParserPage;

ParserPage.defaultProps = {};

ParserPage.propTypes = {};
