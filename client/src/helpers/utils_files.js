/**
 * @description - A helper for converting data into a file blob w/ a custom mimetype.
 * @param {Blob|Response Object} data - Any transformable data type that can be converted to a blob. Typically a response object or blob.
 * @param {String} mimeType - A custom mimetype used to set the new Blob instance to.
 * @returns {Blob} - returns a file blob, w/ a custom mimetype.
 */
const createBlob = (data, mimeType = "text/markdown; charset=UTF-8") => {
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

// FILE READER API METHODS

const createReaderText = (blob) => {
	const reader = new FileReader();
	reader.readAsText(blob);

	reader.onload = () => {
		console.log("reader.result", reader.result);
		return reader.result;
	};
};

const readAsTextCallback = (blob, callback) => {
	const reader = new FileReader();
	reader.readAsText(blob);

	reader.onerror = () => {
		reader.abort();
		return new Error(`❌ Ooops! Could not resolve file blob:`, blob);
	};
	reader.onload = () => {
		console.log("reader.result", reader.result);
		return callback(reader.result);
	};
};

// promisfied readAsText handler
const readAsTextHandler = (blob) => {
	const reader = new FileReader();
	return new Promise((resolve, reject) => {
		reader.onerror = () => {
			reader.abort();
			return reject(new Error(`❌ Ooops! Could not resolve file blob:`, blob));
		};
		reader.onload = () => {
			return resolve(reader.result);
		};
		return reader.readAsText(blob);
	});
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
			const size = (bytes / 1024 / 1024 / 1024).toFixed(2);
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
const formatToPracticalSizeUnit = (sizeInBytes) => {
	// NOTE: all sizeInBytess are in 'BYTES
	switch (true) {
		// less/equal to: 100 bytes then keep as Bytes
		case sizeInBytes <= 100: {
			return convertAndFormatBytes(sizeInBytes, "B");
		}
		// less/equal to: 10,000 bytes then convert to KB
		case sizeInBytes <= 10000: {
			return convertAndFormatBytes(sizeInBytes, "KB");
		}
		// less/equal to: 100,000 bytes then convert to MB
		case sizeInBytes <= 100000: {
			return convertAndFormatBytes(sizeInBytes, "MB");
		}
		// less/equal to: 100,000,000 bytes then convert to GB
		case sizeInBytes <= 100000000: {
			return convertAndFormatBytes(sizeInBytes, "GB");
		}
		// less/equal to: 100,000,000 bytes then convert to GB
		case sizeInBytes >= 100000000: {
			return convertAndFormatBytes(sizeInBytes, "GB");
		}

		default:
			return convertAndFormatBytes(sizeInBytes, "B");
	}
};

export { createBlob, createURL, saveFile };

export { createReaderText, readAsTextCallback, readAsTextHandler };

export {
	convertAndFormatBytes,
	convertAndFormatKiloBytes,
	formatToPracticalSizeUnit,
};
