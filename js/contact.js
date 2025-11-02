// Get form elements
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageTypeSelect = document.getElementById('messageType');
const messageInput = document.getElementById('message');
const charCount = document.querySelector('.char-count');

// Character counter for message
messageInput.addEventListener('input', function() {
  const currentLength = this.value.length;
  charCount.textContent = `${currentLength} / 1000 characters`;
  
  if (currentLength > 900) {
    charCount.style.color = '#ff6b6b';
  } else {
    charCount.style.color = '#666';
  }
});

// Real-time validation as user types
nameInput.addEventListener('blur', () => validateName());
emailInput.addEventListener('blur', () => validateEmail());
phoneInput.addEventListener('blur', () => validatePhone());
messageInput.addEventListener('blur', () => validateMessage());
messageTypeSelect.addEventListener('blur', () => validateMessageType());

// VALIDATION FUNCTIONS

function validateName() {
  const name = nameInput.value.trim();
  
  if (name === '') {
    showError(nameInput, 'Name is required');
    return false;
  }
  
  if (name.length < 2) {
    showError(nameInput, 'Name must be at least 2 characters');
    return false;
  }
  
  if (name.length > 50) {
    showError(nameInput, 'Name must not exceed 50 characters');
    return false;
  }
  
  const namePattern = /^[A-Za-z\s]+$/;
  if (!namePattern.test(name)) {
    showError(nameInput, 'Name can only contain letters and spaces');
    return false;
  }
  
  clearError(nameInput);
  return true;
}

function validateEmail() {
  const email = emailInput.value.trim();
  
  if (email === '') {
    showError(emailInput, 'Email is required');
    return false;
  }
  
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    showError(emailInput, 'Please enter a valid email address');
    return false;
  }
  
  clearError(emailInput);
  return true;
}

function validatePhone() {
  const phone = phoneInput.value.trim();
  
  // Phone is optional, so if empty it's valid
  if (phone === '') {
    clearError(phoneInput);
    return true;
  }
  
  const phonePattern = /^[\+]?[0-9]{10,13}$/;
  if (!phonePattern.test(phone)) {
    showError(phoneInput, 'Please enter a valid phone number (10-13 digits)');
    return false;
  }
  
  clearError(phoneInput);
  return true;
}

function validateMessageType() {
  if (messageTypeSelect.value === '') {
    showError(messageTypeSelect, 'Please select a message type');
    return false;
  }
  clearError(messageTypeSelect);
  return true;
}

function validateMessage() {
  const message = messageInput.value.trim();
  
  if (message === '') {
    showError(messageInput, 'Message is required');
    return false;
  }
  
  if (message.length < 10) {
    showError(messageInput, 'Message must be at least 10 characters');
    return false;
  }
  
  if (message.length > 1000) {
    showError(messageInput, 'Message must not exceed 1000 characters');
    return false;
  }
  
  clearError(messageInput);
  return true;
}

// ERROR DISPLAY FUNCTIONS

function showError(input, message) {
  const formGroup = input.closest('.form-group');
  
  // Remove existing error if present
  const existingError = formGroup.querySelector('.error-message');
  if (existingError) {
    existingError.remove();
  }
  
  // Add error styling to input
  input.classList.add('error');
  input.classList.remove('success');
  
  // Create and add error message
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.textContent = message;
  formGroup.appendChild(errorDiv);
}

function clearError(input) {
  const formGroup = input.closest('.form-group');
  
  // Remove error message
  const existingError = formGroup.querySelector('.error-message');
  if (existingError) {
    existingError.remove();
  }
  
  // Remove error styling and add success styling
  input.classList.remove('error');
  input.classList.add('success');
}

// FORM SUBMISSION HANDLER

form.addEventListener('submit', function(e) {
  // Prevent default submission
  e.preventDefault();
  
  // Run all validations
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isMessageTypeValid = validateMessageType();
  const isMessageValid = validateMessage();
  
  // Check if all validations passed
  const isFormValid = isNameValid && isEmailValid && isPhoneValid && 
                      isMessageTypeValid && isMessageValid;
  
  if (isFormValid) {
    // Show loading state
    const submitButton = form.querySelector('.btn-submit');
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'success-banner';
    successMessage.innerHTML = `
      <p>✓ Validation successful! Sending your message...</p>
    `;
    form.insertBefore(successMessage, form.firstChild);
    
    // Get form data
    const formData = new FormData(form);
    
    // Submit to FormSubmit using Fetch API
    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        // Redirect to thank you page after 1 second
        setTimeout(() => {
          window.location.href = 'thankYou.html';
        }, 1000);
      } else {
        throw new Error('Form submission failed');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again or contact us directly at projectconsulting@devcon.co.za');
      submitButton.textContent = 'Send Message';
      submitButton.disabled = false;
      successMessage.remove();
    });
    
  } else {
    // Show error banner
    const errorBanner = document.createElement('div');
    errorBanner.className = 'error-banner';
    errorBanner.innerHTML = `
      <p>⚠ Please fix the errors above before submitting</p>
    `;
    
    // Remove existing banner if present
    const existingBanner = form.querySelector('.error-banner');
    if (existingBanner) {
      existingBanner.remove();
    }
    
    form.insertBefore(errorBanner, form.firstChild);
    
    // Scroll to first error
    const firstError = form.querySelector('.error');
    if (firstError) {
      firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      firstError.focus();
    }
    
    // Remove error banner after 5 seconds
    setTimeout(() => {
      errorBanner.remove();
    }, 5000);
  }
});