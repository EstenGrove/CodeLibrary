import React from "react";
import styles from "../../css/snippets/SnippetDescInput.module.scss";
import { PropTypes } from "prop-types";
import TextArea from "../shared/TextArea";

const SnippetDescInput = ({ name, id, val, handleChange, placeholder }) => {
	return (
		<div className={styles.SnippetDescInput}>
			<TextArea
				name={name}
				id={id}
				val={val}
				label="DESCRIPTION (optional)"
				handleChange={handleChange}
				placeholder={placeholder}
				maxChar={250}
				enableCharCount={true}
			/>
		</div>
	);
};

export default SnippetDescInput;

SnippetDescInput.defaultProps = {};

SnippetDescInput.propTypes = {};
