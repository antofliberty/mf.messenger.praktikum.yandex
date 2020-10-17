export const LoginFormTemplate = `
<div class="wrapper">
    <div id="login">
        <h1 class="login__sign">Вход</h1>
        <form id="login-form" action="#">
            <input class="login-form__input" type="email" placeholder="Ваш email" autocomplete="email">
            <input class="login-form__input" type="password" placeholder="Пароль" autocomplete="password">
             {{{LoginButton}}}
        </form>
    </div>
</div>
`

export default LoginFormTemplate