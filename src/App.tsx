import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Inbox } from "features";
import { store } from "./store";
import {
  AuthenticationPage,
  MainPage,
  PageNotFound,
  UserProfilePage,
} from "pages";
import { Layout } from "layout";
import { HomeFeed, PopularFeed, CommunityFeed } from "containers";
import {
  AUTH_ROUTE,
  COMMUNITY_ROUTE,
  HOME_ROUTE,
  POPULAR_ROUTE,
  PROFILE_ROUTE,
} from "src/constants";
import "./App.css";
function App() {
  return (
    <Router>
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route path={AUTH_ROUTE} element={<AuthenticationPage />} />
            <Route
              path={HOME_ROUTE}
              element={
                <MainPage>
                  <HomeFeed />
                </MainPage>
              }
            />
            <Route
              path={POPULAR_ROUTE}
              element={
                <MainPage>
                  <PopularFeed />
                </MainPage>
              }
            />
            <Route
              path={COMMUNITY_ROUTE}
              element={
                <MainPage>
                  <CommunityFeed />
                </MainPage>
              }
            />
            <Route path={PROFILE_ROUTE} element={<UserProfilePage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Inbox />
        </Layout>
      </Provider>
    </Router>
  );
}

export default App;
