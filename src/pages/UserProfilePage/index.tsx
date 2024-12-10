import { ProfileSummary } from "components";
import { ProfileFeed } from "containers";
import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect } from "react";
import { useParams } from "react-router";
import { selectSingleUserInfo } from "src/features/auth/selectors";
import { getSingleUser } from "src/features/auth/api";
import { UserInfo } from "src/features/auth/types";

export const UserProfilePage = () => {
  const singleUserInfo = useAppSelector(selectSingleUserInfo) as UserInfo;
  const dispatch = useAppDispatch();

  const { id } = useParams();
  if (!id) return null;

  const getUserInfo = async () => {
    try {
      const data = await dispatch(getSingleUser(id)).unwrap();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserInfo();
    console.log(singleUserInfo);
  }, [id]);

  return (
    <div className="body-grid-container">
      <div className="col-start-2 col-end-3 main-grid-container ">
        {singleUserInfo && <ProfileSummary singleUserInfo={singleUserInfo} />}
        <div className="col-start-2 col-end-3">
          <div className="bg-white main-section-height">
            <div className="p-6">{<ProfileFeed />}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
