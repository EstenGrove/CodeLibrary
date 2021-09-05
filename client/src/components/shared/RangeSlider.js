import React, { useRef, useEffect, useState } from "react";
import styles from "../../css/shared/RangeSlider.module.scss";
import { PropTypes } from "prop-types";
import { useOutsideClick } from "../../utils/useOutsideClick";
import { isEmptyVal } from "../../helpers/utils_types";

const MiniInput = ({ name, id, val, handleChange, hideInput }) => {
	const inputRef = useRef();
	const { isOutside } = useOutsideClick(inputRef);

	// close/hide input upon 'outside click'
	useEffect(() => {
		let isMounted = true;
		if (!isMounted) {
			return;
		}
		if (isOutside) {
			hideInput();
		}

		return () => {
			isMounted = false;
		};
	}, [isOutside, hideInput]);

	return (
		<input
			type="text"
			name={name}
			id={id}
			value={val}
			className={styles.MiniInput}
			onChange={handleChange}
			autoFocus={true}
			autoComplete="off"
		/>
	);
};

const RangeSlider = ({
	label,
	id,
	name,
	val = 0,
	min = -100,
	max = 100,
	step,
	suffix = "px",
	handleRange,
	rangeRef,
	isDisabled = false,
	customStyles = {},
}) => {
	const [isEditing, setIsEditing] = useState(false);

	// prevents 'letters' & 'out-of-range' values
	const changeHandler = (e) => {
		const { name, value } = e.target;
		if (isNaN(value)) return;
		if (value < min || value > max) return;
		handleRange(name, value);
	};

	// triggers edit state/shows input
	const handleCustomVal = () => {
		setIsEditing(true);
	};

	return (
		<div className={styles.RangeSlider}>
			<div className={styles.RangeSlider_top}>
				<label htmlFor={id} className={styles.RangeSlider_top_label}>
					{label}
				</label>
				<div className={styles.RangeSlider_top_value}>
					{!isEditing && (
						<span
							className={styles.RangeSlider_top_value_val}
							onClick={handleCustomVal}
						>
							{val}
						</span>
					)}
					{isEditing && (
						<MiniInput
							name={name}
							id={id}
							val={val}
							handleChange={changeHandler}
							hideInput={() => setIsEditing(false)}
						/>
					)}
					<span className={styles.RangeSlider_top_value_px}>{suffix}</span>
				</div>
			</div>
			<div className={styles.RangeSlider_inner} style={customStyles}>
				<input
					type="range"
					name={name}
					id={id}
					min={min}
					max={max}
					step={step}
					value={val}
					onChange={changeHandler}
					ref={rangeRef}
					disabled={isDisabled}
					className={styles.RangeSlider_inner_input}
					style={customStyles}
				/>
			</div>
		</div>
	);
};

export default RangeSlider;

RangeSlider.defaultProps = {
	isDisabled: false,
};

RangeSlider.propTypes = {
	label: PropTypes.string,
	id: PropTypes.string,
	name: PropTypes.string,
	min: PropTypes.number,
	max: PropTypes.number,
	handleRange: PropTypes.func,
	rangeRef: PropTypes.instanceOf(HTMLElement),
	isDisabled: PropTypes.bool,
};
