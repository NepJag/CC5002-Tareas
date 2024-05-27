// Get all the clickable rows
const rows = document.querySelectorAll('.clickable-row');

// Add event listener to each row
rows.forEach(row => {
    row.addEventListener('click', () => {
        // Redirect to informacion-producto.html
        window.location.href = 'informacion-producto.html';
    });
}); 