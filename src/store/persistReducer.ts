import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default (reducers: any) => {
  const persistedReducer = persistReducer(
    {
      key: "image-manager",
      storage,
      whitelist: ["auth", "user", "root"],
    },
    reducers
  );
  return persistedReducer;
};
