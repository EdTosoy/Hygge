import { useCallback, useRef } from "react";
import { IconContainer } from "components";
import { useDropzone } from "react-dropzone";

export const ImageUpload = ({ register, setAvatarPreview }) => {
  const hiddenInputRef = useRef<any>();

  const { ref: registerRef, ...rest } = register("profilePicture");

  const onUpload = () => {
    hiddenInputRef.current.click();
  };

  const onDropAvatar = useCallback((acceptedFiles: File[]) => {
    const file = new FileReader();

    file.onload = () => {
      setAvatarPreview(file.result as string);
    };

    file.readAsDataURL(acceptedFiles[0]);
  }, []);

  const {
    getRootProps: getAvatarRootProps,
    getInputProps: getAvatarInputProps,
  } = useDropzone({
    onDrop: onDropAvatar,
  });

  return (
    <div {...getAvatarRootProps()}>
      <input
        className="hidden"
        type="file"
        name="profilePicture"
        {...rest}
        {...getAvatarInputProps()}
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
