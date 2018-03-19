import { connect } from 'react-redux'
import { setTransactionInfo } from '../actions/dateAction'
import Rent from '../../frontend/components/Rent'

const mapStateToProps = (state) => {
  return {
    dateStart: state.date.dateStart,
    dateEnd: state.date.dateEnd,
    currentlyActive: state.date.activeItem
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    setTransactionInfo (info) {
      dispatch(setTransactionInfo(info))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Rent)
