const { isEmpty } = require('./validationService');

function validateFname(fname) {
  return isEmpty(fname) ? 'Firstname is require' : '';
}

function validateLname(lname) {
  return isEmpty(lname) ? 'Lastname is require' : '';
}

function validateWeight(weight) {
  if (isEmpty(weight)) {
    return 'Weight is Require';
  } else if (isNaN(weight)) {
    return 'Weight must be a number';
  }
  return '';
}

function validateHeight(height) {
  if (isEmpty(height)) {
    return 'Height is Require';
  } else if (isNaN(height)) {
    return 'Height must be a number';
  }
  return '';
}

function validatePhoneNumber(phoneNumber, isSubmit) {
  if (isEmpty(phoneNumber)) {
    return 'PhoneNumber is Require';
  } else if (isNaN(phoneNumber)) {
    return 'PhoneNumber must be a number';
  } else if (+phoneNumber.length !== 10 && isSubmit) {
    return 'Invalid lenght';
  }
  return '';
}

function validateTypeOfFood(type) {
  if (isEmpty(type)) {
    return 'Please Select Types of Food';
  }
  return '';
}

function validateDisease(disease) {
  const { haveDisease, message } = disease;
  if (isEmpty(haveDisease)) {
    return 'Please select disease';
  } else if (isEmpty(message) && haveDisease === 'yes') {
    return 'Disease is require';
  }
  return '';
}

function validateGender(gender) {
  if (isEmpty(gender)) {
    return 'Please Select Gender';
  }
  return '';
}
function validateDate(date) {
  if (!date) {
    return 'Date to start is invalid';
  }
  return '';
}

export {
  validateWeight,
  validateLname,
  validateHeight,
  validateFname,
  validateDate,
  validateGender,
  validateDisease,
  validateTypeOfFood,
  validatePhoneNumber,
};
