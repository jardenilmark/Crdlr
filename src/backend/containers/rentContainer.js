import { connect } from 'react-redux'
import { setTransactionDate } from '../actions/dateAction'
import Rent from '../../frontend/components/Rent'

const mapStateToProps = (state) => {
  return {
    dateStart: state.date.dateStart,
    dateEnd: state.date.dateEnd
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    setActiveItem (itemName) {
      dispatch(setTransactionDate(itemName))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Rent)
