import SignupFormTemplate from "./Signup.tmpl"
import ReusableButton from '../../components/button/Button.tmpl'

let btn = Handlebars.compile(ReusableButton)
let template = Handlebars.compile(SignupFormTemplate);


const root = document.getElementById("app");
// @ts-ignore
root.innerHTML = template({
    SignupButton: btn({href:"#", title:'Зарегистрироваться'})
})


export default template