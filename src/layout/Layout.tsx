import { Route, Routes } from "react-router-dom";
import { HomePage, Header, SideNavigation } from "containers";

type Props = {};

export const Layout = ({}: Props) => {
  return (
    <div>
      <div className="bg-white body-grid-container border-b border-light-gray ">
        <div className="col-start-2 col-end-3">
          <Header isLoggedIn={true} />
        </div>
      </div>
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
    </div>
  );
};
