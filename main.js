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
    submitAlert.classList.remove('invisible')
    const reEmail = /(\w+?@\w+?\x2E.+)/
    if (name.value == "" || email.value == "" || password.value == "" || password1 == "") {
        submitAlert.innerText = "Rellena todos los campos";
    } else if (reEmail.test(email.value) !== true) {
        submitAlert.innerText = "Por favor inserte un correo válido";
    } else if (password.value !== password1.value) {
        submitAlert.innerText = "Contraseña incorrecta";
    } else {
        submitAlert.classList.remove('alert-warning').add('alert-success');
        submitAlert.innerText = `Usuario creado`;
        saveUserObject()
    }
    setTimeout(() => {
        submitAlert.classList.add('invisible');
    }, 3000);

}

function createCard(e) {
    e.preventDefault();
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