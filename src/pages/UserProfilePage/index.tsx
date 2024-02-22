import { ProfileSummary } from "components";
import { ProfileFeed } from "containers";

export const UserProfilePage = () => {
  return (
    <div className="body-grid-container">
      <div className="col-start-2 col-end-3 main-grid-container ">
        <ProfileSummary />
        <div className="col-start-2 col-end-3">
          <div className="bg-white main-section-height">
            <div className="p-6">{<ProfileFeed />}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
