import Template500 from "./Template500.tmpl.js";
var template = Handlebars.compile(Template500);
var root = document.getElementById("app");
if (root) {
    root.innerHTML = template({});
}
export default template;
//# sourceMappingURL=index.js.map