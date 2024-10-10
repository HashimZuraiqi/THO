// Smooth Scrolling for anchor links in the navbar
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Smooth scroll to target section
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Select form elements
const form = document.querySelector("form");
const fullNameEn = document.getElementById("fullname-en");
const fullNameAr = document.getElementById("fullname-ar");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const websiteType = document.querySelector('input[name="website-type"]:checked');
const template = document.getElementById("template");
const background = document.getElementById("background");
const instagram = document.getElementById("instagram");
const github = document.getElementById("github");
const twitter = document.getElementById("twitter");
const linkedin = document.getElementById("linkedin");

// Email sending function using ElasticEmail
function sendEmail(formData) {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "tho.customer.services@gmail.com",
        Password: "8AA07B848EA93B92F40049974606311627F4",
        To: 'tho.customer.services@gmail.com',
        From: "tho.customer.services@gmail.com",
        Subject: `New Website Development Request from ${formData.fullNameEn}`,
        Body: `
            <h2>Website Development Request</h2>
            <p><strong>Full Name (English):</strong> ${formData.fullNameEn}</p>
            <p><strong>Full Name (Arabic):</strong> ${formData.fullNameAr}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone Number:</strong> ${formData.phone}</p>
            <p><strong>Template Chosen:</strong> ${formData.template}</p>
            <p><strong>Professional Background:</strong> ${formData.background}</p>
            <p><strong>Instagram:</strong> ${formData.instagram || 'N/A'}</p>
            <p><strong>GitHub:</strong> ${formData.github || 'N/A'}</p>
            <p><strong>Twitter:</strong> ${formData.twitter || 'N/A'}</p>
            <p><strong>LinkedIn:</strong> ${formData.linkedin || 'N/A'}</p>
        `
    }).then(
        message => {
            if(message == 'OK')
            {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully! we'll reach out to you via the provided phone number with next steps for your website.",
                    icon: "success"
                  });
            }
        }
    );
}

// Form submission handler
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Collect all the form data
    const formData = {
        fullNameEn: fullNameEn.value.trim(),
        fullNameAr: fullNameAr.value.trim(),
        email: email.value.trim(),
        phone: phone.value.trim(),
        websiteType: document.querySelector('input[name="website-type"]:checked').value,
        template: template.value,
        background: background.value.trim(),
        instagram: instagram.value.trim(),
        github: github.value.trim(),
        twitter: twitter.value.trim(),
        linkedin: linkedin.value.trim(),
    };

    // Basic validation to ensure all required fields are filled
    if (!formData.fullNameEn || !formData.fullNameAr || !formData.email || !formData.phone || !formData.websiteType || !formData.template || !formData.background) {
        alert("Please fill out all the required fields.");
        return;
    }

    // Send email with the collected form data
    sendEmail(formData);
});