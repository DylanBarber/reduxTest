import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from "./store";

// Components
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";

function App() {
  return (
    <Provider store={store}>
      <Comp1 />
      <Comp2 />
    </Provider>
  );
}

export default App;
