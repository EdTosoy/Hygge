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
        <button className="flex items-center justify-center bg-dark-violet w-full mt-11 text-white rounded-full py-2  px-6 hover:bg-dark-violet hover:text-white hover:ring-2 hover:ring-dark-violet hover:ring-opacity-50 shadow-3xl shadow-dark-violet">
          <div className="">Go Back</div>
        </button>
      </div>
    </div>
  );
};
