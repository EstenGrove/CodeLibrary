import React, { useState } from "react";
import styles from "../../css/snippets/SnippetTitleInput.module.scss";
import { PropTypes } from "prop-types";
import TextInput from "../shared/TextInput";
import CharCountIndicator from "../shared/CharCountIndicator";

const SnippetTitleInput = ({
	name,
	id,
	val,
	handleChange,
	charLimit = 150,
}) => {
	const [hitCharLimit, setHitCharLimit] = useState(false);

	const titleHandler = (e) => {
		const { value } = e.target;
		if (value?.length > charLimit) {
			return setHitCharLimit(true);
		} else {
			setHitCharLimit(false);
			return handleChange(e);
		}
	};

	return (
		<div className={styles.SnippetTitleInput}>
			<div className={styles.SnippetTitleInput_labels}>
				<label htmlFor={id} className={styles.SnippetTitleInput_labels_label}>
					SNIPPET TITLE
				</label>
				<span className={styles.SnippetTitleInput_labels_charCount}>
					{charLimit} max chars
				</span>
			</div>
			<TextInput name={name} id={id} val={val} handleChange={titleHandler} />
			<CharCountIndicator
				val={val}
				charLimit={charLimit}
				hitCharLimit={hitCharLimit}
			/>
		</div>
	);
};

export default SnippetTitleInput;

SnippetTitleInput.defaultProps = {
	charLimit: 150,
};

SnippetTitleInput.propTypes = {
	name: PropTypes.string,
	id: PropTypes.string,
	val: PropTypes.string,
	handleChange: PropTypes.func,
	charLimit: PropTypes.number,
};
