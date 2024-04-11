document.addEventListener('DOMContentLoaded', function() {
    const btnCIT = document.getElementById('btnCIT');
    const btnBUS = document.getElementById('btnBUS');

    btnCIT.addEventListener('click', function() {
        loadStudents('CIT');
    });

    btnBUS.addEventListener('click', function() {
        loadStudents('BUS');
    });
});

function loadStudents(major) {
    fetch('cit5students.json')
        .then(response => response.json())
        .then(data => {
            const filteredStudents = data.filter(student => student.major === major);
            const templateSource = document.getElementById('students-template').innerHTML;
            const template = Handlebars.compile(templateSource);
            const html = template(filteredStudents);
            document.getElementById('students-container').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading the student data:', error);
        });
}
