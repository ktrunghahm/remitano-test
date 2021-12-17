import { ActionType, createCustomAction, getType } from "typesafe-actions";

export interface CommonState {
  readonly networkErrorMsg?: string;
  loading: boolean;
  openErrorDialog: boolean;
}

export const setNetworkError = createCustomAction(
  "common/setNetworkError",
  (errorMsg: string, openErrorDialog: boolean) => ({
    errorMsg,
    openErrorDialog,
  })
);

export const setLoading = createCustomAction(
  "common/setLoading",
  (val: boolean) => ({ val })
);
const actions = {
  setNetworkError,
  setLoading,
};

type Action = ActionType<typeof actions>;

export default function reducer(
  state: CommonState = {
    loading: false,
    openErrorDialog: false,
  },
  action: Action
): CommonState {
  switch (action.type) {
    case getType(setNetworkError):
      return { ...state, networkErrorMsg: action.errorMsg };
    case getType(setLoading):
      return { ...state, loading: action.val };
    default:
      return state;
  }
}
