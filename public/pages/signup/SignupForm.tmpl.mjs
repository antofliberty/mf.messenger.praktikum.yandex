export const SignupFormTemplate = `
<div class="wrapper">
    <div id="signup">
        <h1 class="signup__sign">Регистрация</h1>
        <div id="signup-form">
            <input class="signup-form__input" type="email" placeholder="Ваш email">
            <input class="signup-form__input" type="password" placeholder="Придумайте пароль">
            <input class="signup-form__input" type="password" placeholder="Пароль (еще раз)">
            {{{ SignupButton }}}
        </div>
    </div>
</div>
`

export default SignupFormTemplate