import axios from "axios";
import {
  POST_TRANSACTION,
  SET_CHECKOUT_LOADING,
  SET_INVOICE
} from "../actions/types";
import { tokenConfig } from "./authActions";
import { returnErrors
  // ,clearErrors
   } from "./errorActions";
export const postTransaction = (data) => (dispatch, getState) => {
  console.log('checkout')
  dispatch(setCheckoutLoading());
  axios
    .post("/api/checkout",data, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: POST_TRANSACTION,
        payload: res.data
      });
      axios
      .post(`/api/cart/empty`,{action: 'empty cart'}, tokenConfig(getState))
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
export const setInvoice= (trans) => dispatch => {
  dispatch(setCheckoutLoading(trans));
  return dispatch({
    type: SET_INVOICE,
    payload: trans
  });
}


export const setCheckoutLoading = () => dispatch => {
    return dispatch({
      type: SET_CHECKOUT_LOADING
    });
  };
  