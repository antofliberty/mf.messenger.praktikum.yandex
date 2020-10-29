import Template404 from "./Template404.js";
var template = Handlebars.compile(Template404);
var root = document.getElementById("app");
if (root) {
    root.innerHTML = template({});
}
export default template;
//# sourceMappingURL=index.js.map