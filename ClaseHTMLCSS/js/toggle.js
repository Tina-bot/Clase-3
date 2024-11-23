document.addEventListener('DOMContentLoaded', function () {
    console.log('Toggle menu script cargado'); // Debug
    const toggleBtn = document.querySelector('.toggle-btn');
    const slimMenu = document.querySelector('.slim-menu');

    if (toggleBtn && slimMenu) {
        toggleBtn.addEventListener('click', function () {
            slimMenu.classList.toggle('active');
        });
    }
});
