import { useRef } from "react";
import { IconContainer } from "components";

export const ImageUpload = ({ register, setPreview }) => {
  const hiddenInputRef = useRef<any>();

  const { ref: registerRef, ...rest } = register("profilePicture");

  const handleUploadedFile = (event) => {
    const file = event.target.files[0];

    const urlImage = URL.createObjectURL(file);

    setPreview(urlImage);
  };

  const onUpload = () => {
    hiddenInputRef.current.click();
  };

  return (
    <div>
      <input
        className="hidden"
        type="file"
        name="profilePicture"
        {...rest}
        onChange={handleUploadedFile}
        ref={(e) => {
          registerRef(e);
          hiddenInputRef.current = e;
        }}
      />

      <button onClick={onUpload}>
        <IconContainer className="text-2xl text-dark-violet hover:bg-light-gray p-3 rounded-full">
          <ion-icon name="images-outline"></ion-icon>
        </IconContainer>
      </button>
    </div>
  );
};
