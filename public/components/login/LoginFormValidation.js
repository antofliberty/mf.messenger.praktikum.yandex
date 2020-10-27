var _this = this;
export default document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('login-form');
    console.log(_this);
    // @ts-ignore
    var fields = document.getElementsByClassName('login-form__input');
    // @ts-ignore
    form.onsubmit = validate;
    var email = fields[0];
    var password = fields[1];
    var emailValue = email.value;
    var passwordValue = password.value;
    email.onblur = validateEmail;
    password.onblur = validatePassword;
    email.onfocus = reset;
    password.onfocus = reset;
    function validate(e) {
        e.preventDefault();
        var isEmailValid = validateEmail();
        var isPasswordValid = validatePassword();
        if (isEmailValid && isPasswordValid) {
            form.submit();
        }
    }
    function validateEmail(e) {
        var match = Boolean(emailValue.match("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])"));
        if (match) {
            reset(e);
        }
        else {
            makeRed(e);
        }
        return match;
    }
    function validatePassword(e) {
        var match = Boolean(passwordValue.match("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"));
        if (match) {
            reset(e);
        }
        else {
            makeRed(e);
        }
        return match;
    }
    function makeRed(e) {
        var el = e.target;
        // @ts-ignore
        el.style.border = "1px solid red";
    }
    function reset(e) {
        var el = e.target;
        el.style.border = "none";
    }
});
//# sourceMappingURL=LoginFormValidation.js.map