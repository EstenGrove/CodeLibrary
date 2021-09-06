import React, { useState, useEffect } from "react";
import styles from "../../css/app/ReusableCodePreview.module.scss";
import { PropTypes } from "prop-types";

const ReusableCodePreview = ({ code }) => {
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
		<div className={styles.ReusableCodePreview}>
			<div className={styles.ReusableCodePreview_top}>
				<span className={styles.ReusableCodePreview_top_label}>Preview: </span>
				<button
					onClick={copyCode}
					className={styles.ReusableCodePreview_top_btn}
				>
					{wasCopied ? "Copied!" : "Copy"}
				</button>
			</div>
			<div className={styles.ReusableCodePreview_code}>
				<pre className={styles.ReusableCodePreview_code_pre}>
					<code className={styles.ReusableCodePreview_code_pre_code}>
						{code}
					</code>
				</pre>
			</div>
		</div>
	);
};

export default ReusableCodePreview;

ReusableCodePreview.defaultProps = {};

ReusableCodePreview.propTypes = {};
