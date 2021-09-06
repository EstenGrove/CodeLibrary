import React from "react";
import styles from "../../css/colors/ColorPickerInput.module.scss";
import { PropTypes } from "prop-types";
import { removeHex } from "../../helpers/utils_colors";

const ColorPickerInput = ({ name, id, hexVal, enterColorCode, handleBlur }) => {
	return (
		<div className={styles.ColorPickerInput}>
			<div className={styles.ColorPickerInput_hexSquare}>
				<div className={styles.ColorPickerInput_hexSquare_hex}>#</div>
			</div>
			<input
				type="text"
				name={name}
				id={id}
				value={removeHex(hexVal)}
				onChange={enterColorCode}
				onBlur={handleBlur}
				className={styles.ColorPickerInput_input}
			/>
		</div>
	);
};

export default ColorPickerInput;

ColorPickerInput.defaultProps = {};

ColorPickerInput.propTypes = {
	name: PropTypes.string,
	id: PropTypes.string,
	hexVal: PropTypes.string.isRequired,
	enterColorCode: PropTypes.func.isRequired,
};
