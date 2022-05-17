import React, { useReducer, useState } from "react";
import "./App.css";
import LoginArea from "./LoginArea";

const AuthContext = React.createContext();

function reducer(state, action) {
  if (action.type === "login") {
    const { username, fullname } = action.payload;
    return { username, fullname };
  }
  if (action.type === "logout") {
    return null;
  }
  return state;
}

// dispatch = ตัวส่งข้อมุลคำสั่งไปทำงานข้างใน state (reducer)
function App() {
  const [authState, authDispatch] = useReducer(reducer, null);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      <section className="app-section">
        <div className="app-container">
          <LoginArea />
        </div>
      </section>
    </AuthContext.Provider>
  );
}
export { AuthContext };
export default App;
