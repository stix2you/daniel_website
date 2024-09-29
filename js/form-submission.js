document.getElementById('submissionForm').onsubmit = function (event) {
   event.preventDefault(); // Prevent form from submitting normally
   updatePhoneValidation(); // Ensure phone validation is updated on submission
   var phoneInput = document.getElementById('contact-phone');

   if (!phoneInput.checkValidity()) {
       phoneInput.reportValidity(); // Show the custom error message if the phone number is invalid
       return; // Prevent form submission if phone number is invalid
   }

   var formData = new FormData(this); // Capture form data

   // AJAX request to the GetForm endpoint
   fetch(this.action, {
       method: 'POST',
       body: formData,
   })
   .then(response => {
       // Show the modal on successful submission
       document.getElementById('thankYouModal').style.display = 'block';
   })
   .catch(error => console.error('Error:', error));

   // Function to close the modal
   window.closeModal = function () {
       document.getElementById('thankYouModal').style.display = 'none';
   }
};

// Update validation for phone number based on the checkbox
document.getElementById('contact-phone').addEventListener('input', updatePhoneValidation);
document.getElementById('non-us').addEventListener('change', updatePhoneValidation);

function updatePhoneValidation() {
   var phoneInput = document.getElementById('contact-phone');
   var isNonUS = document.getElementById('non-us').checked;
   if (isNonUS) {
       phoneInput.removeAttribute('pattern'); // Remove the pattern attribute when Non-US is checked
       phoneInput.setCustomValidity(''); // Clear any custom validation messages
   } else {
       phoneInput.setAttribute('pattern', '\\d{3}-\\d{3}-\\d{4}'); // Reinstate the pattern attribute
       var phonePattern = /^\d{3}-\d{3}-\d{4}$/;
       if (phoneInput.value.match(phonePattern)) {
           phoneInput.setCustomValidity('');
       } else {
           phoneInput.setCustomValidity('Please match the format: xxx-xxx-xxxx');
       }
   }
}