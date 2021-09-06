// generates robots-follow-links tag, if requested
const getRobotsTag = (vals = {}) => {
	const { enableRobotsIndex } = vals;
	if (!enableRobotsIndex) return ``;

	return `<meta name="robots" content="index, follow">`;
};

// whether search engines should revisit site
// ... and after how many days days
const getSearchVisitIncrement = (vals = {}) => {
	const { enableRobotsRevisit, siteRevisitPeriod = 30 } = vals;

	if (!enableRobotsRevisit) return ``;

	return `<meta name="revisit-after" content="${siteRevisitPeriod} days">`;
};

/**
 * Generates custom meta tags from user selections.
 * @param {Object} vals - User selections/values for the meta tags.
 * @property {String} vals.siteTitle - Site's title (ie webapp name etc.)
 * @property {String} vals.siteAuthor - Site author.
 * @property {String} vals.siteDesc - Site description.
 * @property {String} vals.siteKeywords - Site keywords for the tags.
 * @property {Boolean} vals.enableRobotsIndex - Robots indexing option.
 * @property {Boolean} vals.enableFollowAll - Robots follow all links option.
 * @property {String} vals.contentType - Site's content type (ie UTF-8).
 * @property {String} vals.siteLanguage - Site's primary language.
 * @property {Boolean} vals.enableRobotsRevisit - Engines can revisit site.
 * @property {String} vals.siteRevisitPeriod - XX days to revisit site.
 * @returns {HTML|String} - Returns the populated HTML meta tags as a string.
 */

// generates & populates meta tags based off user values
const generateMetaTags = (vals = {}) => {
	let metaTags = `
  <meta name="title" content="${vals.siteTitle}">
  <meta name="description" content="${vals.siteDesc}">
  <meta name="keywords" content="${vals.siteKeywords}">
  `;
	// add 'robots' index tag(s)
	metaTags += `${getRobotsTag(vals)}`;
	// add contentType & lang tags
	metaTags += `
  <meta http-equiv="Content-Type" content="text/html; charset=${vals?.contentType.toLowerCase()}">
  <meta name="language" content="${vals.siteLanguage}">
  `;
	// add search engine re-index period
	metaTags += `${getSearchVisitIncrement(vals)}`;
	// author tag
	metaTags += `
  <meta name="author" content="${vals.siteAuthor}">
  `;

	return metaTags;
};

export { getRobotsTag, getSearchVisitIncrement };
export { generateMetaTags };
