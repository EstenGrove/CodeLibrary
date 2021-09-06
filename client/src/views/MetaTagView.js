import React, { useState } from "react";
import styles from "../css/views/MetaTagView.module.scss";
import { PropTypes } from "prop-types";
import { useForm } from "../utils/useForm";
import { generateMetaTags } from "../helpers/utils_meta";
import { purple, red } from "../helpers/utils_styles";
// components
import Form from "../components/shared/Form";
import TextInput from "../components/shared/TextInput";
import TextArea from "../components/shared/TextArea";
import CustomDropdown from "../components/shared/CustomDropdown";
import Spacer from "../components/shared/Spacer";
import Checkbox from "../components/shared/Checkbox";
import Button from "../components/shared/Button";
import NumberInput from "../components/shared/NumberInput";
import ReusableCodePreview from "../components/app/ReusableCodePreview";

// REQUIREMENTS:
// - Site Title (70chars or less)
// - Site Description (150chars or less)
// - Keywords (comma-separated)
// - Allow robots to index?
// - Allow robots to follow all links?
// - Type of content on the site:
//    - UTF-8
//    - UTF-16
//    - ISO-8859-1
//    - WINDOWS-1252
// Primary language (english)
// - Search engines should revist after XX days
// - Author

const customCSS = {
	dropdown: {
		width: "35rem",
	},
	generate: {
		padding: ".8rem 1.5rem",
		color: "#ffffff",
		backgroundColor: purple[700],
	},
	reset: {
		padding: ".8rem 1.5rem",
		color: red[600],
		marginRight: "auto",
	},
};

const metaContentTypes = [`UTF-8`, `UTF-16`, `ISO-8859-1`, `WINDOWS-1252`];

const siteLanguageOptions = [
	`English`,
	`Spanish`,
	`French`,
	`Russian`,
	`Arabic`,
	`Japanese`,
	`Korean`,
	`Hindi`,
	`Portugese`,
	`No language tag`,
];

const MetaTagView = () => {
	const { formState, setFormState, handleChange, handleCheckbox, handleReset } =
		useForm({
			siteTitle: "",
			siteAuthor: "",
			siteDesc: "",
			siteKeywords: "", // comma separated (eg. cool, neat, something)
			siteLanguage: "English",
			contentType: "UTF-8",
			// robots & search engine
			enableRobotsRevisit: false,
			enableRobotsIndex: false,
			enableRobotsFollowAll: false,
			siteRevisitPeriod: "",
		});
	const { values } = formState;
	const [code, setCode] = useState("");

	const handleSelection = (name, val) => {
		setFormState({
			...formState,
			values: {
				...values,
				[name]: val,
			},
		});
	};

	const generateCode = () => {
		const tagsCode = generateMetaTags(values);
		setCode(tagsCode);
	};

	const resetForm = (e) => {
		handleReset(e);
	};

	return (
		<div className={styles.MetaTagView}>
			<div className={styles.MetaTagView_form}>
				<Form
					vals={values}
					handleChange={handleChange}
					handleCheckbox={handleCheckbox}
				>
					<TextInput
						name="siteTitle"
						id="siteTitle"
						label="Site Title (70 max chars)"
						val={values.siteTitle}
						handleChange={handleChange}
						placeholder="Title must be within 70 chars"
					/>
					<Spacer />
					<TextInput
						name="siteAuthor"
						id="siteAuthor"
						label="Site Author"
						val={values.siteAuthor}
						handleChange={handleChange}
						placeholder="Enter site author"
					/>
					<Spacer />
					<TextArea
						name="siteDesc"
						id="siteDesc"
						label="Site Description (150 max chars)"
						val={values.siteDesc}
						handleChange={handleChange}
						placeholder="Description must be within 150 chars"
					/>
					<Spacer />
					<TextArea
						name="siteKeywords"
						id="siteKeywords"
						label="Site Keywords (comma separated)"
						val={values.siteKeywords}
						handleChange={handleChange}
						placeholder="keyword1, keyword2, keyword3"
					/>
					<Spacer />
					{/* CHECKBOX */}
					<Checkbox
						name="enableRobotsIndex"
						id="enableRobotsIndex"
						label="Allow robots to index site?"
						val={values.enableRobotsIndex}
						handleCheckbox={handleCheckbox}
					/>
					<Checkbox
						name="enableRobotsFollowAll"
						id="enableRobotsFollowAll"
						label="Allow robots to follow all links?"
						val={values.enableRobotsFollowAll}
						handleCheckbox={handleCheckbox}
					/>
					<Spacer />
					<CustomDropdown
						name="contentType"
						id="contentType"
						label="What content type will your site display?"
						selection={values.contentType}
						setSelection={handleSelection}
						options={metaContentTypes}
						customStyles={customCSS.dropdown}
					/>
					<Spacer />
					<CustomDropdown
						name="siteLanguage"
						id="siteLanguage"
						label="What is your site's primary language?"
						selection={values.siteLanguage}
						setSelection={handleSelection}
						options={siteLanguageOptions}
						customStyles={customCSS.dropdown}
					/>
					<Spacer />
					<Spacer />
					<Checkbox
						name="enableRobotsRevisit"
						id="enableRobotsRevisit"
						label="Allow search engines to revisit this page?"
						val={values.enableRobotsRevisit}
						handleCheckbox={handleCheckbox}
					/>
					<NumberInput
						name="siteRevisitPeriod"
						id="siteRevisitPeriod"
						label="How many days between revisits?"
						handleChange={handleChange}
						val={values.siteRevisitPeriod}
					/>
					<Spacer />
					<div className={styles.MetaTagView_form_actions}>
						<Button
							customStyles={customCSS.reset}
							type="button"
							handleClick={resetForm}
						>
							Reset
						</Button>
						<Button
							customStyles={customCSS.generate}
							type="button"
							handleClick={generateCode}
						>
							Generate Code
						</Button>
					</div>
				</Form>
			</div>
			<div className={styles.MetaTagView_preview}>
				<ReusableCodePreview code={code} />
			</div>
		</div>
	);
};

export default MetaTagView;

MetaTagView.defaultProps = {};

MetaTagView.propTypes = {};
