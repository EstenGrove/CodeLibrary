import React from "react";
import styles from "../../css/tags/TagDescInput.module.scss";
import { PropTypes } from "prop-types";
import TextArea from "../shared/TextArea";

const TagDescInput = ({
	name,
	id,
	val,
	handleTagDesc,
	placeholder = "Enter description...",
}) => {
	return (
		<div className={styles.TagDescInput}>
			<TextArea
				name={name}
				id={id}
				val={val}
				label="Description (optional)"
				placeholder={placeholder}
				handleChange={handleTagDesc}
				maxChar={100}
				enableCharCount={true}
			/>
		</div>
	);
};

export default TagDescInput;

TagDescInput.defaultProps = {};

TagDescInput.propTypes = {};
