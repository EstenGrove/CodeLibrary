const express = require("express");
const router = express.Router();

const {
	getAllTags,
	updateTag,
	createNewTag,
} = require("../connection/queries");

/**
 * Base Route: '/tags'
 * - This means '/' really represents '/tags'
 */

// fetches all tags records (at least XXXX rows) via '/tags'
router.get("/", (req, res) => getAllTags(req, res));

// updates a single snippet record
router.post("/update-tag", (req, res) => updateTag(req, res));

// updates a single snippet record
router.post("/new-tag", (req, res) => createNewTag(req, res));

// updates a single snippet record
router.delete("/delete-tag", (req, res) => deleteTag(req, res));

module.exports = router;
