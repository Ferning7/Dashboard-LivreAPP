const input = document.querySelector('.search input');
const clients = document.querySelectorAll('.client');

input.addEventListener('input', () => {
    const term = input.value.toLowerCase();

    clients.forEach(client => {
        const text = client.innerText.toLowerCase();

        // Se o nome OU o documento contém o termo digitado → mostra
        if (text.includes(term)) {
            client.style.display = 'flex';
        } else {
            client.style.display = 'none';
        }
    });
});
