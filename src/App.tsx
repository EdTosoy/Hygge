import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { store } from "./store";
import { LoginPage } from "pages";
import { Layout } from "layout";

import "./App.css";

function App() {
  return (
    <Router>
      <Provider store={store}>
        {/* <Layout /> */}
        <LoginPage />
      </Provider>
    </Router>
  );
}

export default App;
