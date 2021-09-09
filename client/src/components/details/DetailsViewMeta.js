import React from "react";
import styles from "../../css/details/DetailsViewMeta.module.scss";
import sprite from "../../assets/icons/editor.svg";
import { PropTypes } from "prop-types";
import StarredIndicator from "../snippets/StarredIndicator";
import LockedIndicator from "../snippets/LockedIndicator";
import Header from "../app/Header";
import { blueGrey } from "../../helpers/utils_styles";
import { format } from "date-fns";

// REQUIREMENTS:
// - Contains main snippet info in header:
//    - Title, desc, date created, modified, date, favorite, locked
// - Contains main snippet actions:
//    - Delete, edit, menu options, favorite, lock etc.

const customCSS = {
	titleCss: {
		color: blueGrey[800],
	},
	subtitleCss: {
		color: blueGrey[500],
	},
	header: {
		minHeight: "auto",
		height: "auto",
		marginBottom: "2rem",
	},
};

const DetailsViewMeta = ({
	snippet,
	allTags = [],
	allLanguages = [],
	toggleLockedStatus,
	toggleStarStatus,
}) => {
	return (
		<div className={styles.DetailsViewMeta}>
			<div className={styles.DetailsViewMeta_top}>
				<Header
					customStyles={customCSS}
					title={`${snippet?.name ?? ""}`}
					subtitle={snippet?.desc}
				>
					<div className={styles.DetailsViewMeta_createdDate}>
						Created on {format(snippet.dateCreated, "M/D/YYYY h:mm A")}
					</div>
				</Header>
			</div>
			<section className={styles.DetailsViewMeta_iconBar}>
				<StarredIndicator
					isStarred={snippet.isStarred}
					toggleLockedStatus={toggleStarStatus}
				/>
				<br />
				<LockedIndicator
					isLocked={snippet.isLocked}
					toggleLockedStatus={toggleLockedStatus}
				/>
			</section>
			<section className={styles.DetailsViewMeta_actions}>
				{/* ACTION ICONS */}
				{/* ACTION ICONS */}
			</section>
		</div>
	);
};

export default DetailsViewMeta;

DetailsViewMeta.defaultProps = {};

DetailsViewMeta.propTypes = {};
