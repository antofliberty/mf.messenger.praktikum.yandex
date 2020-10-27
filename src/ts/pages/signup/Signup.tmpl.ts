export const SignupFormTemplate = `
<div class="wrapper">
    <div id="signup">
        <h1 class="signup__sign">Регистрация</h1>
        <form id="signup-form">
            <input class="signup-form__input email" type="email" autocomplete="email" placeholder="Ваш email">
            <input class="signup-form__input password" type="password" autocomplete="new-password" placeholder="Придумайте пароль">
            <input class="signup-form__input password2" type="password" autocomplete="new-password" name="password2" placeholder="Пароль (еще раз)">
            <div class="button-wrapper">{{{ SignupButton }}}</div>
        </form>
    </div>
</div>
`

export default SignupFormTemplate