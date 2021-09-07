import React from "react";
import styles from "../../css/app/PageCard.module.scss";
import { PropTypes } from "prop-types";
import { NavLink, useRouteMatch } from "react-router-dom";

const PageCard = ({ baseRoute, card = {} }) => {
	const { name, desc, route } = card;
	const match = useRouteMatch(baseRoute);

	const fullRoute = `${baseRoute}${route}`;

	return (
		<article className={styles.PageCard}>
			<div className={styles.PageCard_header}>
				<div className={styles.PageCard_header_title}>{name}</div>
				<p className={styles.PageCard_header_desc}>
					<span>{desc}</span>
				</p>
			</div>
			<div className={styles.PageCard_actions}>
				<div className={styles.PageCard_actions_goto}>
					<NavLink to={`${match.path}${route}`}>Go to tool ➜</NavLink>
				</div>
			</div>
		</article>
	);
};

export default PageCard;

PageCard.defaultProps = {};

PageCard.propTypes = {};
