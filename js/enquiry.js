// ENQUIRY FORM JS
// Handles form validation, dynamic summary updates, and submission

// ELEMENT REFERENCES

// Cache all form elements for better performance and cleaner code
const form = document.getElementById('enquiryForm');
const serviceSelect = document.getElementById('service');
const timelineSelect = document.getElementById('timeline');
const budgetInput = document.getElementById('budget');
const contactMethodSelect = document.getElementById('contactMethod');
const phoneGroup = document.getElementById('phoneGroup');
const phoneInput = document.getElementById('phone');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const projectDetailsInput = document.getElementById('projectDetails');
const summaryContent = document.getElementById('summaryContent');

// CONDITIONAL PHONE FIELD LOGIC

// Shows or hides the phone number field based on contact method selection. If user selects "Phone" or "Both", the phone field becomes visible and required

contactMethodSelect.addEventListener('change', function() {
  if (this.value === 'Phone' || this.value === 'Both') {
    // Show phone field and make it required
    phoneGroup.style.display = 'block';
    phoneInput.required = true;
  } else {
    // Hide phone field, make it optional, and clear any entered value
    phoneGroup.style.display = 'none';
    phoneInput.required = false;
    phoneInput.value = '';
    clearError(phoneInput); // Remove any validation errors
  }
});

// REAL-TIME SUMMARY UPDATES
// Update the order summary whenever the user changes service, timeline, or budget. Provides instant feedback on estimated costs
 
serviceSelect.addEventListener('change', updateSummary);
timelineSelect.addEventListener('change', updateSummary);
budgetInput.addEventListener('input', updateSummary);

// REAL-TIME VALIDATION TRIGGERS
// Validate fields when user leaves them (on blur event). Provides immediate feedback without being intrusive while typing

nameInput.addEventListener('blur', () => validateName());
emailInput.addEventListener('blur', () => validateEmail());
projectDetailsInput.addEventListener('blur', () => validateProjectDetails());
budgetInput.addEventListener('blur', () => validateBudget());
phoneInput.addEventListener('blur', () => validatePhone());

// VALIDATION FUNCTIONS
 //Validates the name field. Rules: Required, 2-50 characters, letters and spaces only. @returns {boolean} True if valid, false otherwise
 
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

// Same here... validates the email field. Must be valid email format. @returns {boolean} True if valid, false otherwise

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

// Validates the project details textarea. Rules: Required, 20-500 characters. @returns {boolean} True if valid, false otherwise
 
function validateProjectDetails() {
  const details = projectDetailsInput.value.trim();
  
  // Check if empty
  if (details === '') {
    showError(projectDetailsInput, 'Project details are required');
    return false;
  }
  
  // Check minimum length (ensure sufficient detail)
  if (details.length < 20) {
    showError(projectDetailsInput, 'Please provide at least 20 characters of detail');
    return false;
  }
  
  // Check maximum length
  if (details.length > 500) {
    showError(projectDetailsInput, 'Project details must not exceed 500 characters');
    return false;
  }
  
  // Details are valid
  clearError(projectDetailsInput);
  return true;
}

// Validates the budget field. Rules: Required, must be a number, R5,000 - R10,000,000 range. @returns {boolean} True if valid, false otherwise

function validateBudget() {
  const budget = parseFloat(budgetInput.value);
  
  // Check if value exists and is a valid number
  if (!budgetInput.value || isNaN(budget)) {
    showError(budgetInput, 'Budget is required');
    return false;
  }
  
  // Check minimum budget
  if (budget < 5000) {
    showError(budgetInput, 'Minimum budget is R5,000');
    return false;
  }
  
  // Check maximum budget
  if (budget > 10000000) {
    showError(budgetInput, 'Maximum budget is R10,000,000');
    return false;
  }
  
  // Budget is valid
  clearError(budgetInput);
  return true;
}

//Validates the phone field (conditional validation). Only validates if the phone field is visible/required. Rules: Required when visible, 10-13 digits, optional + prefix. @returns {boolean} True if valid, false otherwise

function validatePhone() {
  // Skip validation if phone field is hidden (not required)
  if (phoneGroup.style.display === 'none') {
    return true;
  }
  
  const phone = phoneInput.value.trim();
  
  // Check if empty (required when visible)
  if (phone === '') {
    showError(phoneInput, 'Phone number is required');
    return false;
  }
  
  // Check phone format: optional +, then 10-13 digits
  const phonePattern = /^[\+]?[0-9]{10,13}$/;
  if (!phonePattern.test(phone)) {
    showError(phoneInput, 'Please enter a valid phone number (10-13 digits)');
    return false;
  }
  
  // Phone is valid
  clearError(phoneInput);
  return true;
}

// Validates the service selection. Rules: Must select a service. @returns {boolean} True if valid, false otherwise
 
function validateService() {
  if (serviceSelect.value === '') {
    showError(serviceSelect, 'Please select a service');
    return false;
  }
  clearError(serviceSelect);
  return true;
}

// Validates the timeline selection. Rules: Must select a timeline. @returns {boolean} True if valid, false otherwise
 
function validateTimeline() {
  if (timelineSelect.value === '') {
    showError(timelineSelect, 'Please select a timeline');
    return false;
  }
  clearError(timelineSelect);
  return true;
}

