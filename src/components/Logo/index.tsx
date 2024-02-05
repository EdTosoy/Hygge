export const Logo = () => {
  return (
    <div className="p-2">
      <div className="flex  gap-1 cursor-pointer">
        <h1 className="text-2xl font-semibold">Hygge</h1>
        <h1 className="grid place-content-center">
          <div className="text-logo-red">
            <ion-icon name="heart" size="large" />
          </div>
        </h1>
      </div>
    </div>
  );
};
