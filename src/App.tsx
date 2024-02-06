import "./App.css";
import { Layout } from "./layout/index.ts";
import { BrowserRouter as Router } from "react-router-dom";

import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Layout />
      </Provider>
    </Router>
  );
}

export default App;
