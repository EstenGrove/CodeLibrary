import React, { useState, useEffect } from "react";
import styles from "../../css/tags/TagSelector.module.scss";
// import sprite from "../../assets/icons/carets-arrows.svg";
import sprite from "../../assets/icons/modals-complete.svg";
import { PropTypes } from "prop-types";
import { isEmptyArray, isEmptyVal } from "../../helpers/utils_types";
import TagSelectorDropdown from "./TagSelectorDropdown";

// REQUIREMENTS:
// - Custom dropdown w/ available tags to select
// - Supports:
//    - One or more tags

const caret = "caret-down";
const clear = "clearclose";

// determines placeholder text when 'single-select' is enabled
const getSingleSelectPlaceholder = (placeholder, selectedTags = []) => {
	if (isEmptyArray(selectedTags)) {
		return isEmptyVal(placeholder) ? "" : placeholder;
	} else {
		const selection = selectedTags?.[0];
		return `Tag: ${selection?.name}`;
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

const advancedSearch = (val, tagOptions = []) => {
	// enables numeric search
	val = val?.toLowerCase();
	val = val.toString();

	return tagOptions.filter((tag) => {
		if (
			tag?.name.toString().toLowerCase().startsWith(val) ||
			tag?.color.toString().toLowerCase().includes(val)
		) {
			// matches
			return tag;
		} else {
			return null;
		}
	});
};

const TagSelector = ({
	name,
	id,
	placeholder = `Select tag...`,
	selectTagHandler, // func to select tag(s)
	tagOptions = [],
	enableMultiSelect = false,
	customStyles = {},
	searchInputMode = "text",
}) => {
	const [selectedTags, setSelectedTags] = useState([]);
	const [showOptions, setShowOptions] = useState(false);
	const [clonedOptions, setClonedOptions] = useState([...tagOptions]);
	const [searchVal, setSearchVal] = useState("");

	const handleSelectTags = (tag) => {
		// list of selectedTags' ids
		const tagIDs = selectedTags.map((tag) => tag.id);

		if (enableMultiSelect) {
			if (tagIDs.includes(tag.id)) {
				return setSelectedTags([
					...selectedTags.filter((x) => x.id !== tag.id),
				]);
			} else {
				return setSelectedTags([...selectedTags, tag]);
			}
		} else {
			// single select
			// if already selected, remove from list
			return setSelectedTags([tag]);
		}
	};

	const handleSelectAll = () => {
		if (selectedTags.length === tagOptions.length) {
			return setSelectedTags([]);
		}
		return setSelectedTags([...tagOptions]);
	};

	const handleSearch = (e) => {
		const { value } = e.target;
		setSearchVal(value);
		return searchOptions(value);
	};

	const searchOptions = (val) => {
		if (isEmptyVal(val)) {
			return setClonedOptions([...tagOptions]);
		}
		return setClonedOptions([...advancedSearch(val, tagOptions)]);
	};

	const clearSelections = () => {
		setSelectedTags([]);
		selectTagHandler([]);
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
		selectTagHandler(selectedTags);
		return () => {
			isMounted = false;
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedTags]);

	return (
		<div className={styles.TagSelector}>
			<div
				className={styles.TagSelector_input}
				onClick={showOptions ? null : () => setShowOptions(true)}
				style={customStyles}
			>
				<span className={styles.TagSelector_input_placeholder}>
					{getPlaceholder(
						placeholder,
						enableMultiSelect,
						selectedTags,
						tagOptions
					)}
				</span>
				<svg
					className={styles.TagSelector_input_downCaret}
					onClick={() => {
						if (isEmptyArray(selectedTags)) {
							return setShowOptions(true);
						} else {
							return clearSelections();
						}
					}}
				>
					<use
						xlinkHref={`${sprite}#icon-${
							isEmptyArray(selectedTags) ? caret : clear
						}`}
					></use>
				</svg>
			</div>
			{showOptions && (
				<TagSelectorDropdown
					searchInputMode={searchInputMode}
					enableMultiSelect={enableMultiSelect}
					searchVal={searchVal}
					tagOptions={clonedOptions}
					selectedTags={selectedTags}
					isAllSelected={selectedTags.length === tagOptions.length}
					handleSelectTags={handleSelectTags}
					handleSelectAll={handleSelectAll}
					handleSearch={handleSearch}
					saveSelections={saveSelections}
					clearSelections={clearSelections}
					clearSearch={clearSearch}
					closeOptions={() => setShowOptions(false)}
				/>
			)}
		</div>
	);
};

export default TagSelector;

TagSelector.defaultProps = {};

TagSelector.propTypes = {};
