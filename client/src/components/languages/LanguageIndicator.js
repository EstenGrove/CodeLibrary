import React from "react";
import styles from "../../css/languages/LanguageIndicator.module.scss";
import sprite from "../../assets/icons/brands.svg";
import { PropTypes } from "prop-types";
import { langIcons } from "../../helpers/utils_languages";

const LanguageIndicator = ({ language }) => {
	return (
		<div className={styles.LanguageIndicator}>
			<svg className={styles.LanguageIndicator_icon}>
				<use xlinkHref={`${sprite}#icon-${langIcons[language.name]}`}></use>
			</svg>
			<div className={styles.LanguageIndicator_text}>{language.name}</div>
		</div>
	);
};

export default LanguageIndicator;

LanguageIndicator.defaultProps = {};

LanguageIndicator.propTypes = {};
