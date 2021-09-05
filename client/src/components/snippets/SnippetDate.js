import React from "react";
import styles from "../../css/snippets/SnippetDate.module.scss";
import { PropTypes } from "prop-types";
import { format } from "date-fns";

const SnippetDate = ({ date, hoverTitle }) => {
	return (
		<div className={styles.SnippetDate} title={hoverTitle}>
			<span className={styles.SnippetDate_date}>{date}</span>
		</div>
	);
};

export default SnippetDate;

SnippetDate.defaultProps = {};

SnippetDate.propTypes = {};
