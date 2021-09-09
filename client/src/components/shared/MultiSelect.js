import React, { useEffect, useState } from "react";
import styles from "../../css/shared/MultiSelect.module.scss";
// import sprite from "../../assets/icons/carets-arrows.svg";
import sprite from "../../assets/icons/modals-complete.svg";
import { PropTypes } from "prop-types";
import { isEmptyArray, isEmptyVal } from "../../helpers/utils_types";
import MultiSelectDropdown from "./MultiSelectDropdown";

const caret = "caret-down";
const clear = "clearclose";

const advancedSearch = (val, options) => {
	// enables numeric search
	val = val?.toLowerCase();
	val = val.toString();

	return options.filter((option) => {
		if (
			option.toString().toLowerCase().startsWith(val) ||
			option.toString().toLowerCase().includes(val)
		) {
			// matches
			return option;
		} else {
			return null;
		}
	});
};
// determines placeholder text when 'single-select' is enabled
const getSingleSelectPlaceholder = (placeholder, selections = []) => {
	if (isEmptyArray(selections)) {
		return isEmptyVal(placeholder) ? "" : placeholder;
	} else {
		const [selection] = selections;
		return selection;
	}
};

// determines placeholder text when 'multi-select' is enabled
const getMultiSelectPlaceholder = (
	placeholder,
	selections = [],
	options = []
) => {
	const xOutOfY = `${selections?.length ?? 0} of ${options?.length} selected`;

	if (isEmptyVal(placeholder)) {
		// no placeholder
		return xOutOfY;
	} else {
		return isEmptyArray(selections) ? placeholder : xOutOfY;
	}
};

// determines text placeholder, for each state of the component
const getPlaceholder = (
	placeholder,
	enableMultiSelect,
	selections = [],
	options = []
) => {
	// if single-select ONLY is enabled
	if (!enableMultiSelect) {
		return getSingleSelectPlaceholder(placeholder, selections);
	} else {
		return getMultiSelectPlaceholder(placeholder, selections, options);
	}
};

const MultiSelect = ({
	placeholder,
	handleMultiSelect,
	initialSelections = [],
	disabledOptions = [],
	options = [],
	customOption = null,
	enableMultiSelect = true,
	searchInputMode = "text",
	customStyles = {},
	dropdownStyles = {},
}) => {
	const [selections, setSelections] = useState([...initialSelections]);
	const [showOptions, setShowOptions] = useState(false);
	const [clonedOptions, setClonedOptions] = useState([...options]);
	const [searchVal, setSearchVal] = useState("");

	const handleSelect = (option) => {
		if (enableMultiSelect) {
			if (selections.includes(option)) {
				return setSelections([...selections.filter((x) => x !== option)]);
			} else {
				return setSelections([...selections, option]);
			}
		} else {
			// single select
			// if already selected, remove from list
			return setSelections([option]);
		}
	};

	const handleSelectAll = () => {
		if (selections.length === options.length) {
			return setSelections([]);
		}
		return setSelections([...options]);
	};

	const handleSearch = (e) => {
		const { value } = e.target;
		setSearchVal(value);
		return searchOptions(value);
	};

	const searchOptions = (val) => {
		if (isEmptyVal(val)) {
			return setClonedOptions([...options]);
		}
		return setClonedOptions([...advancedSearch(val, options)]);
	};

	const clearSelections = () => {
		setSelections([]);
		handleMultiSelect([]);
	};

	const saveSelections = () => {
		setShowOptions(false);
	};

	const clearSearch = () => {
		setSearchVal("");
		searchOptions("");
	};

	// used to send "selections" to the parent via "handleMultiSelect"
	useEffect(() => {
		let isMounted = true;
		if (!isMounted) {
			return;
		}
		handleMultiSelect(selections);
		return () => {
			isMounted = false;
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selections]);

	return (
		<div className={styles.MultiSelect} style={customStyles}>
			<div
				className={styles.MultiSelect_input}
				onClick={showOptions ? null : () => setShowOptions(true)}
				style={customStyles}
			>
				<span className={styles.MultiSelect_input_placeholder}>
					{getPlaceholder(placeholder, enableMultiSelect, selections, options)}
				</span>
				<svg
					className={styles.MultiSelect_input_downCaret}
					onClick={() => {
						if (isEmptyArray(selections)) {
							return setShowOptions(true);
						} else {
							return clearSelections();
						}
					}}
				>
					{/* <use
						xlinkHref={`${sprite}#icon-${
							isEmptyArray(selections) ? caret : clear
						}`}
					></use> */}
					<use xlinkHref={`${sprite}#icon-caret-down`}></use>
				</svg>
			</div>
			{showOptions && (
				<MultiSelectDropdown
					searchInputMode={searchInputMode}
					enableMultiSelect={enableMultiSelect}
					customOption={customOption}
					searchVal={searchVal}
					disabledOptions={disabledOptions}
					options={clonedOptions}
					selections={selections}
					isAllSelected={selections.length === options.length}
					handleSelect={handleSelect}
					handleSelectAll={handleSelectAll}
					handleSearch={handleSearch}
					saveSelections={saveSelections}
					clearSelections={clearSelections}
					clearSearch={clearSearch}
					closeMenuOptions={() => setShowOptions(false)}
					dropdownStyles={dropdownStyles}
				/>
			)}
		</div>
	);
};

export default MultiSelect;

MultiSelect.defaultProps = {
	options: [],
};
MultiSelect.propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.oneOfType([PropTypes.string, PropTypes.number])
	).isRequired,
	handleMultiSelect: PropTypes.func.isRequired, // handler from parent component; keeps "selections" in-sync
};
