import App from "./App";
import UserStore from "./store/UserStore";
import React, { createContext } from "react";
import DeviceStore from "./store/DeviceStore";
import ReactDOM from "react-dom/client";
export const Context = createContext(null);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(process.env.REACT_APP_API_URL)

root.render(
  <Context.Provider value={{
    user: new UserStore(),
    device: new DeviceStore()
  }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
);
