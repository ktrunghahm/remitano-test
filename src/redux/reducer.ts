import { History } from 'history';
import { combineReducers } from 'redux';
import intlReducer, { IntlState } from '../module/intl/redux/intlReducer';
import commonReducer, { CommonState } from '../module/common/redux/commonReducer';
import authenReducer, { AuthenState } from '../module/authen/redux/authenReducer';

export interface AppState {
  intl: IntlState;
  common: CommonState;
  authen: AuthenState;
}

export default function createRootReducer(history: History) {
  return combineReducers({
    intl: intlReducer,
    common: commonReducer,
    authen: authenReducer,
  });
}
