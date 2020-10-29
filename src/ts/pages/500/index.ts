import Template500 from "./Template500.tmpl.js";

const template = Handlebars.compile(Template500);
const root = document.getElementById("app");

if (root) {
    root.innerHTML = template({});
}

export default template