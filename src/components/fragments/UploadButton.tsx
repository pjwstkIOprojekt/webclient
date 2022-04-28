import { useRef, useState } from "react";

const UploadButton = () => {
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = () => {
    inputRef.current?.click();
  };

  const handleDisplayFileDetails = () => {
    inputRef.current?.files && setUploadedFileName(inputRef.current.files[0].name);
  };

  return (
    <div>
      <input ref={inputRef} onChange={handleDisplayFileDetails} className="d-none" type="file" />
      <button
        type="button"
        onClick={handleUpload}
        className={`btn btn-${uploadedFileName ? "success" : "outline-success"}`}
      >
        {uploadedFileName ? uploadedFileName : "Wybierz plik"}
      </button>
    </div>
  );
};

export default UploadButton;
