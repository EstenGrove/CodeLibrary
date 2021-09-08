import React, { useState, useEffect } from "react";
import styles from "../../css/code/CodeViewer.module.scss";
import sprite from "../../assets/icons/editor.svg";
import { PropTypes } from "prop-types";
// syntax highlighter dependencies
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { purgeLeadingSpaces } from "../../helpers/utils_processing";

const icons = {
	copy: "content_copy",
	paste: "content_paste",
};

const ActionButton = ({ handleClick, icon, text, isDisabled = false }) => {
	return (
		<button
			type="button"
			disabled={isDisabled}
			className={styles.ActionButton}
			onClick={handleClick}
		>
			<svg className={styles.ActionButton_icon}>
				<use xlinkHref={`${sprite}#icon-${icons[icon]}`}></use>
			</svg>
			<span className={styles.ActionButton_text}>{text}</span>
		</button>
	);
};

const CodeViewer = ({ code = `// No code found :(`, language }) => {
	const [wasCopied, setWasCopied] = useState(false);

	const copyCode = () => {
		navigator.clipboard.writeText(code);
		setWasCopied(true);
	};

	// resets 'wasCopied' state after click
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

	return (
		<div className={styles.CodeViewer}>
			<div className={styles.CodeViewer_window}>
				<ActionButton
					icon="copy"
					text={wasCopied ? `Copied!` : `Copy`}
					handleClick={copyCode}
				/>
				<SyntaxHighlighter
					language={language}
					style={dracula}
					customStyle={{ fontSize: "13px" }}
					showLineNumbers={true}
				>
					{purgeLeadingSpaces(code)}
				</SyntaxHighlighter>
			</div>
		</div>
	);
};

export default CodeViewer;

CodeViewer.defaultProps = {
	code: `// No code found :(`,
};

CodeViewer.propTypes = {
	code: PropTypes.string,
	language: PropTypes.string,
};
