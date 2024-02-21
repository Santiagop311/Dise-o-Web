function toggleSection(sectionId) {
    var sections = document.querySelectorAll('main section');
    sections.forEach(function (section) {
        section.classList.remove('active');
    });

    var section = document.getElementById(sectionId);
    section.classList.add('active');
}

