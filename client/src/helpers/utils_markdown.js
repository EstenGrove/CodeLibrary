import { createBlob, saveFile } from "./utils_files";

const createMarkdownBlob = (data) => {
	const mdMimeType = "text/markdown; charset=UTF-8";
	const newBlob = createBlob(data, mdMimeType);
	return newBlob;
};

const saveMarkdownTextAsFile = (markdown, filename) => {
	const mdBlob = createMarkdownBlob(markdown);
	return saveFile(mdBlob, filename);
};

export { createMarkdownBlob, saveMarkdownTextAsFile };
