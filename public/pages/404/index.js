import Template404 from "./Template404.js";
// import Handlebars from 'handlebars'
// @ts-ignore
var template = Handlebars.compile(Template404);
var root = document.getElementById("app");
// @ts-ignore
root.innerHTML = template({});
export default template;
//# sourceMappingURL=index.js.map