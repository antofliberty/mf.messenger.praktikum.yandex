import SignupFormTemplate from "./Signup.tmpl.js"
import ReusableButton from "../../components/button/Button.tmpl.js"
import FormValidation from "../../utils/FormValidation/FormValidation.js"

// @ts-ignore
const form = FormValidation
const btn = Handlebars.compile(ReusableButton)
const template = Handlebars.compile(SignupFormTemplate);

const root = document.getElementById("app");

if (root) {
    root.innerHTML = template({
        SignupButton: btn({title:"Зарегистрироваться"})
    })
}

export default template