const format = require("date-fns/format");

const dbName = "code_library";

const tableNames = {
	snippets: "snippets",
	languages: "languages",
	tags: "tags",
	tagsBySnippet: "tags_by_snippet",
	recentlyViewed: "recently_viewed",
};

// SERVER-SIDE MODELS //

class SnippetModel {
	constructor(vals = {}) {
		this._model = {
			id: this._id,
			name: this._name,
			description: this._desc,
		};
	}
}

module.exports = {
	dbName,
	tableNames,
};
