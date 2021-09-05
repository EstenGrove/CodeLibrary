import React from "react";
import styles from "../../css/shared/CharCountIndicator.module.scss";
import sprite from "../../assets/icons/code-library.svg";
import { PropTypes } from "prop-types";
import { blueGrey, red } from "../../helpers/utils_styles";

const CharLimitError = ({ charLimit, hitCharLimit }) => {
	if (!hitCharLimit) {
		return null;
	}
	return (
		<div className={styles.CharLimitError}>
			<svg className={styles.CharLimitError_icon}>
				<use xlinkHref={`${sprite}#icon-error_outline`}></use>
			</svg>
			<span className={styles.CharLimitError_msg}>
				Only {charLimit} characters allowed!
			</span>
		</div>
	);
};

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

const CharCountIndicator = ({ val, charLimit, hitCharLimit }) => {
	return (
		<div className={styles.CharCountIndicator}>
			<CharCounter
				val={val}
				charLimit={charLimit}
				hitCharLimit={hitCharLimit}
			/>
			<CharLimitError charLimit={charLimit} hitCharLimit={hitCharLimit} />
		</div>
	);
};

export { CharLimitError, CharCounter };

export default CharCountIndicator;

CharCountIndicator.defaultProps = {};

CharCountIndicator.propTypes = {
	val: PropTypes.string,
	charLimit: PropTypes.number,
	hitCharLimit: PropTypes.bool,
};
