import type { UploadFile, UploadProps } from "antd";
import { Upload } from "antd";
import { FC, useState } from "react";

interface FilesAdderProps {
  onChange: (files: UploadFile[]) => void;
}

const FilesAdder: FC<FilesAdderProps> = ({ onChange }) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    onChange(newFileList);
  };

  return (
    <Upload
      multiple
      fileList={fileList}
      onChange={handleChange}
      beforeUpload={() => false} // Prevents auto-upload to a server
    >
      <div className="w-100px h-100px border-solid border-[#eee] border-1px rounded-lg fcc">
        <div className="text-center">
          <div>رفع </div>
          <div className="i-solar:upload-broken"></div>
        </div>
      </div>
    </Upload>
  );
};

export default FilesAdder;
