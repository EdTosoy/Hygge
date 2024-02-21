import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "hooks";
import { getPosts } from "src/features/posts/api.ts";
import { selectAllPosts } from "src/features/posts/selectors";
import { Post } from "src/features/posts/types";
import { Profile } from "components";
import { IconContainer } from "components";
import { format } from "date-fns";

export function HomePage() {
  const dispatch = useAppDispatch();
  const AllPost = useAppSelector(selectAllPosts) as Post[];
  const getAllPosts = async () => {
    await dispatch(getPosts()).unwrap();
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  const postFeed = () => {
    return AllPost?.map((post: Post) => {
      const {
        _id,
        username,
        content,
        title,
        likesCount,
        commentsCount,
        createdAt,
        sharesCount,
      } = post;
      return (
        <div key={_id} className=" border-b border-light-gray">
          <div className="flex justify-between my-4 items-center">
            <Profile
              userProfile={{ username }}
              date={format(createdAt, "MMMM dd, yyyy 'at' h:mm a")}
            />
            <IconContainer className="text-xl ">
              <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </IconContainer>
          </div>
          <h1 className="font-semibold">{title}...</h1>
          <p>{content}</p>
          <div className="flex justify-between my-7">
            <div className="flex gap-1 text-xl items-center">
              <IconContainer>
                <ion-icon name="heart-outline"></ion-icon>
              </IconContainer>
              <p className="text-sm">{likesCount}</p>
            </div>
            <div className="flex gap-1 text-xl items-center">
              <IconContainer>
                <ion-icon name="chatbox-outline"></ion-icon>
              </IconContainer>
              <p className="text-sm">{commentsCount}</p>
            </div>
            <div className="flex gap-1 text-xl items-center">
              <IconContainer>
                <ion-icon name="image-outline"></ion-icon>
              </IconContainer>
              <p className="text-sm">{sharesCount}</p>
            </div>
          </div>
        </div>
      );
    });
  };
  return <div>{AllPost?.length && postFeed()}</div>;
}
