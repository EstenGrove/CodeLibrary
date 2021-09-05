import React, { useState } from "react";
import styles from "../../css/tags/TagNameInput.module.scss";
import sprite from "../../assets/icons/code-library.svg";
import { PropTypes } from "prop-types";
import { blueGrey, red } from "../../helpers/utils_styles";

const CharCounter = ({ val, charLimit, hitCharLimit }) => {
	const charCss = {
		color: hitCharLimit ? red[600] : blueGrey[500],
	};
	return (
		<div className={styles.CharCounter}>
			<span className={styles.CharCounter_counts} style={charCss}>
				{val?.length ?? 0}/{charLimit}
			</span>
		</div>
	);
};

const TagNameInput = ({
	name = "newTagName",
	id = "newTagName",
	val,
	label = "Tag Name",
	handleTagName,
	placeholder,
	isDisabled = false,
	charLimit = 50,
	charLimitMsg = `${charLimit} chars max`,
}) => {
	const [hitCharLimit, setHitCharLimit] = useState(false);

	const tagNameHandler = (e) => {
		const { value } = e.target;
		if (value.length > charLimit) {
			return setHitCharLimit(true);
		} else {
			setHitCharLimit(false);
			return handleTagName(e);
		}
	};

	return (
		<div className={styles.TagNameInput}>
			<div className={styles.TagNameInput_labels}>
				<label htmlFor={id} className={styles.TagNameInput_labels_label}>
					{label}
				</label>
				<span className={styles.TagNameInput_labels_info}>{charLimitMsg}</span>
			</div>
			<input
				type="text"
				name={name}
				id={id}
				value={val}
				className={styles.TagNameInput_input}
				onChange={tagNameHandler}
				disabled={isDisabled}
				placeholder={placeholder}
			/>

			<div className={styles.TagNameInput_errors}>
				{hitCharLimit && (
					<div className={styles.TagNameInput_errors_charLimit}>
						<svg className={styles.TagNameInput_errors_charLimit_icon}>
							<use xlinkHref={`${sprite}#icon-error_outline`}></use>
						</svg>
						<span className={styles.TagNameInput_errors_charLimit_msg}>
							Only {charLimit} characters allowed!
						</span>
					</div>
				)}
				<CharCounter
					key={`Chars:${val.length}`}
					val={val}
					hitCharLimit={hitCharLimit}
					charLimit={charLimit}
				/>
			</div>
		</div>
	);
};

export default TagNameInput;

TagNameInput.defaultProps = {};

TagNameInput.propTypes = {};
