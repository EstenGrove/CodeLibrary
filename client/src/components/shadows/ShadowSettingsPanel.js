import React from "react";
import styles from "../../css/shadows/ShadowSettingsPanel.module.scss";
import { PropTypes } from "prop-types";
import { purple } from "../../helpers/utils_styles";
// components
import Spacer from "../shared/Spacer";
import Button from "../shared/Button";
import RangeSlider from "../shared/RangeSlider";
import ColorPicker from "../colors/ColorPicker";
import Form from "../shared/Form";

const customCSS = {
	codeBtn: {
		backgroundColor: purple[600],
		color: "#ffffff",
	},
};

const ShadowSettingsPanel = ({
	values = {},
	shadowIdx = 1,
	handleRange,
	resetAll,
	getBoxShadowCode,
	handleColorPicker,
	wasCopied,
}) => {
	return (
		<div className={styles.ShadowSettingsPanel}>
			<div className={styles.ShadowSettingsPanel_title}>
				Shadow #{shadowIdx}
			</div>
			<section className={styles.ShadowSettingsPanel_controls}>
				<Button handleClick={resetAll}>
					<span>Reset</span>
				</Button>
				<Button handleClick={getBoxShadowCode} customStyles={customCSS.codeBtn}>
					<span>{wasCopied ? "Copied!" : "Get Code"}</span>
				</Button>
			</section>
			<Form vals={values}>
				<section className={styles.ShadowSettingsPanel_settings}>
					<div className={styles.ShadowSettingsPanel_settings_title}>
						Edit Box-Shadow
					</div>
					<RangeSlider
						label="Horizontal Offset"
						name="horizontalOffset"
						id="horizontalOffset"
						val={values.horizontalOffset}
						handleRange={handleRange}
						min={-1000}
						max={1000}
					/>
					<Spacer height="4rem" />
					<RangeSlider
						label="Vertical Offset"
						name="verticalOffset"
						id="verticalOffset"
						val={values.verticalOffset}
						handleRange={handleRange}
						min={-1000}
						max={1000}
					/>
					<Spacer height="4rem" />
					<RangeSlider
						label="Blur Radius"
						name="blurRadius"
						id="blurRadius"
						val={values.blurRadius}
						handleRange={handleRange}
						min={-1000}
						max={1000}
					/>
					<Spacer height="4rem" />
					<RangeSlider
						label="Spread Radius"
						name="spreadRadius"
						id="spreadRadius"
						val={values.spreadRadius}
						handleRange={handleRange}
						min={-1000}
						max={1000}
					/>
					<Spacer height="4rem" />
				</section>
				<section className={styles.ShadowSettingsPanel_shadow}>
					<div className={styles.ShadowSettingsPanel_shadow_heading}>
						Edit Shadow Settings
					</div>
					<div className={styles.ShadowSettingsPanel_shadow_label}>
						Shadow Color
					</div>
					<ColorPicker
						name="shadowColor"
						id="shadowColor"
						val={values.shadowColor}
						activeColorGetter={handleColorPicker}
					/>
					<Spacer height="4rem" />
					<RangeSlider
						label="Shadow Opacity"
						name="shadowOpacity"
						id="shadowOpacity"
						val={values.shadowOpacity}
						handleRange={handleRange}
						min={0}
						max={1}
						step={0.01}
						suffix={""}
					/>
				</section>
			</Form>
		</div>
	);
};

export default ShadowSettingsPanel;

ShadowSettingsPanel.defaultProps = {};

ShadowSettingsPanel.propTypes = {};
