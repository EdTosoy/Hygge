import { useTranslation } from "react-i18next";
import { PrimaryButton } from "components";
import { useNavigate } from "react-router-dom";

export const PageNotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="grid place-content-center h-svh">
      <h3 className="text-center font-bold"></h3>
      <h1 className="text-center text-150 font-bold">404</h1>
      <h3 className="text-center text-2xl font-medium text-dark-violet">
        {t("translation.pageNotFound.oops")}
      </h3>
      <h4 className="text-center text-xl font-medium my-3">
        {t("translation.pageNotFound.title")}
      </h4>
      <p className="text-center font-medium text-xs text-semi-gray max-w-446  leading-6">
        {t("translation.pageNotFound.message")}
      </p>
      <div className="grid place-content-center">
        <PrimaryButton
          className="mt-11 py-2 px-6 rounded-full"
          onClick={() => navigate(-1)}
          text={t("translation.button.goBack")}
        />
      </div>
    </div>
  );
};
