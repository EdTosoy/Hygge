import { IconContainer, Profile, Comment } from "components";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";
import { DATE_AND_TIME } from "src/constants";
import { UserInfo } from "src/features/auth/types";
import { useAppDispatch, useAppSelector } from "hooks";
import { selectUserInfo } from "src/features/auth/selectors";
import { CommentInputField, PostWrapperProps } from "./types";
import { useForm } from "react-hook-form";
import { commentPost } from "src/features/posts/api";

export const PostWrapper = ({
  post,
  handleDeletePost,
  handleEditPost,
  handleLikePost,
  toggleShowOptions,
  handleOnClickComment,
  isModalView,
}: PostWrapperProps) => {
  const { register, handleSubmit, reset } = useForm<CommentInputField>();
  const userInfo = useAppSelector(selectUserInfo) as UserInfo;

  const { t } = useTranslation();

  const {
    _id,
    username,
    content,
    title,
    shares,
    comments,
    createdAt,
    likes,
    showOptions,
    userAvatar,
  } = post;

  const dispatch = useAppDispatch();
  const alreadyLiked = Boolean(likes.includes(userInfo._id));

  const isUserAuthorizedToManipulatePost =
    userInfo && userInfo._id === post.userId;

  const submit = async (data: CommentInputField) => {
    const { comment } = data;

    const commentPostRequestData = {
      postId: _id,
      date: format(new Date(), DATE_AND_TIME),
      comment,
    };

    if (comment) {
      await dispatch(commentPost(commentPostRequestData)).unwrap();
      reset();
      window.location.reload();
    } else {
      console.log("there is no comment");
    }

    reset();
  };

  return (
    <>
      <div
        key={_id}
        className=" border-b border-light-gray relative w-660"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div className="flex justify-between my-4 items-center">
          <Profile
            userAvatar={userAvatar}
            userProfile={{ username }}
            date={format(createdAt, DATE_AND_TIME)}
          />
          <IconContainer
            className="text-xl "
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleShowOptions();
            }}
          >
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
          </IconContainer>
          {showOptions && (
            <div className="w-195 border border-light-gray bg-white z-10 absolute top-8 -right-4 rounded-md shadow-2xl text-sm ">
              {isUserAuthorizedToManipulatePost ? (
                <>
                  <div
                    className="p-5 border-b border-light-gray cursor-pointer"
                    onClick={handleEditPost}
                  >
                    {t("translation.button.editPost")}
                  </div>
                  <div
                    className="p-5 border-b border-light-gray cursor-pointer"
                    onClick={handleDeletePost}
                  >
                    {t("translation.button.deletePost")}
                  </div>
                </>
              ) : (
                <>
                  <div className="p-5 border-b border-light-gray cursor-pointer">
                    {t("translation.button.hide")}
                  </div>
                  <div className="p-5 border-b border-light-gray cursor-pointer">
                    {t("translation.button.report")}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
        <h1 className="font-semibold">{title}...</h1>
        <p>{content}</p>
        <div className="flex justify-between my-7">
          <div className="flex gap-1 text-xl items-center">
            <IconContainer
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleLikePost(_id);
              }}
              className={`${alreadyLiked ? "text-accent-red " : ""}`}
            >
              <ion-icon
                name={`${alreadyLiked ? "heart" : "heart-outline"}`}
              ></ion-icon>
            </IconContainer>
            <p className="text-sm">{likes.length}</p>
          </div>
          <div className="flex gap-1 text-xl items-center">
            <IconContainer onClick={handleOnClickComment}>
              <ion-icon name="chatbox-outline"></ion-icon>
            </IconContainer>
            <p className="text-sm">{comments.length}</p>
          </div>
          <div className="flex gap-1 text-xl items-center">
            <IconContainer>
              <ion-icon name="image-outline"></ion-icon>
            </IconContainer>
            <p className="text-sm">{shares.length}</p>
          </div>
        </div>
      </div>
      {isModalView && (
        <div
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="pt-2"
        >
          {comments.map((comment) => {
            return <Comment key={comment.userId} commentData={comment} />;
          })}

          <form className="relative">
            <Profile />
            <textarea
              placeholder="Write a comment..."
              aria-label="comment-input"
              className="w-full border my-3 p-3 border-light-gray rounded-md text-xs focus:outline-none focus:border-dark-violet focus:border-2"
              rows={4}
              {...register("comment")}
            ></textarea>
            <button
              className="absolute right-3 bottom-6 "
              type="submit"
              aria-label="comment-send-button"
              onClick={handleSubmit(submit)}
            >
              <IconContainer className="text-xl">
                <ion-icon name="send-outline"></ion-icon>
              </IconContainer>
            </button>
          </form>
        </div>
      )}
    </>
  );
};
