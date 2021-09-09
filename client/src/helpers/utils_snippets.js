// SNIPPET REQUEST UTILS //

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

const matchLanguageFromID = (id, langs = []) => {
	const lang = langs.filter((lang) => lang.id === id);

	return lang?.[0];
};
const getLanguageNameFromID = (id, langs = []) => {
	const lang = langs.filter((lang) => lang.id === id);

	return lang?.[0]?.name;
};

export { matchSnippetTypeByID, getSnippetTypeFromID };
export { matchLanguageFromID, getLanguageNameFromID };
