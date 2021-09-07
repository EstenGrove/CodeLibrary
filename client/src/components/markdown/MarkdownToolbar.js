import React from "react";
import styles from "../../css/markdown/MarkdownToolbar.module.scss";
import { PropTypes } from "prop-types";
import MarkdownToolButton from "./MarkdownToolButton";

const ToolbarDivider = ({ customStyles = {} }) => {
	return <div className={styles.ToolbarDivider} style={customStyles}></div>;
};

const customCSS = {
	divider: {
		margin: "0 1rem",
	},
};

const MarkdownToolbar = ({
	initHyperLink,
	selectEditorTool,
	downloadMarkdown,
}) => {
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
							handleClick=""
						/>
						<MarkdownToolButton
							icon="italic"
							hoverTitle="Italic"
							handleClick=""
						/>
						<MarkdownToolButton handleClick="" icon="bold" hoverTitle="Bold" />
						<MarkdownToolButton
							icon="listNumbers"
							hoverTitle="Numbered List"
							handleClick=""
						/>
						<MarkdownToolButton
							icon="listBullets"
							hoverTitle="Bullet List"
							handleClick=""
						/>
						<MarkdownToolButton
							icon="quote"
							hoverTitle="Blockquote"
							handleClick=""
						/>
					</div>
					<ToolbarDivider />
					<div className={styles.MarkdownToolbar_inner_right_menu}>
						<MarkdownToolButton
							icon="dotsHorizontal"
							hoverTitle="Menu Options"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MarkdownToolbar;

MarkdownToolbar.defaultProps = {};

MarkdownToolbar.propTypes = {};
