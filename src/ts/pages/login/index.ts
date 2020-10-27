import LoginFormTemplate from "./Login.tmpl.js";
import ReusableButton from '../../components/button/Button.tmpl.js';
import FormValidation from "../../utils/FormValidation/FormValidation.js";

//@ts-ignore
let form = FormValidation;
let btn = Handlebars.compile(ReusableButton);
let template = Handlebars.compile(LoginFormTemplate);


const root = document.getElementById("app");
// @ts-ignore
root.innerHTML = template({
    LoginButton: btn({title:'Войти'})
})


export default template