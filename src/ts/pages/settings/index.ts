import SettingsTemplate from "./Settings.tmpl.js";


let template = Handlebars.compile(SettingsTemplate);


const root = document.getElementById("app");
// @ts-ignore
root.innerHTML = template({});


export default template