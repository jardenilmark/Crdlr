import { connect } from 'react-redux'
import { getUsers } from '../actions/userAction'
import Confirmation from '../../frontend/components/Confirmation'

const mapStateToProps = (state) => {
  return {
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    gender: state.user.gender,
    phone: state.user.phone,
    email: state.user.email
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    getUsers (uid, email) {
      dispatch(getUsers(uid, email))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation)
