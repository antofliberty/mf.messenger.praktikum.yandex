import SignupFormTemplate from "./SignupForm.tmpl.mjs"
import ReusableButton from '../reusable/ReusableButton.tmpl.mjs'

let btn = Handlebars.compile(ReusableButton)
let template = Handlebars.compile(SignupFormTemplate);


const root = document.getElementById("app");
root.innerHTML = template({
    SignupButton: btn({href:"#", title:'Зарегистрироваться'})
})


export default template