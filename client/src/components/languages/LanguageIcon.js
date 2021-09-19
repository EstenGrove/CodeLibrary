import React, { useState } from "react";
import styles from "../../css/languages/LanguageIcon.module.scss";
import sprite from "../../assets/icons/brands.svg";
import { PropTypes } from "prop-types";
import { debounce } from "../../helpers/utils_processing";
import { formatLang, langIcons } from "../../helpers/utils_languages";
import { red } from "../../helpers/utils_styles";
import { isEmptyVal } from "../../helpers/utils_types";

// language not found in supported list
const isUnknown = (language) => {
	return !language || language === undefined || isEmptyVal(language);
};

// unknown lang styles
const customCSS = {
	icon: {
		fill: red[600],
	},
	text: {
		color: red[600],
	},
};

const LanguageIcon = ({ language, showLangName = false }) => {
	const [isHovered, setIsHovered] = useState(showLangName);

	// supports override for showing 'text'
	const handleMouseOver = () => {
		if (showLangName) return;
		return debounce(setIsHovered(true), 400);
	};
	// supports override for showing 'text'
	const handleMouseOut = () => {
		if (showLangName) return;
		return debounce(setIsHovered(false), 400);
	};

	return (
		<div
			className={styles.LanguageIcon}
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
		>
			<svg
				className={styles.LanguageIcon_icon}
				style={isUnknown(language) ? customCSS.icon : {}}
			>
				<use xlinkHref={`${sprite}#icon-${langIcons[language]}`}></use>
			</svg>
			{isHovered && (
				<span
					className={styles.LanguageIcon_lang}
					style={isUnknown(language) ? customCSS.text : {}}
				>
					{formatLang(language)}
				</span>
			)}
		</div>
	);
};

export default LanguageIcon;

LanguageIcon.defaultProps = {};

LanguageIcon.propTypes = {
	language: PropTypes.string.isRequired,
};
