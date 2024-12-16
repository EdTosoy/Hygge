import { useContext, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks";
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
import {
  selectSingleUserInfo,
  selectUserInfo,
} from "src/features/auth/selectors";
import { Post } from "src/features/posts/types";
import { UserInfo } from "src/features/auth/types";
import { PostWrapper } from "components";
import { ToggleContextType } from "@types";

export function PopularFeed() {
  const dispatch = useAppDispatch();
  const allPosts = useAppSelector(selectAllPosts) as Post[];
  const userInfo = useAppSelector(selectUserInfo) as UserInfo;
  const singleUserInfo = useAppSelector(selectSingleUserInfo) as UserInfo;

  const savedPosts = singleUserInfo?.savedPosts;

  const { toggleModal, setModalContent } = useContext(
    ToggleContext,
  ) as ToggleContextType;
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const AllPostWithShowOptions =
      allPosts.length &&
      allPosts.map((post) => {
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
        username,
        userId,
        userAvatar,
        mediaUrl,
      } = post;

      const alreadyLiked = Boolean(likes.includes(userInfo?._id));
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
        window.location.reload();
      };

      const handleLikePost = async (postId: string) => {
        const dummyPosts = [...posts];
        if (alreadyLiked) {
          const newLikes = dummyPosts[index].likes.filter(
            (id) => id !== userInfo?._id,
          );
          dummyPosts[index].likes = newLikes;
          setPosts(dummyPosts);
          await dispatch(unLikePost(_id)).unwrap();
        } else {
          const newPosts = dummyPosts.map((post) =>
            post?._id === postId
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
        } else {
          const newPosts = dummyPosts.map((post) =>
            post?._id === postId
              ? { ...post, savedBy: [...post.savedBy, userInfo?._id] }
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

  return <div>{allPosts?.length > 0 && postFeed()}</div>;
}
