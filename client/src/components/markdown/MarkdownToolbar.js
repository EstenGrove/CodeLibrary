import React, { useRef, useEffect, useState } from "react";
import styles from "../../css/markdown/MarkdownToolbar.module.scss";
import sprite from "../../assets/icons/modals-complete.svg";
import { PropTypes } from "prop-types";
import { useOutsideClick } from "../../utils/useOutsideClick";
// components
import MarkdownToolButton from "./MarkdownToolButton";

const ToolbarDivider = ({ customStyles = {} }) => {
	return <div className={styles.ToolbarDivider} style={customStyles}></div>;
};

const customCSS = {
	divider: {
		margin: "0 1rem",
	},
};

const OptionsMenu = ({ closeMenu }) => {
	const menuRef = useRef();
	const { isOutside } = useOutsideClick(menuRef);

	useEffect(() => {
		let isMounted = true;
		if (!isMounted) {
			return;
		}

		if (isOutside) {
			closeMenu();
		}

		return () => {
			isMounted = false;
		};
	}, [closeMenu, isOutside]);

	return (
		<aside className={styles.OptionsMenu} ref={menuRef}>
			<div className={styles.OptionsMenu_top}>
				<div className={styles.OptionsMenu_top_title}>Snippet Actions:</div>
				<svg className={styles.OptionsMenu_top_icon} onClick={closeMenu}>
					<use xlinkHref={`${sprite}#icon-clearclose`}></use>
				</svg>
			</div>
			<ul className={styles.OptionsMenu_list}>
				<li className={styles.OptionsMenu_list_item}>Edit Snippet</li>
				<li className={styles.OptionsMenu_list_item}>Disable Snippet</li>
				<li className={styles.OptionsMenu_list_item}>Delete Snippet</li>
			</ul>
		</aside>
	);
};

const MarkdownToolbar = ({
	initHyperLink,
	selectEditorTool,
	downloadMarkdown,
	copyText,
}) => {
	const [showMenuOptions, setShowMenuOptions] = useState(false);

	return (
		<section className={styles.MarkdownToolbar}>
			<div className={styles.MarkdownToolbar_inner}>
				<div className={styles.MarkdownToolbar_inner_left}>
					<MarkdownToolButton icon="undo" hoverTitle="Undo" />
					<MarkdownToolButton icon="redo" hoverTitle="Redo" />
				</div>
				<div className={styles.MarkdownToolbar_inner_right}>
					<div className={styles.MarkdownToolbar_inner_right_file}>
						<MarkdownToolButton
							icon="copy"
							hoverTitle="Copy Markdown"
							handleClick={copyText}
						/>
						<MarkdownToolButton
							icon="fileDownload"
							hoverTitle="Download"
							handleClick={downloadMarkdown}
						/>
					</div>
					<ToolbarDivider />
					<div className={styles.MarkdownToolbar_inner_right_actions}>
						<MarkdownToolButton
							icon="link"
							hoverTitle="Hyperlink"
							handleClick={initHyperLink}
						/>
						<MarkdownToolButton
							icon="underline"
							hoverTitle="Underline"
							handleClick={() => selectEditorTool("UNDERLINE")}
						/>
						<MarkdownToolButton
							icon="italic"
							hoverTitle="Italic"
							handleClick={() => selectEditorTool("ITALIC")}
						/>
						<MarkdownToolButton
							handleClick={() => selectEditorTool("BOLD")}
							icon="bold"
							hoverTitle="Bold"
						/>
						<MarkdownToolButton
							icon="listNumbers"
							hoverTitle="Numbered List"
							handleClick={() => selectEditorTool("LIST_NUMS")}
						/>
						<MarkdownToolButton
							icon="listBullets"
							hoverTitle="Bullet List"
							handleClick={() => selectEditorTool("LIST_BULLETS")}
						/>
						<MarkdownToolButton
							icon="quote"
							hoverTitle="Blockquote"
							handleClick={() => selectEditorTool("BLOCKQUOTE")}
						/>
					</div>
					<ToolbarDivider />
					<div className={styles.MarkdownToolbar_inner_right_menu}>
						<MarkdownToolButton
							icon="dotsHorizontal"
							hoverTitle="Menu Options"
							handleClick={() => setShowMenuOptions(true)}
						/>

						{showMenuOptions && (
							<OptionsMenu closeMenu={() => setShowMenuOptions(false)} />
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default MarkdownToolbar;

MarkdownToolbar.defaultProps = {};

MarkdownToolbar.propTypes = {};
