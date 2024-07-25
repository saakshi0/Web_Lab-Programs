function validateAndDisplay() {
    // Reset previous errors
    resetErrors();

    // Get form input values
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var mobile = document.getElementById('mobile').value.trim();
    var gender = document.getElementById('gender').value.trim();
    var color = document.getElementById('color').value.trim();

    // Validation flags
    var isValid = true;

    // Validate Name
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }

    // Validate Email
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format';
        isValid = false;
    }

    // Validate Mobile No
    if (mobile === '') {
        document.getElementById('mobileError').textContent = 'Mobile No is required';
        isValid = false;
    } else if (!isValidMobile(mobile)) {
        document.getElementById('mobileError').textContent = 'Invalid mobile number';
        isValid = false;
    }

    // Validate Gender
    if (gender === '') {
        document.getElementById('genderError').textContent = 'Gender is required';
        isValid = false;
    }

    // Validate Favorite Color
    if (color === '') {
        document.getElementById('colorError').textContent = 'Favorite Color is required';
        isValid = false;
    }

    // Display combined information if valid
    if (isValid) {
        var combinedInfo = `Name: ${name}\nEmail: ${email}\nMobile No: ${mobile}\nGender: ${gender}\nFavorite Color: ${color}`;
        document.getElementById('combinedInfo').value = combinedInfo; //.value or .textContent
    }
}

function resetErrors() {
    // Reset all error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('mobileError').textContent = '';
    document.getElementById('genderError').textContent = '';
    document.getElementById('colorError').textContent = '';
}

function isValidEmail(email) {
    // Basic email validation using regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidMobile(mobile) {
    // Mobile number validation (10 digits)
    var mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(mobile);
}
