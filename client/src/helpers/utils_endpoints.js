const endpoints = {
	snippets: {
		base: "/snippets", // all subsequent APIs use the base as a prefix
		get: {
			all: "/all-snippets",
			byID: "/snippet",
			recents: "/recently-viewed",
		},
		create: {
			new: "/new-snippet",
		},
		update: {
			snippet: "/update-snippet",
			tag: "/update-snippet-tags",
			lock: "/lock-snippet",
			unlock: "/unlock-snippet",
			star: "/star-snippet",
			unstar: "/unstar-snippet",
			disable: "/disable-snippet",
			enable: "/enable-snippet",
		},
		delete: {
			snippet: "/delete-snippet",
			all: "/delete-all-snippets",
		},
	},
	tags: {
		base: "/tags", // all subsequent APIs use the base as a prefix
		get: {
			all: "/all-tags",
			byID: "/tag",
			bySnippet: "/tags-by-snippet",
		},
		create: {
			new: "/new-tag",
		},
		update: {
			snippet: "/update-tag",
			tag: "/update-tag-tags",
			lock: "/lock-tag",
			unlock: "/unlock-tag",
			star: "/star-tag",
			unstar: "/unstar-tag",
			disable: "/disable-tag",
			enable: "/enable-tag",
		},
		delete: {
			tag: "/delete-tag",
			all: "/delete-all-tags",
		},
	},
	languages: {
		base: "/languages", // all subsequent APIs use the base as a prefix
		get: {
			all: "/all-languages",
			byID: "/language",
		},
		create: {
			new: "/new-language",
		},
		update: {
			snippet: "/update-language",
			language: "/update-language-languages",
			lock: "/lock-language",
			unlock: "/unlock-language",
			star: "/star-language",
			unstar: "/unstar-language",
			disable: "/disable-language",
			enable: "/enable-language",
		},
		delete: {
			language: "/delete-language",
			all: "/delete-all-languages",
		},
	},
	tools: {},
};

const { snippets, tags, languages } = endpoints;

// complete endpoints map
export { endpoints };

// separate endpoints
export { snippets, tags, languages };
