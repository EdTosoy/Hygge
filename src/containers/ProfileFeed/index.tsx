import { useContext, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks";
import { ToggleContext } from "context";
import { EditPost } from "features";
import { PostWrapper } from "components";
import {
  deletePost,
  getPosts,
  likePost,
  savePost,
  unLikePost,
  unSavePost,
} from "src/features/posts/api.ts";
import { selectAllPosts } from "src/features/posts/selectors";
import { selectUserInfo } from "src/features/auth/selectors";
import { Post } from "src/features/posts/types";
import { UserInfo } from "src/features/auth/types";
import { ToggleContextType } from "@types";
import { ProfileFeedProps } from "./types";

export function ProfileFeed({ singleUserInfo }: ProfileFeedProps) {
  const dispatch = useAppDispatch();
  const userPosts = useAppSelector(selectAllPosts) as Post[];
  const userInfo = useAppSelector(selectUserInfo) as UserInfo;

  const singleUserId = singleUserInfo?._id;
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
      userPosts.length &&
      userPosts
        .filter((post) => post.userId === singleUserId)
        .map((post) => {
          return { ...post, showOptions: false };
        });

    setPosts(AllPostWithShowOptions || []);
  }, [userPosts.length, singleUserId]);

  const postFeed = () => {
    return posts?.map((post: Post, index) => {
      const { _id, content, likes, savedBy, userAvatar, userId, username } =
        post;

      const alreadyLiked = Boolean(likes.includes(userInfo._id));
      const alreadySaved = Boolean(savedBy.includes(userInfo._id));

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
          />,
        );
        toggleModal();
      };
      const handleDeletePost = async () => {
        await dispatch(deletePost({ postId: _id })).unwrap();
        window.location.reload();
      };

      const handleLikePost = async (postId: string) => {
        const dummyPosts = [...posts];
        if (alreadyLiked) {
          await dispatch(unLikePost(_id)).unwrap();
          const newLikes = dummyPosts[index].likes.filter(
            (id) => id !== userInfo._id,
          );
          dummyPosts[index].likes = newLikes;
          setPosts(dummyPosts);
        } else {
          await dispatch(likePost(_id)).unwrap();
          const newPosts = dummyPosts.map((post) =>
            post._id === postId
              ? { ...post, likes: [...post.likes, userInfo._id] }
              : post,
          );
          setPosts(newPosts);
        }
      };
      const handleSavePost = async (postId: string) => {
        const dummyPosts = [...posts];
        if (alreadySaved) {
          const newSave = dummyPosts[index].savedBy.filter(
            (id) => id !== userInfo._id,
          );
          dummyPosts[index].savedBy = newSave;
          setPosts(dummyPosts);
          await dispatch(unSavePost({ postId })).unwrap();
        } else {
          const newPosts = dummyPosts.map((post) =>
            post._id === postId
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
  return <div>{userPosts?.length > 0 && postFeed()}</div>;
}
