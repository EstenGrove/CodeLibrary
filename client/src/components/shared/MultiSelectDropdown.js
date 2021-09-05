import React, { useRef, useEffect } from "react";
import styles from "../../css/shared/MultiSelectDropdown.module.scss";
import sprite2 from "../../assets/icons/buttons.svg";
import { PropTypes } from "prop-types";
import { isEmptyArray, isEmptyVal } from "../../helpers/utils_types";
import { useOutsideClick } from "../../utils/useOutsideClick";
import MultiSelectOption from "./MultiSelectOption";

const selected = "hsla(170, 100%, 39%, 1)";
const notSelected = "hsla(242, 89%, 64%, 1)";

const getIsSelected = (option, selections = [], disabledOptions = []) => {
	const isSelected = selections.includes(option);
	const isDisabled = disabledOptions.includes(option);
	return !isDisabled && isSelected;
};

const MultiSelectDropdown = ({
	customOption = null,
	searchVal,
	options = [],
	disabledOptions = [],
	selections = [],
	enableMultiSelect = true,
	isAllSelected = false,
	searchInputMode,
	handleSearch,
	handleSelect,
	handleSelectAll,
	clearSelections,
	saveSelections,
	clearSearch,
	closeMenuOptions,
	dropdownStyles = {},
}) => {
	const menuRef = useRef();
	const { isOutside } = useOutsideClick(menuRef);

	useEffect(() => {
		let isMounted = true;
		if (!isMounted) {
			return;
		}
		if (isOutside) {
			return closeMenuOptions();
		}
		return () => {
			isMounted = false;
		};
	}, [isOutside, closeMenuOptions]);

	return (
		<aside
			className={styles.MultiSelectDropdown}
			ref={menuRef}
			style={dropdownStyles}
		>
			<div className={styles.MultiSelectDropdown_top}>
				<svg className={styles.MultiSelectDropdown_top_searchIcon}>
					<use xlinkHref={`${sprite2}#icon-magnifying-glass`}></use>
				</svg>
				<input
					type="text"
					name="search"
					id="search"
					value={searchVal}
					onChange={handleSearch}
					className={styles.MultiSelectDropdown_top_search}
					placeholder="Search..."
					autoComplete="off"
					inputMode={searchInputMode}
				/>
				{!isEmptyVal(searchVal) && (
					<svg
						className={styles.MultiSelectDropdown_top_clearIcon}
						onClick={clearSearch}
					>
						<use xlinkHref={`${sprite2}#icon-clearclose`}></use>
					</svg>
				)}
			</div>
			<div className={styles.MultiSelectDropdown_selectAll}>
				{enableMultiSelect && (
					<button
						type="button"
						className={styles.MultiSelectDropdown_selectAll_btn}
						onClick={handleSelectAll}
						style={isAllSelected ? { color: selected } : { color: notSelected }}
					>
						{isAllSelected ? "✓ All Selected" : "Select All"}
					</button>
				)}
			</div>
			<hr />
			<div className={styles.MultiSelectDropdown_list}>
				<ul className={styles.MultiSelectDropdown_list_options}>
					{!isEmptyArray(options) &&
						options.map((option, index) => (
							<MultiSelectOption
								option={option}
								handleSelect={() => handleSelect(option)}
								isSelected={getIsSelected(option, selections, disabledOptions)}
								isDisabled={disabledOptions.includes(option)}
								key={`${option}___${index}`}
								customOption={customOption}
							/>
						))}
				</ul>
			</div>
			<div className={styles.MultiSelectDropdown_actions}>
				<button
					type="button"
					className={styles.MultiSelectDropdown_actions_clearBtn}
					onClick={clearSelections}
				>
					Clear All
				</button>
				<button
					type="button"
					className={styles.MultiSelectDropdown_actions_saveBtn}
					onClick={saveSelections}
				>
					Save
				</button>
			</div>
		</aside>
	);
};

export default MultiSelectDropdown;

// dropdown menu options
MultiSelectDropdown.defaultProps = {
	options: [],
	selections: [],
	isAllSelected: false,
};
MultiSelectDropdown.propTypes = {
	searchVal: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(
		PropTypes.oneOfType([PropTypes.string, PropTypes.number])
	).isRequired,
	isAllSelected: PropTypes.bool.isRequired,
	selections: PropTypes.array.isRequired,
	handleSearch: PropTypes.func.isRequired,
	handleSelect: PropTypes.func.isRequired,
	handleSelectAll: PropTypes.func.isRequired,
	clearSelections: PropTypes.func.isRequired,
	saveSelections: PropTypes.func.isRequired,
	closeMenuOptions: PropTypes.func.isRequired,
};
