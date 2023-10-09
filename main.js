const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password1 = document.getElementById("password1");
const myForm = document.getElementById("myForm");
const submitAlert = document.getElementById("submitAlert");
const usersContainer = document.getElementById(
	"usersContainer"
);
const ventajasBtn = document.getElementById("ventajasBtn");
const ventajasText =
	document.getElementById("ventajasText");
const desventajasBtn = document.getElementById(
	"desventajasBtn"
);
const desventajasText = document.getElementById(
	"desventajasText"
);


const allUsers =
	JSON.parse(localStorage.getItem("allUsers")) || [];
const imgLink =
	"https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-backgroun" +
	"d_23-2148902771.jpg?w=1380&t=st=1696513773~exp=1696514373~hmac=ae54a25456b5502c3" +
	"3dc3667df38451d7c7498c06c88d608cb4fc95fffbac0b7";

const saveUserObject = () => {
	const user = {
		name: name.value,
		email: email.value,
		password: password.value,
		password1: password1.value,
	};

	allUsers.push(user);

	localStorage.setItem(
		"allUsers",
		JSON.stringify(allUsers)
	);
};

const createCard = () => {
	if (usersContainer !== null) {
		allUsers.reverse().forEach((user) => {
			usersContainer.innerHTML += `<div class="col-sm-4">
            <div class="card" >
            <img src=${imgLink} class="card-img-top" alt="card-image-1">
            <div class="card-img-overlay text-center">
            <i class="bi bi-person-circle display-1"></i>
            </div>
            <div class="card-body">
            <h5 class="card-title">${user.name}</h5>
            <p class="card-text">${user.email}</p>
            </div>
            </div>
            </div>`;
		});
	}
};

createCard();

const validateData = (e) => {
	e.preventDefault();
	submitAlert.classList.toggle("invisible");
	const classes = [
		"alert-warning",
		"alert-danger",
		"alert-success",
	];
	const reEmail = /(\w+?@\w+?\x2E.+)/;
	const rePassword =
		/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;
	if (
		name.value == "" ||
		email.value == "" ||
		password.value == "" ||
		password1 == ""
	) {
		submitAlert.classList.remove(...classes);
		submitAlert.classList.add("alert-warning");
		submitAlert.innerText = "Rellena todos los campos";
	} else if (reEmail.test(email.value) !== true) {
		submitAlert.classList.remove(...classes);
		submitAlert.classList.add("alert-warning");
		submitAlert.innerText = "Inserte un correo válido.";
	} else if (rePassword.test(password.value) !== true) {
		submitAlert.classList.remove(...classes);
		submitAlert.classList.add("alert-warning");
		submitAlert.innerText =
			"La contraseña debe incluir: un mínimo de 6 caracteres, 1 letra mayúscula, 1 letr" +
			"a minúscula, 1 número, y sin espacios";
	} else if (password.value !== password1.value) {
		submitAlert.classList.remove(...classes);
		submitAlert.classList.add("alert-danger");
		submitAlert.innerText = "Las contraseñas no coinciden.";
	} else {
		submitAlert.classList.remove(...classes);
		submitAlert.classList.add("alert-success");
		submitAlert.innerText = `Usuario creado correctamente.`;
		saveUserObject();
		createCard();
	}
	setTimeout(() => {
		submitAlert.classList.toggle("invisible");
		submitAlert.classList.contains("alert-success")
			? window.location.replace("./usuarios.html")
			: false;
	}, 3000);
};

const ventajasToggle = (e) => {
	e.preventDefault();
	ventajasText.classList.remove("d-none");
	desventajasText.classList.add("d-none");
	ventajasBtn.classList.add("active");
	desventajasBtn.classList.remove("active");
};

const desventajasToggle = (e) => {
	e.preventDefault();
	desventajasText.classList.remove("d-none");
	ventajasText.classList.add("d-none");
	desventajasBtn.classList.add("active");
	ventajasBtn.classList.remove("active");
};

ventajasBtn.addEventListener("click", ventajasToggle);
desventajasBtn.addEventListener("click", desventajasToggle);
myForm.addEventListener("submit", validateData);
