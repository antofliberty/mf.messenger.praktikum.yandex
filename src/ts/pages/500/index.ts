import Template500 from "./Template500.tmpl.js";

let template = Handlebars.compile(Template500);

const root = document.getElementById("app");

// @ts-ignore
root.innerHTML = template();

export default template