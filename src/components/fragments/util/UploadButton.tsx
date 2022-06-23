import { ChangeEventHandler, ChangeEvent, useRef, useState } from "react";
import Button from "./Button";

export interface UploadButtonParams {
  id?: string,
  value?: number | string | string[],
  onChange?: ChangeEventHandler<HTMLInputElement>,
  required?: boolean,
  disabled?: boolean,
  className?: string
}

const UploadButton = (props: Readonly<UploadButtonParams>) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const handleUpload = () => inputRef.current?.click();

  const handleDisplayFileDetails = (e: ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(e);
    }

    inputRef.current?.files && setUploadedFileName(inputRef.current.files[0].name);
  };

  return (
    <>
      <input id={props.id} ref={inputRef} onChange={handleDisplayFileDetails} className="d-none" type="file" value={props.value} required={props.required} disabled={props.disabled} />
      <Button onClick={handleUpload} type="button" outline={!uploadedFileName} className={props.className}>
        {uploadedFileName ? uploadedFileName : "Wybierz plik"}
      </Button>
    </>
  );
};

export default UploadButton;
