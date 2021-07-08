import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';

export function configureStore(preloadedState = {}) {
  const middlewares = [thunkMiddleware];

  const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares),
  );

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  return createStore(rootReducer, preloadedState, composedEnhancers);
}
