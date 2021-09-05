import React, { useRef, useEffect, useState } from "react";
import styles from "../../css/shared/SearchInput.module.scss";
import sprite from "../../assets/icons/code-library.svg";
import { PropTypes } from "prop-types";
import { useKeyboardShortcut } from "../../utils/useKeyboardShortcut";
import { isEmptyVal } from "../../helpers/utils_types";

const hasFocus = (el) => {
	return el === document.activeElement;
};

const SearchInput = ({
	val,
	name,
	id,
	placeholder = "⌘+k to search...",
	searchHandler,
	handleSubmit,
}) => {
	const searchRef = useRef();
	// triggers for "⌘k"
	const wasTriggered = useKeyboardShortcut(["meta", "k"]);
	const [localVal, setLocalVal] = useState(val);
	const [isFocused, setIsFocused] = useState(false);

	const changeHandler = (e) => {
		const { name, value } = e.target;
		setLocalVal(value);
		searchHandler(name, value);
	};
	const clearHandler = (e) => {
		const { name } = e.target;
		setLocalVal("");
		searchHandler(name, "");
		searchRef.current.focus();
	};

	// focuses input when keyboard combo (ie. '⌘k') are triggered
	useEffect(() => {
		let isMounted = true;
		if (!isMounted) {
			return;
		}

		if (wasTriggered) {
			searchRef.current.focus();
		}

		return () => {
			isMounted = false;
		};
	}, [wasTriggered]);

	return (
		<div className={styles.SearchInput}>
			<svg className={styles.SearchInput_icon}>
				<use xlinkHref={`${sprite}#icon-search`}></use>
			</svg>
			<input
				type="text"
				name={name}
				id={id}
				value={localVal}
				className={styles.SearchInput_input}
				placeholder={placeholder}
				onChange={changeHandler}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				ref={searchRef}
			/>
			{!isEmptyVal(localVal) && (
				<div
					className={styles.SearchInput_clear}
					onClick={clearHandler}
					tabIndex={0}
				>
					<svg className={styles.SearchInput_clear_icon}>
						<use xlinkHref={`${sprite}#icon-clear`}></use>
					</svg>
				</div>
			)}
		</div>
	);
};

export default SearchInput;

SearchInput.defaultProps = {};

SearchInput.propTypes = {
	val: PropTypes.string,
	name: PropTypes.string,
	id: PropTypes.string,
	placeholder: PropTypes.string,
	handleChange: PropTypes.func,
	handleSubmit: PropTypes.func,
};
