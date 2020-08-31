import { GET_CUPS, GET_CUP_BY_YEAR, ADD_CUPS, REMOVE_CUP, UPDATE_CUP, CHANGE_MODAL } from "../actions/index";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  cups: [],
  open: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CUPS:
      return Object.assign({}, state, { cups: action.payload });
    case GET_CUP_BY_YEAR:
      return Object.assign({}, state, { cups: action.payload });
    case ADD_CUPS:
      return Object.assign({}, state, { cups: action.payload });
    case REMOVE_CUP:
      return Object.assign({}, state, { cups: action.payload });
    case UPDATE_CUP:
      const cups = Object.assign([], state.cups);

      const result = cups
        .map((cup) => {
          if (`${cup.year}` !== `${action.payload.year}`) {
            return cup;
          } else {
            return null;
          }
        })
        .filter((cup) => cup !== null);

      action.payload.id = uuidv4();
      result.push(action.payload);

      result.sort((a, b) => (a.year > b.year ? 1 : -1));

      return Object.assign({}, state, { cups: result });
    case CHANGE_MODAL:
      return Object.assign({}, state, { open: action.show });
    default:
      return state;
  }
};

export default reducer;
