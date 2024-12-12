import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Messages } from "features";
import { store } from "./store";
import {
  AuthenticationPage,
  MainPage,
  PageNotFound,
  UserProfilePage,
} from "pages";
import { Layout } from "layout";
import { HomeFeed, PopularFeed, CommunityFeed, SearchFeed } from "containers";
import {
  AUTH_ROUTE,
  COMMUNITY_ROUTE,
  HOME_ROUTE,
  POPULAR_ROUTE,
  PROFILE_WITH_ID_ROUTE,
  SEARCH_ROUTE,
} from "src/constants";
import "./App.css";
function App() {
  return (
    <Router basename={process.env.BASENAME}>
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
            <Route
              path={SEARCH_ROUTE}
              element={
                <MainPage>
                  <SearchFeed />
                </MainPage>
              }
            />
            <Route path={PROFILE_WITH_ID_ROUTE} element={<UserProfilePage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Messages />
        </Layout>
      </Provider>
    </Router>
  );
}

export default App;
