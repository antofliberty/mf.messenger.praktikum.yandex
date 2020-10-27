export default document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementsByTagName('form')[0];
    // @ts-ignore
    form.onsubmit = validate;
    var email = form.getElementsByClassName('email')[0];
    var password = form.getElementsByClassName('password')[0];
    var password2 = form.getElementsByClassName('password2')[0];
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
    function validate(e) {
        e.preventDefault();
        var isEmailValid = validateEmail();
        var isPasswordValid = validatePassword();
        if (!password2) {
            if (isEmailValid && isPasswordValid) {
                form.submit();
            }
        }
        else {
            var isTwoPasswordsValid = validateTwoPasswords();
            if (isEmailValid && isPasswordValid && isTwoPasswordsValid) {
                form.submit();
            }
        }
    }
    function validateEmail(e) {
        var emailValue = email.value;
        var match = Boolean(emailValue.match("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])"));
        console.log(match);
        if (e) {
            if (match) {
                reset(e);
            }
            else {
                makeRed(e);
            }
        }
        return match;
    }
    function validatePassword(e) {
        var passwordValue = password.value;
        var match = Boolean(passwordValue.match("(?=^.{6,}$)"));
        if (e) {
            if (match) {
                reset(e);
            }
            else {
                makeRed(e);
            }
        }
        return match;
    }
    function validateTwoPasswords(e) {
        var passwordValue = password.value;
        var password2Value = password2.value;
        if (e) {
            if (passwordValue !== password2Value) {
                makeRed(e);
            }
            else {
                reset(e);
            }
        }
        return passwordValue === password2Value;
    }
    function makeRed(e) {
        var el = e.target;
        el.style.border = "1px solid red";
    }
    function reset(e) {
        var el = e.target;
        el.style.border = "none";
    }
});
//# sourceMappingURL=FormValidation.js.map