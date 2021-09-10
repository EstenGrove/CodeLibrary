import React from "react";
import styles from "../css/pages/PlaygroundPage.module.scss";
import { PropTypes } from "prop-types";
import Header from "../components/app/Header";
// custom wrapper around syntax highlighter
import CodeViewer from "../components/code/CodeViewer";
import { purgeLeadingSpaces } from "../helpers/utils_processing";
import CodeUsageExample from "../components/code/CodeUsageExample";
import Table from "../components/tables/Table";

const code = `
// file size
const fileSize = 1184;
// custom pattern matcher util
const matchesPattern = (val, pattern) => {
  const newPattern = new RegExp(pattern);
  return pattern.test(val);
}
`;

const code2 = `
!#bin/bash

echo "Hello, $1!"
`;

const code3 = `
<header class="header">
  <h1 class="header_title">Main Title</h1>
</header>
`;
const code4 = `
## Title Heading
`;
const code5 = `
-- Create 'users' table
CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(50),
  age INT NOT NULL,
  dob DATE NOT NULL,
  is_active BOOLEAN NOT NULL
);
`;

// sample/mock table schema data
const tableSchema = {
	headings: [`Name`, `Type`, `Desc`, `Default`, `Usage`],
	data: [
		{
			name: `handleClick`,
			type: `function`,
			desc: `'onClick' handler for button`,
			default: `N/A`,
			usage: `(e) => handleClick(e) || handleClick(e)`,
		},
		{
			name: `handleSave`,
			type: `function`,
			desc: `'onSubmit' handler for form`,
			default: `N/A`,
			usage: `(e) => handleSave(e) || handleSave(e)`,
		},
		{
			name: `listData`,
			type: `array`,
			desc: `array of object's data for UI to render`,
			default: `[] (Defaults to empty array)`,
			usage: `listData[]`,
		},
		{
			name: `tags`,
			type: `array`,
			desc: `array of 'tag' object's fetched from database, stored in state.`,
			default: `[] (Defaults to empty array)`,
			usage: `tags[]`,
		},
		{
			name: `user`,
			type: `object`,
			desc: `object of current user's properties such as username, password etc.`,
			default: `{} (Defaults to empty object)`,
			usage: `user{}`,
		},
	],
};

const PlaygroundPage = () => {
	return (
		<div className={styles.PlaygroundPage}>
			<Header
				title="Playground"
				subtitle="Playground page for demos and examples."
			/>

			<div className={styles.PlaygroundPage_main}>
				<Table schema={tableSchema} />
			</div>

			<div className={styles.PlaygroundPage_main}>
				<CodeUsageExample />
			</div>

			<div className={styles.PlaygroundPage_main}>
				<CodeViewer code={purgeLeadingSpaces(code)} language="javascript" />
				<CodeViewer code={purgeLeadingSpaces(code2)} language="bash" />
				<CodeViewer code={purgeLeadingSpaces(code3)} language="html" />
				<CodeViewer code={purgeLeadingSpaces(code4)} language="markdown" />
				<CodeViewer code={purgeLeadingSpaces(code5)} language="sql" />
			</div>
		</div>
	);
};

export default PlaygroundPage;

PlaygroundPage.defaultProps = {};

PlaygroundPage.propTypes = {};
