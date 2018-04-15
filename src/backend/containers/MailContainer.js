import { connect } from 'react-redux'
import { getCarsAdvertised } from '../actions/carAction'
import { setPeopleModalVisibility } from '../actions/itemAction'
import Mail from '../../frontend/components/Items/Mail'

function mapStateToProps (state) {
  return {
    peopleModals: state.item.peopleModals,
    currentUser: state.user.currentUser
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    async getCarsAdvertised (uid) {
      await dispatch(getCarsAdvertised(uid))
    },
    setPeopleModalVisibility (num, visbility) {
      dispatch(setPeopleModalVisibility(num, visbility))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Mail)
