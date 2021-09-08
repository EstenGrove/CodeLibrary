const express = require("express");
const router = express.Router();

const { getAllSnippets } = require("../connection/queries");

/**
 * Base Route: '/snippets'
 * - This means '/' really represents '/snippets'
 */

// fetches all snippets records (at least XXXX rows) via '/snippets'
router.get("/", (req, res) => getAllSnippets(req, res));

module.exports = router;
