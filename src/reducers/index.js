import { ADD, DELETE, COMPLETE } from "../actions";

// initialize default state
const initialState = 0;

// create reducer function

export default (state = initialState, action, item) => {
  var newState = [];
  switch (action.type) {
    case ADD:
      return Object.assign({},state, {id: action.id, text:action.text, complete:false});
    case DELETE:
      return state;
    case COMPLETE:
      return Object.assign({},state, {id: action.id, text:action.text, complete:true});
    default:
      return state;
  }
};
