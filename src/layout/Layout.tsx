import { Route, Routes } from "react-router-dom";
import { HomePage, Header } from "../containers/index.ts";

type Props = {};

export const Layout = ({}: Props) => {
  return (
    <div>
      <div className="bg-white grid-container border-b border-light-gray ">
        <div className="main-container">
          <Header isLoggedIn={true} />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};
