import LoginFormTemplate from "./LoginForm.tmpl.mjs"
import ReusableButton from '../../components/Button/Button.tmpl.mjs'

let btn = Handlebars.compile(ReusableButton)
let template = Handlebars.compile(LoginFormTemplate);


const root = document.getElementById("app");
root.innerHTML = template({
    LoginButton: btn({href:"#", title:'Войти'})
})


export default template