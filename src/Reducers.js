
let initState = {
  isFetching: false,
  countryList: [],
  stateList: []
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'REQUEST_COUNTRIES': {
      return Object.assign({}, state, {
        isFetching: true
      });
    }
      
    case 'RECIEVED_COUNTRIES': {
      return Object.assign({}, state, {
        isFetching: false,
        countryList: action.payload
      });
    }
      
    case 'REQUEST_STATES': {
      return Object.assign({}, state, {
        isFetching: true
      });
    }
      
    case 'RECIEVED_STATES': {
      return Object.assign({}, state, {
        isFetching: false,
        stateList: action.payload
      });
    }
      
     default: {
      return state
     }
  }
}


const entireAppReducer = reducer

export default entireAppReducer
