import LoginFormTemplate from "./Login.tmpl.js";
import FormValidation from "../../utils/FormValidation/FormValidation.js";

//@ts-ignore
const form = FormValidation;
const template = Handlebars.compile(LoginFormTemplate);
import ReusableButton from "../../components/button/Button.tmpl.js";


const root = document.getElementById("app");

if (root) {
    root.innerHTML = template({
        LoginButton: ReusableButton
    });
}


export default template