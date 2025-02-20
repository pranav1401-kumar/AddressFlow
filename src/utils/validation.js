export const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };
  
  export const validateRequired = (value) => {
    return value && value.trim().length > 0;
  };
  
  export const validateForm = (formData) => {
    const errors = {};
  
    if (!validateRequired(formData.houseNumber)) {
      errors.houseNumber = 'House/Flat number is required';
    }
  
    if (!validateRequired(formData.receiverName)) {
      errors.receiverName = "Receiver's name is required";
    }
  
    if (!validateRequired(formData.receiverPhone)) {
      errors.receiverPhone = "Receiver's phone number is required";
    } else if (!validatePhone(formData.receiverPhone)) {
      errors.receiverPhone = 'Invalid phone number';
    }
  
    return errors;
  };