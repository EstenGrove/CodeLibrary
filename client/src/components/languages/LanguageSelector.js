import React, { useState, useRef, useEffect } from "react";
import styles from "../../css/languages/LanguageSelector.module.scss";
import sprite from "../../assets/icons/brands.svg";
import sprite2 from "../../assets/icons/buttons.svg";
import { PropTypes } from "prop-types";
import {
	isEmptyArray,
	isEmptyObj,
	isEmptyVal,
} from "../../helpers/utils_types";
import { useOutsideClick } from "../../utils/useOutsideClick";
import { blue } from "../../helpers/utils_styles";

const langIcons = {
	bash: "pastebin", // change this later!!!
	javascript: "javascript",
	apache: "apache",
	nginx: "nginx",
	scss: "sass",
	css: "css31",
	html: "html51",
	"c++": "cplusplus",
	"c#": "csharp",
	curl: "curl",
	deno: "deno",
	nodejs: "node-dot-js",
	php: "php",
	python: "python",
	graphql: "graphql",
	markdown: "markdown",
	sql: "postgresql",
};

const getPlaceholder = (placeholder, selection) => {
	if (!selection || isEmptyObj(selection)) {
		return placeholder;
	} else {
		return `Language: ${selection}`;
	}
};

// searches languages by 'name' and 'desc' via 'searchVal' (ie 'val')
const advancedSearch = (val, langs = []) => {
	// enables numeric search
	val = val?.toLowerCase();
	val = val.toString();

	return langs.filter((lang) => {
		if (
			lang.name.toString().toLowerCase().startsWith(val) ||
			lang.desc.toString().toLowerCase().includes(val)
		) {
			// matches
			return lang;
		} else {
			return null;
		}
	});
};

const LanguageOption = ({ lang = {}, isSelected = false, handleSelect }) => {
	const selectedLi = {
		backgroundColor: isSelected ? blue[200] : "",
		color: isSelected ? blue[600] : "",
	};
	const selectedIcon = {
		fill: isSelected ? blue[600] : "",
	};

	return (
		<li
			className={styles.LanguageOption}
			onClick={handleSelect}
			style={selectedLi}
		>
			<svg className={styles.LanguageOption_icon} style={selectedIcon}>
				<use xlinkHref={`${sprite}#icon-${langIcons[lang.name]}`}></use>
			</svg>
			<div className={styles.LanguageOption_text} style={selectedLi}>
				{lang.name}
			</div>
		</li>
	);
};

const LanguageOptionsMenu = ({
	langs = [],
	closeMenu,
	handleSelect,
	selection,
}) => {
	const menuRef = useRef();
	const { isOutside } = useOutsideClick(menuRef);

	useEffect(() => {
		let isMounted = true;
		if (!isMounted) {
			return;
		}

		if (isOutside) {
			closeMenu();
		}

		return () => {
			isMounted = false;
		};
	}, [closeMenu, isOutside]);

	return (
		<aside className={styles.LanguageOptionsMenu} ref={menuRef}>
			<ul className={styles.LanguageOptionsMenu_list}>
				{!isEmptyArray(langs) &&
					langs.map((lang, idx) => (
						<LanguageOption
							key={`$Language:${lang.desc}--${idx}`}
							lang={lang}
							handleSelect={() => handleSelect(lang)}
							isSelected={selection?.id === lang?.id ?? false}
						/>
					))}
			</ul>
		</aside>
	);
};

const LanguageSelector = ({
	langs = [],
	handleParentSelect,
	placeholder = `Select language...`,
	customStyles = {},
}) => {
	const [selection, setSelection] = useState({});
	const [showOptions, setShowOptions] = useState(false);
	const [clonedLangs, setClonedLangs] = useState([...langs]);
	const [searchVal, setSearchVal] = useState("");

	const handleSelect = (selection) => {
		if (!isEmptyObj(selection)) {
			setSelection(selection);
			return setShowOptions(false);
			// this can be moved to a 'useEffect' side effect
			// handleParentSelect(selection);
		} else {
			setSelection({});
			// this can be moved to a 'useEffect' side effect
			// handleParentSelect(selection);
			return setShowOptions(false);
		}
	};

	const saveSelections = () => {
		setShowOptions(false);
	};

	const clearSelection = () => {
		setSelection({});
		setShowOptions(false);
		// handleParentSelect({})
	};

	const handleSearch = (e) => {
		const { value } = e.target;
		setSearchVal(value);
		return searchLangs(value);
		// do some searching here...
	};

	const searchLangs = (val) => {
		if (isEmptyVal(val)) {
			return setClonedLangs([...langs]);
		}
		return setClonedLangs([...advancedSearch(val, langs)]);
	};

	const clearSearch = () => {
		setSearchVal("");
	};

	return (
		<div className={styles.LanguageSelector}>
			<div className={styles.LanguageSelector_wrapper} style={customStyles}>
				<input
					type="text"
					value={selection?.name ?? searchVal}
					className={styles.LanguageSelector_wrapper_input}
					onChange={handleSearch}
					onClick={() => setShowOptions(true)}
					placeholder={placeholder}
					style={customStyles}
				/>
				{!isEmptyObj(selection) && (
					<div
						className={styles.LanguageSelector_wrapper_clear}
						onClick={clearSelection}
					>
						<svg className={styles.LanguageSelector_wrapper_clear_icon}>
							<use xlinkHref={`${sprite2}#icon-clearclose`}></use>
						</svg>
					</div>
				)}
			</div>

			{showOptions && (
				<LanguageOptionsMenu
					langs={clonedLangs}
					selection={selection}
					handleSelect={handleSelect}
					closeMenu={() => setShowOptions(false)}
				/>
			)}
		</div>
	);
};

export default LanguageSelector;

LanguageSelector.defaultProps = {};

LanguageSelector.propTypes = {};
