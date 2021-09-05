import React from "react";
import styles from "../../css/app/PageCards.module.scss";
import { PropTypes } from "prop-types";
import { isEmptyArray } from "../../helpers/utils_types";
import PageCard from "./PageCard";

const cards = [
	{
		name: "Dev Tools",
		desc: "Various developer tools, generators & utilities.",
		route: "/tools",
	},
	{
		name: "Snippets",
		desc: "Various custom code snippets",
		route: "/snippets",
	},
	{
		name: "New Snippet",
		desc: "Create a new snippet.",
		route: "/snippets/new",
	},
];

const PageCards = ({ pageCards = [...cards] }) => {
	return (
		<div className={styles.PageCards}>
			{!isEmptyArray(pageCards) &&
				pageCards.map((card, idx) => (
					<PageCard key={`Page:${idx}`} card={card} />
				))}
		</div>
	);
};

export default PageCards;

PageCards.defaultProps = {};

PageCards.propTypes = {};
