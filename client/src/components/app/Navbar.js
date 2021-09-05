import React from "react";
import styles from "../../css/app/Navbar.module.scss";
import sprite from "../../assets/icons/code-library.svg";
import { PropTypes } from "prop-types";
import { NavLink } from "react-router-dom";
import { routes } from "../../helpers/utils_routes";
import { useWindowSize } from "../../utils/useWindowSize";

const [home, snippets, tools, newSnippet] = routes;

const MobileDropdown = () => {
	return (
		<ul className={styles.MobileDropdown}>
			<li className={styles.MobileDropdown_item}>
				<NavLink to={home.route}>{home.name}</NavLink>
			</li>
			<li className={styles.MobileDropdown_item}>
				<NavLink to={snippets.route}>{snippets.name}</NavLink>
			</li>
			<li className={styles.MobileDropdown_item}>
				<NavLink to={tools.route}>{tools.name}</NavLink>
			</li>
			<li className={styles.MobileDropdown_item}>
				<NavLink to={newSnippet.route}>{newSnippet.name}</NavLink>
			</li>
		</ul>
	);
};

const Navbar = () => {
	const size = useWindowSize();
	const { width, height } = size;

	if (width <= 500) {
		return (
			<nav aria-roledescription="navigation" className={styles.MobileNavbar}>
				<ul className={styles.MobileNavbar_list}>
					<li className={styles.MobileNavbar_list_logo}>
						<a
							href="https://sgore.dev"
							target="_blank"
							rel="noreferrer"
							className={styles.MobileNavbar_list_logo_link}
						>
							sgore.dev<b>{">"}</b>
						</a>
					</li>
					<li className={styles.MobileNavbar_list_menu}>
						<svg className={styles.MobileNavbar_list_menu_icon}>
							<use xlinkHref={`${sprite}#icon-menu`}></use>
						</svg>
					</li>
				</ul>
			</nav>
		);
	}
	return (
		<nav aria-roledescription="navigation" className={styles.Navbar}>
			<ul className={styles.Navbar_list}>
				<li className={styles.Navbar_list_logo}>
					<a
						href="https://sgore.dev"
						target="_blank"
						rel="noreferrer"
						className={styles.Navbar_list_logo_link}
					>
						sgore.dev<b>{">"}</b>
					</a>
				</li>
				<li className={styles.Navbar_list_item}>
					<NavLink to={home.route}>{home.name}</NavLink>
				</li>
				<li className={styles.Navbar_list_item}>
					<NavLink to={snippets.route}>{snippets.name}</NavLink>
				</li>
				<li className={styles.Navbar_list_item}>
					<NavLink to={tools.route}>{tools.name}</NavLink>
				</li>
				<li className={styles.Navbar_list_item}>
					<NavLink to={newSnippet.route}>{newSnippet.name}</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

Navbar.defaultProps = {};

Navbar.propTypes = {};
