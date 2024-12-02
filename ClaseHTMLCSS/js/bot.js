const botHTML = `
    <div class="bot-icon">
        <button id="botButton" class="btn btn-primary rounded-circle d-flex justify-content-center align-items-center">
            <i class="fas fa-robot fa-lg"></i>
        </button>
    </div>
    <div id="botContainer" class="bot-container d-none">
        <div class="bot-header">
            <h5>Hola!🫡 En que puedo ayudarte?</h5>
            <button id="closeBot" class="btn-close" aria-label="Cerrar"></button>
        </div>
        <div class="bot-body">
            <p>Tal vez te interese algunos de estos temas:</p>
        </div>
        <div class="help-list">
            <a href="#" class="list-group-item list-group-item-action">
                <i class="bi bi-question-circle"></i>
                Qué es un proveedor?
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <i class="bi bi-question-circle"></i>
                Cómo pagar una factura?
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <i class="bi bi-question-circle"></i>
                Como ver mi factura?
            </a>

        <div class="bot-footer">
            <input type="text" id="botInput" class="form-control" placeholder="Escribí tu mensaje...">
            <button class="btn btn-primary">Enviar</button>
        </div>
    </div>
`;

document.body.insertAdjacentHTML("beforeend", botHTML);

const botButton = document.getElementById('botButton');
const botContainer = document.getElementById('botContainer');
const closeBot = document.getElementById('closeBot');

botButton.addEventListener('click', () => {
    botContainer.classList.toggle('d-none'); 
});

closeBot.addEventListener('click', () => {
    botContainer.classList.add('d-none');
});
