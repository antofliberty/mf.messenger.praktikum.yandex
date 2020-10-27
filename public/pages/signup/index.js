import SignupFormTemplate from "./Signup.tmpl.js";
import ReusableButton from '../../components/button/Button.tmpl.js';
import FormValidation from "../../utils/FormValidation/FormValidation.js";
// @ts-ignore
var form = FormValidation;
var btn = Handlebars.compile(ReusableButton);
var template = Handlebars.compile(SignupFormTemplate);
var root = document.getElementById("app");
// @ts-ignore
root.innerHTML = template({
    SignupButton: btn({ title: 'Зарегистрироваться' })
});
export default template;
//# sourceMappingURL=index.js.map