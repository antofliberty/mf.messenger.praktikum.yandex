let form = document.getElementsByTagName('form')[0]
let submit = document.getElementsByName('submit')[0]


form.onsubmit = function (e) {
    console.log('submit')
    e.preventDefault()
    validatePassword()
    validateEmail()
    validateTwoPasswords()
}

let email = form.querySelector("input[type=email]")


if (email !== null) {
    email.onblur = function () {
        validateEmail()
    }

    email.onfocus = function () {
        email.placeholder = "Ваш email"
    }

}

function validateEmail() {
    if (email.value.match("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")) {
        console.log('email')
        email.style.border = "none"
    } else {
        console.log("not email")
        email.placeholder = "Неправильный email"
        email.style.border = "2px solid red"
    }
}


let password = form.querySelector("input[type=password]")

if (password !== null) {

    password.onblur = () => {
        validatePassword()
    }

    password.onfocus = () => {
        password.placeholder = "Ваш пароль"
    }
}

function validatePassword() {
    if (password.value.match('(?=^.{6,}$)')) {
        password.style.border = "none"
    } else {
        password.placeholder = "Придумайте пароль сложнее"
        password.style.border = "2px solid red"
    }
}



let password2 = form.querySelector("input[name=password2]")

function validateTwoPasswords() {
    if (password.value !== password2.value) {
        password2.placeholder = "Пароли не совпадают"
    }
}

export default form