import {
SET_CHECKOUT_LOADING,
POST_TRANSACTION, 
SET_INVOICE
  } from "../actions/types";
// import { emptyCart } from "../actions/cartActions";
  // import Swal from 'sweetalert2'
  
  const initialState = {
    invoice: null,
    loading: false
  };
  export default function(state = initialState, action) {
    switch (action.type) {
      case POST_TRANSACTION:
      // emptyCart()
        return {
          ...state,
          invoice: action.payload,
          loading: false
        };
      case SET_CHECKOUT_LOADING:
        return {
          ...state,
          loading: true
        };
        case SET_INVOICE:
        return {
          ...state, 
          invoice: action.payload,
          loading: false
        }
      default:
        return state;
    }
  }
  