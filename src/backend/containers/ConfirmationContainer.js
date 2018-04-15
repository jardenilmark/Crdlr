import { connect } from 'react-redux'
import { getUser } from '../actions/userAction'
import { setReceipt, setBuyerReceiptModalVisibility } from '../actions/itemAction'
import { setError, setSuccess } from '../actions/errorAction'
import ConfirmationView from '../../frontend/components/Views/ConfirmationView'

const mapStateToProps = (state) => {
  return {
    user: state.user.userInfo,
    fnError: state.error.fnError,
    lnError: state.error.lnError,
    emailError: state.error.emailError,
    phoneError: state.error.phoneError,
    genderError: state.error.genderError,
    creditCardError: state.error.creditCardError,
    addressError: state.error.addressError,
    genderOptions: state.user.genderOptions,
    expirationDateError: state.error.expirationDateError,
    buyerReceiptModal: state.item.buyerReceiptModal
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    async getUser (uid, email) {
      await dispatch(getUser(uid, email))
    },
    setError (error, type) {
      dispatch(setError(error, type))
    },
    setSuccess () {
      dispatch(setSuccess())
    },
    setReceipt (obj) {
      dispatch(setReceipt(obj))
    },
    setBuyerReceiptModalVisibility (visibility) {
      dispatch(setBuyerReceiptModalVisibility(visibility))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationView)
