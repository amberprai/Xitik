//TODO:  DONE create contact using all actions

import {
  SET_QUERY,
} from "./action.types";

//TODO:  DONE  use switch case

export default (state,action) =>{
  switch (action.type) {
    case SET_QUERY:
              return action.payload == null ? {...state,messages:[]} : {...state, messages: action.payload}
  
   default:
      return state;
  }

}
