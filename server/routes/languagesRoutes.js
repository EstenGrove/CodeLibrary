const express = require("express");
const router = express.Router();

const { getAllLanguages } = require("../connection/queries");

/**
 * Base Route: '/languages'
 * - This means '/' really represents '/languages'
 */

// fetches all languages records (at least XXXX rows) via '/languages'
router.get("/", (req, res) => getAllLanguages(req, res));

module.exports = router;
