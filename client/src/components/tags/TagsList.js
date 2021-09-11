import React from "react";
import styles from "../../css/tags/TagsList.module.scss";
import { PropTypes } from "prop-types";
import { isEmptyArray } from "../../helpers/utils_types";
import Tag from "./Tag";

const TagsList = ({ tags = [], removeTag, disableRemoveFn = true }) => {
	return (
		<div className={styles.TagsList}>
			<div className={styles.TagsList_list}>
				{!isEmptyArray(tags) &&
					tags.map((tag, idx) => (
						<Tag
							tag={tag}
							key={`Tag--${tag?.name}--${idx}`}
							disableRemove={disableRemoveFn}
							removeTag={() => removeTag(tag)}
						/>
					))}
			</div>
		</div>
	);
};

export default TagsList;

TagsList.defaultProps = {};

TagsList.propTypes = {};
