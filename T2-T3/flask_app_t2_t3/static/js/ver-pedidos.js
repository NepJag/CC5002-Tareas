// Get all the clickable rows
const rows = document.querySelectorAll('.clickable-row');

// Add event listener to each row
rows.forEach(row => {
    row.addEventListener('click', () => {
        // Redirect to informacion-pedido.html
        window.location.href = '/info-pedido/' + row.id;
    });
}); 