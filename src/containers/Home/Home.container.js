import Home from './Home.jsx'
import { connect } from 'react-redux'
import { loadMember } from 'ducks/family'

const mapStateToProps = state => ({
  app: state.app,
})

const mapDispatchToProps = {
  loadMember,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
