import { Route, Routes } from "react-router-dom";
import { HomePage, Header, SideNavigation } from "containers";
import { PageNotFound } from "pages";

type Props = {};

export const Layout = ({}: Props) => {
  const pageNotFound = false;
  return (
    <div className="pt-14">
      <div className="fixed top-0 z-50 grid place-content-center w-full border-b border-light-gray">
        <div className="bg-white body-grid-container ">
          <div className="col-start-2 col-end-3  ">
            <Header isLoggedIn={true} />
          </div>
        </div>
      </div>
      {pageNotFound ? (
        <PageNotFound />
      ) : (
        <div className="body-grid-container ">
          <div className="col-start-2 col-end-3 main-grid-container ">
            <SideNavigation />
            <div className="col-start-2 col-end-3">
              <div className="bg-white main-section-height">
                {/* /// remove h-screen  */}
                <div className="p-6 h-screen">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
