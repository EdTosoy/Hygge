import { useCallback, useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "hooks";
import { fileUpload, updateUser } from "src/features/auth/api";
import { selectUserInfo } from "src/features/auth/selectors";
import { ToggleContext } from "context";
import { PrimaryButton, SecondaryButton, IconContainer } from "components";
import { ToggleContextType } from "@types";
import { EditPostFormInput } from "./types";

export const EditUserProfile = () => {
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [wallpaperPreview, setWallpaperPreview] = useState<string | null>(null);
  const { toggleModal } = useContext(ToggleContext) as ToggleContextType;
  const { t } = useTranslation();
  const { register, handleSubmit, reset } = useForm<EditPostFormInput>();
  const { username, profileId, bio, avatar, wallpaper } =
    useAppSelector(selectUserInfo) || {};

  const dispatch = useAppDispatch();

  const onDropAvatar = useCallback((acceptedFiles: File[]) => {
    const file = new FileReader();

    file.onload = () => {
      setAvatarPreview(file.result as string);
    };

    file.readAsDataURL(acceptedFiles[0]);
  }, []);

  const onDropWallpaper = useCallback((acceptedFiles: File[]) => {
    const file = new FileReader();

    file.onload = () => {
      setWallpaperPreview(file.result as string);
    };

    file.readAsDataURL(acceptedFiles[0]);
  }, []);

  const {
    getRootProps: getAvatarRootProps,
    getInputProps: getAvatarInputProps,
    isDragActive: isAvatarDragActive,
    acceptedFiles: avatarAcceptedFiles,
  } = useDropzone({
    onDrop: onDropAvatar,
  });

  const {
    getRootProps: getWallpaperRootProps,
    getInputProps: getWallpaperInputProps,
    isDragActive: isWallpaperDragActive,
    acceptedFiles: wallpaperAcceptedFiles,
  } = useDropzone({
    onDrop: onDropWallpaper,
  });

  const onSubmit: SubmitHandler<EditPostFormInput> = async (data) => {
    const { newBio, newProfileId, newUsername } = data;

    const avatarFileUploadResponse = (avatarAcceptedFiles.length &&
      (await fileUpload(avatarAcceptedFiles))) || {
      secure_url: avatar,
    };

    const wallpaperFileUploadResponse = (wallpaperAcceptedFiles.length > 0 &&
      (await fileUpload(wallpaperAcceptedFiles))) || {
      secure_url: wallpaper,
    };

    try {
      await dispatch(
        updateUser({
          bio: newBio,
          profileId: newProfileId,
          username: newUsername,
          avatar: avatarFileUploadResponse.secure_url,
          wallpaper: wallpaperFileUploadResponse.secure_url,
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
      className="w-470 self-start  bg-white rounded-md overflow-hidden"
      onClick={(e) => {
        e.stopPropagation();
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="h-44 bg-light-violet relative ">
        <div
          className="h-full overflow-hidden  bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${wallpaperPreview || wallpaper})` }}
        >
          <div
            {...getWallpaperRootProps()}
            className="w-full h-1/2 absolute bottom-0 right-0 grid place-content-center text-2xs overflow-hidden"
          >
            <input {...getWallpaperInputProps()} />
            {isWallpaperDragActive ? (
              <div className="rounded-full bg-dark-violet p-2 ">
                <IconContainer className="text-white text-lg ">
                  <ion-icon name="cloud-download-outline"></ion-icon>
                </IconContainer>
              </div>
            ) : (
              <div className="bg-gradient-to-b from-gray-500/0 to-black/70 w-full h-full bg-red absolute bottom-0 right-0 grid items-end justify-end  opacity-85">
                <div className="rounded-full bg-dark-violet p-2 cursor-pointer mx-8 my-3  ">
                  <IconContainer className="text-white text-lg ">
                    <ion-icon name="pencil-outline"></ion-icon>
                  </IconContainer>
                </div>
              </div>
            )}
          </div>
        </div>
        <img
          src={avatarPreview || avatar}
          alt="avatar preview"
          className="w-32 h-32 rounded-full bg-semi-gray absolute -bottom-12  left-8 shadow-2xl"
        />
        <div
          {...getAvatarRootProps()}
          className="w-32 h-32 rounded-full absolute -bottom-12  left-8 grid place-content-center text-2xs overflow-hidden"
        >
          <input {...getAvatarInputProps()} />
          {isAvatarDragActive ? (
            <div className="rounded-full bg-dark-violet p-2 ">
              <IconContainer className="text-white text-lg ">
                <ion-icon name="cloud-download-outline"></ion-icon>
              </IconContainer>
            </div>
          ) : (
            <div className="bg-gradient-to-b from-gray-500/0 to-black/70 w-full h-2/5 bg-red absolute bottom-0 grid place-content-center opacity-85">
              <div className="rounded-full bg-dark-violet p-1  ">
                <IconContainer className="text-white text-lg ">
                  <ion-icon name="pencil-outline"></ion-icon>
                </IconContainer>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="p-8 pt-14 border border-light-gray">
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
          {...register("newBio")}
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
            text={t("translation.button.save")}
            type="submit"
            className="px-6 py-1 rounded-full text-sm"
          />
        </div>
      </div>
    </form>
  );
};
