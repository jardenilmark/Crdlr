import { connect } from 'react-redux'
import { setItemModalVisibility } from '../actions/itemAction'
import Item from '../../frontend/components/Items/Item'

function mapStateToProps (state) {
  return {
    itemModals: state.item.itemModals
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    setItemModalVisibility (num, visbility) {
      dispatch(setItemModalVisibility(num, visbility))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)
