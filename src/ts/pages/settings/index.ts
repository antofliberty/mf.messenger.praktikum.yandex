import SettingsTemplate from "./Settings.tmpl.js";


const template = Handlebars.compile(SettingsTemplate);


const root = document.getElementById("app");

if (root) {
    root.innerHTML = template({});
}

export default template