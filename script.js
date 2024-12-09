// get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    //  Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume content dynamically
    var resumeHTML = "\n    <h2> <br> Resume </b> <h2>\n    <h3><br> Personal Information</h3>\n    <p><br>Name: </br>".concat(name, " <p>\n    <p><br>Email: </br>").concat(email, " <p>\n    <p><b>Phone: </br>").concat(phone, " <p>\n\n    <h3>Education</h3>\n    <p>").concat(education, " <p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, " <p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, " <p>\n    ");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
