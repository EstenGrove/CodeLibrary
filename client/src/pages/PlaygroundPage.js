import React, { useState } from "react";
import styles from "../css/pages/PlaygroundPage.module.scss";
import { PropTypes } from "prop-types";
import { purgeLeadingSpaces } from "../helpers/utils_processing";
// custom wrapper around syntax highlighter
import Header from "../components/app/Header";
import CodeViewer from "../components/code/CodeViewer";
import CodeUsageExample from "../components/code/CodeUsageExample";
import DynamicTableContainer from "../components/tables/DynamicTableContainer";
import DynamicTable from "../components/tables/DynamicTable";
import DynamicTableHead from "../components/tables/DynamicTableHead";
import DynamicTableRow from "../components/tables/DynamicTableRow";
import DynamicTableCell from "../components/tables/DynamicTableCell";
import DynamicTableBody from "../components/tables/DynamicTableBody";
import DynamicTableHeading from "../components/tables/DynamicTableHeading";
// test run
import Flex from "../components/layout/Flex";
import FlexItem from "../components/layout/FlexItem";
// alternative version
import FlexBox from "../components/layout/FlexBox";
import FlexBoxItem from "../components/layout/FlexBoxItem";

const customCSS = {
	item: {
		fontSize: "1.8rem",
		fontWeight: "600",
	},
};

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
			usage: `object[]`,
		},
		{
			name: `tags`,
			type: `array`,
			desc: `array of 'tag' object's fetched from database, stored in state.`,
			default: `[] (Defaults to empty array)`,
			usage: `object[]`,
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

const classes = [
	{ name: "Item", isActive: true },
	{ name: "AddBorder", isActive: false },
	{ name: "AddOpacity", isActive: true },
	{ name: "Active", isActive: true },
];

const PlaygroundPage = () => {
	const [showTimer, setShowTimer] = useState(false);

	const handleExpiryCounter = () => {
		setShowTimer(true);
		console.log(`Was Clicked`);
	};

	return (
		<div className={styles.PlaygroundPage}>
			<Header
				title="Playground"
				subtitle="Playground page for demos and examples."
			/>

			<div style={{ fontSize: "2rem", color: "#eaecef" }}>Dummy</div>
			<div className={styles.PlaygroundPage_custom}>
				<div style={customCSS.item}>Item #1</div>
				<div style={customCSS.item}>Item #2</div>
				<div style={customCSS.item}>Item #3</div>
			</div>

			{/* ALT VERSION ITEM */}
			<div style={{ fontSize: "2rem", color: "#eaecef" }}>New</div>
			<FlexBox
				bgColor="#eaecef"
				padding="1rem"
				borderRadius=".5rem"
				classes={classes}
			>
				<FlexBoxItem grow={2}>
					<div style={customCSS.item}>Item #1</div>
				</FlexBoxItem>
				<FlexBoxItem grow={0}>
					<div style={customCSS.item}>Item #2</div>
				</FlexBoxItem>
				<FlexBoxItem grow={0}>
					<div style={customCSS.item}>Item #3</div>
				</FlexBoxItem>
			</FlexBox>

			<div className={styles.PlaygroundPage_main}>
				<button onClick={handleExpiryCounter}>Show Timer</button>
			</div>
			<div
				className={styles.PlaygroundPage_main}
				style={{ backgroundColor: `--var(purple500)` }}
			>
				<DynamicTableContainer>
					<DynamicTable>
						<DynamicTableHead>
							<DynamicTableRow>
								{tableSchema.headings &&
									tableSchema.headings.map((col, idx) => (
										<DynamicTableHeading key={`Column-${col}--${idx}`}>
											{col}
										</DynamicTableHeading>
									))}
							</DynamicTableRow>
						</DynamicTableHead>
						<DynamicTableBody>
							{tableSchema.data &&
								tableSchema.data.map((cellData, idx) => (
									<DynamicTableRow key={`Row-${cellData.name}--${idx}`}>
										<DynamicTableCell>{cellData.name}</DynamicTableCell>
										<DynamicTableCell>{cellData.type}</DynamicTableCell>
										<DynamicTableCell>{cellData.desc}</DynamicTableCell>
										<DynamicTableCell>{cellData.default}</DynamicTableCell>
										<DynamicTableCell>{cellData.usage}</DynamicTableCell>
									</DynamicTableRow>
								))}
						</DynamicTableBody>
					</DynamicTable>
				</DynamicTableContainer>
			</div>
			<div className={styles.PlaygroundPage_main}>
				{/* <Table schema={tableSchema} /> */}
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

			{/* <OneTimeExpiry
				key={`ResetExpiry:${generateID()}`}
				startDate={new Date()}
				expiryDate={addMinutes(new Date(), 30)}
				startExpiryCounter={showTimer}
			>
				<h1>Hello</h1>
			</OneTimeExpiry> */}
		</div>
	);
};

export default PlaygroundPage;

PlaygroundPage.defaultProps = {};

PlaygroundPage.propTypes = {};
