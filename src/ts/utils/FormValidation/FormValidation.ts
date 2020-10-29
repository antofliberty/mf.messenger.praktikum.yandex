import EmailRegexp from "./EmailRegexp.js"

export default document.addEventListener('DOMContentLoaded', () => {
    let form = document.getElementsByTagName('form')[0] as HTMLFormElement
    form.onsubmit = validate

    let email = form.getElementsByClassName('email')[0] as HTMLInputElement;
    let password = form.getElementsByClassName('password')[0] as HTMLInputElement;
    let password2 = form.getElementsByClassName('password2')[0] as HTMLInputElement;

    email.onblur = validateEmail;
    password.onblur = validatePassword;
    if (password2) {
        password2.onblur = validateTwoPasswords;
    }

    email.onfocus = reset;
    password.onfocus = reset;
    if (password2) {
        password2.onfocus = reset;
    }

    function validate(e: any) {
        e.preventDefault()

        let isEmailValid = validateEmail();
        let isPasswordValid = validatePassword();
        if (!password2) {
            if(isEmailValid && isPasswordValid) {
                form.submit();
            }
        } else {
            let isTwoPasswordsValid = validateTwoPasswords();
            if(isEmailValid && isPasswordValid && isTwoPasswordsValid) {
                form.submit();
            }
        }
    }

    function validateEmail(e?: Event): boolean {
        let emailValue = email.value;
        let match = Boolean(emailValue.match(EmailRegexp))
        console.log(match)
        if (e) {
            if (match) {
                reset(e);
            } else {
                makeRed(e);
            }
        }
        return match;
    }

    function validatePassword(e?: Event): boolean {
        let passwordValue = password.value;
        let match = Boolean(passwordValue.match("(?=^.{6,}$)"));
        if (e) {
            if (match) {
                reset(e);
            } else {
                makeRed(e);
            }
        }
        return match;
    }

    function validateTwoPasswords (e?: Event) {
        let passwordValue = password.value;
        let password2Value = password2.value;

        if (e) {
            if(passwordValue !== password2Value) {
                makeRed(e);
            } else {
                reset(e);
            }
        }

        return passwordValue === password2Value
    }

    function makeRed(e: any): void {
        let el = e.target;
        el.style.border = "1px solid red";
    }

    function reset(e: any): void {
        let el = e.target;
        el.style.border = "none";
    }
})

