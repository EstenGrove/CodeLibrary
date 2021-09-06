import { extractRGB, hexToRGB, hexToRGBA, isHexColor } from "./utils_colors";
import { isEmptyArray, isEmptyVal } from "./utils_types";

// ARRAY UTILS //
const range = (start, stop, callback) => {
	return Array.from({ length: stop - start }, (_, i) => callback(i + start));
};

const groupBy = (list = [], iteratee) => {
	return list.reduce((acc, item) => {
		const keyToSortBy = iteratee(item);
		if (!acc[keyToSortBy]) {
			acc[keyToSortBy] = [];
		}
		acc[keyToSortBy].push(item);
		return acc;
	}, {});
};

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;

	return function executedFunction() {
		var context = this;
		var args = arguments;

		var later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};

		var callNow = immediate && !timeout;

		clearTimeout(timeout);

		timeout = setTimeout(later, wait);

		if (callNow) func.apply(context, args);
	};
}

const enforceStrMaxLength = (str, maxLength = 30) => {
	if (str.length < maxLength) return str;
	return str.slice(0, maxLength);
};

const addEllipsis = (str, maxLength = 30) => {
	if (isEmptyVal(str)) return ``;
	if (str.length < maxLength) return str;
	const managedStr = enforceStrMaxLength(str, maxLength);
	return managedStr + "...";
};

// capitalizes 1st letter
const capitalize = (str) => {
	return str.substring(0, 1).toUpperCase() + str.substring(1);
};

//////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// SHADOWS UTILS  //////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// SHADOW PROCESSING & CONVERTERS //
const shadowVendorPrefixes = {
	webkit: "-webkit-box-shadow",
	mozilla: "-moz-box-shadow",
	default: "box-shadow",
};

/**
 * Generates vendor-prefixed box-shadows from base shadow css.
 * @param {String} shadow - A box-shadow setting.
 * @returns {String} - Returns a string w/ vendor-prefixed box-shadows from base box-shadow.
 */
const getAllShadows = (shadow) => {
	const webkit = `${shadowVendorPrefixes.webkit}: ${shadow};`;
	const moz = `${shadowVendorPrefixes.mozilla}: ${shadow};`;
	const base = `box-shadow: ${shadow};`;

	const all = `${webkit}\n${moz}\n${base}`;

	return all;
};

/**
 * Converts shadow settings into an box-shadow w/ alpha channel rgba()
 * @param {Object} vals - An object of values.
 */
const getShadow = (vals) => {
	const {
		horizontalOffset: x,
		verticalOffset: y,
		blurRadius: blur,
		spreadRadius: spread,
		shadowColor,
		shadowOpacity: opacity,
	} = vals;

	// valid hex color, get converted to rgba
	if (isHexColor(shadowColor)) {
		const rgb = hexToRGB(shadowColor);
		const { r, g, b } = extractRGB(rgb);
		return `${x}px ${y}px ${blur}px ${spread}px rgba(${r},${g},${b},${opacity})`;
	}
	// const fallback = "#000000";
	return `${x}px ${y}px ${blur}px ${spread}px ${shadowColor}`;
};

const gradients = {
	Linear: "linear-gradient",
	Radial: "radial-gradient",
	"Repeating Linear": "repeating-linear-gradient",
	"Repeating Radial": "repeating-radial-gradient",
};

/**
 * Extracts user-selected settings & forms background gradient css property.
 * @param {Object} vals - An object of gradient settings.
 */
const getGradient = (vals = {}) => {
	const {
		type,
		firstColor,
		secondColor,
		firstColorOpacity,
		secondColorOpacity,
		angle,
	} = vals;
	const color1 = hexToRGBA(firstColor, firstColorOpacity);
	const color2 = hexToRGBA(secondColor, secondColorOpacity);

	const css = `${gradients[type]}(${angle}deg, ${color1}, ${color2})`;

	return css;
};

//////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// SORTING ARRAYS  //////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

/**
 * Sorts an array alphabetically (non-objects).
 */

