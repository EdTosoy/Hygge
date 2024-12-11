import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { useAppDispatch, useAppSelector } from "hooks";
import { ToggleContextType } from "@types";
import { ToggleContext } from "context";
import { selectUserInfo } from "src/features/auth/selectors";
import { selectAllContacts } from "src/features/contacts/selectors";
import { addContact } from "src/features/contacts/api";
import { EditUserProfile } from "features";
import { IconContainer } from "components";
import { ProfileSummaryProps } from "./types";

export const ProfileSummary = ({ singleUserInfo }: ProfileSummaryProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { toggleModal, setModalContent } = useContext(
    ToggleContext,
  ) as ToggleContextType;

  const {
    username,
    profileId,
    bio,
    avatar,
    wallpaper,
    _id: singleUserId,
  } = singleUserInfo;

  const accountUserInfo = useAppSelector(selectUserInfo);
  const accountContacts = useAppSelector(selectAllContacts);

  const handleOnClickEdit = () => {
    setModalContent(<EditUserProfile />);
    toggleModal();
  };

  const isAlreadyContact = accountContacts.some(
    (contact) => contact.contactInfo.userId === singleUserId,
  );

  const handleOnClickAddContact = async () => {
    try {
      await dispatch(
        addContact({
          contactUserId: singleUserId,
          contactUsername: username,
          contactAvatar: avatar,
        }),
      ).unwrap();
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full self-start border border-light-gray bg-white rounded-md mt-5 overflow-hidden">
      <div className="h-24 bg-light-violet relative">
        <div
          className="h-full w-full overflow-hidden bg-center bg-cover"
          style={{ backgroundImage: `url(${wallpaper})` }}
        >
          <img
            src={avatar}
            alt="avatar"
            className="w-14 h-14 rounded-full bg-semi-gray absolute -bottom-5 left-3.5"
          />
        </div>
      </div>
      <div className="p-3.5 pt-8">
        <h1 className="font-semibold text-sm">{username}</h1>
        <p className="text-2xs">{profileId}</p>
        <p className="text-xs italic py-2">{bio}</p>

        <div>
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
          {singleUserId === accountUserInfo?._id ? (
            <IconContainer className="text-lg" onClick={handleOnClickEdit}>
              <ion-icon name="create-outline"></ion-icon>
            </IconContainer>
          ) : isAlreadyContact ? (
            <IconContainer className="text-lg">
              <ion-icon name="checkmark-done-outline"></ion-icon>
            </IconContainer>
          ) : (
            <IconContainer
              className="text-lg"
              onClick={handleOnClickAddContact}
            >
              <ion-icon name="person-add-outline"></ion-icon>
            </IconContainer>
          )}
        </div>
      </div>
    </div>
  );
};
