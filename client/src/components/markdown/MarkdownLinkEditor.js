import React, { useEffect, useRef } from "react";
import styles from "../../css/markdown/MarkdownLinkEditor.module.scss";
import { PropTypes } from "prop-types";
import TextInput from "../shared/TextInput";
import Button from "../shared/Button";
import { useOutsideClick } from "../../utils/useOutsideClick";

// REQUIREMENTS:
// - SHow popup
// - Input for entering what text to show
// - Input for entering what url to use

const customCSS = {
	cancel: {
		marginRight: ".5rem",
	},
	create: {},
};

const MarkdownLinkEditor = ({
	vals = {},
	handleChange,
	createLink,
	cancelLink,
	closeLinkEditor,
}) => {
	const popupRef = useRef();
	const { isOutside } = useOutsideClick(popupRef);

	useEffect(() => {
		let isMounted = true;
		if (!isMounted) {
			return;
		}

		if (isOutside) {
			closeLinkEditor();
		}

		return () => {
			isMounted = false;
		};
	}, [closeLinkEditor, isOutside]);

	return (
		<div className={styles.MarkdownLinkEditor} ref={popupRef}>
			<div className={styles.MarkdownLinkEditor_text}>
				<TextInput
					name="linkText"
					id="linkText"
					label="Text to display"
					val={vals.linkText}
					handleChange={handleChange}
					placeholder="Enter text..."
				/>
			</div>
			<div className={styles.MarkdownLinkEditor_url}>
				<TextInput
					name="linkUrl"
					id="linkUrl"
					label="Enter a url"
					val={vals.linkUrl}
					handleChange={handleChange}
					placeholder="https://example.com..."
				/>
			</div>
			<div className={styles.MarkdownLinkEditor_actions}>
				<Button customStyles={customCSS.cancel} handleClick={cancelLink}>
					Cancel
				</Button>
				<Button customStyles={customCSS.create} handleClick={createLink}>
					Create Link
				</Button>
			</div>
		</div>
	);
};

export default MarkdownLinkEditor;

MarkdownLinkEditor.defaultProps = {};

MarkdownLinkEditor.propTypes = {};
