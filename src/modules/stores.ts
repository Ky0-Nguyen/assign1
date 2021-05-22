import { routerMiddleware } from 'connected-react-router';
import { Action, createBrowserHistory } from 'history';
import createRootReducer from './reducers'
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunkMiddleware from 'redux-thunk';

const history = createBrowserHistory();


let store: any

export function configureStore(preloadedState?: {
  router?:
  {
    location:
    {
      query: { [x: string]: string | undefined; };
      state: any;
      key: string;
      pathname: string;
      search: string; hash: string;
    };
    action: Action;
  } | undefined;
} | undefined) {
  const middlewares = [
    thunkMiddleware,
    routerMiddleware(history),
  ].filter(Boolean);

  store = createStore(
    createRootReducer(history),
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
  return store;
}

export function getHistory() {
  return history;
}

export default function getStore() {
  return store;
}