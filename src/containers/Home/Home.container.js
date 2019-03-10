import Home from './Home.jsx'
import { connect } from 'react-redux'
import { loadMember } from 'ducks/family'
import { changeMember } from 'ducks/app'

const mapStateToProps = state => ({
  app: state.app,
  family: state.family,
})

const mapDispatchToProps = {
  loadMember,
  changeMember,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
