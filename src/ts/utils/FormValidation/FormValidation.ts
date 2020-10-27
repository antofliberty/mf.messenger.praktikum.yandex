export default document.addEventListener('DOMContentLoaded', ()=>{
    let form = document.getElementsByTagName('form')[0]
    // @ts-ignore
    form.onsubmit = validate

    let email = form.getElementsByClassName('email')[0];
    let password = form.getElementsByClassName('password')[0];
    let password2 = form.getElementsByClassName('password2')[0];

    (<HTMLInputElement>email).onblur = validateEmail;
    (<HTMLInputElement>password).onblur = validatePassword;
    if(password2) {
        (<HTMLInputElement>password2).onblur = validateTwoPasswords;
    }

    (<HTMLInputElement>email).onfocus = reset;
    (<HTMLInputElement>password).onfocus = reset;
    if(password2) {
        (<HTMLInputElement>password2).onfocus = reset;
    }

    function validate(e: any) {
        e.preventDefault()

        let isEmailValid = validateEmail();
        let isPasswordValid = validatePassword();
        if (!password2) {
            if(isEmailValid && isPasswordValid) {
                (<HTMLFormElement>form).submit();
            }
        } else {
            let isTwoPasswordsValid = validateTwoPasswords();
            if(isEmailValid && isPasswordValid && isTwoPasswordsValid) {
                (<HTMLFormElement>form).submit();
            }
        }
    }

    function validateEmail(e?: Event): boolean {
        let emailValue = (<HTMLInputElement>email).value;
        let match = Boolean(emailValue.match("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])"));

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
        let passwordValue = (<HTMLInputElement>password).value;
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
        let passwordValue = (<HTMLInputElement>password).value;
        let password2Value = (<HTMLInputElement>password2).value;

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

    function reset(e?: any): void {
        let el = e.target;
        el.style.border = "none";
    }
})

