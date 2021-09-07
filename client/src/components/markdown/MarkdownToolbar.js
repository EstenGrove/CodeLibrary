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

const MarkdownToolbar = () => {
	return (
		<section className={styles.MarkdownToolbar}>
			<div className={styles.MarkdownToolbar_inner}>
				<div className={styles.MarkdownToolbar_inner_left}>
					<MarkdownToolButton icon="undo" hoverTitle="Undo" />
					<MarkdownToolButton icon="redo" hoverTitle="Redo" />
				</div>
				<div className={styles.MarkdownToolbar_inner_right}>
					<div className={styles.MarkdownToolbar_inner_right_file}>
						<MarkdownToolButton icon="cloudDownload" hoverTitle="Download" />
						<MarkdownToolButton icon="save" hoverTitle="Save File" />
					</div>
					<ToolbarDivider />
					<div className={styles.MarkdownToolbar_inner_right_actions}>
						<MarkdownToolButton icon="underline" hoverTitle="Underline" />
						<MarkdownToolButton icon="italic" hoverTitle="Italic" />
						<MarkdownToolButton icon="bold" hoverTitle="Bold" />
						<MarkdownToolButton icon="listNumbers" hoverTitle="Numbered List" />
						<MarkdownToolButton icon="listBullets" hoverTitle="Bullet List" />
						<MarkdownToolButton icon="quote" hoverTitle="Blockquote" />
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
