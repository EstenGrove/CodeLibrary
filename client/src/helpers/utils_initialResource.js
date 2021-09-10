import { getLangsIdMap } from "./utils_languages";
import { getSnippetsIdMap } from "./utils_snippets";
import { getTagsIdMap } from "./utils_tags";

// creates tags/langs map by id, respectively
const getDepMaps = (deps = {}) => {
	const { tags, languages, snippets } = deps;
	const tagsMap = getTagsIdMap(tags);
	const langsMap = getLangsIdMap(languages);
	const snippetsMap = getSnippetsIdMap(snippets);

	return {
		tagsMap,
		langsMap,
		snippetsMap,
	};
};

export { getDepMaps };
