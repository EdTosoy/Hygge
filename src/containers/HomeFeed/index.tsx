import { useTranslation } from "react-i18next";
import { PostWrapper, PrimaryButton } from "components";
import { useNavigate } from "react-router";
import { POPULAR_ROUTE } from "src/constants";
import { useEffect, useContext, useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks";
import {
  selectSingleUserInfo,
  selectUserInfo,
} from "src/features/auth/selectors";
import { getSingleUser } from "src/features/auth/api";
import { UserInfo } from "src/features/auth/types";
import { ToggleContext } from "context";
import { EditPost } from "features";
import {
  deletePost,
  getPosts,
  likePost,
  savePost,
  unLikePost,
  unSavePost,
} from "src/features/posts/api.ts";
import { selectAllPosts } from "src/features/posts/selectors";
import { Post } from "src/features/posts/types";
import { ToggleContextType } from "@types";

export const HomeFeed = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const userInfo = useAppSelector(selectUserInfo) as UserInfo;
  const singleUserInfo = useAppSelector(selectSingleUserInfo) as UserInfo;

  const savedPosts = singleUserInfo?.savedPosts;
  const dispatch = useAppDispatch();

  const _id = userInfo?._id as string;
  const getUserInfo = async () => {
    try {
      await dispatch(getSingleUser(_id)).unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  const allPosts = useAppSelector(selectAllPosts) as Post[];

  const { toggleModal, setModalContent } = useContext(
    ToggleContext,
  ) as ToggleContextType;
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const AllPostWithShowOptions =
      allPosts.length &&
      allPosts
        .filter((post) => savedPosts?.includes(post?._id))
        .map((post) => {
          return { ...post, showOptions: false };
        });

    setPosts(AllPostWithShowOptions || []);
  }, [allPosts.length, savedPosts]);

  useEffect(() => {
    const getAllPosts = async () => {
      await dispatch(getPosts()).unwrap();
    };
    getAllPosts();
  }, []);

  const postFeed = () => {
    return posts?.map((post: Post, index) => {
      const {
        _id,
        content,
        likes,
        savedBy,
        userAvatar,
        userId,
        username,
        mediaUrl,
      } = post;

      const alreadyLiked = userInfo
        ? Boolean(likes.includes(userInfo?._id))
        : false;

      const alreadySaved = Boolean(savedBy.includes(userInfo?._id));

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
        setModalContent(
          <EditPost
            contentValue={content}
            postId={_id}
            username={username}
            avatar={userAvatar}
            profileUserId={userId}
            mediaUrl={mediaUrl}
          />,
        );
        toggleModal();
      };
      const handleDeletePost = async () => {
        await dispatch(deletePost({ postId: _id })).unwrap();
        navigate("/", { replace: true });
      };

      const handleLikePost = async (postId: string) => {
        const dummyPosts = [...posts];
        if (alreadyLiked) {
          const newLikes = dummyPosts[index].likes.filter(
            (id) => userInfo && id !== userInfo?._id,
          );
          dummyPosts[index].likes = newLikes;
          setPosts(dummyPosts);
          await dispatch(unLikePost(_id)).unwrap();
        } else {
          const newPosts = dummyPosts.map((post) =>
            post?._id === postId && userInfo
              ? { ...post, likes: [...post.likes, userInfo?._id] }
              : post,
          );
          setPosts(newPosts);
          await dispatch(likePost(_id)).unwrap();
        }
      };
      const handleSavePost = async (postId: string) => {
        const dummyPosts = [...posts];
        if (alreadySaved) {
          const newSave = dummyPosts[index].savedBy.filter(
            (id) => id !== userInfo?._id,
          );
          dummyPosts[index].savedBy = newSave;
          setPosts(dummyPosts);
          await dispatch(unSavePost({ postId })).unwrap();
          navigate("/", { replace: true });
        } else {
          const newPosts = dummyPosts.map((post) =>
            post?._id === postId
              ? { ...post, savedBy: [...post.savedBy, userInfo._id] }
              : post,
          );
          setPosts(newPosts);
          await dispatch(savePost({ postId })).unwrap();
        }
      };
      const handleOnClickComment = () => {
        setModalContent(
          <div className="p-5">
            <PostWrapper
              key={_id}
              post={post}
              handleDeletePost={handleDeletePost}
              handleEditPost={handleEditPost}
              handleLikePost={() => handleLikePost(_id)}
              handleSavePost={() => handleSavePost(_id)}
              toggleShowOptions={toggleShowOptions}
              isModalView
            />
          </div>,
        );
        toggleModal();
      };
      return (
        <PostWrapper
          key={_id}
          post={post}
          handleDeletePost={handleDeletePost}
          handleEditPost={handleEditPost}
          handleLikePost={() => handleLikePost(_id)}
          handleSavePost={() => handleSavePost(_id)}
          toggleShowOptions={toggleShowOptions}
          handleOnClickComment={handleOnClickComment}
        />
      );
    });
  };

  useEffect(() => {
    getUserInfo();
  }, [_id]);

  if (!savedPosts?.length) {
    return (
      <div className="grid place-content-center mt-40 ">
        <h1 className="font-semibold text-sm  text-center ">
          {t("translation.mainpage.noActivityMessage")}
        </h1>
        <p className="text-xs w-52 text-semi-gray py-2 text-center">
          {t("translation.mainpage.placeholder")}
        </p>
        <div className="grid place-content-center">
          <PrimaryButton
            className="py-2 text-xs px-6 my-2 rounded-full"
            onClick={() => navigate(POPULAR_ROUTE)}
            text={t("translation.button.explore")}
            type="button"
          />
        </div>
      </div>
    );
  }
  return <div>{allPosts?.length > 0 && postFeed()}</div>;
};
