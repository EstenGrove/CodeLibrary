// table & db info
const dbModels = require("../models/models");
const { dbName, tableNames } = dbModels;

// db connection pool
const connection = require("./connection");
const { Pool, pool } = connection;

/**
 * 'Snippets' queries:
 * - Fetching, updating, deleting 'snippets' entry(s).
 */

const getAllSnippets = (req, res) => {
	const { index, rows } = req.query;

	pool.query(
		`SELECT * FROM snippets ORDER BY id ASC LIMIT ${rows}`,
		(err, results) => {
			if (err) throw err;

			return res.json(results.rows);
		}
	);
};
const updateSnippet = (req, res) => {
	// updates a single snippet entry record
	// updates a single snippet entry record
};
const changeSnippetFilename = (req, res) => {
	// update the 'code_source' field to reflect the new filename and update the actual file
	// update the 'code_source' field to reflect the new filename and update the actual file
};
const deleteSnippet = (req, res) => {
	// creates a new tag entry record
	// creates a new tag entry record
};
const updateSnippetFile = (req, res) => {
	// updates a snippet's markdown file either partially or entirely
	// updates a snippet's markdown file either partially or entirely
};

/**
 * 'Tags' queries:
 * - Fetching, updating, deleting 'tags' entry(s).
 */

const getAllTags = (req, res) => {
	const { index, rows } = req.query;

	pool.query(
		`SELECT * FROM tags ORDER BY id ASC LIMIT ${rows}`,
		(err, results) => {
			if (err) throw err;

			return res.json(results.rows);
		}
	);
};
const updateTag = (req, res) => {
	// updates a single tag entry record
	// updates a single tag entry record
};
const createNewTag = (req, res) => {
	// creates a new tag entry record
	// creates a new tag entry record
};
const deleteTag = (req, res) => {
	// creates a new tag entry record
	// creates a new tag entry record
};

/**
 * 'Languages' queries:
 * - Fetching, updating, deleting 'languages' entry(s).
 */

const getAllLanguages = (req, res) => {
	const { index, rows } = req.query;

	pool.query(
		`SELECT * FROM languages ORDER BY id ASC LIMIT ${rows}`,
		(err, results) => {
			if (err) throw err;

			return res.json(results.rows);
		}
	);
};

const updateLanguage = (req, res) => {
	// updates a single tag entry record
	// updates a single tag entry record
};
const createNewLanguage = (req, res) => {
	// creates a new tag entry record
	// creates a new tag entry record
};
const deleteLanguage = (req, res) => {
	// creates a new tag entry record
	// creates a new tag entry record
};

/**
 * 'TagsBySnippet' queries:
 * - Fetching, updating, deleting 'tags_by_snippet' entry(s).
 */

const getAllTagsBySnippet = (req, res) => {
	const { index, rows } = req.query;

	pool.query(
		`SELECT * FROM tags_by_snippet ORDER BY id ASC LIMIT ${rows}`,
		(err, results) => {
			if (err) throw err;

			return res.json(results.rows);
		}
	);
};

const createNewTagBySnippet = (req, res) => {
	// creates a new tag by snippet entry record
	// creates a new tag by snippet entry record
};
const removeTagFromSnippet = (req, res) => {
	const { tagID: tagIdToRemove, snippetID } = req.query;
	// creates a new tag by snippet entry record
	// creates a new tag by snippet entry record
};

module.exports = {
	// snippets' utils
	getAllSnippets,
	updateSnippet,
	deleteSnippet,
	updateSnippetFile,
	changeSnippetFilename,
	// tags' utils
	getAllTags,
	updateTag,
	createNewTag,
	deleteTag,
	// languages' utils
	getAllLanguages,
	updateLanguage,
	deleteLanguage,
	createNewLanguage,
	// tags_by_snippets' utils
	getAllTagsBySnippet,
	createNewTagBySnippet,
	removeTagFromSnippet,
};
