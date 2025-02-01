(function () {
    var toggleButton = document.getElementById('toggle-skills');
    var skills = document.getElementById('Skills');
    if (toggleButton && skills) {
        toggleButton.addEventListener('click', function () {
            skills.style.display = skills.style.display === 'none' ? 'block' : 'none';
        });
    }
})();
