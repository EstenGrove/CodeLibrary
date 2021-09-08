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

module.exports = {
	// snippets' utils
	getAllSnippets,
	// tags' utils
	getAllTags,
	// languages' utils
	getAllLanguages,
	// tags_by_snippets' utils
	getAllTagsBySnippet,
};
