import { useTranslation } from "react-i18next";
import { useAppSelector } from "hooks";
import { selectUserInfo } from "src/features/auth/selectors";
import { EditUserProfile } from "features";
import { IconContainer } from "components";
import { ToggleContextType } from "@types";
import { ToggleContext } from "context";
import { useContext } from "react";
export const ProfileSummary = () => {
  const { username, profileId, bio } = useAppSelector(selectUserInfo) || {};
  const { toggleModal, setModalContent } = useContext(
    ToggleContext,
  ) as ToggleContextType;
  const handleOnClickEdit = () => {
    setModalContent(<EditUserProfile />);
    toggleModal();
  };

  const { t } = useTranslation();
  return (
    <div className="w-full self-start border border-light-gray bg-white rounded-md  mt-5 overflow-hidden">
      <div className="h-24 bg-light-violet relative">
        <div className="w-14 h-14 rounded-full bg-semi-gray absolute -bottom-5 left-3.5 "></div>
      </div>
      <div className="p-3.5 pt-8 ">
        <h1 className="font-semibold text-sm ">{username}</h1>
        <p className="text-2xs">{profileId}</p>
        <p className="text-xs italic py-2">{bio}</p>

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
          <IconContainer className="text-lg" onClick={handleOnClickEdit}>
            <ion-icon name="create-outline"></ion-icon>
          </IconContainer>
        </div>
      </div>
    </div>
  );
};
