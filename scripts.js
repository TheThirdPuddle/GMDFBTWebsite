document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-sidebar');
    const sidebar = document.querySelector('.sidebar');

    toggleButton.addEventListener('click', function() {
        if (sidebar.style.display === 'block') {
            sidebar.style.display = 'none';
            toggleButton.textContent = '☰';
        } else {
            sidebar.style.display = 'block';
            toggleButton.textContent = '✖';
        }
    });
});
