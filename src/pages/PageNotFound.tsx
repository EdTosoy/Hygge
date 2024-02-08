import { PrimaryButton } from "components";

export const PageNotFound = () => {
  return (
    <div className="grid place-content-center h-svh">
      <h3 className="text-center font-bold"></h3>
      <h1 className="text-center text-150 font-bold">404</h1>
      <h3 className="text-center text-2xl font-medium text-dark-violet">
        Oops!
      </h3>
      <h4 className="text-center text-xl font-medium my-3">
        This content isn’t available right now
      </h4>
      <p className="text-center font-medium text-xs text-semi-gray max-w-446  leading-6">
        When this happens, it’s usually because the owner only shared it with a
        small group of people, changed who can see it or it’s been deleted.
      </p>
      <div className="grid place-content-center">
        <PrimaryButton
          className="mt-11 py-2 px-6 rounded-full"
          text="Go Back"
        />
      </div>
    </div>
  );
};
