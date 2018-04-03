import { connect } from 'react-redux'
import { setPeopleModalVisibility } from '../actions/itemAction'
import Mail from '../../frontend/components/Items/Mail'

function mapStateToProps (state) {
  return {
    peopleModals: state.item.peopleModals
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    setPeopleModalVisibility (num, visbility) {
      dispatch(setPeopleModalVisibility(num, visbility))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Mail)
