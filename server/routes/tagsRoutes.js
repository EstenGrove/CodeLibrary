const express = require("express");
const router = express.Router();

const { getAllTags } = require("../connection/queries");

/**
 * Base Route: '/tags'
 * - This means '/' really represents '/tags'
 */

// fetches all tags records (at least XXXX rows) via '/tags'
router.get("/", (req, res) => getAllTags(req, res));

module.exports = router;
