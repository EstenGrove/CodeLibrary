import React, { useState, useEffect } from "react";
import styles from "../../css/colors/CodePreview.module.scss";
import { PropTypes } from "prop-types";

const CodePreview = ({ code = "" }) => {
	const [wasCopied, setWasCopied] = useState(false);

	const copyCode = () => {
		navigator.clipboard.writeText(code);
		return setWasCopied(true);
	};

	// reset 'wasCopied' state after copying
	useEffect(() => {
		let isMounted = true;
		if (!isMounted) {
			return;
		}

		let timerID;
		if (wasCopied) {
			timerID = setTimeout(() => setWasCopied(false), 3000);
		}

		return () => {
			isMounted = false;
			clearTimeout(timerID);
		};
	}, [wasCopied]);

	return (
		<div className={styles.CodePreview}>
			<div className={styles.CodePreview_top}>
				<span className={styles.CodePreview_top_label}>Preview: </span>
				<button onClick={copyCode} className={styles.CodePreview_top_btn}>
					{wasCopied ? "Copied!" : "Copy"}
				</button>
			</div>
			<div className={styles.CodePreview_code}>
				<pre className={styles.CodePreview_code_pre}>
					<code className={styles.CodePreview_code_pre_code}>{code}</code>
				</pre>
			</div>
		</div>
	);
};

export default CodePreview;

CodePreview.defaultProps = {};

CodePreview.propTypes = {};
