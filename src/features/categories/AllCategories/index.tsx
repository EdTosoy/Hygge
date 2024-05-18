import { ToggleContextType } from "@types";
import {
  PrimaryButton,
  SecondaryButton,
  SideNavigationButton,
} from "components";
import { ToggleContext } from "context";
import { useAppDispatch } from "hooks";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router";
import { createCategory } from "../api";
import { SubmitHandler, useForm } from "react-hook-form";
import { AddCategoryField } from "./types";

export const AllCategories = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const { toggleModal } = useContext(ToggleContext) as ToggleContextType;
  const { register, handleSubmit, reset } = useForm<AddCategoryField>();
  const dispatch = useAppDispatch();

  const navigationButtons = [
    {
      ionIconName: "pie-chart-outline",
      text: t("translation.sideNavigation.icons.arts"),
      url: "/community/arts",
    },
    {
      ionIconName: "musical-notes-outline",
      text: t("translation.sideNavigation.icons.music"),
      url: "/community/music",
    },
    {
      ionIconName: "videocam-outline",
      text: t("translation.sideNavigation.icons.videoEditing"),
      url: "/community/video-editing",
    },
    {
      ionIconName: "game-controller-outline",
      text: t("translation.sideNavigation.icons.gaming"),
      url: "/community/gaming",
    },
    {
      ionIconName: "desktop-outline",
      text: t("translation.sideNavigation.icons.informationTechnology"),
      url: "/community/information-technology",
    },
    {
      ionIconName: "business-outline",
      text: t("translation.sideNavigation.icons.businessAdministration"),
      url: "/community/business-administration",
    },
  ];

  const addCategorySubmit: SubmitHandler<AddCategoryField> = async (data) => {
    const { categoryName } = data;
    if (categoryName) {
      try {
        await dispatch(
          createCategory({
            categoryName,
          }),
        ).unwrap();
        reset();
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("there is no category name");
    }
  };

  useEffect(() => {
    return () => {
      reset();
    };
  }, []);

  return (
    <div
      className="py-6 px-4 w-470 "
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      {isEditMode && (
        <form className="flex items-center mb-4  ">
          <input
            className=" w-full  text-left px-5 py-2 font-medium text-xs rounded-xl flex gap-3 "
            {...register("categoryName")}
            placeholder="Enter your desire category name"
          />
          <PrimaryButton
            text={t("translation.button.add")}
            type="submit"
            onClick={handleSubmit(addCategorySubmit)}
            className="px-4 py-1 rounded-full text-xs"
          />
        </form>
      )}
      <div>
        {navigationButtons.map((button, index) => (
          <SideNavigationButton
            onClick={() => navigate(button.url)}
            key={index}
            ionIconName={button.ionIconName}
            text={button.text}
            isActive={pathname === button.url}
          />
        ))}
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
          text={t("translation.button.edit")}
          type="button"
          className="px-6 py-1 rounded-full text-sm"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsEditMode(true);
          }}
        />
      </div>
    </div>
  );
};
