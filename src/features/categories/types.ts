export type createCategoryFields = {
  categoryName: string;
  url: string;
  ionIconName: string;
};

export type CategoryApiState = {
  categories?: Categories[] | [];
  status: "idle" | "loading" | "failed";
  error: string | null;
};

export interface Categories {
  creator: {
    username: string;
    avatar: string;
  };
  _id: string;
  categoryName: string;
  admin: string[];
  url: string;
  ionIconName: string;
}
