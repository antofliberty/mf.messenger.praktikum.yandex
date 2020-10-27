export const LoginFormTemplate = `
<div class="wrapper">
    <div id="login">
        <h1 class="login__sign">Вход</h1>
        <form id="login-form" action="#">
            
            <input class="login-form__input" id="email" type="email" placeholder="Ваш email" autocomplete="email">
            <label for="email"></label>
            <input class="login-form__input" id="password" type="password" placeholder="Пароль" autocomplete="password">
            <label for="password"></label>
            <div class="button-wrapper">{{{LoginButton}}}</div>
        </form>
    </div>
</div>
`

export default LoginFormTemplate