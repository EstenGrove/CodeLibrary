import React, { useRef, useState, useEffect } from "react";
import styles from "../../css/markdown/MarkdownPreview.module.scss";
import sprite from "../../assets/icons/modals-complete.svg";
import { PropTypes } from "prop-types";
// utils
import { parseMarkdownToHtml } from "../../helpers/utils_markdown";
import { isEmptyVal } from "../../helpers/utils_types";
import { useOutsideClick } from "../../utils/useOutsideClick";
import { useLockBodyScroll } from "../../utils/useLockBodyScroll";
import { useKeyboardShortcut } from "../../utils/useKeyboardShortcut";

const mockMd = `
# Title Heading

**This is a bold sentence.**

- Item one
- Item two
- Item three

[Link to my website](https://sgore.dev)


> This is line one of block quote
> Line two of block quote


## Sub heading

\`\`\`javascript
const matchesPattern = (val, pattern) => {
  const newPattern = new RegExp(pattern);
  return newPattern.test(val);
}
\`\`\`
`;

const mockMd1 = `
# Here's The Title
`;

const MarkdownPreview = ({ markdown, closePreview }) => {
	const [convertedMarkdown, setConvertedMarkdown] = useState(() => {
		if (isEmptyVal(markdown)) return `No markdown found.`;
		return parseMarkdownToHtml(markdown);
	});
	const previewRef = useRef();
	const { isOutside } = useOutsideClick(previewRef);
	const wasEscaped = useKeyboardShortcut(["escape"]);
	useLockBodyScroll();

	const renderHtml = () => {
		return { __html: `${convertedMarkdown}` };
	};

	// close preview when clicking outside of it
	useEffect(() => {
		let isMounted = true;
		if (!isMounted) {
			return;
		}

		if (isOutside || wasEscaped) {
			closePreview();
		}

		return () => {
			isMounted = false;
		};
	}, [closePreview, isOutside, wasEscaped]);

	console.log("markdown", markdown);
	console.log("convertedMarkdown", convertedMarkdown);

	useEffect(() => {
		let isMounted = true;
		if (!isMounted) {
			return;
		}

		if (!isEmptyVal(markdown)) {
			setConvertedMarkdown(() => parseMarkdownToHtml(markdown));
		}

		return () => {
			isMounted = false;
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={styles.MarkdownPreview} ref={previewRef}>
			<div className={styles.MarkdownPreview_top}>
				<div className={styles.MarkdownPreview_top_title}>
					Markdown as HTML Preview
				</div>
				<svg className={styles.MarkdownPreview_top_icon} onClick={closePreview}>
					<use xlinkHref={`${sprite}#icon-clearclose`}></use>
				</svg>
			</div>
			<div className={styles.MarkdownPreview_info}>
				<div className={styles.MarkdownPreview_info_title}>
					Additional Info:
				</div>
				<span className={styles.MarkdownPreview_info_details}>
					The rendered HTML output below is an "approximation" of the provided
					Markdown input and may vary slightly or appear slightly different in
					other viewers.
				</span>
			</div>
			<div className={styles.MarkdownPreview_preview}>
				<div className={styles.MarkdownPreview_preview_msg}>Output:</div>
				{!isEmptyVal(convertedMarkdown) && (
					<div
						className={styles.MarkdownPreview_preview_output}
						dangerouslySetInnerHTML={renderHtml()}
					></div>
				)}
			</div>
		</div>
	);
};

export default MarkdownPreview;

MarkdownPreview.defaultProps = {};

MarkdownPreview.propTypes = {};
