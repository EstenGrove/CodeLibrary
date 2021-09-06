import React, { useState } from "react";
import styles from "../../css/snippets/SnippetCard.module.scss";
import { PropTypes } from "prop-types";
import { getSnippetTypeFromID } from "../../helpers/utils_snippets";
// components
import SnippetPreviewImg from "./SnippetPreviewImg";
import SnippetTitle from "./SnippetTitle";
import SnippetType from "./SnippetType";
import SnippetTags from "./SnippetTags";
import LockedIndicator from "./LockedIndicator";
import SnippetDate from "./SnippetDate";
import { format } from "date-fns";
import SnippetAbout from "./SnippetAbout";
import SnippetActions from "./SnippetActions";
import { useForm } from "../../utils/useForm";

const SnippetCard = ({
	snippet = {},
	snippetTypes = [],
	languages = [],
	tags = [],
	dispatchToState,
}) => {
	const { formState, setFormState, handleChange } = useForm({
		name: snippet?.name,
		desc: snippet?.desc,
		isLocked: snippet?.isLocked,
		isStarred: snippet?.isStarred,
		languageID: snippet?.languageID,
	});
	const { values } = formState;
	const {
		id,
		name,
		desc,
		previewImg,
		typeID,
		codeSrc,
		languageID,
		dateCreated = new Date(),
		dateModified = new Date(),
		metaID,
	} = snippet;

	const toggleLocked = () => {
		setFormState({
			...formState,
			values: {
				...values,
				isLocked: !values?.isLocked,
			},
		});
	};
	const toggleStarStatus = () => {
		setFormState({
			...formState,
			values: {
				...values,
				isStarred: !values?.isStarred,
			},
		});
	};

	const copySnippet = (text) => {
		if (navigator.clipboard) {
			return navigator.clipboard.writeText(text);
		} else {
			return alert(`Clipboard not supported. Try another browser!`);
		}
	};
	// downloads target 'markdown' file
	const downloadFile = (file) => {
		console.log(`Preparing file download...`);
	};

	return (
		<div className={styles.SnippetCard}>
			<div className={styles.SnippetCard_top}>
				<LockedIndicator
					isLocked={values.isLocked}
					toggleLocked={toggleLocked}
				/>
				<SnippetTitle name={name} />
				<SnippetDate
					date={format(dateCreated, "M/DD/YY")}
					hoverTitle={`Date Created: ${format(dateCreated, "M/DD/YY")}`}
				/>
			</div>
			<div className={styles.SnippetCard_about}>
				<SnippetAbout
					desc={desc}
					languageID={languageID}
					languages={languages}
				/>
			</div>

			<div className={styles.SnippetCard_tags}>
				<SnippetTags assignedTags={tags.slice(0, 5)} />
			</div>
			<div className={styles.SnippetCard_actions}>
				<SnippetActions
					isStarred={values.isStarred}
					toggleStarStatus={toggleStarStatus}
					copyHandler={() => copySnippet("CHANGE THIS LATER!!!")}
					downloadFileHandler={() => downloadFile("FILE-GOES-HERE")}
				/>
			</div>
		</div>
	);
};

export default SnippetCard;

SnippetCard.defaultProps = {};

SnippetCard.propTypes = {};
