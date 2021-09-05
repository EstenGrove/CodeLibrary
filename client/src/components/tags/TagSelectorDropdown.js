import React, { useRef, useEffect } from "react";
import styles from "../../css/tags/TagSelectorDropdown.module.scss";
import sprite2 from "../../assets/icons/buttons.svg";
import { PropTypes } from "prop-types";
import { isEmptyArray, isEmptyVal } from "../../helpers/utils_types";
import { useOutsideClick } from "../../utils/useOutsideClick";
// components
import TagSelectorOption from "./TagSelectorOption";

const selected = "hsla(170, 100%, 39%, 1)";
const notSelected = "hsla(242, 89%, 64%, 1)";

const getIsSelected = (tag, selectedTags = []) => {
	const selectedIDs = selectedTags.map((tag) => tag?.tagID);
	const isSelected = selectedIDs.includes(tag?.tagID);
	return isSelected;
};

const TagSelectorDropdown = ({
	searchVal,
	handleSearch,
	handleSelectTags,
	handleSelectAll,
	clearSelections,
	clearSearch,
	saveSelections,
	selectedTags = [],
	tagOptions = [],
	closeOptions,
	searchInputMode = "text",
	enableMultiSelect = false,
	isAllSelected = false,
}) => {
	const menuRef = useRef();
	const { isOutside } = useOutsideClick(menuRef);

	useEffect(() => {
		let isMounted = true;
		if (!isMounted) {
			return;
		}
		if (isOutside) {
			return closeOptions();
		}
		return () => {
			isMounted = false;
		};
	}, [isOutside, closeOptions]);

	return (
		<aside className={styles.TagSelectorDropdown} ref={menuRef}>
			<div className={styles.TagSelectorDropdown_top}>
				<svg className={styles.TagSelectorDropdown_top_searchIcon}>
					<use xlinkHref={`${sprite2}#icon-magnifying-glass`}></use>
				</svg>
				<input
					type="text"
					name="search"
					id="search"
					value={searchVal}
					onChange={handleSearch}
					className={styles.TagSelectorDropdown_top_search}
					placeholder="Search..."
					autoComplete="off"
					inputMode={searchInputMode}
				/>
				{!isEmptyVal(searchVal) && (
					<svg
						className={styles.TagSelectorDropdown_top_clearIcon}
						onClick={clearSearch}
					>
						<use xlinkHref={`${sprite2}#icon-clearclose`}></use>
					</svg>
				)}
			</div>
			<div className={styles.TagSelectorDropdown_selectAll}>
				{enableMultiSelect && (
					<button
						type="button"
						className={styles.TagSelectorDropdown_selectAll_btn}
						onClick={handleSelectAll}
						style={isAllSelected ? { color: selected } : { color: notSelected }}
					>
						{isAllSelected ? "✓ All Selected" : "Select All"}
					</button>
				)}
			</div>
			<hr />
			<div className={styles.TagSelectorDropdown_list}>
				<ul className={styles.TagSelectorDropdown_list_options}>
					{!isEmptyArray(tagOptions) &&
						tagOptions.map((tag, index) => (
							<TagSelectorOption
								tag={tag}
								handleSelectTags={() => handleSelectTags(tag)}
								isSelected={getIsSelected(tag, selectedTags)}
								key={`${tag?.name}___${index}`}
							/>
						))}
				</ul>
			</div>
			<div className={styles.TagSelectorDropdown_actions}>
				<button
					type="button"
					className={styles.TagSelectorDropdown_actions_clearBtn}
					onClick={clearSelections}
				>
					Clear All
				</button>
				<button
					type="button"
					className={styles.TagSelectorDropdown_actions_saveBtn}
					onClick={saveSelections}
				>
					Save
				</button>
			</div>
		</aside>
	);
};

export default TagSelectorDropdown;

TagSelectorDropdown.defaultProps = {};

TagSelectorDropdown.propTypes = {};
