import { connect } from 'react-redux'
import ActivityIndicator from '../components/ActivityIndicator'
import { toggleMenu, clearAuthStatus } from '../redux/actions'

const mapStateToProps = (state, ownProps) => {
  return {
    isAwaitingResponse: state.isAwaitingResponse,
    ...ownProps
  }
}

export default connect(
  mapStateToProps,
  null
)(ActivityIndicator)

