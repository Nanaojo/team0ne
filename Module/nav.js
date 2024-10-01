// Load the navbar HTML
document.addEventListener("DOMContentLoaded", function() {
    fetch('../../component')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));
});