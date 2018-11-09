import { connect } from 'react-redux'
import { setReceiptModalVisibility } from '../actions/itemAction'
import SellerReceiptView from '../../frontend/components/Views/SellerReceiptView'

function mapStateToProps (state) {
  return {
    receiptModals: state.item.receiptModals
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    setReceiptModalVisibility (num, visbility) {
      dispatch(setReceiptModalVisibility(num, visbility))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SellerReceiptView)
