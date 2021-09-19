import { createContext, useReducer } from "react";
import { languages } from "../helpers/utils_languages";
import { tags } from "../helpers/utils_tags";
// mock img
import img1 from "../assets/images/MusicPlayer-Snippet.png";

// MOCKDATA
// mock snippet 'entry'
const mockSnippet = {
	id: 841,
	name: `Text Input Component`,
	desc: `Custom text input component w/ event handlers & reusable styles.`,
	previewImg: img1,
	tagID: 1,
	languageID: 18,
	dateCreated: new Date(2021, 2, 24, 14, 23),
	dateModified: new Date(2021, 3, 16, 16, 43),
	isLocked: true,
	isStarred: true,
	isActive: true,
	usageSrc: `
const Example = () => {
	const [vals, setVals] = useState({
		username: '',
		password: '',
		firstName: '',
		lastName: ''
	});

	const handleChange = (e) => {
		const {name, value} = e.target;
		setVals({
			...vals,
			[name]: value
		})
	}

	return (
		<div>
			<TextInput
				name="username"
				id="username"
				label="Username"
				val={vals.username}
				handleChange={handleChange}
			/>
		</div>
	)
}
	`,
	codeSrc: `
import React from "react";
import styles from "../../css/shared/TextInput.module.scss";
import { PropTypes } from "prop-types";

const TextInput = ({
	label,
	name,
	id,
	placeholder,
	required = false,
	value,
	handleChange,
	handleBlur,
	handleFocus,
	handleReset,
	addRequiredFlag = false,
}) => {
	return (
		<div className={styles.TextInput}>
			<label htmlFor={id} className={styles.TextInput_label}>
				{label}
				{addRequiredFlag && (
					<div className={styles.TextInput_requiredFlag}>*</div>
				)}
			</label>
			<input
				type="text"
				name={name}
				id={id}
				className={styles.TextInput_input}
				placeholder={placeholder}
				required={required}
				value={value}
				onChange={handleChange}
				onBlur={handleBlur}
				onFocus={handleFocus}
				onReset={handleReset}
			/>
		</div>
	);
};

export default TextInput;

// #PropTypes
TextInput.defaultProps = {
	required: false,
	addRequiredFlag: false,
};

TextInput.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string.isRequired,
	id: PropTypes.string,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	handleFocus: PropTypes.func,
	handleBlur: PropTypes.func,
	handleReset: PropTypes.func,
	addRequiredFlag: PropTypes.bool,
};

	`,
};

const initialState = {
	snippets: {
		active: { ...mockSnippet }, // current selected
		records: [mockSnippet], // all records
		mapByID: {}, // records mapped by id
	},
	tags: {
		active: {}, // current selected
		records: [...tags], // all records
		mapByID: {}, // records mapped by id
	},
	languages: {
		active: {}, // current selected
		records: [...languages], // all records
		mapByID: {}, // records mapped by id
	},
};

const GlobalStateContext = createContext();

const stateReducer = (state, action) => {
	switch (action.type) {
		case "INITIAL_RESOURCE": {
			const { tagsMap, langsMap, snippetsMap } = action.data;

			return {
				...state,
				snippets: {
					...state.snippets,
					mapByID: { ...snippetsMap },
				},
				tags: {
					...state.tags,
					mapByID: { ...tagsMap },
				},
				languages: {
					...state.languages,
					mapByID: { ...langsMap },
				},
			};
		}
		case "SELECT_SNIPPET": {
			const { snippetID } = action.data;
			const { records } = state.snippets;
			// find matching snipppet record by id
			const activeRecord = records.filter((x) => x.id === snippetID)?.[0];

			return {
				...state,
				snippets: {
					...state.snippets,
					active: { ...activeRecord },
				},
			};
		}

		case "UPDATE_SNIPPET": {
			const { updatedSnippet } = action.data;
			const { records } = state.snippets;
			// remove stale record & return reset
			const withoutUpdated = records.filter((x) => x.id !== updatedSnippet.id);

			return {
				...state,
				snippets: {
					...state.snippets,
					records: [...withoutUpdated, updatedSnippet],
				},
			};
		}
		case "DELETE_SNIPPET": {
			const { snippetID } = action.data;
			const { records } = state.snippets;
			const without = records.filter((x) => x.id !== snippetID);

			return {
				...state,
				snippets: {
					...state.snippets,
					records: [...without],
				},
			};
		}
		case "UPDATE_TAG": {
			const { updatedTag } = action.data;
			const { records } = state.tags;
			// remove stale tag record
			const without = records.filter((x) => x.id !== updatedTag.id);

			return {
				...state,
				tags: {
					...state.tags,
					records: [...without, updatedTag],
				},
			};
		}
		case "DELETE_TAG": {
			const { tagID } = action.data;
			const { records } = state.tags;
			const without = records.filter((x) => x.id !== tagID);

			return {
				...state,
				tags: {
					...state.tags,
					records: [...without],
				},
			};
		}

		default:
			return { ...state };
	}
};

const GlobalStateProvider = ({ children }) => {
	const [state, dispatch] = useReducer(stateReducer, initialState);

	return (
		<GlobalStateContext.Provider value={{ state, dispatch }}>
			{children}
		</GlobalStateContext.Provider>
	);
};

export { initialState, GlobalStateContext, GlobalStateProvider };
