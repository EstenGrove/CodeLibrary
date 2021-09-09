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

const initialState = {
	snippets: {
		active: { ...mockSnippet }, // current selected
		records: [], // all records
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
		case "INITIAL_RESOUCE": {
			return { ...state };
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
