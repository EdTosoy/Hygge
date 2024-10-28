import { Profile } from "components";

type Props = {};

export const Contacts = (props: Props) => {
  return (
    <div className="  mt-5 fixed right-0">
      <div className="py-3 px-5 w-293 grow">
        <div> Contacts</div>
        <Profile />
        <Profile />
      </div>
    </div>
  );
};
