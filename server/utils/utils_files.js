// handle files & folders

const mainPath = `/snippets`;
const mainDocumentName = `README.md`;

const processFileUpload = (req, res) => {
	if (!req.files || Object.keys(req.files).length === 0) {
		return res.status(400).send(`No files were uploaded.`);
	}

	// might just be 'req.files'
	const file = req.files.fileUpload;
	const fileName = req.files.fileName; // ???

	// '/snippets/<new-snippet>/README.md'
	file.mv(`${mainPath}/${fileName}/${mainDocumentName}`, (err) => {
		if (err) return res.status(500).send(err);

		res.send(`File uploaded successfully!`);
	});
};
