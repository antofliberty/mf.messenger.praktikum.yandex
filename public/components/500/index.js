import Template500 from "./Template500.tmpl";
var template = Handlebars.compile(Template500);
var root = document.getElementById("app");
// @ts-ignore
root.innerHTML = template();
export default template;
//# sourceMappingURL=index.js.map