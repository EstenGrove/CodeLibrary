const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
// import route modules (mini-apps)
// api server status util
const snippetsModule = require("./routes/snippetsRoutes");
const tagsModule = require("./routes/tagsRoutes");
const langsModule = require("./routes/languagesRoutes");
const tagsBySnippetModule = require("./routes/tagsBySnippetRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// declare routes for each route module here...
// declare routes for each route module
app.use("/snippets", snippetsModule);
app.use("/tags", tagsModule);
app.use("/languages", langsModule);
app.use("/tag-by-snippets", tagsBySnippetModule);

app.listen(port, (err) => {
	if (err) throw err;
	console.log(`✅ Server is running on port ${port}!!`);
});
