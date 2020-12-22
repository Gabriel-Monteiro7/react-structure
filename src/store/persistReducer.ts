import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default (reducers: any) => {
  const persistedReducer = persistReducer(
    {
      key: "default-structure-react",
      storage,
      whitelist: ["auth", "user", "root"],
    },
    reducers
  );
  return persistedReducer;
};
