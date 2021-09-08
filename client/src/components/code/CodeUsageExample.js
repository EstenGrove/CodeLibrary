import React from "react";
import styles from "../../css/code/CodeUsageExample.module.scss";
import { PropTypes } from "prop-types";
import CodeViewer from "./CodeViewer";

const CodeUsageExample = ({ code, language }) => {
	return (
		<div className={styles.CodeUsageExample}>
			<div className={styles.CodeUsageExample_header}>
				<h4 className={styles.CodeUsageExample_header_title}>Usage Example</h4>
			</div>
			<div className={styles.CodeUsageExample_example}>
				<CodeViewer code={code} language={language} />
			</div>
		</div>
	);
};

export default CodeUsageExample;

CodeUsageExample.defaultProps = {};

CodeUsageExample.propTypes = {};
