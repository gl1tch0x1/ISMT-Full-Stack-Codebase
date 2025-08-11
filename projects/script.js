// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.firstName || !data.lastName || !data.email || !data.subject || !data.message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Show success message
            showSuccessMessage();
            
            // Reset form
            contactForm.reset();
        });
    }
});

function showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.style.display = 'flex';
    }
}

function closeSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.style.display = 'none';
    }
}

// Close success message when clicking outside
document.addEventListener('click', function(e) {
    const successMessage = document.getElementById('successMessage');
    if (successMessage && e.target === successMessage) {
        closeSuccessMessage();
    }
});

// Existing popup function
function showPopup() {
    document.getElementById("thankYouPopup").style.display = "block";
    setTimeout(function(){
        document.getElementById("thankYouPopup").style.display = "none";
    }, 2000);
}
