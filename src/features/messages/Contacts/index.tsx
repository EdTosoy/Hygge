import { Profile } from "components";

type Props = {};

export const Contacts = (props: Props) => {
  return (
    <div className=" mt-5 fixed top-14 right-56 ">
      <div className="py-3 px-5 w-293 ">
        <div className="font-medium text-xs mb-2"> CONTACTS</div>
        <div className="py-1">
          <Profile showStatus />
        </div>
        <div className="py-1">
          <Profile />
        </div>
      </div>
    </div>
  );
};
