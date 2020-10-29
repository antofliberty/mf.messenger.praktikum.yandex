import Template404 from "./Template404.js";

const template = Handlebars.compile(Template404);
const root = document.getElementById("app");

if (root) {
    root.innerHTML = template({});
}

export default template