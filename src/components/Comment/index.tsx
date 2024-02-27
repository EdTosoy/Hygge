import { Profile } from "components";
import { CommentProps } from "./types";

export const Comment = ({ commentData }: CommentProps) => {
  const { comment, date, userAvatar, username } = commentData;
  return (
    <div className="pt-2 mb-4">
      <Profile date={date} userAvatar={userAvatar} userProfile={{ username }} />
      <div>
        <div className="flex my-2 gap-2">
          <div className="mx-4">
            <div className="vertical-line" />
          </div>
          <p className=" bg-light-gray rounded-md p-3 text-sm w-full">
            {comment}
          </p>
        </div>
      </div>
    </div>
  );
};
