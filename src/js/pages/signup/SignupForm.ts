import SignupFormTemplate from "./SignupForm.tmpl"
import ReusableButton from '../../components/button/Button.tmpl.ts'

let btn = Handlebars.compile(ReusableButton)
let template = Handlebars.compile(SignupFormTemplate);


const root = document.getElementById("app");
root.innerHTML = template({
    SignupButton: btn({href:"#", title:'Зарегистрироваться'})
})


export default template