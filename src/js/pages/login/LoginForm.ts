import LoginFormTemplate from "./LoginForm.tmpl"
import ReusableButton from '../../components/button/Button.tmpl'

let btn = Handlebars.compile(ReusableButton)
let template = Handlebars.compile(LoginFormTemplate);


const root = document.getElementById("app");
// @ts-ignore
root.innerHTML = template({
    LoginButton: btn({title:'Войти'})
})


export default template