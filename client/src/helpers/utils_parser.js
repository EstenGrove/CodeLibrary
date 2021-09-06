// CSS & JS PARSING //

// convert fontSize => font-size
const convertJsPropToCss = (js) => {
	// +lookbehind: match a capital, preceded by lower-case
	const reg = /(?<=[a-z])([A-Z])/gm;
	return js.replace(reg, (cap) => {
		return cap.replace(cap, `-${cap.toLowerCase()}`);
	});
};

// convert "1.5rem 2rem," => 1.5rem 2rem;
const convertJsValueToCss = (js) => {
	const reg = /"/gm;
	const noQuotes = js.replace(reg, (quote) => {
		return quote.replace(reg, "");
	});
	// regex: css value in quotes followed by a comma
	const withSemiColon = noQuotes.replace(
		/"([a-zA-Z0-9(,)%\s.-]{1,})"(?=,)/g,
		(comma) => {
			return comma.replace(/,/g, ";");
		}
	);
	return withSemiColon;
};

// converts JS objects to css
const convertJsToCSS = (js) => {
	const props = convertJsPropToCss(js);
	const vals = convertJsValueToCss(props);
	return vals;
};

// converts CSS properties to js (font-size => fontSize)
const convertCssPropToJs = (prop) => {
	return prop.startsWith("-")
		? `"${prop}"`
		: prop.replace(/-([a-z])(?![a-z]{1,};)/g, (g) => g[1].toUpperCase());
};

// converts a single CSS values to JS format (flex-start => "flex-start", 2rem auto => "2rem auto")
const convertCssValueToJs = (value) => {
	// includes parens, comma & # for color-codes
	// includes caps for custom properties & css vars
	const reg = /:([\s])([a-zA-Z0-9#(,)%\s.-]{1,})/gm;
	const withQuotes = value.replace(reg, (val) => {
		const newVal = val.split(": ")[1];
		return `: "${newVal}"`;
	});
	const removeSemiColons = withQuotes.replace(/;/g, (semi) => {
		const newVal = semi.replace(";", ",");
		return newVal;
	});
	return removeSemiColons;
};
// converts css block into js object
const convertCssToJs = (css) => {
	const jsProps = convertCssPropToJs(css);
	const jsVals = convertCssValueToJs(jsProps);
	const noSelector = removeSelectors(jsVals);
	return noSelector;
};

const convertInlineCssToBlocks = (inline) => {
	const reg = /"([a-zA-Z';:0-9#%\s-\.,]+)"/gm;
	const inlineStr = inline.match(reg);
	const formatted = formatInline(inlineStr[0]);
	return formatted;
};

// converts an entire stylesheet into an object of inline snippets
const convertCssStylesToInline = (css) => {
	const allBlocks = getCssSelectorBlocks(css);
	const inlined = allBlocks.reduce((allSelectors, match) => {
		const name = getSelectorName(match);
		const newInline = convertCssToInlineCss(match);
		if (!allSelectors[name]) {
			allSelectors[name] = newInline;
			return allSelectors;
		}
		return allSelectors;
	}, {});
	return inlined;
};

// converts css block to inline css
const convertCssToInlineCss = (css) => {
	const cssStr = getCssDeclarations(css);
	const addStyle = addStyleProp(cssStr);
	return addStyle;
};

// removes "." and "#" for css class & ids, respectively
const removeSelectors = (css) => {
	const selectReg = /^(\.|#)/gm;
	return css.replace(selectReg, (match) => {
		return match.replace(selectReg, "");
	});
};

// returns 'css' selector
const getCssSelector = (css) => {
	const reg = /^((\.|\#)[a-zA-Z0-9-]{1,}\s\{|})/gm;
	const matches = css.match(reg);
	return matches;
};
// gets all css declares (eg font-size: 2rem; etc)
const getCssDeclarations = (css) => {
	const cssReg = /([a-z-]{1,})(:\s([a-zA-Z#0-9-\.%\s,'"()]{1,};))/gm;
	const matches = css.match(cssReg);
	const merged = matches.join("");
	return merged;
};
// prefixes css w/ "style="
const addStyleProp = (css) => {
	return `style="${css}"`;
};

const getSelectorName = (css) => {
	const reg = /^(\S[a-zA-Z0-9_]{1,})/gm;
	const match = css.match(reg);
	console.log("match", match);
	return match?.[0].replace(/^(\.|\#)/gm, "");
};

// gets every css selector block in a style sheet
// allows for processing multiple blocks
const getCssSelectorBlocks = (css) => {
	const reg = /(?:\s*\S+\s*{[^}]*})/gm;
	const matches = css.match(reg);
	console.log("matches", matches);
	return matches;
};

const removeChars = (str, charToRemove) => {
	const reg = new RegExp(charToRemove, "gm");
	return str.replace(reg, (match) => match.replace(reg, ""));
};

const formatInline = (inline) => {
	const noQuotes = removeChars(inline, '"'); // removes enclosing quotes "..."
	const addLines = noQuotes.replace(/;/g, `;\n\n`); // add 'carriage returns' spacing
	const addBlocks = addCssBlock(addLines); // adds random id & '{...}'
	return addBlocks;
};

const addCssBlock = (css) => {
	const pre = `#styles {\n\n${css}}`;
	return pre;
};
// adds a comment for multiple class declarations
// "// className1:""
// "// className2:""
const addCommentBlocks = (parsedCssObj = {}) => {
	const keys = Object.keys(parsedCssObj);
	const withComments = keys.map((key, idx) => {
		const comment = `// ${key}:\n\n`;
		const code = parsedCssObj[key];
		return `${comment}${code}\n\n`;
	});
	return withComments;
};

/**
 * Parses and converts styles from one format to another (ie. css=>js, js=>css etc.)
 * @param {Object} vals - Object of values
 * @returns {Object|String} - Returns converts styles
 */
const codeParser = (vals = {}) => {
	const { startingFormat, input } = vals;

	switch (startingFormat) {
		case "CSS to JS Object": {
			return convertCssToJs(input);
		}
		case "CSS to Inline CSS": {
			return convertCssToInlineCss(input);
		}
		// multiple classes/ids etc
		case "CSS to Inline CSS (multiple)": {
			const obj = convertCssStylesToInline(input);
			return addCommentBlocks(obj);
		}
		case "JS Object to CSS": {
			return convertJsToCSS(input);
		}
		case "JS Object to Inline CSS": {
			const css = convertJsToCSS(input);
			const inline = convertCssToInlineCss(css);
			return inline;
		}
		case "Inline CSS to CSS": {
			return convertInlineCssToBlocks(input);
		}
		case "Inline CSS to JS Object": {
			return `NOT-WRITTEN-YET!!`;
		}
		default:
			break;
	}
};

// parser utils
export {
	removeSelectors,
	addCssBlock,
	addCommentBlocks,
	formatInline,
	removeChars,
	getSelectorName,
	getCssDeclarations,
	getCssSelector,
	addStyleProp,
};

export {
	convertJsPropToCss,
	convertJsValueToCss,
	convertJsToCSS,
	convertCssPropToJs,
	convertCssValueToJs,
	convertCssToJs,
	convertCssToInlineCss,
	convertInlineCssToBlocks,
	convertCssStylesToInline,
};

export { codeParser };
