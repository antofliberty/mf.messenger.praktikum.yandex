export default document.addEventListener('DOMContentLoaded', ()=>{
    console.log(this)
    let form = document.getElementById('login-form')
// @ts-ignore
    let fields = document.getElementsByClassName('login-form__input')
// @ts-ignore
    form.onsubmit = validate

    let email = fields[0];
    let password = fields[1];
    let emailValue = (<HTMLInputElement>email).value;
    let passwordValue = (<HTMLInputElement>password).value;

    (<HTMLInputElement>email).onblur = validateEmail;
    (<HTMLInputElement>password).onblur = validatePassword;
    (<HTMLInputElement>email).onfocus = reset;
    (<HTMLInputElement>password).onfocus = reset;

    function validate(e: Event) {
        e.preventDefault()

        let isEmailValid = validateEmail()
        let isPasswordValid = validatePassword()

        if(isEmailValid && isPasswordValid) {
            (<HTMLFormElement>form).submit()
        }

        if(!isEmailValid) {
            makeRed(undefined, email)
        }

        if(!isPasswordValid) {
            makeRed(undefined, password)
        }
    }



    function validateEmail(): boolean {
        let match = Boolean(emailValue.match("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])"))
        if(match) {
            reset()
        } else {
            makeRed()
        }
        return match;
    }

    function validatePassword(): boolean {
        let match = Boolean(passwordValue.match("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"))
        if(match) {
            reset()
        } else {
            makeRed()
        }
        return match;
    }

    function makeRed(e?: any, el?: Element): void {
        if (e) el = e.target
        // @ts-ignore
        el.style.border = "1px solid red"
    }

    function reset(e?: any, el?: Element): void {
        if (e) el = e.target
        // @ts-ignore
        el.style.border = "none"
    }
})

