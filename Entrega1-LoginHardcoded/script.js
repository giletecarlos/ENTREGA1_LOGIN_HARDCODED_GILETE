function validarForm() {
    var email = btoa(document.getElementById("email").value);
    document.getElementById("email").value = email;
    document.getElementById("email").setAttribute("type", "hidden");

    var password = btoa(document.getElementById("password").value);
    document.getElementById("password").value = password;
    document.getElementById("password").setAttribute("type", "hidden");
}

function buidarCamps() {
    document.getElementById("email").value = null;
    document.getElementById("password").value = null;
}

function usuariIncorrecte() {
    alert("Usuario incorrecto");
    buidarCamps();
}

function campsNoOmplerts() {
    alert("Hay algún campo en blanco. Por favor, introducza su usuario y contraseña");
    buidarCamps();
}
