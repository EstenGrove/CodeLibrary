import React, { useCallback, useState, useEffect } from "react";
// import styles from "../../css/app/OneTimeExpiry.module.scss";
import styles from "../../css/app/OneTimeExpiry.module.scss";
import sprite from "../../assets/icons/modals-complete.svg";
import { PropTypes } from "prop-types";
import { calcTimeToExpiryByUnit } from "../../helpers/utils_dates";
import { addMinutes } from "date-fns";

const baseDiff = {
	value: 0,
	formatted: "",
};

const OneTimeExpiry = ({
	startDate = new Date(),
	expiryDate = addMinutes(new Date(), 0.3),
	children,
}) => {
	// starts off not visible, which works as an automatic 'reset' for the counter
	const [isVisible, setIsVisible] = useState(true);
	// calculates time between 'startDate' and 'expiryDate' in milliseconds
	const [diffInMs, setDiffInMs] = useState(() => {
		const diff = calcTimeToExpiryByUnit("ms", {
			startDate,
			expiryDate,
		});
		return diff;
	});

	const clearAndCloseExpiry = () => {
		setIsVisible(false);
		setDiffInMs(baseDiff);
	};

	// starts timer counter & checks when to hide/expire
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
			}, diffInMs.value);
		}

		return () => {
			isMounted = false;
			clearTimeout(timerID);
		};
	}, [diffInMs.value, isVisible]);

	if (!isVisible) {
		return null;
	}
	return (
		<div className={styles.OneTimeExpiry}>
			<div className={styles.OneTimeExpiry_top}>
				<div
					className={styles.OneTimeExpiry_top_close}
					onClick={clearAndCloseExpiry}
				>
					<svg className={styles.OneTimeExpiry_top_close_icon}>
						<use xlinkHref={`${sprite}#icon-clearclose`}></use>
					</svg>
				</div>
			</div>
			<div className={styles.OneTimeExpiry_content}>{children}</div>
		</div>
	);
};

export default OneTimeExpiry;

OneTimeExpiry.defaultProps = {};

OneTimeExpiry.propTypes = {};
