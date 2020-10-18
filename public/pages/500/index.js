import Template500 from "./Template500.tmpl.mjs";

let template = Handlebars.compile(Template500);

const root = document.getElementById("app");
root.innerHTML = template()

export default template