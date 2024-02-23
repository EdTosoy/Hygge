import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "hooks";
import { updateUser } from "src/features/auth/api";
import { selectUserInfo } from "src/features/auth/selectors";
import { ToggleContext } from "context";
import { PrimaryButton, SecondaryButton } from "components";
import { ToggleContextType } from "@types";
import { EditPostFormInput } from "./types";

export const EditUserProfile = () => {
  const { toggleModal } = useContext(ToggleContext) as ToggleContextType;
  const { t } = useTranslation();
  const { username, profileId, bio } = useAppSelector(selectUserInfo) || {};

  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm<EditPostFormInput>();
  const onSubmit: SubmitHandler<EditPostFormInput> = async (data) => {
    const { newBio, newProfileId, newUsername } = data;

    try {
      await dispatch(
        updateUser({
          bio: newBio,
          profileId: newProfileId,
          username: newUsername,
        }),
      ).unwrap();
      reset();
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form
      className="w-470 self-start border border-light-gray bg-white rounded-md"
      onClick={(e) => {
        e.stopPropagation();
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="h-44 bg-light-violet relative ">
        <div className="w-32 h-32 rounded-full bg-semi-gray absolute -bottom-12  left-8"></div>
      </div>
      <div className="p-8 pt-14 ">
        <input
          type="text"
          defaultValue={username}
          placeholder="edit username"
          aria-label="username-input"
          className="w-full border border-light-gray rounded-md px-2 py-1 font-semibold  my-2 focus:outline-none focus:border-dark-violet focus:border-2"
          {...register("newUsername", { required: true })}
        />
        {/* <p className="text-xs pl-2">{profileId}</p> */}
        <input
          type="text"
          defaultValue={profileId}
          placeholder="edit profile id"
          aria-label="profileId-input"
          className="w-full border border-light-gray rounded-md px-2 py-1 text-xs focus:outline-none focus:border-dark-violet focus:border-2"
          {...register("newProfileId", { required: true })}
        />
        <input
          type="text"
          defaultValue={bio}
          placeholder="add bio"
          aria-label="bio-input"
          className="w-full border border-light-gray rounded-md px-2 py-1 text-sm italic my-4 focus:outline-none focus:border-dark-violet focus:border-2"
          {...register("newBio", { required: true })}
        />

        <div className="mb-6">
          <p className="text-sm">0 {t("translation.profileSummary.likes")}</p>
          <p className="text-sm">
            0 {t("translation.profileSummary.connections")}
          </p>
          <p className="text-sm">0 {t("translation.profileSummary.posts")}</p>
        </div>
        <div className="flex  gap-4 justify-end items-center mt-4">
          <SecondaryButton
            text="Cancel"
            className="px-3 py-1 rounded-full text-sm"
            onClick={() => {
              toggleModal();
            }}
          />
          <PrimaryButton
            text="Save"
            type="submit"
            className="px-6 py-1 rounded-full text-sm"
          />
        </div>
      </div>
    </form>
  );
};
