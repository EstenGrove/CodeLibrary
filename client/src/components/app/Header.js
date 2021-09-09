import React from "react";
import styles from "../../css/app/Header.module.scss";
import { PropTypes } from "prop-types";

const Header = ({ title, subtitle, children, customStyles = {} }) => {
	const { titleCss, subtitleCss, header } = customStyles;
	return (
		<header className={styles.Header} style={header}>
			<h2 className={styles.Header_title} style={titleCss}>
				{title}
			</h2>
			<p className={styles.Header_subtitle} style={subtitleCss}>
				{subtitle}
			</p>
			<div className={styles.Header_content}>{children}</div>
		</header>
	);
};

export default Header;

Header.defaultProps = {};

Header.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	children: PropTypes.any,
	customStyles: PropTypes.object,
};
