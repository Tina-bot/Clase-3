let prov = [];

fetch('../data/prov.json')
    .then(response => response.json())
    .then(data => {
        prov = data;
        renderProv();
    });
    
function renderProv() {
    const tbody = document.getElementById('provTable');
    tbody.innerHTML = '';

    prov.forEach((provider, index) => {
        tbody.innerHTML += `
                <tr>
                    <td>${provider.name}</td>
                    <td>${provider.category}</td>
                    <td>${provider.phone}</td>
                    <td>${provider.email}</td>
                    <td>${provider.pendingPayment}</td>
                    <td>
                        <button class="btn btn-outline-primary btn-sm" onclick="editProv(${index})">
                            <i class="fa fa-pencil-alt"></i>
                        </button>
                        <button class="btn btn-outline-danger btn-sm" onclick="deleteProv(${index})">
                            <i class="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>`;
    });
}

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const newProv = {
        name: document.getElementById('name').value,
        category: document.getElementById('category').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        pendingPayment: "No"
    };
    prov.push(newProv);
    renderProv();
    e.target.reset();
});

function editProv(index) {
    const provider = prov[index];
    document.getElementById('name').value = provider.name;
    document.getElementById('category').value = provider.category;
    document.getElementById('phone').value = provider.phone;
    document.getElementById('email').value = provider.email;

    prov.splice(index, 1);
}

function deleteProv(index) {
    prov.splice(index, 1);
    renderProv();
}
