import React from "react";
import styles from "../../css/app/PageCards.module.scss";
import { PropTypes } from "prop-types";
import { isEmptyArray } from "../../helpers/utils_types";
import PageCard from "./PageCard";
import { useRouteMatch } from "react-router-dom";

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

const PageCards = ({ baseRoute, pageCards = [...cards] }) => {
	const match = useRouteMatch(baseRoute);

	console.log("match", match);
	return (
		<div className={styles.PageCards}>
			{!isEmptyArray(pageCards) &&
				pageCards.map((card, idx) => (
					<PageCard key={`Page:${idx}`} card={card} baseRoute={baseRoute} />
				))}
		</div>
	);
};

export default PageCards;

PageCards.defaultProps = {};

PageCards.propTypes = {};
