import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export const useAppDropzone = () => {
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

  const onDrop = useCallback((acceptedFiles: Array<File>) => {
    const file = new FileReader();

    file.onload = function () {
      setPreview(file.result);
    };

    file.readAsDataURL(acceptedFiles[0]);
  }, []);

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop,
    });

  const formData = new FormData();

  formData.append("file", acceptedFiles[0]);
  formData.append("upload_preset", "test-react-uploads-unsigned");
  formData.append("api_key", import.meta.env.VITE_CLOUDINARY_API_KEY);

  return {
    getRootProps,
    getInputProps,
    isDragActive,
    preview,
    formData,
  };
};
