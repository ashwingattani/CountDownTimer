import { createStore, combineReducers } from 'redux';
import countdownTimer from './reducers/reducer';

const rootReducer = combineReducers({
  timer: countdownTimer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;