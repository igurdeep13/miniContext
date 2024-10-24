import { useState } from "react";
import UserContextProvider from "./context/UserContextProvider";
import "./App.css";

function App() {
  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
    </UserContextProvider>
  );
}

export default App;