// Validates the contact method selection. Rules: Must select a contact method. @returns {boolean} True if valid, false otherwise

function validateContactMethod() {
  if (contactMethodSelect.value === '') {
    showError(contactMethodSelect, 'Please select a contact method');
    return false;
  }
  clearError(contactMethodSelect);
  return true;
}

// ERROR DISPLAY FUNCTIONS
// Displays an error message below an input field. Adds error styling to the input and shows a descriptive message
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

 // Removes error message and styling from an input field. Adds success styling to indicate the field is now valid
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

// Handles form submission with validation and email sending. Prevents default form submission to run custom validation first
// Uses Fetch API to submit data to FormSubmit.co
 
form.addEventListener('submit', function(e) {
  // Prevent default form submission to run validation first
  e.preventDefault();
  
  // Run all validation functions and store results
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isServiceValid = validateService();
  const isTimelineValid = validateTimeline();
  const isProjectDetailsValid = validateProjectDetails();
  const isBudgetValid = validateBudget();
  const isContactMethodValid = validateContactMethod();
  const isPhoneValid = validatePhone();
  
  // Check if ALL validations passed
  const isFormValid = isNameValid && isEmailValid && isServiceValid && 
                      isTimelineValid && isProjectDetailsValid && 
                      isBudgetValid && isContactMethodValid && isPhoneValid;
  
  if (isFormValid) {
    // FORM IS VALID - PROCEED WITH SUBMISSION
    
    // Update submit button to show loading state
    const submitButton = form.querySelector('.btn-submit');
    submitButton.textContent = 'Submitting...';
    submitButton.disabled = true;
    
    // Display success message to user
    const successMessage = document.createElement('div');
    successMessage.className = 'success-banner';
    successMessage.innerHTML = `
      <p>✓ Validation successful! Submitting your enquiry...</p>
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
          window.location.href = 'thank-you.html'; 
        }, 1000);
      } else {
        // Server returned an error
        throw new Error('Form submission failed');
      }
    })
    .catch(error => {
      // Handle any errors during submission
      console.error('Error:', error);
      alert('There was an error submitting your enquiry. Please try again or contact us directly.');
      
      // Reset button to allow retry
      submitButton.textContent = 'Request Quote';
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

// DYNAMIC SUMMARY UPDATE FUNCTION
// Updates the order summary box with estimated costs and timeline and calculates cost based on selected service and timeline
// Compares user's budget with estimated cost and provides real-time feedback as user fills the form

function updateSummary() {
  // Get selected service and timeline options
  const service = serviceSelect.options[serviceSelect.selectedIndex];
  const timeline = timelineSelect.options[timelineSelect.selectedIndex];
  const budget = budgetInput.value;
  
  // Show placeholder if service or timeline not selected yet
  if (!service.value || !timeline.value) {
    summaryContent.innerHTML = '<p class="placeholder">Please select a service and timeline to see your quote estimate.</p>';
    return;
  }
  
  // Calculate estimated cost based on service base cost and timeline multiplier
  const baseCost = parseFloat(service.getAttribute('data-base-cost')) || 0;
  const multiplier = parseFloat(timeline.getAttribute('data-multiplier')) || 1;
  const estimatedCost = Math.round(baseCost * multiplier);
  
  // Determine estimated completion time based on timeline selection
  let timelineText = '';
  if (timeline.value.includes('Urgent')) {
    timelineText = '4-6 weeks';
  } else if (timeline.value.includes('Standard')) {
    timelineText = '2-3 months';
  } else {
    timelineText = '3-6 months';
  }
  
  // Compare user's budget with estimated cost
  const budgetValue = parseFloat(budget) || 0;
  let budgetStatus = '';
  if (budgetValue > 0) {
    if (budgetValue >= estimatedCost) {
      // Budget is sufficient
      budgetStatus = '<p class="status-good">✓ Your budget covers the estimated cost</p>';
    } else {
      // Budget is insufficient - show shortfall amount
      const shortfall = estimatedCost - budgetValue;
      budgetStatus = `<p class="status-warning">⚠ Budget may be R${shortfall.toLocaleString()} short of estimate</p>`;
    }
  }
  
  // Build and display the summary HTML
  summaryContent.innerHTML = `
    <div class="summary-details">
      <h3>Quote Estimate</h3>
      
      <div class="summary-item">
        <strong>Service:</strong>
        <span>${service.text}</span>
      </div>
      
      <div class="summary-item">
        <strong>Timeline:</strong>
        <span>${timeline.text}</span>
      </div>
      
      <div class="summary-item">
        <strong>Estimated Completion:</strong>
        <span>${timelineText}</span>
      </div>
      
      <div class="summary-item">
        <strong>Estimated Cost:</strong>
        <span class="price">R${estimatedCost.toLocaleString()}</span>
      </div>
      
      ${budget ? `
        <div class="summary-item">
          <strong>Your Budget:</strong>
          <span>R${parseFloat(budget).toLocaleString()}</span>
        </div>
      ` : ''}
      
      ${budgetStatus}
      
      <div class="summary-note">
        <small>* This is a preliminary estimate. Final quote will be provided after project assessment.</small>
      </div>
    </div>
  `;
}