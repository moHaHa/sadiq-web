import { Divider, Modal, Spin } from "antd";
import { FC } from "react";
import { useIssueByIdQuery } from "~/server/issue/useIssueByIdQuery/useIssueByIdQuery";

interface DsIssueDialogProps {
  id?: string;
  onClose?: () => void;
}

const DsIssueDialog: FC<DsIssueDialogProps> = ({ id, onClose }) => {
  const { data, isLoading } = useIssueByIdQuery(id as string, {
    enabled: !!id,
  });
  return (
    <Modal footer={false} open={!!id} onCancel={onClose}>
      {isLoading ? (
        <div className="h-400px">
          <Spin></Spin>
        </div>
      ) : (
        <>
          <div> {data?.data.text}</div>
          <Divider></Divider>

          <div>النوع : {data?.data.type}</div>
          <Divider></Divider>

          <div>
            <div>
              files :{" "}
              <ul>
                {data?.data.files?.map((file, index) => (
                  <li key={index}>{file}</li>
                ))}
              </ul>
            </div>
            <ul>
              {data?.data.files?.map((file, index) => (
                <li key={index}>{file}</li>
              ))}
            </ul>
          </div>
          <Divider></Divider>
          <div>
            {data?.data.location ? (
              <div>
                <div>المحافظة: {data?.data.location.governorate}</div>
                <div>المدينة : {data.data.location.city}</div>
              </div>
            ) : (
              "N/A"
            )}
          </div>
        </>
      )}
    </Modal>
  );
};

export default DsIssueDialog;
