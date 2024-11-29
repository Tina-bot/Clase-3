document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const companyName = document.getElementById("company-name");
    const userName = document.getElementById("username");
    const email = document.getElementById("email");
    const btnSend = document.getAnimations("btn-send");
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;


    const errores = {
        companyName: "El nombre de la empresa no puede estar vacio",
        userName: "Tu usuario no puede estar vacio.",
        email: "El email debe ser valido (incluye @ y .)",
        password: "Las constraseñas no coinciden."
    };

    const validarFormulario = () => {
        const companyNameValido = companyName.value.trim() !== "";
        const userNameValido = userName.value.trim() !== "";
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
        const contraseñasCoinciden = password.value === confirmPassword.value;

        btnSend.disabled = !(companyNameValido && userNameValido && emailValido && contraseñasCoinciden);
        /* no me convence, poner cada error en su cajita despues*/
        return contraseñasCoinciden;
    };

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const contraseñasCoinciden = validarFormulario();

        if (!contraseñasCoinciden) {
            alert(errores.password);
        } else {
            alert("Formulario enviado!");
        }
    });
});
