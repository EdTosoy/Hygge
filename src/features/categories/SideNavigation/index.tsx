import { SideNavigationButton } from "components";
import { useAppDispatch, useAppSelector } from "hooks";
import { useLocation, useNavigate } from "react-router";
import { getAllCategories } from "../api";
import { useEffect } from "react";
import { selectAllCategories } from "../selectors";
import { Categories } from "../types";

export const SideNavigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const allCategories = useAppSelector(selectAllCategories) as Categories[];

  useEffect(() => {
    const getCategories = async () => {
      await dispatch(getAllCategories()).unwrap();
    };
    getCategories();
  }, []);

  return (
    <div>
      {allCategories &&
        allCategories.map(({ categoryName, url, ionIconName }, index) => (
          <SideNavigationButton
            onClick={() => navigate(url)}
            key={index}
            ionIconName={ionIconName}
            text={categoryName}
            isActive={pathname === url}
          />
        ))}
    </div>
  );
};
