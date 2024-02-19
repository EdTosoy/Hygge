import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { store } from "./store";
import { AuthenticationPage, MainPage, PageNotFound } from "pages";
import { Layout } from "layout";
import "./App.css";
import { AUTH_ROUTE, HOME_ROUTE } from "src/constants";
function App() {
  return (
    <Router>
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route path={AUTH_ROUTE} element={<AuthenticationPage />} />
            <Route path={HOME_ROUTE} element={<MainPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </Provider>
    </Router>
  );
}

export default App;
