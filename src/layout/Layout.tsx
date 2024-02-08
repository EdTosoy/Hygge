import { Route, Routes } from "react-router-dom";
import { HomePage, Header, SideNavigation } from "containers";
import { PageNotFound } from "pages";

type Props = {};

export const Layout = ({}: Props) => {
  const pageNotFound = false;
  return (
    <div>
      <div className="sticky top-0">
        <div className="bg-white body-grid-container border-b border-light-gray">
          <div className="col-start-2 col-end-3  ">
            <Header isLoggedIn={true} />
          </div>
        </div>
      </div>
      {pageNotFound ? (
        <PageNotFound />
      ) : (
        <div className="body-grid-container">
          <div className="col-start-2 col-end-3 main-grid-container">
            <SideNavigation />
            <div className="col-start-2">
              <Routes>
                <Route path="/" element={<HomePage />} />
              </Routes>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
