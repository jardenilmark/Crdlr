import { connect } from 'react-redux'
import { setBuyerReceiptModalVisibility } from '../actions/itemAction'
import BuyerReceiptView from '../../frontend/components/Views/BuyerReceiptView'

function mapStateToProps(state) {
	return {
		buyerReceiptModal: state.item.buyerReceiptModal,
		receiptLocation: state.item.receiptLocation,
		totalPrice: state.item.totalPrice,
		receiptCar: state.item.receiptCar,
		transactionDate: state.item.transactionDate
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setBuyerReceiptModalVisibility(visibility) {
			dispatch(setBuyerReceiptModalVisibility(visibility))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BuyerReceiptView)
