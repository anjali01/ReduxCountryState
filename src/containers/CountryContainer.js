import { connect } from 'react-redux';
import CountryComponent from '../components/CountryComponent';
import { fetchingStates } from '../Actions';
import Select from 'react-select';

const mapStateToProps = state => {
  return {
    placeholder: "LOL",
    value: "STAUFFFFFFFFF",
    stuff: state.countryList,
    options: state.countryList.map(e => {return {value: e.code, label:e.name}})
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: (e) => dispatch(fetchingStates(e))
  }
};

const CountryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryComponent);

export default CountryContainer;