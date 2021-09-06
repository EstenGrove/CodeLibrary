import React from "react";
import styles from "../css/pages/ColorConverterPage.module.scss";
import { PropTypes } from "prop-types";
import CodePreview from "../components/shadows/CodePreview";
import Header from "../components/app/Header";

const ColorConverterPage = () => {
	return (
		<div className={styles.ColorConverterPage}>
			<Header
				title="Color Converter Tools"
				subtitle="Various tools for color conversions, processing and previewing."
			/>
			<CodePreview />
		</div>
	);
};

export default ColorConverterPage;

ColorConverterPage.defaultProps = {};

ColorConverterPage.propTypes = {};
