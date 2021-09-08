const express = require("express");
const router = express.Router();

const {
	getAllLanguages,
	updateLanguage,
	deleteLanguage,
	createNewLanguage,
} = require("../connection/queries");

/**
 * Base Route: '/languages'
 * - This means '/' really represents '/languages'
 */

// fetches all languages records (at least XXXX rows) via '/languages'
router.get("/", (req, res) => getAllLanguages(req, res));

// updates a single language record
router.post("/new-language", (req, res) => createNewLanguage(req, res));

// updates a single language record
router.post("/update-language", (req, res) => updateLanguage(req, res));

// deletes a language record
router.delete("/delete-language", (req, res) => deleteLanguage(req, res));

module.exports = router;
