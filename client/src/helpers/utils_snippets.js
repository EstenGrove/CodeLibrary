// SNIPPET REQUEST UTILS //

import { getLangsIdMap } from "./utils_languages";

// creates snippets' map by snippetID
const getSnippetsIdMap = (snippets = []) => {
	return snippets.reduce((snippetsMap, lang) => {
		if (!snippetsMap[lang.id]) {
			snippetsMap[lang.id] = lang;
			return snippetsMap;
		}
		return snippetsMap;
	}, {});
};

// match snippet type utils

const matchSnippetTypeByID = (id, types = []) => {
	const type = types.filter((record) => record.id === id);

	return type?.[0];
};
const getSnippetTypeFromID = (id, types = []) => {
	const type = types.filter((record) => record.id === id);

	return type?.[0]?.name;
};

// match language utils

const getLangNameFromIdMap = (id, map) => {
	const match = map[id];
	const name = match?.name;
	return name;
};
const getLangRecordFromMap = (id, langs = []) => {
	const mapByID = getLangsIdMap(langs);
	const langRecord = mapByID?.[id];
	return langRecord;
};

const matchLanguageFromID = (id, langs = []) => {
	const lang = langs.filter((lang) => lang.id === id);

	return lang?.[0];
};
const getLanguageNameFromID = (id, langs = []) => {
	const lang = langs.filter((lang) => lang.id === id);

	return lang?.[0]?.name;
};

export { getSnippetsIdMap };
export { matchSnippetTypeByID, getSnippetTypeFromID, getLangNameFromIdMap };
export { matchLanguageFromID, getLanguageNameFromID, getLangRecordFromMap };
