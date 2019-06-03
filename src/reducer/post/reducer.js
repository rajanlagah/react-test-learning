import { types } from './../../actions/types.js'

export default ( state=[], action) => {
  switch (action.type) {
    case types.GET_POST:
      return action.payload;
      break;
    default:
      return state;
  }
}
