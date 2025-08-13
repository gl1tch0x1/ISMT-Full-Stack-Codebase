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

// Close success message when clicking outside (for both contact and login-signup)
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


// login and signup js code

// Tab switching functionality
function switchTab(tabName) {
    // Hide all forms
    const forms = document.querySelectorAll('.auth-form');
    forms.forEach(form => form.classList.remove('active'));
    
    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Show selected form and activate tab
    if (tabName === 'login') {
        document.getElementById('loginForm').classList.add('active');
        document.querySelector('.tab-btn:first-child').classList.add('active');
    } else {
        document.getElementById('signupForm').classList.add('active');
        document.querySelector('.tab-btn:last-child').classList.add('active');
    }
}

// Password visibility toggle
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const button = input.nextElementSibling;
    
    if (input.type === 'password') {
        input.type = 'text';
        button.textContent = '🙈';
    } else {
        input.type = 'password';
        button.textContent = '👁️';
    }
}

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    // Login form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(loginForm);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        if (!data.email || !data.password) {
            showMessage('Please fill in all required fields.');
            return;
        }
        
        // Simulate login process
        showMessage('Login successful! Welcome back to CoffeeStory.', 'Welcome Back!');
        loginForm.reset();
    });

    // Signup form submission
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(signupForm);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        if (!data.fullName || !data.email || !data.password || !data.confirmPassword) {
            showMessage('Please fill in all required fields.');
            return;
        }
        
        if (data.password !== data.confirmPassword) {
            showMessage('Passwords do not match.');
            return;
        }
        
        if (!data.terms) {
            showMessage('Please agree to the terms and conditions.');
            return;
        }
        
        // Simulate signup process
        showMessage('Account created successfully! Welcome to CoffeeStory.', 'Account Created!');
        signupForm.reset();
    });
});

// Show success/error messages for login-signup
function showMessage(message, title = 'Success!') {
    const successMessage = document.getElementById('successMessage');
    const successTitle = document.getElementById('successTitle');
    const successText = document.getElementById('successText');
    
    if (successMessage && successTitle && successText) {
        successTitle.textContent = title;
        successText.textContent = message;
        successMessage.style.display = 'flex';
    }
}

// Close success message for login-signup
function closeSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.style.display = 'none';
    }
}

   
