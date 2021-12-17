import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../../../redux/reducer';
import { authenOut } from '../../authen/redux/authenReducer';
import { SS_TOKEN, some } from '../constants';
import { setNetworkError } from './commonReducer';

export function fetchThunk(
  url: string,
  method: 'delete' | 'put' | 'get' | 'post' | 'PATCH' = 'get',
  body?: some | FormData | string,
  contentType?: string,
  fallback = { cancelled: false, data: {} },
): ThunkAction<Promise<some>, AppState, null, Action<string>> {
  return async (dispatch, getState) => {
    while (true) {
      let res: Response | null = null;
      const token = sessionStorage.getItem(SS_TOKEN) || '';
      try {
        res = await fetch(url, {
          method,
          body: body instanceof Blob ? body : typeof body === 'object' ? JSON.stringify(body) : body,
          headers: {
            'Cache-Control': 'no-cache',
            Authorization: `Bearer ${token}`,
            'Content-Type': contentType || 'application/json',
          },
        });
      } catch (_) {}

      if (res) {
        if (res.ok) {
          if (method === 'delete') {
            return {};
          }
          if (fallback.cancelled) {
            return fallback.data;
          }
          if (contentType === 'image/jpeg') {
            return res.blob();
          }

          const json = await res.json();
          return json;
        }

        if (res.status === 400 || res.status === 402 || res.status === 403 || res.status === 404) {
          throw new Error(await res.text());
        }
        if (res.status === 501) {
          throw new Error(res.statusText);
        }
        if (res.status === 401) {
          dispatch(authenOut());
          throw new Error('Invalid token');
        }
      }

      let hasInternet = true;
      try {
        await fetch('https://www.google.com', { mode: 'no-cors' });
      } catch (_) {
        hasInternet = false;
      }

      dispatch(setNetworkError(hasInternet ? 'serverProblem' : 'unstableNetwork', true));

      do {
        await new Promise((resolve) => setTimeout(resolve, 250));
        if (!getState().common.openErrorDialog) {
          break;
        }
      } while (getState().common.networkErrorMsg);
      if (!getState().common.openErrorDialog) {
        break;
      }
      continue;
    }
    return {};
  };
}
