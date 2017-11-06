import fetch from "isomorphic-fetch"
//import axios from "axios";

//==================COUNTRY=================================
const REQUEST_COUNTRIES = "REQUEST_COUNTRIES";
//const FETCHING_COUNTRIES = "FETCHING_COUNTRIES";
const RECIEVED_COUNTRIES = "RECIEVED_COUNTRIES";

export function requestCountries() {
  return {
    type: REQUEST_COUNTRIES
  }
}

export function fetchingCountries() { 
  return function(dispatch) {
    dispatch(requestCountries())
    return fetch("https://xc-ajax-demo.herokuapp.com/api/countries/")
      .then((response) => response.json())
      .then((json) => dispatch(recievedCountries(json)))
  }
}

export function recievedCountries(json) {
  return {
    type: RECIEVED_COUNTRIES,
    payload: json
  }
}

//=========================STATES==============================
const REQUEST_STATES = "REQUEST_STATES";
//const FETCHING_STATES = "FETCHING_STATES";
const RECIEVED_STATES = "RECIEVED_STATES";

export function requestStates() {
  return {
    type: REQUEST_STATES
  }
}

export function fetchingStates(currentCountry) {
  return function(dispatch) {
    dispatch(requestStates())
    return fetch("https://xc-ajax-demo.herokuapp.com/api/states/",
         {
            method: 'POST',
            body: "country=" + currentCountry,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
         }
    )
    .then((response) => response.json())
    .then((json) => dispatch(recievedStates(json)))
  }
}

export function recievedStates(json) {
  return {
    type: RECIEVED_STATES,
    payload: json
  }
}