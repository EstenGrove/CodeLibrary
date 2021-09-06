import React, { useState, useEffect } from "react";
import styles from "../css/views/BoxShadowView.module.scss";
import { PropTypes } from "prop-types";
import { useForm } from "../utils/useForm";
import { isEmptyVal } from "../helpers/utils_types";
import { getAllShadows, getShadow } from "../helpers/utils_processing";
// components
import CodePreview from "../components/shadows/CodePreview";
import ShadowPreview from "../components/shadows/ShadowPreview";
import ShadowSettingsPanel from "../components/shadows/ShadowSettingsPanel";
import ResizableBox from "../components/shadows/ResizableBox";

const initialVals = {
	horizontalOffset: 3,
	verticalOffset: 4,
	blurRadius: 16,
	spreadRadius: -1,
	shadowColor: "#000000",
	shadowOpacity: "0.75",
	backgroundColor: "#eaecef",
	borderColor: "none",
	// boxColor: "#333",
	boxColor: "green",
	boxWidth: "30rem",
	boxHeight: "35rem",
};

const BoxShadowView = () => {
	const { formState, setFormState, handleChange, handleReset } = useForm({
		...initialVals,
	});
	const { values } = formState;
	const [wasCopied, setWasCopied] = useState(false);
	const [shadow, setShadow] = useState(() => {
		return getShadow(values);
	});

	const handleRange = (name, val) => {
		setFormState({
			...formState,
			values: {
				...values,
				[name]: val,
			},
		});
	};

	const handleColorPicker = (name, newColor) => {
		setFormState({
			...formState,
			values: {
				...values,
				shadowColor: newColor,
			},
		});
	};

	const getBoxShadowCode = (e) => {
		if (!isEmptyVal(shadow)) {
			const allShadows = getAllShadows(shadow);
			navigator.clipboard.writeText(allShadows);
			return setWasCopied(true);
		} else {
			return setWasCopied(false);
		}
	};

	// resets 'wasCopied' after true
	useEffect(() => {
		let isMounted = true;
		if (!isMounted) {
			return;
		}
		let copyID;
		if (wasCopied) {
			copyID = setTimeout(() => {
				setWasCopied(false);
			}, 3000);
		}

		return () => {
			isMounted = false;
			clearTimeout(copyID);
		};
	}, [wasCopied]);

	// generates 'shadow' code after any 'settings' changes
	useEffect(() => {
		let isMounted = true;
		if (!isMounted) {
			return;
		}
		setShadow(getShadow(values));

		return () => {
			isMounted = false;
		};
	}, [values]);

	return (
		<div className={styles.BoxShadowView}>
			<div className={styles.BoxShadowView_settings}>
				<ShadowSettingsPanel
					values={values}
					wasCopied={wasCopied}
					handleRange={handleRange}
					resetAll={handleReset}
					handleColorPicker={handleColorPicker}
					getBoxShadowCode={getBoxShadowCode}
				/>
			</div>
			<div className={styles.BoxShadowView_preview}>
				<ShadowPreview>
					<ResizableBox shadow={shadow} />
					<CodePreview code={shadow} />
				</ShadowPreview>
			</div>
		</div>
	);
};

export default BoxShadowView;

BoxShadowView.defaultProps = {};

BoxShadowView.propTypes = {};
