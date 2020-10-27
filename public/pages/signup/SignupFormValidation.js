"use strict";
// export default document.addEventListener('DOMContentLoaded', ()=>{
//     let form = document.getElementById('login-form')
//     // @ts-ignore
//     let fields = document.getElementsByClassName('login-form__input')
//     // @ts-ignore
//     form.onsubmit = validate
//
//     let email = fields[0];
//     let password = fields[1];
//     let password2 = fields[2];
//
//     (<HTMLInputElement>email).onblur = validateEmail;
//     (<HTMLInputElement>password).onblur = validatePassword;
//     (<HTMLInputElement>email).onfocus = reset;
//     (<HTMLInputElement>password).onfocus = reset;
//
//     function validate(e: any) {
//         e.preventDefault()
//
//         let isEmailValid = validateEmail()
//         let isPasswordValid = validatePassword()
//
//
//         if(isEmailValid && isPasswordValid) {
//             (<HTMLFormElement>form).submit()
//         }
//     }
//
//     function validateEmail(e?: Event): boolean {
//         let emailValue = (<HTMLInputElement>email).value;
//         let match = Boolean(emailValue.match("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])"))
//
//         console.log(match)
//         if (e) {
//             if (match) {
//                 reset(e)
//             } else {
//                 makeRed(e)
//             }
//         }
//         return match;
//     }
//
//     function validatePassword(e?: Event): boolean {
//         let passwordValue = (<HTMLInputElement>password).value;
//         let match = Boolean(passwordValue.match("(?=^.{6,}$)"))
//         if (e) {
//             if (match) {
//                 reset(e)
//             } else {
//                 makeRed(e)
//             }
//         }
//         return match;
//     }
//
//     function validateTwoPasswords () {
//         let passwordValue = (<HTMLInputElement>password).value;
//         let password2Value = (<HTMLInputElement>password2).value;
//
//         return passwordValue === password2Value
//     }
//
//     function makeRed(e: any): void {
//         let el = e.target
//         el.style.border = "1px solid red"
//     }
//
//     function reset(e?: any): void {
//         let el = e.target
//         el.style.border = "none"
//     }
// })
//
//# sourceMappingURL=SignupFormValidation.js.map