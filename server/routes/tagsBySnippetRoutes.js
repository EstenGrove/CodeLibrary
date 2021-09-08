const express = require("express");
const router = express.Router();

const {
	getAllTagsBySnippet,
	createNewTagBySnippet,
	removeTagFromSnippet,
} = require("../connection/queries");

/**
 * Base Route: '/tagsBySnippet'
 * - This means '/' really represents '/tagsBySnippet'
 */

// fetches all 'tagsBySnippet' records (at least XXXX rows) via '/tagsBySnippet'
router.get("/", (req, res) => getAllTagsBySnippet(req, res));

// assigns a tag to a snippet (ie creates a new tag_by_snippet record)
router.post("/new-tag-by-snippet", (req, res) =>
	createNewTagBySnippet(req, res)
);

// removes a 'tag' from a snippet (ie deletes the 'tag_by_snippet' record)
router.delete("/remove-tag-from-snippet", (req, res) =>
	removeTagFromSnippet(req, res)
);

module.exports = router;
