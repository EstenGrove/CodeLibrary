const express = require("express");
const router = express.Router();

const {
	getAllSnippets,
	updateSnippet,
	deleteSnippet,
	updateSnippetFile,
	changeSnippetFilename,
} = require("../connection/queries");

/**
 * Base Route: '/snippets'
 * - This means '/' really represents '/snippets'
 */

// fetches all snippets records (at least XXXX rows) via '/snippets'
router.get("/", (req, res) => getAllSnippets(req, res));

// updates a single snippet record
router.post("/update-snippet", (req, res) => updateSnippet(req, res));

// updates a single snippet's markdown file: change markdown text, code etc
router.post("/update-snippet-file", (req, res) => updateSnippetFile(req, res));

// change snippet's markdown fileName
router.put("/change-filename", (req, res) => changeSnippetFilename(req, res));

// change snippet's markdown fileName
router.delete("/delete-snippet", (req, res) => deleteSnippet(req, res));

module.exports = router;
