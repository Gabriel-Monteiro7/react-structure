import { persistStore } from "redux-persist";
import createStore from "./createStore";
import createSagaMiddleware from "redux-saga";
import persistReducers from "./persistReducer";
import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor };
