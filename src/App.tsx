import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { store } from "./store";
import { AuthenticationPage, PageNotFound } from "pages";
import { Layout } from "layout";

import "./App.css";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/auth" element={<AuthenticationPage />} />
          <Route path="/home" element={<Layout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
