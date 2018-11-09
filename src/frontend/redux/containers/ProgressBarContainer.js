import { connect } from 'react-redux'
import ProgressBar from '../../frontend/components/Items/ProgressBar'

const mapStateToProps = state => {
	return {
		progress: state.item.progress
	}
}

export default connect(mapStateToProps)(ProgressBar)
