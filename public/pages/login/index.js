import LoginFormTemplate from "./Login.tmpl.js";
import ReusableButton from '../../components/button/Button.tmpl.js';
import FormValidation from "../../utils/FormValidation/FormValidation.js";
//@ts-ignore
var form = FormValidation;
var btn = Handlebars.compile(ReusableButton);
var template = Handlebars.compile(LoginFormTemplate);
var root = document.getElementById("app");
// @ts-ignore
root.innerHTML = template({
    LoginButton: btn({ title: 'Войти' })
});
export default template;
//# sourceMappingURL=index.js.map