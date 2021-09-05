import { format } from "date-fns";
import {
	isEmptyArray,
	isEmptyObj,
	isEmptyVal,
	isArray,
	isBase64,
} from "./utils_types";

////////////////////////////////////////////////////
///////////////// SNIPPET MODEL(S) /////////////////
////////////////////////////////////////////////////

class SnippetModel {
	constructor(vals = {}) {
		this._id = vals?.id ?? 0;
		this._name = vals?.name;
		this._desc = vals?.desc;
		this._previewImg = vals?.previewImg;
		this._typeID = vals?.typeID;
		this._languageID = vals?.languageID;
		this._codeSrc = vals?.codeSrc;
		this._dateCreated = vals?.dateCreated;
		this._dateModified = vals?.dateModified;
		this._isLocked = vals?.isLocked;
		this._isStarred = vals?.isStarred;
		this._isActive = vals?.isActive;

		this._model = {
			id: this._id,
			name: this._name,
			desc: this._desc,
			previewImg: this._previewImg,
			typeID: this._typeID,
			languageID: this._languageID,
			codeSrc: this._codeSrc,
			dateCreated: this._dateCreated,
			dateModified: this._dateModified,
			isLocked: this._isLocked,
			isStarred: this._isStarred,
			isActive: this._isActive,
		};
	}
	getModel() {
		return this._model;
	}
}

// identical model to 'SnippetModel' just without the 'id' field
class NewSnippetModel {
	constructor(vals = {}) {
		this._name = vals?.name;
		this._desc = vals?.desc;
		this._previewImg = vals?.previewImg;
		this._typeID = vals?.typeID;
		this._languageID = vals?.languageID;
		this._codeSrc = vals?.codeSrc;
		this._dateCreated = vals?.dateCreated;
		this._dateModified = vals?.dateModified;
		this._isLocked = vals?.isLocked;
		this._isStarred = vals?.isStarred;
		this._isActive = vals?.isActive;

		this._model = {
			name: this._name,
			desc: this._desc,
			previewImg: this._previewImg,
			typeID: this._typeID,
			languageID: this._languageID,
			codeSrc: this._codeSrc,
			dateCreated: this._dateCreated,
			dateModified: this._dateModified,
			isLocked: this._isLocked,
			isStarred: this._isStarred,
			isActive: this._isActive,
		};
	}
	getModel() {
		return this._model;
	}
}

////////////////////////////////////////////////////
/////////////////// TAG MODEL(S) ///////////////////
////////////////////////////////////////////////////

class TagModel {
	constructor(vals = {}) {
		this._tagID = vals?.tagID ?? 0;
		this._name = vals?.name;
		this._desc = vals?.desc;
		this._color = vals?.color;
		this._dateCreated = vals?.dateCreated ?? format(new Date(), "YYYY-MM-DD");
		this._dateModified = vals?.dateModified ?? null;
		this._isActive = vals?.isActive ?? true;

		this._model = {
			id: this._tagID,
			name: this._name,
			desc: this._desc,
			color: this._color,
			dateCreated: this._dateCreated,
			dateModified: this._dateModified,
			isActive: this._isActive,
		};
	}
	getModel() {
		return this._model;
	}
}

// without the 'id' field
class NewTagModel {
	constructor(vals = {}) {
		this._name = vals?.name;
		this._desc = vals?.desc;
		this._color = vals?.color;
		this._dateCreated = vals?.dateCreated ?? format(new Date(), "YYYY-MM-DD");
		this._dateModified = vals?.dateModified ?? null;
		this._isActive = vals?.isActive ?? true;

		this._model = {
			name: this._name,
			desc: this._desc,
			color: this._color,
			dateCreated: this._dateCreated,
			dateModified: this._dateModified,
			isActive: this._isActive,
		};
	}
	getModel() {
		return this._model;
	}
}

///////////////////////////////////////////////////
//////////////// LANGUAGE MODEL(S) ////////////////
///////////////////////////////////////////////////

class LanguageModel {
	constructor(vals = {}) {
		this._tagID = vals?.tagID ?? 0;
		this._name = vals?.name;
		this._desc = vals?.desc;
		this._dateCreated = vals?.dateCreated ?? format(new Date(), "YYYY-MM-DD");
		this._dateModified = vals?.dateModified ?? null;
		this._isActive = vals?.isActive ?? true;

		this._model = {
			id: this._tagID,
			name: this._name,
			desc: this._desc,
			dateCreated: this._dateCreated,
			dateModified: this._dateModified,
			isActive: this._isActive,
		};
	}
	getModel() {
		return this._model;
	}
}

// without the 'id' field
class NewLanguageModel {
	constructor(vals = {}) {
		this._name = vals?.name;
		this._desc = vals?.desc;
		this._dateCreated = vals?.dateCreated ?? format(new Date(), "YYYY-MM-DD");
		this._dateModified = vals?.dateModified ?? null;
		this._isActive = vals?.isActive ?? true;

		this._model = {
			name: this._name,
			desc: this._desc,
			dateCreated: this._dateCreated,
			dateModified: this._dateModified,
			isActive: this._isActive,
		};
	}
	getModel() {
		return this._model;
	}
}

// snippet models
export { SnippetModel, NewSnippetModel };

// tag models
export { TagModel, NewTagModel };

// languages models
export { LanguageModel, NewLanguageModel };
