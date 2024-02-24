import { useTranslation } from "react-i18next";
import { PrimaryButton } from "components";
import { useNavigate } from "react-router";
import { POPULAR_ROUTE } from "src/constants";

export const HomeFeed = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="grid place-content-center mt-40 ">
      <h1 className="font-semibold text-sm  text-center ">
        {t("translation.mainpage.noActivityMessage")}
      </h1>
      <p className="text-xs w-52 text-semi-gray py-2 text-center">
        {t("translation.mainpage.placeholder")}
      </p>
      <div className="grid place-content-center">
        <PrimaryButton
          className="py-2 text-xs px-6 my-2 rounded-full"
          onClick={() => navigate(POPULAR_ROUTE)}
          text={t("translation.button.explore")}
          type="button"
        />
      </div>
    </div>
  );
};
