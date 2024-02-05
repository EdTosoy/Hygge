export const Logo = () => {
  return (
    <div className="gap-1 p-2">
      <div className="flex  cursor-pointer">
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
