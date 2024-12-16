import { useCallback, useContext, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { format } from "date-fns";
import { SubmitHandler, useForm } from "react-hook-form";
import { ToggleContext } from "context";
import { updatePost } from "../api";
import { postTitle } from "utils";
import { useAppDispatch } from "hooks";
import {
  IconContainer,
  PrimaryButton,
  Profile,
  SecondaryButton,
} from "components";
import { ToggleContextType } from "@types";
import { EditPostFormInput, EditPostProps } from "./types";
import { MMDDYYYY } from "src/constants";
import { useDropzone } from "react-dropzone";
import { fileUpload } from "src/features/auth/api";
import { useNavigate } from "react-router";

export const EditPost = ({
  contentValue,
  postId,
  username,
  avatar,
  profileUserId,
  mediaUrl,
}: EditPostProps) => {
  const { t } = useTranslation();
  const dateToday = format(new Date(), MMDDYYYY);
  const { toggleModal } = useContext(ToggleContext) as ToggleContextType;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<EditPostFormInput>();
  const [avatarPreview, setAvatarPreview] = useState<string | undefined>(
    undefined,
  );

  const hiddenInputRef = useRef<any>();

  const onUpload = (e) => {
    e.preventDefault();
    e.stopPropagation();
    hiddenInputRef.current.click();
  };

  const onDropAvatar = useCallback((acceptedFiles: File[]) => {
    const file = new FileReader();

    file.onload = () => {
      setAvatarPreview(file.result as string);
    };

    file.readAsDataURL(acceptedFiles[0]);
  }, []);

  const {
    getRootProps: getAvatarRootProps,
    getInputProps: getAvatarInputProps,
    acceptedFiles: avatarAcceptedFiles,
  } = useDropzone({
    onDrop: onDropAvatar,
  });

  const onSubmit: SubmitHandler<EditPostFormInput> = async (data) => {
    const { newContent, newMediaUrl, newCategory } = data;
    const avatarFileUploadResponse = (avatarAcceptedFiles.length &&
      (await fileUpload([...avatarAcceptedFiles]))) || {
      secure_url: mediaUrl,
    };
    if (newContent) {
      try {
        await dispatch(
          updatePost({
            postId,
            newTitle: postTitle(newContent),
            newMediaUrl: newMediaUrl || avatarFileUploadResponse.secure_url,
            newContent,
            newCategory: newCategory,
          }),
        ).unwrap();
        reset();
        navigate("/", { replace: true });
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("there is no content or Not Authorize ");
    }
  };
  return (
    <form
      className="py-6 px-4 w-598"
      onClick={(e) => {
        e.stopPropagation();
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-4 flex justify-between">
        <Profile
          avatar={avatar || ""}
          username={username || ""}
          profileUserId={profileUserId || ""}
        />
        <div className="flex items-center gap-4">
          <p className="text-xs">{t("translation.addPost.postTo")}</p>
          <select
            className="w-28 h-8 rounded-lg bg-light-violet text-xs px-2 py-1"
            defaultValue={"arts"}
            aria-label="post-to-select"
            {...register("newCategory")}
          >
            /// get options from the backend
            <option value="arts">Arts</option>
            <option value="music">Music</option>
            <option value="video-editing">Video Editing</option>
            <option value="gaming">Gaming</option>
            <option value="information-technology">
              Information Technology
            </option>
            <option value="business-administration">
              Business Administration
            </option>
          </select>
        </div>
      </div>

      <div className="w-full  bg-light-gray rounded-xl border border-light-violet focus:outline-none focus:border-dark-violet">
        <textarea
          className="w-full  p-3 font-light  bg-light-gray focus:outline-none"
          placeholder={`Today is ${dateToday}...`}
          aria-label="post-content-input"
          rows={7}
          defaultValue={contentValue}
          {...register("newContent")}
        ></textarea>
        <div className="p-3">
          <img
            src={avatarPreview ? avatarPreview : mediaUrl}
            className="rounded-xl overflow-hidden"
          />
        </div>
      </div>

      <div className="flex items-center  mt-4">
        <div className="w-full p-3 flex gap-1">
          {/* NEEDS TO BE REFACTORED */}
          <div {...getAvatarRootProps()}>
            <input
              className="hidden"
              onChange={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              {...getAvatarInputProps()}
              ref={(e) => {
                hiddenInputRef.current = e;
              }}
            />

            <button onClick={onUpload}>
              <IconContainer className="text-2xl text-dark-violet hover:bg-light-gray p-3 rounded-full">
                <ion-icon name="images-outline"></ion-icon>
              </IconContainer>
            </button>
          </div>
          {/* NEEDS TO BE REFACTORED */}
          <IconContainer className="text-2xl  text-dark-violet hover:bg-light-gray p-3 rounded-full">
            <ion-icon name="people-outline"></ion-icon>
          </IconContainer>
          <IconContainer className="text-2xl  text-dark-violet hover:bg-light-gray p-3 rounded-full">
            <ion-icon name="happy-outline"></ion-icon>
          </IconContainer>
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
            text={t("translation.button.update")}
            type="submit"
            className="px-3 py-1 rounded-full text-sm"
          />
        </div>
      </div>
    </form>
  );
};
