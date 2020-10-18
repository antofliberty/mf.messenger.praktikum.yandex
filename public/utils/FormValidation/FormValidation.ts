let form : HTMLFormElement
form = document.getElementsByTagName('form')[0]

form.onsubmit = function (e) {
    e.preventDefault()
    // validatePassword()
    // validateEmail()
}

let email: HTMLInputElement
email = form.querySelector("input[type=email]")

if (email !== null) {
    email.onblur = function () {
        if (email.value.match("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")) {
            console.log('email')
            email.style.border = "none"
        } else {
            console.log("not email")
            email.placeholder = "Неправильный email"
            email.style.border = "2px solid red"
        }
    }

    email.onfocus = function () {
        email.placeholder = "Ваш email"
    }

}


let password: HTMLInputElement
password = form.querySelector("input[type=password]")

if (password !== null) {

    password.onblur = () => {

    }

    password.onfocus = () => {

    }

    function validatePassword(): void {

    }

}

