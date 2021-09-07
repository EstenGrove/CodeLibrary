/**
 * @description - A helper for converting data into a file blob w/ a custom mimetype.
 * @param {Blob|Response Object} data - Any transformable data type that can be converted to a blob. Typically a response object or blob.
 * @param {String} mimeType - A custom mimetype used to set the new Blob instance to.
 * @returns {Blob} - returns a file blob, w/ a custom mimetype.
 */
const createBlob = (data, mimeType = "application/octet-stream") => {
	return new Blob([data], { type: mimeType });
};

/**
 * @description - Utility that accepts a file blob and creates an object URL.
 * @param {Blob} blob - A file blob to be used for an object URL.
 */
const createURL = (blob) => {
	const fileURL = window.URL.createObjectURL(blob);
	return fileURL;
};

/**
 * @description - A utility for creating an object URI to trigger a file download to a user's machine.
 * @param {Blob} blob - A file blob, typically transformed from the HTTP response object
 * @param {String} filename - A custom filename used for saving the file to a user's machine.
 * @returns {Blob} - Returns a fileblob that's immediately downloaded to a user's machine.
 */
const saveFile = (blob, filename) => {
	const fileURL = window.URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = fileURL;
	link.download = filename;
	link.click();
	return window.URL.revokeObjectURL(fileURL);
};

// converts bytes to target unit & formats w/ unit abbreviation
const convertAndFormatBytes = (bytes, to = "KB") => {
	switch (to) {
		case "B": {
			return `${bytes} b`;
		}
		case "KB": {
			const size = (bytes / 1024).toFixed(2);
			return `${size} KB`;
		}
		case "MB": {
			const size = (bytes / 1024 / 1024).toFixed(2);
			return `${size} MB`;
		}
		case "GB": {
			const size = (bytes / 1024 / 1024 / 1024).toFixed(4);
			return `${size} GB`;
		}
		default:
			return `${bytes} b`;
	}
};

const convertAndFormatKiloBytes = (kb, to = "MB") => {
	switch (to) {
		case "KB": {
			return `${kb} KB`;
		}
		case "MB": {
			const size = (kb / 1024).toFixed(2);
			return `${size} MB`;
		}
		case "GB": {
			const size = (kb / 1024 / 1024).toFixed(4);
			return `${size} GB`;
		}
		default:
			return `${kb} b`;
	}
};

// this utils determines how big the file is
// ...then determines what unit to convert it to to make the most sense
// accepts 'bytes' (or 'kb'???) as the default size unit
const formatToPracticalSize = (size) => {
	switch (true) {
		// convert to kb
		case size >= 1000: {
			return;
		}

		default:
			return size;
	}
};

export { createBlob, createURL, saveFile };

export { convertAndFormatBytes, convertAndFormatKiloBytes };
