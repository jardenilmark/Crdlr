import { connect } from 'react-redux'
import SignOut from '../../frontend/components/UserInputs/SignOut'
import { setPeopleModals } from '../actions/itemAction'

function mapStateToProps (state) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return ({
    setPeopleModals (user) {
      dispatch(setPeopleModals(user))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SignOut)
