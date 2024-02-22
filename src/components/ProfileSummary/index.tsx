import { useTranslation } from "react-i18next";
import { useAppSelector } from "hooks";
import { selectBasicUserInfo } from "src/features/auth/selectors";
import { IconContainer } from "components";
export const ProfileSummary = () => {
  /// get all data from backend
  const { t } = useTranslation();
  const { username } = useAppSelector(selectBasicUserInfo) || {};
  return (
    <div className="w-full self-start border border-light-gray bg-white rounded-md  mt-5 overflow-hidden">
      <div className="h-24 bg-light-violet relative">
        <div className="w-14 h-14 rounded-full bg-semi-gray absolute -bottom-5 left-3.5 "></div>
      </div>
      <div className="p-3.5 pt-8 ">
        <h1 className="font-semibold text-sm ">{username}</h1>
        <p className="text-2xs">h/kathrenbirnardu</p>
        <p className="text-xs italic py-2">I wanna be a tutubi</p>

        <div className="">
          <p className="text-xs font-semibold">
            0 {t("translation.profileSummary.likes")}
          </p>
          <p className="text-xs font-semibold">
            0 {t("translation.profileSummary.connections")}
          </p>
          <p className="text-xs font-semibold">
            0 {t("translation.profileSummary.posts")}
          </p>
        </div>

        <div className="flex justify-end mt-2">
          <IconContainer className="text-lg">
            <ion-icon name="create-outline"></ion-icon>
          </IconContainer>
        </div>
      </div>
    </div>
  );
};
