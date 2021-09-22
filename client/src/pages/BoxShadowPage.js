import React from "react";
import styles from "../css/pages/BoxShadowPage.module.scss";
import { PropTypes } from "prop-types";
// components
import Header from "../components/app/Header";
import BoxShadowView from "../views/BoxShadowView";

const BoxShadowPage = () => {
	return (
		<div className={styles.BoxShadowPage}>
			<Header
				title="Box-Shadow Tools"
				subtitle="Various tools for generating and customizing box-shadows via CSS."
			/>
			<BoxShadowView />
		</div>
	);
};

export default BoxShadowPage;

BoxShadowPage.defaultProps = {};

BoxShadowPage.propTypes = {};
