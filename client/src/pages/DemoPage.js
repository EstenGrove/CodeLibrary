import React, { useState, useEffect } from "react";
import styles from "../css/pages/DemoPage.module.scss";
import { PropTypes } from "prop-types";
import img1 from "../assets/images/MusicPlayer-Snippet.png";
import {
	purple,
	blue,
	red,
	pink,
	green,
	yellow,
	orange,
	grey,
	blueGrey,
	teal,
	COLORS_LIST as colorOptions,
} from "../helpers/utils_styles";
// mock img
import SnippetCard from "../components/snippets/SnippetCard";
import CreateSnippet from "../components/snippets/CreateSnippet";
import SearchInput from "../components/shared/SearchInput";
import FileDropZone from "../components/shared/FileDropZone";
import CustomDropdown from "../components/shared/CustomDropdown";
import TagCreator from "../components/tags/TagCreator";
import EditTag from "../components/tags/EditTag";
import TagSelector from "../components/tags/TagSelector";
import ColorPicker from "../components/colors/ColorPicker";
import ShadowPreview from "../components/shadows/ShadowPreview";
import MarkdownEditor from "../components/markdown/MarkdownEditor";
import MarkdownWrapper from "../components/markdown/MarkdownWrapper";
import { isEmptyObj, isEmptyVal } from "../helpers/utils_types";
import {
	createBlob,
	createReaderText,
	createURL,
	readAsTextCallback,
} from "../helpers/utils_files";

const mockTypes = [
	{
		id: 1,
		name: "component",
		desc: "React component",
	},
	{
		id: 2,
		name: "command",
		desc: "Command snippet",
	},
	{
		id: 3,
		name: "util",
		desc: "Utility snippet",
	},
	{
		id: 4,
		name: "element",
		desc: "HTML Element",
	},
	{
		id: 5,
		name: "styles",
		desc: "CSS styles",
	},
	{
		id: 6,
		name: "asset",
		desc: "Media asset",
	},
];
const mockTags = [
	{
		tagID: 1,
		name: "component",
		desc: "Reusable React component",
		color: blue[500],
	},

	{
		tagID: 2,
		name: "bash",
		desc: "Bash script",
		color: yellow[500],
	},
	{
		tagID: 3,
		name: "command",
		desc: "Command such as Linux or server-related",
		color: blueGrey[700],
	},
	{
		tagID: 4,
		name: "config",
		desc: "Server config script (NGINX/Apache)",
		color: orange[600],
	},
	{
		tagID: 5,
		name: "util",
		desc: "Utility snippet such as Javascript, NodeJS, Python etc",
		color: green[500],
	},
	{
		tagID: 6,
		name: "hook",
		desc: "Reusable custom React hook",
		color: purple[600],
	},
];
const mockLanguages = [
	{
		id: 1,
		name: "javascript",
		desc: "Javascript language",
	},
	{
		id: 2,
		name: "bash",
		desc: "Bash Scripting language",
	},
	{
		id: 3,
		name: "nodejs",
		desc: "NodeJS language",
	},
	{
		id: 4,
		name: "python",
		desc: "Python language",
	},
	{
		id: 5,
		name: "sql",
		desc: "SQL scripting language",
	},
	{
		id: 6,
		name: "git",
		desc: "Git commands language",
	},
];

// mock snippet 'entry'
const mockSnippet = {
	id: 841,
	name: `Text Input Component`,
	desc: `Custom text input component w/ event handlers & reusable styles.`,
	previewImg: img1,
	typeID: 1,
	languageID: 1,
	codeSrc: "",
	dateCreated: new Date(2021, 2, 24),
	dateModified: new Date(2021, 2, 24),
	metaID: 477,
	isLocked: true,
	isStarred: true,
	isActive: true,
};

const mockMarkdownSrc = `
# Main Title
This is the sample document text in markdown format.

*This is italic text*

**Bold text goes here**

- Item one
- Item two
- Item three

[Link to my website](https://sgore.dev)

> This is line one of block quote
> Line two of block quote

## Sub heading

\`\`\`javascript
const matchesPattern = (val, pattern) => {
  const newPattern = new RegExp(pattern);
  return newPattern.test(val);
}
\`\`\`
`;

const mockMdFile = {
	fileName: `MultiSelect-Component.md`,
	fileSize: 277, // bytes
	dateCreated: new Date(2020, 8, 27, 9, 46),
	lastModifiedDate: new Date(2021, 5, 14, 16, 22),
	src: mockMarkdownSrc,
};

const DemoPage = () => {
	const [search, setSearch] = useState("");
	const [selectedTags, setSelectedTags] = useState([]);
	const [file, setFile] = useState(null);

	const handleFileUpload = (e) => {
		setFile(e.target.files[0]);
	};

	const handleDragOver = (e) => {
		// console.log(`Drag over:`, e);
		// console.log(`Handle Drop:`, e.dataTransfer.files);
	};

	const handleDrop = (e) => {
		setFile(e.dataTransfer.files?.[0]);
		console.log(`Handle Drop:`, e.dataTransfer.files);
	};

	const searchHandler = (name, val) => {
		setSearch(val);
	};

	const handleSelectTag = (tag) => {
		console.log(`tag(selection):`, tag);
		setSelectedTags(tag);
	};

	useEffect(() => {
		let isMounted = true;
		if (!isMounted) {
			return;
		}

		console.log(`File:`, file);

		return () => {
			isMounted = false;
		};
	}, [file]);

	return (
		<div className={styles.DemoPage}>
			<header className={styles.DemoPage_header}>
				<h1 className={styles.DemoPage_header_title}>
					Code Library ~ Demo Page
				</h1>
			</header>

			<div className={styles.DemoPage_main}>
				<FileDropZone
					name="fileUpload"
					id="fileUpload"
					handleFile={handleFileUpload}
					handleFileDrop={handleDrop}
					handleDragOver={handleDragOver}
					hasFile={!isEmptyVal(file?.fileName)}
				/>
			</div>
			<div className={styles.DemoPage_main}>
				{file && (
					<MarkdownWrapper
						markdownFile={{
							fileName: file?.name,
							dateCreated: file?.lastModifiedDate,
							lastModifiedDate: file?.lastModifiedDate,
							fileSize: file?.size,
							fileType: file?.type,
							src: file,
						}}
					/>
				)}
			</div>

			<div className={styles.DemoPage_main}>
				<SearchInput
					name="search"
					id="search"
					val={search}
					searchHandler={searchHandler}
				/>
			</div>
			<div className={styles.DemoPage_main}>
				<TagSelector
					tagOptions={mockTags}
					selectTagHandler={handleSelectTag}
					enableMultiSelect={false}
				/>
			</div>

			<div className={styles.DemoPage_main}>
				<SnippetCard
					snippet={mockSnippet}
					snippetTypes={mockTypes}
					languages={mockLanguages}
					tags={mockTags}
				/>
			</div>
			<div className={styles.DemoPage_main}>
				<CreateSnippet allTags={mockTags} />
				<TagCreator colorOptions={colorOptions} />
			</div>
		</div>
	);
};

export default DemoPage;

DemoPage.defaultProps = {};

DemoPage.propTypes = {};
