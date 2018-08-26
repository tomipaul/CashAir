import { connect } from 'react-redux'
import Header from '../components/Header'
import { toggleMenu, clearAuthStatus } from '../redux/actions'

const mapStateToProps = (state, ownProps) => {
  return {
    isMenuVisible: state.isMenuVisible,
    ...ownProps
  }
}

export default connect(
  mapStateToProps,
  { toggleMenu, clearAuthStatus }
)(Header)

