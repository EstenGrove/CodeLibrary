import {
	capitalizeAll,
	capitalizeByCharList,
	capitalizeFirst,
	lowerCaseByChar,
} from "./utils_processing";

/**
 * List of supported languages for "react-syntax-highlighter"
 */
const languageWhiteList = [
	`javascript`,
	`bash`,
	`html`,
	`css`,
	`scss`,
	`markdown`,
	`sql`,
	`jsx`,
	`nginx`,
	`apache`,
	`curl`,
	`python`,
	`graphql`,
	`php`,
	`c++`,
	`c#`,
];

// supported language types as plain text
const languageMap = {
	javascript: `javascript`,
	nodejs: "nodejs",
	deno: "deno",
	js: `javascript`,
	jsx: `jsx`,
	bash: `bash`,
	html: `html`,
	css: `css`,
	scss: `scss`,
	sql: `sql`,
	markdown: `markdown`,
	nginx: `nginx`,
	apache: `apache`,
	curl: `curl`,
	python: `python`,
	php: `php`,
	graphql: `graphql`,
	"c++": "c++",
	"c#": "c#",
};

const languages = [
	{
		id: 1,
		name: "javascript",
		desc: "Javascript",
	},
	{
		id: 2,
		name: "bash",
		desc: "Bash",
	},
	{
		id: 3,
		name: "html",
		desc: "HTML",
	},
	{
		id: 4,
		name: "scss",
		desc: "SCSS",
	},
	{
		id: 5,
		name: "css",
		desc: "CSS",
	},
	{
		id: 6,
		name: "sql",
		desc: "SQL",
	},
	{
		id: 7,
		name: "nginx",
		desc: "NGINX",
	},
	{
		id: 8,
		name: "apache",
		desc: "Apache",
	},
	{
		id: 9,
		name: "curl",
		desc: "cURL",
	},
	{
		id: 10,
		name: "python",
		desc: "Python",
	},
	{
		id: 11,
		name: "php",
		desc: "PHP",
	},
	{
		id: 12,
		name: "graphql",
		desc: "GraphQL",
	},

	{
		id: 13,
		name: "c++",
		desc: "C++",
	},
	{
		id: 14,
		name: "c#",
		desc: "C#",
	},
	{
		id: 15,
		name: "nodejs",
		desc: "NodeJS",
	},
	{
		id: 16,
		name: "deno",
		desc: "Deno",
	},
	{
		id: 17,
		name: "markdown",
		desc: "Markdown",
	},
	{
		id: 18,
		name: "jsx",
		desc: "JSX",
	},
];

const langIcons = {
	bash: "pastebin", // change this later!!!
	javascript: "javascript",
	jsx: "react",
	apache: "apache",
	nginx: "nginx",
	scss: "sass",
	css: "css31",
	html: "html51",
	"c++": "cplusplus",
	"c#": "csharp",
	curl: "curl",
	deno: "deno",
	nodejs: "node-dot-js",
	php: "php",
	python: "python",
	graphql: "graphql",
	markdown: "markdown",
	sql: "postgresql",
	// fallback, for no match
	undefined: "code1",
	null: "code1",
	"": "code1",
};

// LANG UTILS

/**
 * Formats string-form language accordingly via lowercase/uppercase or combo.
 * @param {String} lang - String 'language.name' field.
 * @returns {String} - Returns formatted language as a string, w/ capitalizations etc.
 */
const formatLang = (lang) => {
	const capAllList = [
		`html`,
		`css`,
		`scss`,
		`sql`,
		`nginx`,
		`php`,
		`jsx`,
		`c#`,
		`c++`,
	];

	switch (true) {
		case lang === "":
		case lang === null:
		case lang === undefined: {
			return "Unknown Language";
		}
		// Result: 'XXXX' (all caps)
		case capAllList.includes(lang): {
			return capitalizeAll(lang);
		}
		// Result: 'cURL'
		case lang === "curl": {
			const final = lowerCaseByChar("c", capitalizeByCharList(["url"], lang));
			return final;
		}
		// Result: 'NodeJS'
		case lang === "nodejs": {
			const final = capitalizeByCharList(["n", "js"], lang);
			return final;
		}
		// Result: 'GraphQL'
		case lang === "graphql": {
			const final = capitalizeByCharList(["g", "ql"], lang);
			return final;
		}
		// Result: 'Xxxx' (cap first letter only)
		case !capAllList.includes(lang): {
			const final = capitalizeFirst(lang);
			return final;
		}

		default:
			return lang;
	}
};

const getLangsIdMap = (langs = []) => {
	return langs.reduce((langMap, lang) => {
		if (!langMap[lang.id]) {
			langMap[lang.id] = lang;
			return langMap;
		}
		return langMap;
	}, {});
};

export { languageWhiteList, languageMap };

export { languages, langIcons };

export { getLangsIdMap };

export { formatLang };
