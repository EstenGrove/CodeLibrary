import {
	differenceInMonths,
	differenceInWeeks,
	differenceInDays,
	differenceInHours,
	differenceInMinutes,
	differenceInSeconds,
	differenceInMilliseconds,
	format,
	isValid,
	isBefore,
	isWithinRange,
} from "date-fns";

/**
 * Calculates the difference in time between two dates by a custom unit such as: 'months', 'weeks', 'days', 'hours', 'mins' or 'secs'.
 * @param {String} unit - A string-form time identifier for the return unit type (eg. 'months', 'days', 'mins' etc.)
 * @param {Object} dates - An object with the 'startDate' and the 'expiryDate' to calculate for.
 * @returns {Object} - Returns an object with the raw numeric value and a human-readable formatted string of the difference
 */
const calcTimeToExpiryByUnit = (unit = "days", dates = {}) => {
	const { startDate, expiryDate } = dates;

	switch (unit) {
		case "months": {
			const diffInMonths = differenceInMonths(expiryDate, startDate);
			const formattedStart = format(startDate, "M/D/YYYY h:mm A");
			const formattedExpiry = format(expiryDate, "M/D/YYYY h:mm A");

			return {
				value: diffInMonths,
				formatted: `${diffInMonths} months between ${formattedStart} and ${formattedExpiry}`,
			};
		}
		case "weeks": {
			const diffInWeeks = differenceInWeeks(expiryDate, startDate);
			const formattedStart = format(startDate, "M/D/YYYY h:mm A");
			const formattedExpiry = format(expiryDate, "M/D/YYYY h:mm A");

			return {
				value: diffInWeeks,
				formatted: `${diffInWeeks} weeks between ${formattedStart} and ${formattedExpiry}`,
			};
		}
		case "days": {
			const diffInDays = differenceInDays(expiryDate, startDate);
			const formattedStart = format(startDate, "M/D/YYYY h:mm A");
			const formattedExpiry = format(expiryDate, "M/D/YYYY h:mm A");

			return {
				value: diffInDays,
				formatted: `${diffInDays} days between ${formattedStart} and ${formattedExpiry}`,
			};
		}
		case "hours": {
			const diffInHours = differenceInHours(expiryDate, startDate);
			const formattedStart = format(startDate, "M/D/YYYY h:mm A");
			const formattedExpiry = format(expiryDate, "M/D/YYYY h:mm A");

			return {
				value: diffInHours,
				formatted: `${diffInHours} days between ${formattedStart} and ${formattedExpiry}`,
			};
		}
		case "mins": {
			const diffInMins = differenceInMinutes(expiryDate, startDate);
			const formattedStart = format(startDate, "M/D/YYYY h:mm A");
			const formattedExpiry = format(expiryDate, "M/D/YYYY h:mm A");

			return {
				value: diffInMins,
				formatted: `${diffInMins} days between ${formattedStart} and ${formattedExpiry}`,
			};
		}
		case "secs": {
			const diffInSecs = differenceInSeconds(expiryDate, startDate);
			const formattedStart = format(startDate, "M/D/YYYY h:mm A");
			const formattedExpiry = format(expiryDate, "M/D/YYYY h:mm A");

			return {
				value: diffInSecs,
				formatted: `${diffInSecs} days between ${formattedStart} and ${formattedExpiry}`,
			};
		}
		case "ms": {
			const diffInMs = differenceInMilliseconds(expiryDate, startDate);
			const formattedStart = format(startDate, "M/D/YYYY h:mm A");
			const formattedExpiry = format(expiryDate, "M/D/YYYY h:mm A");

			return {
				value: diffInMs,
				formatted: `${diffInMs} ms between ${formattedStart} and ${formattedExpiry}`,
			};
		}

		default:
			return {
				value: null,
				formatted: null,
			};
	}
};

// checks if the current date is before a provided 'expiryDate'
const isTimerExpired = (expiryDate) => {
	if (!isValidDate(expiryDate)) return true;

	return isBefore(new Date(), expiryDate);
};

// checks for valid date
const isValidDate = (date) => {
	return isValid(date);
};

// conversion utils

// convert minutes to milliseconds
const convertMinsToMs = (mins) => {
	return mins * 60000;
};
// convert seconds to milliseconds
const convertSecsToMs = (secs) => {
	return secs * 1000;
};

// hours to mins
const convertHoursToMins = (hrs) => {
	// '+' converts string to number via coercion
	return +hrs * 60;
};
// convert days to hours
const convertDaysToHours = (days) => {
	// '+' converts string to number via coercion
	return +days * 24;
};
// convert days to mins
const convertDaysToMins = (days) => {
	// '+' converts string to number via coercion
	return +days * 24 * 60;
};
// convert mins to days
const convertMinsToDays = (mins) => {
	// '+' converts string to number via coercion
	return +mins / 1440;
};

// convert mins to hours
const convertMinsToHours = (mins) => {
	// '+' converts string to number via coercion
	return +mins / 60;
};

// date format converter utils

// converts times in 24hr format to 12hr format (ie 'meridiem' format)
const convertToMeridiem = (time) => {
	const numTime = Number(time);
	if (numTime > 12) {
		return numTime - 12;
	}
	return numTime;
};

// enables custom 'locale' & 'timeZone' & returns time string
const convertToLocaleTime = (date, options = { timeZone: "UTC" }) => {
	return date.toLocaleTimeString("en-US", options);
};
// enables custom 'locale' & 'timeZone' & returns date string
const convertToLocaleDate = (date, options = { timeZone: "UTC" }) => {
	return date.toLocaleDateString("en-US", options);
};

// converts utc date to local date
const utcToLocal = (utcDate) => {
	const localDate = new Date(utcDate).toString();
	return localDate;
};

// conversion utils
export {
	convertMinsToDays,
	convertMinsToHours,
	convertMinsToMs,
	convertDaysToHours,
	convertDaysToMins,
	convertSecsToMs,
	convertHoursToMins,
	// date converters
	convertToMeridiem,
	convertToLocaleDate,
	convertToLocaleTime,
	utcToLocal,
};

// calculation utils
export { calcTimeToExpiryByUnit, isTimerExpired };
