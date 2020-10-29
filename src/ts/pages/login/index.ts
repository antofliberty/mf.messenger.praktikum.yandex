import LoginFormTemplate from "./Login.tmpl.js";
import ReusableButton from "../../components/button/Button.tmpl.js";
import FormValidation from "../../utils/FormValidation/FormValidation.js";

//@ts-ignore
const form = FormValidation;
const btn = Handlebars.compile(ReusableButton);
const template = Handlebars.compile(LoginFormTemplate);


const root = document.getElementById("app");

if (root) {
    root.innerHTML = template({
        LoginButton: btn({ title:"Войти" })
    });
}


export default template