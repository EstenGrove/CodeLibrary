import { createBlob, saveFile } from "./utils_files";
import { isEmptyVal } from "./utils_types";

/**
 * Markdown File utils:
 * - Create a file blob
 * - Create an object url
 * - Save markdown to user's machine
 */

const createMarkdownBlob = (data) => {
	const mdMimeType = "text/markdown; charset=UTF-8";
	const newBlob = createBlob(data, mdMimeType);
	return newBlob;
};

const saveMarkdownTextAsFile = (markdown, filename) => {
	const mdBlob = createMarkdownBlob(markdown);
	return saveFile(mdBlob, filename);
};

// MARKDOWN PARSER & PATTERN-MATCHING UTILS //

/**
 * Markdown Parser utils:
 * - Markdown regex patterns
 * - Pattern matching utils
 * - Markdown parsers/converters
 */

const htmlMap = {
	h1: {
		open: `<h1>`,
		close: `</h1>`,
	},
	h2: {
		open: `<h2>`,
		close: `</h2>`,
	},
	h3: {
		open: `<h3>`,
		close: `</h3>`,
	},
	h4: {
		open: `<h4>`,
		close: `</h4>`,
	},
	p: {
		open: `<p>`,
		close: `</p>`,
	},
	linebreak: {
		open: ``,
		close: `</br>`,
	},
	blockquote: {
		open: `<blockquote>`,
		close: `</blockquote>`,
	},
	bold: {
		open: `<b>`,
		close: `</b>`,
	},
	italic: {
		open: `<i>`,
		close: `</i>`,
	},
	// lists
	lists: {
		ul: {
			open: `<ul>`,
			clse: `</ul>`,
		},
		ol: {
			open: `<ol>`,
			close: `</ol>`,
		},
		li: {
			open: `<li>`,
			close: `</li>`,
		},
	},
};

const patternsMap = {
	// headings
	h1: /^# (.*$)/gm,
	h2: /^## (.*$)/gm,
	h3: /^### (.*$)/gm,
	h4: /^#### (.*$)/gm,
	h5: /^##### (.*$)/gm,
	h6: /^###### (.*$)/gm,
	// font styles
	blockquote: /^(>.*)/gim,
	blockquoteWithGroups: /^(?<block>>\s)(?<quote>.*)/gim,
	bold: /\*\*(.*)\*\*/gim,
	// italic: /(\*(?!\*)(?<text>.*))/gim,
	italic: /(\*{1}(?<text>.*)\*{1})/gim,
	image: /^(!\[.*]\(.*)\)/gim, // (w/o groups)
	imageWithGroups: /^(!\[(?<text>.*)\])(\((?<image>.*)\))/gim,
	link: /^(\[.*]\(.*)\)/gim, // (w/o groups)
	linkWithGroups: /^(\[(?<text>.*)]\((?<url>.*))\)/gim, // (w/ groups)
	// spacing styles
	linebreak: /\n$/gim,
	lists: /^([0-9]{1,}(?=\.))/gim,
	// requires nested use 4 spaces (ie or 2 tabs)
	listsNested: /^((?!\n)(\s{4}-\s){1}.*)/gim, // matches nested items
	listsDashed: /((-\s){1}.*)/gim,
	listsWithGroups: /^((?<item>-\s{1}.*)|(?<nested>\s{2,4}-\s{1}.*))/gim,
	codeblockInline: /((?<start>`)(?<code>.*)(?<end>`))/gim,
	// checks for ` not followed by or preceded by another `
	codeblockInline2: /(?<start>(?<!`)`(?!`))(?<code>.*)(?<end>`)/gim,
	// codeblocks: supports ```sql syntax
	codeblockWithGroups:
		/(?<start>`{3}\w*\n)(?<code>(.*|\s*|\w*|\n*)*)(?<end>`{3})/gim,
};

// ## TODOS:
// - Fix/debug:
// 		- 'lists', 'listsDashed', 'listsWithGroups', 'listsNested'
// 		- 'codeblockInline', 'codeblockInlineWithGroups'

const parseMarkdownToHtml = (markdownText) => {
	const {
		h1,
		h2,
		bold,
		listsDashed,
		italic,
		image,
		linkWithGroups,
		listsWithGroups,
		blockquote,
		blockquoteWithGroups,
		codeblockWithGroups,
		codeblockInline,
		codeblockInline2,
		linebreak,
	} = patternsMap;

	const isList = `<li>$<item></li></br>`;

	const htmlText = markdownText
		.replace(h1, `<h1>$1</h1>`) // h1
		.replace(h2, `<h2>$1</h2>`) // h2
		.replace(bold, `<b>$1</b>`) // bold
		.replace(italic, `<i>$<text></i>`) // italic
		// .replace(image, `<img src="$<image>" alt="$<text>" />`)
		.replace(linkWithGroups, `<a href="$<url>">$<text></a>`) // link
		.replace(blockquoteWithGroups, `<blockquote>$<quote></blockquote>`)
		.replace(listsWithGroups, isList)
		.replace(codeblockWithGroups, `<code><pre>$<code></pre></code>`)
		.replace(linebreak, "</br>");
	// this kills the browser tab, but placing it before the regular codeblock
	// ...causes the code to not be determined correctly
	// .replace(codeblockInline2, `<pre>$<code></pre>`);
	console.log("htmlText", htmlText);
	return htmlText;
};

// patterns & utils
export { htmlMap, patternsMap };
// 'naive' markdown parser
export { parseMarkdownToHtml };

export { createMarkdownBlob, saveMarkdownTextAsFile };
