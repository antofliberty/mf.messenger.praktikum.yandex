import SignupFormTemplate from "./Signup.tmpl";
import ReusableButton from '../../components/button/Button.tmpl';
var btn = Handlebars.compile(ReusableButton);
var template = Handlebars.compile(SignupFormTemplate);
var root = document.getElementById("app");
root.innerHTML = template({
    SignupButton: btn({ href: "#", title: 'Зарегистрироваться' })
});
export default template;
//# sourceMappingURL=index.js.map