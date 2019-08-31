import { INCREASE } from '../../constants';

const initialState = 10;

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    default:
      return state;
  }
};
