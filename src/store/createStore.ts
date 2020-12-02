import { createStore, compose, applyMiddleware } from "redux";

export default (reducers: any, middlewares: any) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
