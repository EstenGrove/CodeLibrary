import React from "react";
import styles from "../../css/app/FloatingNav.module.scss";
import sprite from "../../assets/icons/carets-arrows.svg";
import { PropTypes } from "prop-types";
import { withRouter } from "react-router-dom";

const mobileSize = {
	width: 650,
	height: 700,
};

// pages to hide buttons on
const hideOnThesePages = [];

const showBackBtn = (history, hideOnThesePages = []) => {
	const { state } = history.location;
	const from = state?.from;
	const loginPage = "/";
	// custom override
	if (hideOnThesePages.includes(history?.location?.pathname)) return false;

	if (history.length < 3 || from === loginPage) {
		// last route & current route
		return false;
	} else {
		return true;
	}
};

const showForwardBtn = (history, hideOnThesePages = []) => {
	if (hideOnThesePages.includes(history?.location?.pathname)) return false;
	if (history && history.action === "POP") {
		return true;
	} else {
		return false;
	}
};

const getBackBtnCSS = (winSize = {}) => {
	const { width, height } = winSize;
	if (width <= mobileSize.width || height <= mobileSize.height) {
		return {
			left: "2rem",
		};
	} else {
		return {
			left: "21rem",
		};
	}
};

const FloatingNav = ({ history, enableBack = true, enableForward = true }) => {
	// removes entry from 'history' list
	const goBack = () => {
		// return history.goBack();
		if (enableBack) {
			return history.go(-1);
		} else {
			return;
		}
	};
	// adds entry to 'history' list
	const goForward = () => {
		// return history.goForward();
		if (enableForward) {
			return history.go(+1);
		} else {
			return;
		}
	};

	// history.listen((location, action) => {
	// 	if (location?.pathname && location?.pathname?.includes("/")) {
	// 		// remove in PRODUCTION
	// 	}
	// });

	return (
		<nav aria-roledescription="navigation" className={styles.FloatingNav}>
			{showBackBtn(history, hideOnThesePages) && (
				<button className={styles.FloatingNav_btn_left} onClick={goBack}>
					<svg className={styles.FloatingNav_btn_left_icon}>
						<use xlinkHref={`${sprite}#icon-arrow_back`}></use>
					</svg>
				</button>
			)}
			{showForwardBtn(hideOnThesePages, hideOnThesePages) && (
				<button className={styles.FloatingNav_btn_right} onClick={goForward}>
					<svg className={styles.FloatingNav_btn_right_icon}>
						<use xlinkHref={`${sprite}#icon-arrow_forward`}></use>
					</svg>
				</button>
			)}
		</nav>
	);
};

export default withRouter(FloatingNav);

FloatingNav.defaultProps = {};

FloatingNav.propTypes = {};
