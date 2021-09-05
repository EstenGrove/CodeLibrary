import { isEmptyVal } from "./utils_types";

const enforceStrMaxLength = (str, maxLength = 30) => {
	if (str.length < maxLength) return str;
	return str.slice(0, maxLength);
};

const addEllipsis = (str, maxLength = 30) => {
	if (isEmptyVal(str)) return ``;
	if (str.length < maxLength) return str;
	const managedStr = enforceStrMaxLength(str, maxLength);
	return managedStr + "...";
};

export { enforceStrMaxLength, addEllipsis };