// sorts string alphabetically (A-Z)
const sortByAlphaAsc = (list = []) => {
	if (isEmptyArray(list)) return [];
	return [...list].sort((a, b) => {
		return a?.localeCompare(b);
	});
};
// sorts string alphabetically (Z-A)
const sortByAlphaDesc = (list = []) => {
	if (isEmptyArray(list)) return [];
	return [...list].sort((a, b) => {
		return b?.localeCompare(a);
	});
};
// returns 'true' values first (ie. [true, true, false, false, null] )
const sortByBoolAsc = (list = []) => {
	if (isEmptyArray(list)) return [];
	return [...list].sort((a, b) => {
		return a === b ? 0 : a ? -1 : 1;
	});
};
// returns 'false' values first (ie. [null, null, false, false, true] )
const sortByBoolDesc = (list = []) => {
	if (isEmptyArray(list)) return [];
	return [...list].sort((a, b) => {
		return a === b ? 0 : a ? 1 : -1;
	});
};
// sorts number ascending order (1-10)
const sortByNumAsc = (list = []) => {
	if (isEmptyArray(list)) return [];
	return [...list].sort((a, b) => {
		return a - b;
	});
};
// sorts number descending order (10-1)
const sortByNumDesc = (list = []) => {
	if (isEmptyArray(list)) return [];
	return [...list].sort((a, b) => {
		return b - a;
	});
};
// sorts date ascending order (10-1)
const sortByDateAsc = (list = []) => {
	if (isEmptyArray(list)) return [];
	return [...list].sort((a, b) => {
		return new Date(a) - new Date(b);
	});
};
// sorts date descending order (10-1)
const sortByDateDesc = (list = []) => {
	if (isEmptyArray(list)) return [];
	return [...list].sort((a, b) => {
		return new Date(b) - new Date(a);
	});
};

/**
 * Sorts an array alphabetically by object property (key).
 * - Key value MUST be a <String>
 */

// sorts alphabetically (ascending order) by key
const sortAlphaAscByKey = (key, list = []) => {
	return list.sort((a, b) => {
		return a?.[key]?.localeCompare(b?.[key]);
	});
};

// sorts alphabetically (descending order) by key
const sortAlphaDescByKey = (key, list = []) => {
	return list.sort((a, b) => {
		return b?.[key]?.localeCompare(a?.[key]);
	});
};

// returns 'true' values first
const sortBoolAscByKey = (key, list = []) => {
	if (isEmptyArray(list)) return [];
	return [...list].sort((a, b) => {
		return a?.[key] === b?.[key] ? 0 : a?.[key] ? -1 : 1;
	});
};

// returns 'false' values first
const sortBoolDescByKey = (key, list = []) => {
	if (isEmptyArray(list)) return [];
	return [...list].sort((a, b) => {
		return a?.[key] === b?.[key] ? 0 : a?.[key] ? 1 : -1;
	});
};

// sorts number ascending order (1-10)
const sortNumAscByKey = (key, list = []) => {
	if (isEmptyArray(list)) return [];
	return [...list].sort((a, b) => {
		return a?.[key] - b?.[key];
	});
};
// sorts number descending order (10-1)
const sortNumDescByKey = (key, list = []) => {
	if (isEmptyArray(list)) return [];
	return [...list].sort((a, b) => {
		return b?.[key] - a?.[key];
	});
};

// sorts date ascending order (10-1)
const sortDateAscByKey = (key, list = []) => {
	if (isEmptyArray(list)) return [];
	return [...list].sort((a, b) => {
		return new Date(a?.[key]) - new Date(b?.[key]);
	});
};
// sorts date descending order (10-1)
const sortDateDescByKey = (key, list = []) => {
	if (isEmptyArray(list)) return [];
	return [...list].sort((a, b) => {
		return new Date(b?.[key]) - new Date(a?.[key]);
	});
};

export { range, groupBy };

export { debounce };

// string utils
export { enforceStrMaxLength, addEllipsis, capitalize };

// box-shadow utils

export { shadowVendorPrefixes, getAllShadows, getShadow };

// gradient utils
export { getGradient, gradients };

export {
	// sort arrays (non-objects)
	sortByAlphaAsc,
	sortByAlphaDesc,
	sortByBoolAsc,
	sortByBoolDesc,
	sortByDateAsc,
	sortByDateDesc,
	sortByNumAsc,
	sortByNumDesc,
	// sort arrays of objects by key
	sortAlphaAscByKey,
	sortAlphaDescByKey,
	sortBoolAscByKey,
	sortBoolDescByKey,
	sortNumAscByKey,
	sortNumDescByKey,
	sortDateAscByKey,
	sortDateDescByKey,
};
