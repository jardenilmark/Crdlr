class Validator {
  constructor (user) {
    this.user = user
    console.log(user)
  }
  isEmail() {
    return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g.test(this.user.email)
  }
  isPassLengthCorrect() {
    const { pass } = this.user
    return pass.length > 6 && pass.length < 12 && /^[a-zA-Z0-9]/g.test(pass)
  }
  isPass() {
    return /^[a-zA-Z0-9]/g.test(this.user.pass) && this.isPassLengthCorrect()
  }
  isFirstName() {
    return /^[a-zA-Z]/g.test(this.user.firstName)
  }
  isLastName() {
    return /^[a-zA-Z]/g.test(this.user.lastName)
  }
  isGender() {
    return this.user.gender === 'Male' || this.user.gender === 'Female'
  }
  isPhoneNum() {
    let phone = JSON.stringify(this.user.phone)
    phone = phone.substring(1, phone.length - 1)
    return /^[0-9]/g.test(phone) && phone.length === 11
  }
  isAllValid() {
    return this.isEmail() && this.isPass() && this.isFirstName() && this.isGender() && this.isPhoneNum() && this.isLastName()
  }
  isUserAndPassValid() {
    return this.isEmail() && this.isPass()
  }
}

export default Validator