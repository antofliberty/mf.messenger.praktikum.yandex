import Template404 from "./Template404.tmpl.mjs";

let template = Handlebars.compile(Template404);

const root = document.getElementById("app");
root.innerHTML = template()

export default template