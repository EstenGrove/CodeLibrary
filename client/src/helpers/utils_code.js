import { patternsMap } from "./utils_markdown";
import { isEmptyVal } from "./utils_types";
import { getMatchGroups } from "./utils_validation";

/**
 * Extracts a code snippet from a markdown file's text.
 * @param {String} readme - Text from a README.md or markdown file.
 * @param {RegExp} pattern - Target regex pattern for extract code snippet
 * @returns {String} - Returns extracted code snippet as parsed text.
 */
const getSnippetFromReadme = (readme) => {
	const result = getMatchGroups(readme, patternsMap.codeblockWithGroups);

	// if no code snippet in 'README.md' then return default msg
	if (isEmptyVal(result.code)) {
		return `Ooops! No code found for this snippet :(`;
	} else {
		return result.code;
	}
};

export { getSnippetFromReadme };
