const express = require("express");
const router = express.Router();

const { getAllTagsBySnippet } = require("../connection/queries");

/**
 * Base Route: '/tagsBySnippet'
 * - This means '/' really represents '/tagsBySnippet'
 */

// fetches all 'tagsBySnippet' records (at least XXXX rows) via '/tagsBySnippet'
router.get("/", (req, res) => getAllTagsBySnippet(req, res));

module.exports = router;
