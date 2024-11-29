document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;


        if (password !== confirmPassword) {
            e.preventDefault();
            alert("Las contraseñas no coinciden. Por favor, revisalas.");
        }
    });
});
