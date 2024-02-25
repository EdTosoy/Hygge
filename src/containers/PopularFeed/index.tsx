import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "hooks";
import { format } from "date-fns";
import { ToggleContext } from "context";
import { EditPost } from "features";
import {
  deletePost,
  getPosts,
  likePost,
  unLikePost,
} from "src/features/posts/api.ts";
import { selectAllPosts } from "src/features/posts/selectors";
import { selectUserInfo } from "src/features/auth/selectors";
import { Post } from "src/features/posts/types";
import { UserInfo } from "src/features/auth/types";
import { Profile, IconContainer } from "components";
import { ToggleContextType } from "@types";
import { DATE_AND_TIME } from "src/constants";

export function PopularFeed() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const allPosts = useAppSelector(selectAllPosts) as Post[];
  const userInfo = useAppSelector(selectUserInfo) as UserInfo;

  const { toggleModal, setModalContent } = useContext(
    ToggleContext,
  ) as ToggleContextType;
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getAllPosts = async () => {
      await dispatch(getPosts()).unwrap();
    };
    getAllPosts();
  }, []);

  useEffect(() => {
    const AllPostWithShowOptions =
      allPosts.length &&
      allPosts.map((post) => {
        return { ...post, showOptions: false };
      });

    setPosts(AllPostWithShowOptions || []);
  }, [allPosts.length]);

  const postFeed = () => {
    return posts?.map((post: Post, index) => {
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

      const isUserAuthorizedToManipulatePost =
        userInfo && userInfo._id === post.userId;

      const alreadyLiked = Boolean(likes.includes(userInfo._id));

      const toggleShowOptions = () => {
        const newPosts = [...posts];
        if (newPosts[index].showOptions === true) {
          newPosts[index].showOptions = false;
        } else {
          newPosts.map((post) => (post.showOptions = false));
          newPosts[index].showOptions = true;
        }
        setPosts(newPosts);
      };

      const handleEditPost = () => {
        setModalContent(<EditPost contentValue={content} postId={_id} />);
        toggleModal();
      };
      const handleDeletePost = async () => {
        await dispatch(deletePost({ postId: _id })).unwrap();
        window.location.reload();
      };

      const handleLikePost = async (postId: string) => {
        const dummyPosts = [...posts];
        if (alreadyLiked) {
          const newLikes = dummyPosts[index].likes.filter(
            (id) => id !== userInfo._id,
          );
          dummyPosts[index].likes = newLikes;
          setPosts(dummyPosts);
          await dispatch(unLikePost(_id)).unwrap();
        } else {
          const newPosts = dummyPosts.map((post) =>
            post._id === postId
              ? { ...post, likes: [...post.likes, userInfo._id] }
              : post,
          );
          setPosts(newPosts);
          await dispatch(likePost(_id)).unwrap();
        }
      };
      return (
        <div key={_id} className=" border-b border-light-gray relative">
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
              <IconContainer>
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
      );
    });
  };
  return <div>{allPosts?.length > 0 && postFeed()}</div>;
}
