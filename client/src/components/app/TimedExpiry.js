import React, { useState, useEffect } from "react";
import styles from "../../css/app/TimedExpiry.module.scss";
import { PropTypes } from "prop-types";
import { calcTimeToExpiryByUnit } from "../../helpers/utils_dates";
import { addMinutes } from "date-fns";

const baseDiff = {
	value: 0,
	formatted: "",
};

const TimedExpiry = ({
	startDate = new Date(),
	expiryDate = addMinutes(new Date(), 30),
	children,
}) => {
	const [isVisible, setIsVisible] = useState(true);
	// calculates time between 'startDate' and 'expiryDate' in milliseconds
	const [diffInMs, setDiffInMs] = useState(() => {
		const diff = calcTimeToExpiryByUnit("ms", {
			startDate,
			expiryDate,
		});
		return diff;
	});

	// handles toggling UI before/after expiry
	useEffect(() => {
		let isMounted = true;
		if (!isMounted) {
			return;
		}

		// if current date is before expiry
		// handles resetting state after expiry
		let timerID;
		if (isVisible) {
			timerID = setTimeout(() => {
				// reset state after timer has expired
				setIsVisible(false);
				setDiffInMs(baseDiff);
			}, diffInMs.value);
		}

		return () => {
			isMounted = false;
			clearTimeout(timerID);
		};
	}, [diffInMs.value, isVisible]);

	// reset 'isVisible' to true after cycle
	useEffect(() => {
		let isMounted = true;
		if (!isMounted) {
			return;
		}
		let timerID;
		if (!isVisible) {
			// reset 'isVisible' state after a couple of seconds
			timerID = setTimeout(() => {
				setIsVisible(true);
			}, 2000);
		}

		return () => {
			isMounted = false;
			clearTimeout(timerID);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={styles.TimedExpiry}>
			{children}
			{/*  */}
			{/*  */}
		</div>
	);
};

export default TimedExpiry;

TimedExpiry.defaultProps = {};

TimedExpiry.propTypes = {};
