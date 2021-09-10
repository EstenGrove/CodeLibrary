import React from "react";
import styles from "../../css/details/DetailsViewMeta.module.scss";
import sprite from "../../assets/icons/editor.svg";
import { PropTypes } from "prop-types";
import { blueGrey } from "../../helpers/utils_styles";
import { format } from "date-fns";
import { isEmptyVal } from "../../helpers/utils_types";
// components
import Header from "../app/Header";
import StarredIndicator from "../snippets/StarredIndicator";
import LockedIndicator from "../snippets/LockedIndicator";

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

const icons = {
	edit: "create",
	delete: "delete",
	menu: "dots-three-vertical",
};

const IconButton = ({ icon, handleClick }) => {
	return (
		<div className={styles.IconButton} onClick={handleClick}>
			<svg className={styles.IconButton_icon}>
				<use xlinkHref={`${sprite}#icon-${icons[icon]}`}></use>
			</svg>
		</div>
	);
};

const DeleteButton = ({ icon = "delete", handleClick }) => {
	return (
		<div className={styles.DeleteButton} onClick={handleClick}>
			<svg className={styles.DeleteButton_icon}>
				<use xlinkHref={`${sprite}#icon-${icons[icon]}`}></use>
			</svg>
		</div>
	);
};

const DateCreated = ({
	prefixMsg = "Created on ",
	date,
	dateFormat = "MMM Do, YYYY",
}) => {
	return (
		<div className={styles.DateCreated}>
			<span className={styles.DateCreated_label}>{prefixMsg}</span>
			<span className={styles.DateCreated_date}>
				{format(date, dateFormat)} at {format(date, "h:mm A")}
			</span>
		</div>
	);
};
const DateModified = ({ prefixMsg, date, dateFormat = "MMM Do, YYYY" }) => {
	return (
		<div className={styles.DateModified}>
			<span className={styles.DateModified_label}>{prefixMsg}</span>
			<span className={styles.DateModified_date}>
				{format(date, dateFormat)} at {format(date, "h:mm A")}
			</span>
		</div>
	);
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
					<DateCreated date={snippet.dateCreated} prefixMsg="Created on " />
					{!isEmptyVal(snippet.dateModified) && (
						<DateModified
							date={snippet.dateModified}
							prefixMsg="Modified on "
						/>
					)}
				</Header>
				<div className={styles.DetailsViewMeta_top_iconBar}>
					<StarredIndicator
						isStarred={snippet.isStarred}
						toggleLockedStatus={toggleStarStatus}
					/>
					<br />
					<LockedIndicator
						isLocked={snippet.isLocked}
						toggleLockedStatus={toggleLockedStatus}
					/>
				</div>
			</div>
			<section className={styles.DetailsViewMeta_actions}>
				<IconButton icon="edit" />
				<DeleteButton icon="delete" />
			</section>
		</div>
	);
};

export default DetailsViewMeta;

DetailsViewMeta.defaultProps = {};

DetailsViewMeta.propTypes = {};
