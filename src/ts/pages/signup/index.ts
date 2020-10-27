import SignupFormTemplate from "./Signup.tmpl.js"
import ReusableButton from '../../components/button/Button.tmpl.js'
import FormValidation from "../../utils/FormValidation/FormValidation.js"

// @ts-ignore
let form = FormValidation
let btn = Handlebars.compile(ReusableButton)
let template = Handlebars.compile(SignupFormTemplate);


const root = document.getElementById("app");
// @ts-ignore
root.innerHTML = template({
    SignupButton: btn({title:'Зарегистрироваться'})
})


export default template