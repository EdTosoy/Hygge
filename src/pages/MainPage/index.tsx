import { useLocation } from "react-router-dom";
import { HomePage, Header, SideNavigation } from "containers";

type Props = {};

export const MainPage = ({}: Props) => {
  const { pathname } = useLocation();

  return (
    <div className="pt-14">
      <Header isLoggedIn={true} />
      <div className="body-grid-container ">
        <div className="col-start-2 col-end-3 main-grid-container ">
          <SideNavigation />
          <div className="col-start-2 col-end-3">
            <div className="bg-white main-section-height">
              {/* /// remove h-screen  */}
              <div className="p-6 h-screen">
                {pathname === "/home" && <HomePage />}
                {pathname === "/popular" && <HomePage />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
