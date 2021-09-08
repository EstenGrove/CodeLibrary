// utility for matching
const matchesPattern = (val, pattern) => {
	const newPattern = new RegExp(pattern);
	const isMatch = newPattern.test(val);
	return isMatch;
};

// returns first match from pattern
const getFirstPatternMatch = (val, pattern) => {
	if (matchesPattern(val, pattern)) {
		const match = pattern.exec(val);
		console.log(`Match:`, match);
		return match?.[0];
	} else {
		return "";
	}
};
// returns all matches
const getAllPatternMatches = (val, pattern) => {
	if (matchesPattern(val, pattern)) {
		const matches = val.match(pattern);
		console.log(`matches:`, matches);
		return matches;
	} else {
		return [`NO MATCHES FOUND.`];
	}
};

// runs via 'String.exec()' & extracts match groups, if available
const getMatchGroups = (val, pattern) => {
	if (matchesPattern(val, pattern)) {
		const matches = pattern.exec(val);
		const groups = matches?.groups ?? {};
		return groups;
	} else {
		return {};
	}
};

/**
 * Removes one or more chars from a string via regex and String.replace(char, replacement)
 * @param {String} char - A string or char(s) to be removed.
 * @param {String} val - Target string to amend.
 * @returns {String} - Returns updated string without the 'char'
 */
const removeCharFromStr = (char, val) => {
	const clean = val.replace(char, "");
	return clean;
};

// pattern match utils

export {
	matchesPattern,
	getFirstPatternMatch,
	getAllPatternMatches,
	getMatchGroups,
};

// string/processing utils
export { removeCharFromStr };
