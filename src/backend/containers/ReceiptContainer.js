import { connect } from 'react-redux'
import ReceiptView from '../../frontend/components/Views/ReceiptView'

function mapStateToProps (state) {
  return {
    receiptName: state.item.receiptName,
    receiptEmail: state.item.receiptEmail,
    totalPrice: state.item.totalPrice,
    receiptCar: state.item.receiptCar,
    transactionDate: state.item.transactionDate
  }
}

export default connect(mapStateToProps)(ReceiptView)
