// Get form elements
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

// Show/hide phone field based on contact method
contactMethodSelect.addEventListener('change', function() {
  if (this.value === 'Phone' || this.value === 'Both') {
    phoneGroup.style.display = 'block';
    phoneInput.required = true;
  } else {
    phoneGroup.style.display = 'none';
    phoneInput.required = false;
    phoneInput.value = ''; // Clear phone value
    clearError(phoneInput);
  }
});

// Update summary when fields change
serviceSelect.addEventListener('change', updateSummary);
timelineSelect.addEventListener('change', updateSummary);
budgetInput.addEventListener('input', updateSummary);

// Real-time validation as user types
nameInput.addEventListener('blur', () => validateName());
emailInput.addEventListener('blur', () => validateEmail());
projectDetailsInput.addEventListener('blur', () => validateProjectDetails());
budgetInput.addEventListener('blur', () => validateBudget());
phoneInput.addEventListener('blur', () => validatePhone());

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
  
  // Check if name contains only letters and spaces
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
  
  // Email pattern validation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    showError(emailInput, 'Please enter a valid email address');
    return false;
  }
  
  clearError(emailInput);
  return true;
}

function validateProjectDetails() {
  const details = projectDetailsInput.value.trim();
  
  if (details === '') {
    showError(projectDetailsInput, 'Project details are required');
    return false;
  }
  
  if (details.length < 20) {
    showError(projectDetailsInput, 'Please provide at least 20 characters of detail');
    return false;
  }
  
  if (details.length > 500) {
    showError(projectDetailsInput, 'Project details must not exceed 500 characters');
    return false;
  }
  
  clearError(projectDetailsInput);
  return true;
}

function validateBudget() {
  const budget = parseFloat(budgetInput.value);
  
  if (!budgetInput.value || isNaN(budget)) {
    showError(budgetInput, 'Budget is required');
    return false;
  }
  
  if (budget < 5000) {
    showError(budgetInput, 'Minimum budget is R5,000');
    return false;
  }
  
  if (budget > 10000000) {
    showError(budgetInput, 'Maximum budget is R10,000,000');
    return false;
  }
  
  clearError(budgetInput);
  return true;
}

function validatePhone() {
  // Only validate if phone field is visible and required
  if (phoneGroup.style.display === 'none') {
    return true;
  }
  
  const phone = phoneInput.value.trim();
  
  if (phone === '') {
    showError(phoneInput, 'Phone number is required');
    return false;
  }
  
  // Phone pattern: optional +, then 10-13 digits
  const phonePattern = /^[\+]?[0-9]{10,13}$/;
  if (!phonePattern.test(phone)) {
    showError(phoneInput, 'Please enter a valid phone number (10-13 digits)');
    return false;
  }
  
  clearError(phoneInput);
  return true;
}

function validateService() {
  if (serviceSelect.value === '') {
    showError(serviceSelect, 'Please select a service');
    return false;
  }
  clearError(serviceSelect);
  return true;
}

function validateTimeline() {
  if (timelineSelect.value === '') {
    showError(timelineSelect, 'Please select a timeline');
    return false;
  }
  clearError(timelineSelect);
  return true;
}

function validateContactMethod() {
  if (contactMethodSelect.value === '') {
    showError(contactMethodSelect, 'Please select a contact method');
    return false;
  }
  clearError(contactMethodSelect);
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

// FORM SUBMISSION HANDLER WITH MANUAL REDIRECT
form.addEventListener('submit', function(e) {
  // Always prevent default submission
  e.preventDefault();
  
  // Run all validations
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isServiceValid = validateService();
  const isTimelineValid = validateTimeline();
  const isProjectDetailsValid = validateProjectDetails();
  const isBudgetValid = validateBudget();
  const isContactMethodValid = validateContactMethod();
  const isPhoneValid = validatePhone();
  
  // Check if all validations passed
  const isFormValid = isNameValid && isEmailValid && isServiceValid && 
                      isTimelineValid && isProjectDetailsValid && 
                      isBudgetValid && isContactMethodValid && isPhoneValid;
  
  if (isFormValid) {
    // Show loading state
    const submitButton = form.querySelector('.btn-submit');
    submitButton.textContent = 'Submitting...';
    submitButton.disabled = true;
    
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'success-banner';
    successMessage.innerHTML = `
      <p>✓ Validation successful! Submitting your enquiry...</p>
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
        // Redirect to your custom thank you page after 1 second
        setTimeout(() => {
          window.location.href = 'thankYou.html';
        }, 1000);
      } else {
        throw new Error('Form submission failed');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error submitting your enquiry. Please try again or contact us directly.');
      submitButton.textContent = 'Request Quote';
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

// UPDATE SUMMARY FUNCTION (same as before)

function updateSummary() {
  const service = serviceSelect.options[serviceSelect.selectedIndex];
  const timeline = timelineSelect.options[timelineSelect.selectedIndex];
  const budget = budgetInput.value;
  
  if (!service.value || !timeline.value) {
    summaryContent.innerHTML = '<p class="placeholder">Please select a service and timeline to see your quote estimate.</p>';
    return;
  }
  
  const baseCost = parseFloat(service.getAttribute('data-base-cost')) || 0;
  const multiplier = parseFloat(timeline.getAttribute('data-multiplier')) || 1;
  const estimatedCost = Math.round(baseCost * multiplier);
  
  let timelineText = '';
  if (timeline.value.includes('Urgent')) {
    timelineText = '4-6 weeks';
  } else if (timeline.value.includes('Standard')) {
    timelineText = '2-3 months';
  } else {
    timelineText = '3-6 months';
  }
  
  const budgetValue = parseFloat(budget) || 0;
  let budgetStatus = '';
  if (budgetValue > 0) {
    if (budgetValue >= estimatedCost) {
      budgetStatus = '<p class="status-good">✓ Your budget covers the estimated cost</p>';
    } else {
      const shortfall = estimatedCost - budgetValue;
      budgetStatus = `<p class="status-warning">⚠ Budget may be R${shortfall.toLocaleString()} short of estimate</p>`;
    }
  }
  
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