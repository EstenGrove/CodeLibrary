import React from "react";
import styles from "../../css/snippets/LockedIndicator.module.scss";
import sprite from "../../assets/icons/code-library.svg";
import { PropTypes } from "prop-types";
import { purple, red } from "../../helpers/utils_styles";

const locked = `lock`;
const notLocked = `lock-open`;

const LockedIndicator = ({ isLocked = false, toggleLocked }) => {
	return (
		<div className={styles.LockedIndicator}>
			<svg
				className={styles.LockedIndicator_icon}
				onClick={toggleLocked}
				title={isLocked ? `Locked` : `Not-Locked`}
				style={isLocked ? { fill: red[600] } : { fill: purple[700] }}
			>
				<use
					xlinkHref={`${sprite}#icon-${isLocked ? locked : notLocked}`}
				></use>
			</svg>
		</div>
	);
};

export default LockedIndicator;

LockedIndicator.defaultProps = {};

LockedIndicator.propTypes = {};
