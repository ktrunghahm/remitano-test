import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { ActionType, createCustomAction, getType } from "typesafe-actions";
import { AppState } from "../../../redux/reducer";
import { SS_TOKEN } from "../../common/constants";

export interface AuthenState {
  authen: boolean;
  email?: string;
}

export const authenIn = createCustomAction("authen/in");
export const authenOut = createCustomAction("authen/out");
export const saveUserInfo = createCustomAction(
  "authen/saveUserInfo",
  (email?: string) => ({
    email,
  })
);

export function logoutThunk(): ThunkAction<void, AppState, null, AnyAction> {
  return (dispatch) => {
    sessionStorage.removeItem(SS_TOKEN);
    dispatch(authenOut());
  };
}

const actions = {
  authenIn,
  authenOut,
  saveUserInfo,
};

type ActionT = ActionType<typeof actions>;

export default function authenReducer(
  state = { authen: false, locations: [] },
  action: ActionT
): AuthenState {
  switch (action.type) {
    case getType(authenIn):
      return { ...state, authen: true };
    case getType(authenOut):
      return { ...state, authen: false };
    case getType(saveUserInfo):
      return { ...state, email: action.email };
    default:
      return state;
  }
}
