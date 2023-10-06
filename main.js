const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password1 = document.getElementById('password1');
const myForm = document.getElementById('myForm');
const submitAlert = document.getElementById('submitAlert')
const usersContainer = document.getElementById('usertsContainer');

const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];



function saveUserObject() {
    const user = {
        name: name.value,
        email: email.value,
        password: password.value,
        password1: password1.value
    };

    allUsers.push(user);

    localStorage.setItem('allUsers', JSON.stringify(allUsers));
}

function validateData(e) {
    e.preventDefault();
    submitAlert.classList.toggle('invisible');
    const classes = ['alert-warning', 'alert-danger', 'alert-success'];
    const reEmail = /(\w+?@\w+?\x2E.+)/;
    const rePassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;
    if (name.value == "" || email.value == "" || password.value == "" || password1 == "") {
        submitAlert.classList.remove(...classes);
        submitAlert.classList.add('alert-warning');
        submitAlert.innerText = "Rellena todos los campos";
    } else if (reEmail.test(email.value) !== true) {
        submitAlert.classList.remove(...classes);
        submitAlert.classList.add('alert-warning');
        submitAlert.innerText = "Inserte un correo válido.";
    } else if (rePassword.test(password.value) !== true) {
        submitAlert.classList.remove(...classes);
        submitAlert.classList.add('alert-warning');
        submitAlert.innerText = "La contraseña debe incluir: un mínimo de 6 caracteres, 1 letra mayúscula, 1 letra minúscula, 1 número, y sin espacios";
    } else if (password.value !== password1.value) {
        submitAlert.classList.remove(...classes);
        submitAlert.classList.add('alert-danger');
        submitAlert.innerText = "Las contraseñas no coinciden.";
    } else {
        submitAlert.classList.remove(...classes);
        submitAlert.classList.add('alert-success');
        submitAlert.innerText = `Usuario creado correctamente.`;
        saveUserObject()
        // createCard()

    }
    setTimeout(() => {
        submitAlert.classList.contains('alert-success') ? window.location.replace('./usuarios.html'):false;
        submitAlert.classList.toggle('invisible');
    }, 3000);

}

function createCard() {
    const savedUsers = JSON.parse(localStorage.getItem("allUsers"));

    usersContainer.innerHTML +=
        `<div class="card" style="width: 18rem;">
            <img src="${savedUsers[i].link}"
                class="card-img-top" alt="card-image-1">
            <div class="card-body">
                <h5 class="card-title">${savedUsers[i].name}}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's
                    content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`
}

myForm.addEventListener('submit', validateData);