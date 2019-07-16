import * as Types from '../actions/types';

const initialState = {
  seconds: 0,
  startTime: 0,
  decrementValue: 1,
  status: 'stopped'
};

const countdownTimer = (state = initialState, action) => {
  switch(action.type) {
    case Types.START_TIMER:
      return {
        startTime: action.payload,
        seconds: action.payload,
        status: 'timer running'
      };
    case Types.DECREMENT_TIMER:
      return {
        seconds: action.payload
      };
    case Types.STOP_TIMER:
      return {
        seconds: action.payload,
        status: 'stopped'
      }
    default:
      return state;
  }
}

export default countdownTimer;