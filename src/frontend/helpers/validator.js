class Validator {
  isValid (name, value) {
    if (!value || value.length === 0) {
      return false
    }
    if (name === 'email') {
      return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g.test(value)
    } else if (name === 'pass') {
      return value.length > 6 && value.length < 12 && /[^a-zA-Z0-9]/g.test(value) === false
    } else if (name === 'firstName' || name === 'lastName') {
      return /[^a-zA-Z]/g.test(value) === false
    } else if (name === 'address' || name === 'message') {
      return /[^a-zA-Z0-9\s]/g.test(value) === false
    } else if (name === 'gender') {
      return value === 'Male' || value === 'Female'
    } else if (name === 'phone') {
      let phone = JSON.stringify(value)
      phone = phone.substring(1, phone.length - 1)
      return /^(\+?63|0)?9\d{9}$/.test(phone)
    } else if (name === 'creditCard') {
      return /[^0-9]/g.test(value) === false && value.length === 11
    }
    return false
  }
}

export default Validator
