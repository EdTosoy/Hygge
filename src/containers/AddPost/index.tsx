import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { format } from "date-fns";
import { PrimaryButton, Profile, SecondaryButton } from "components";
import { ToggleContext } from "context";
import { ToggleContextType } from "@types";
import { MMDDYYYY } from "src/constants";

export const AddPost = () => {
  const { t } = useTranslation();
  const dateToday = format(new Date(), MMDDYYYY);
  const { toggleModal } = useContext(ToggleContext) as ToggleContextType;
  return (
    <div
      className="py-6 px-4 w-598"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="mb-4 flex justify-between">
        <Profile />
        <div className="flex items-center gap-4">
          <p className="text-xs">{t("translation.addPost.postTo")}</p>
          <select
            className="w-28 h-8 rounded-lg bg-light-violet text-xs px-2 py-1"
            defaultValue={"music"}
            aria-label="post-to-select"
          >
            /// get options from the backend
            <option value="music">Music</option>
            <option value="arts">Arts</option>
            <option value="video-editing">Video Editing</option>
            <option value="games">Games</option>
          </select>
        </div>
      </div>
      <textarea
        className="w-full p-3 font-light text-xs bg-light-gray rounded-xl border border-light-violet focus:outline-none focus:border-dark-violet"
        placeholder={`Today is ${dateToday}...`}
        aria-label="post-content-input"
        rows={7}
      />
      <div className="flex  gap-4 justify-end items-center mt-4">
        <SecondaryButton
          text="Cancel"
          className="px-3 py-1 rounded-full text-sm"
          onClick={() => {
            toggleModal();
          }}
        />
        <PrimaryButton
          text="Post"
          type="button"
          className="px-6 py-1 rounded-full text-sm"
        />
      </div>
    </div>
  );
};
