import { useEffect } from "react";
import { Profile } from "components";
import { useAppDispatch, useAppSelector } from "hooks";
import { getAllContacts } from "src/features/contacts/api";
import { selectAllContacts } from "src/features/contacts/selectors";

export const Contacts = () => {
  const dispatch = useAppDispatch();
  const accountContacts = useAppSelector(selectAllContacts);
  const getAllAccountContacts = async () => {
    try {
      await dispatch(getAllContacts()).unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllAccountContacts();
  }, []);

  return (
    <div className=" mt-5 absolute top-14 right-0 hidden md:block  ">
      <div className="py-3 px-5 w-293 ">
        <div className="font-medium text-xs mb-2"> CONTACTS</div>
        {accountContacts.map(({ contactInfo }, index) => {
          return (
            <div key={index} className="py-1">
              <Profile
                avatar={contactInfo.avatar}
                username={contactInfo.username}
                profileUserId={contactInfo.userId}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
