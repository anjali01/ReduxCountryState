import { connect } from 'react-redux'
import StateComponent from '../components/StateComponent'

const mapStateToProps = state => {
  return {
    options: state.stateList.map(e => {return {value: e.code, label:e.name}})
  }
}

const mapDispatchToProps = dispatch => {
  return {
    //intentioanlly left empty
  }
}

const StateContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StateComponent)

export default StateContainer