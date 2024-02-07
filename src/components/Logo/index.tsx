export const Logo = () => {
  return (
    <div className="py-2 px-5 w-238">
      <div className="flex  gap-1 cursor-pointer">
        <h1 className="text-xl font-semibold">Hygge</h1>
        <h1 className="grid place-content-center">
          <div className="text-logo-red text-2xl grid place-content-center">
            <ion-icon name="heart" />
          </div>
        </h1>
      </div>
    </div>
  );
};
