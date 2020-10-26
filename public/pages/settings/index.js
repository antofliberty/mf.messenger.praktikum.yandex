import SettingsTemplate from "./Settings.tmpl";
var template = Handlebars.compile(SettingsTemplate);
var root = document.getElementById("app");
// @ts-ignore
root.innerHTML = template({});
export default template;
//# sourceMappingURL=index.js.map