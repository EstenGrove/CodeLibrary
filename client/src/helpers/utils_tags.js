const tags = [
	{
		id: 1,
		name: `component`,
		desc: `Component`,
		color: "rgb(37, 99, 235)",
		dateCreated: new Date(2021, 10, 8, 14, 36),
		isActive: true,
	},
	{
		id: 2,
		name: `hook`,
		desc: `Hook`,
		color: "rgb(109, 40, 217)",
		dateCreated: new Date(2021, 9, 13, 19, 51),
		isActive: true,
	},
	{
		id: 3,
		name: `command`,
		desc: `Command`,
		color: "rgb(220, 38, 38)",
		dateCreated: new Date(2021, 10, 2, 11, 2),
		isActive: true,
	},
	{
		id: 4,
		name: `util`,
		desc: `Util`,
		color: "rgb(213, 63, 140)",
		dateCreated: new Date(2021, 10, 2, 11, 2),
		isActive: true,
	},
	{
		id: 5,
		name: `config`,
		desc: `Config`,
		color: "rgb(16, 185, 129)",
		dateCreated: new Date(2021, 8, 24, 16, 27),
		isActive: true,
	},
	{
		id: 6,
		name: `asset`,
		desc: `Asset`,
		color: "rgb(234, 88, 12)",
		dateCreated: new Date(2021, 8, 24, 16, 27),
		isActive: true,
	},
	{
		id: 7,
		name: `script`,
		desc: `Script`,
		color: "rgb(56, 178, 172)",
		dateCreated: new Date(2021, 9, 16, 21, 14),
		isActive: true,
	},
];

// PROCESSING & MATCH UTILS

// creates object map by tagID
const getTagsIdMap = (tags = []) => {
	return tags.reduce((tagsMap, tag) => {
		if (!tagsMap[tag.id]) {
			tagsMap[tag.id] = tag;
			return tagsMap;
		}
		return tagsMap;
	}, {});
};

const getTagsBySnippet = (tagsBySnippet = [], allTags = []) => {
	// extract tagIDs from tagsBySnippet records
	const snippetTagIDs = tagsBySnippet.map((record) => record.tagID);
	const matchingTags = allTags.filter((tag) => {
		if (snippetTagIDs.includes(tag.id)) {
			return tag;
		} else {
			return null;
		}
	});

	return matchingTags;
};

export { tags };
export { getTagsBySnippet };
export { getTagsIdMap };
