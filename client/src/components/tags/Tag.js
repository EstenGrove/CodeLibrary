import React from "react";
import styles from "../../css/tags/Tag.module.scss";
import sprite from "../../assets/icons/code-library.svg";
import { PropTypes } from "prop-types";

const getTagCss = (color) => {
	return {
		borderLeft: `4px solid ${color}`,
	};
};

const Tag = ({ tag = {}, removeTag, disableRemove = false }) => {
	const { name, id, color: tagColor } = tag;

	return (
		<div className={styles.Tag} style={getTagCss(tagColor)}>
			<span className={styles.Tag_name}>{name}</span>
			{!disableRemove && (
				<svg
					className={styles.Tag_clearIcon}
					onClick={!removeTag ? null : () => removeTag(tag)}
				>
					<use xlinkHref={`${sprite}#icon-clear`}></use>
				</svg>
			)}
		</div>
	);
};

export default Tag;

Tag.defaultProps = {};

Tag.propTypes = {
	tag: PropTypes.object,
};
