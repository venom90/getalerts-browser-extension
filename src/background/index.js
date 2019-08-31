import { createStore } from 'redux';
import { createBackgroundStore } from 'redux-webext';

import { INCREASE } from '../constants';
import { increase } from './action-creators/counter';
import rootReducer from './reducers';

const store = createStore(rootReducer);

const actions = {};
actions[INCREASE] = increase;

createBackgroundStore({ store, actions });
