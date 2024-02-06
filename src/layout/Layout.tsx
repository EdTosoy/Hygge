import { Header } from "../components/index.ts";

type Props = {};

export const Layout = ({}: Props) => {
  return (
    <div className="bg-white grid-container border-b">
      <div className="main-container">
        <Header isLoggedIn={true} />
      </div>
    </div>
  );
};
