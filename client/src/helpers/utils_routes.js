const routes = [
	{
		name: "Home",
		desc: "Home Page",
		route: "/",
	},
	{
		name: "Snippets",
		desc: "Snippets Page",
		route: "/snippets",
	},
	{
		name: "Tools",
		desc: "Tools Page",
		route: "/tools",
	},
	{
		name: "New Snippet",
		desc: "New Snippet Page",
		route: "/snippets/new",
	},
];

const pageCards = {
	tools: [
		{
			name: "Meta Tags Generator",
			desc: "Generator tool for custom meta tags.",
			route: "/meta",
		},
		{
			name: "Open Graph Tags Generator",
			desc: "Generator tool for custom Open Graph tags.",
			route: "/og",
		},
		{
			name: "Box Shadow Generator",
			desc: "Box shadow generator tool w/ custom color, blur, offset etc.",
			route: "/shadows",
		},
		{
			name: "CSS/JS Styles Parser",
			desc: "CSS/JS styles parser tool for converting css and js to different formats such as inline, objects, class styles etc.",
			route: "/parser",
		},
		{
			name: "CSS Filters Generator",
			desc: "CSS filters generator tool for generating custom css background filters for use with images.",
			route: "/filters",
		},
		{
			name: "Color Converters",
			desc: "Various color conversion tools for converting colors to various different formats including hex, rgb, hsl etc.",
			route: "/colors",
		},
	],
	snippets: [],
};
const { tools: toolCards, snippets: snippetCards } = pageCards;

export { toolCards, snippetCards, pageCards };

export { routes };
