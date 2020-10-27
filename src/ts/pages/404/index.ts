import Template404 from "./Template404";
// import Handlebars from 'handlebars'

// @ts-ignore
let template = Handlebars.compile(Template404);

const root = document.getElementById("app");
// @ts-ignore
root.innerHTML = template({});

export default template