// CONTACT FORM JS
// Handles form validation, character counting, and submission

// ELEMENT REFERENCES

// Cache all form elements for better performance
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageTypeSelect = document.getElementById('messageType');
const messageInput = document.getElementById('message');
const charCount = document.querySelector('.char-count');

// CHARACTER COUNTER FOR MESSAGE FIELD
// Updates character count in real-time as user types in message field and changes colour to red when approaching the 1000 character limit.
// Provides visual feedback to prevent users from exceeding max length

messageInput.addEventListener('input', function() {
  const currentLength = this.value.length;
  
  // Update counter display
  charCount.textContent = `${currentLength} / 1000 characters`;
  
  // Change color to red when user is close to limit (900+ characters)
  if (currentLength > 900) {
    charCount.style.color = '#ff6b6b';
  } else {
    charCount.style.color = '#666';
  }
});

// REAL-TIME VALIDATION TRIGGERS
// Validate fields when user leaves them (on blur event) and provides immediate feedback without being intrusive while typing

nameInput.addEventListener('blur', () => validateName());
emailInput.addEventListener('blur', () => validateEmail());
phoneInput.addEventListener('blur', () => validatePhone());
messageInput.addEventListener('blur', () => validateMessage());
messageTypeSelect.addEventListener('blur', () => validateMessageType());

// VALIDATION FUNCTIONS

//Validates the name field
// Required, 2-50 characters, letters and spaces only
// @returns {boolean} True if valid, false otherwise
 
function validateName() {
  const name = nameInput.value.trim();
  
  // Check if empty
  if (name === '') {
    showError(nameInput, 'Name is required');
    return false;
  }
  
  // Check minimum length
  if (name.length < 2) {
    showError(nameInput, 'Name must be at least 2 characters');
    return false;
  }
  
  // Check maximum length
  if (name.length > 50) {
    showError(nameInput, 'Name must not exceed 50 characters');
    return false;
  }
  
  // Check for valid characters (letters and spaces only)
  const namePattern = /^[A-Za-z\s]+$/;
  if (!namePattern.test(name)) {
    showError(nameInput, 'Name can only contain letters and spaces');
    return false;
  }
  
  // All checks passed
  clearError(nameInput);
  return true;
}

// Validates the email field. its ALLLLLLL basically the same as before!

function validateEmail() {
  const email = emailInput.value.trim();
  
  // Check if empty
  if (email === '') {
    showError(emailInput, 'Email is required');
    return false;
  }
  
  // Check email format using regex pattern
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    showError(emailInput, 'Please enter a valid email address');
    return false;
  }
  
  // Email is valid
  clearError(emailInput);
  return true;
}

// Validates the phone field

function validatePhone() {
  const phone = phoneInput.value.trim();
  
  // Phone is optional - empty is valid
  if (phone === '') {
    clearError(phoneInput);
    return true;
  }
  
  // If user entered something, validate the format
  const phonePattern = /^[\+]?[0-9]{10,13}$/;
  if (!phonePattern.test(phone)) {
    showError(phoneInput, 'Please enter a valid phone number (10-13 digits)');
    return false;
  }
  
  // Phone is valid
  clearError(phoneInput);
  return true;
}

//Validates the message type selection
 
function validateMessageType() {
  if (messageTypeSelect.value === '') {
    showError(messageTypeSelect, 'Please select a message type');
    return false;
  }
  clearError(messageTypeSelect);
  return true;
}

// Validates the message textarea

function validateMessage() {
  const message = messageInput.value.trim();
  
  // Check if empty
  if (message === '') {
    showError(messageInput, 'Message is required');
    return false;
  }
  
  // Check minimum length (ensure meaningful message)
  if (message.length < 10) {
    showError(messageInput, 'Message must be at least 10 characters');
    return false;
  }
  
  // Check maximum length
  if (message.length > 1000) {
    showError(messageInput, 'Message must not exceed 1000 characters');
    return false;
  }
  
  // Message is valid
  clearError(messageInput);
  return true;
}

// ERROR DISPLAY FUNCTIONS

// Displays an error message below an input field and adds error styling to the input and shows a descriptive message
// @param {HTMLElement} input - The form input element
// @param {string} message - The error message to display

function showError(input, message) {
  const formGroup = input.closest('.form-group');
  
  // Remove any existing error message to avoid duplicates
  const existingError = formGroup.querySelector('.error-message');
  if (existingError) {
    existingError.remove();
  }
  
  // Apply error styling to input field (red border)
  input.classList.add('error');
  input.classList.remove('success');
  
  // Create and display error message element
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.textContent = message;
  formGroup.appendChild(errorDiv);
}

 // Removes error message and styling from an input field and adds success styling to indicate the field is now valid
 // @param {HTMLElement} input - The form input element
 
function clearError(input) {
  const formGroup = input.closest('.form-group');
  
  // Remove error message if it exists
  const existingError = formGroup.querySelector('.error-message');
  if (existingError) {
    existingError.remove();
  }
  
  // Remove error styling and add success styling (green border)
  input.classList.remove('error');
  input.classList.add('success');
}

// FORM SUBMISSION HANDLER

// Handles form submission with validation and email sending and prevents default form submission to run custom validation first
// Uses Fetch API to submit data to FormSubmit.co

form.addEventListener('submit', function(e) {
  // Prevent default form submission to run validation first
  e.preventDefault();
  
  // Run all validation functions and store results
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isMessageTypeValid = validateMessageType();
  const isMessageValid = validateMessage();
  
  // Check if ALL validations passed
  const isFormValid = isNameValid && isEmailValid && isPhoneValid && 
                      isMessageTypeValid && isMessageValid;
  
  if (isFormValid) {
    // FORM IS VALID - PROCEED WITH SUBMISSION 
    
    // Update submit button to show loading state
    const submitButton = form.querySelector('.btn-submit');
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Display success message to user
    const successMessage = document.createElement('div');
    successMessage.className = 'success-banner';
    successMessage.innerHTML = `
      <p>✓ Validation successful! Sending your message...</p>
    `;
    form.insertBefore(successMessage, form.firstChild);
    
    // Prepare form data for submission
    const formData = new FormData(form);
    
    // Submit to FormSubmit.co using Fetch API
    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        // Submission successful - redirect to thank you page
        setTimeout(() => {
          window.location.href = 'thankYou.html'; 
        }, 1000);
      } else {
        // Server returned an error
        throw new Error('Form submission failed');
      }
    })
    .catch(error => {
      // Handle any errors during submission
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again or contact us directly at projectconsulting@devcon.co.za');
      
      // Reset button to allow retry
      submitButton.textContent = 'Send Message';
      submitButton.disabled = false;
      successMessage.remove();
    });
    
  } else {
    // FORM HAS ERRORS - SHOW ERROR MESSAGE
    
    // Create error banner
    const errorBanner = document.createElement('div');
    errorBanner.className = 'error-banner';
    errorBanner.innerHTML = `
      <p>⚠ Please fix the errors above before submitting</p>
    `;
    
    // Remove existing error banner if present (avoid duplicates)
    const existingBanner = form.querySelector('.error-banner');
    if (existingBanner) {
      existingBanner.remove();
    }
    
    // Insert error banner at top of form
    form.insertBefore(errorBanner, form.firstChild);
    
    // Scroll to first error field for better UX
    const firstError = form.querySelector('.error');
    if (firstError) {
      firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      firstError.focus();
    }
    
    // Auto-remove error banner after 5 seconds
    setTimeout(() => {
      errorBanner.remove();
    }, 5000);
  }
});