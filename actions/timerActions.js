import * as Types from './types';

export const startTimer = (startTime = 0) => {
  return {
    type: Types.START_TIMER,
    payload: startTime
  }
}

export const stopTimer = () => {
  return {
    type: Types.STOP_TIMER,
    payload: 0
  }
}

export const decrementTimer = (seconds = 0) => {
  return {
    type: Types.DECREMENT_TIMER,
    payload: seconds - 1
  }
}