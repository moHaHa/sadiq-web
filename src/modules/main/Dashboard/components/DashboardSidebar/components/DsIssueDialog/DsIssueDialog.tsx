import { Modal, Spin } from "antd";
import { FC } from "react";
import { getIssueTypeConfig } from "~/server/helpers/getIssueTypeConfig";
import { useIssueByIdQuery } from "~/server/issue/useIssueByIdQuery/useIssueByIdQuery";
import DsIssueDetailsContent from "./components/DsIssueDetailsContent";

interface DsIssueDialogProps {
  id?: string;
  onClose?: () => void;
}

const DsIssueDialog: FC<DsIssueDialogProps> = ({ id, onClose }) => {
  const { data, isLoading } = useIssueByIdQuery(id as string, {
    enabled: !!id,
  });

  const issueConfig = data?.data.type
    ? getIssueTypeConfig(data?.data.type)
    : undefined;

  return (
    <Modal
      title={
        <div>
          <div className="font-sans">تفاصيل البلاغ</div>
        </div>
      }
      footer={false}
      open={!!id}
      onCancel={onClose}
    >
      {isLoading ? (
        <div className="h-400px">
          <Spin></Spin>
        </div>
      ) : (
        <>
          {data && (
            <DsIssueDetailsContent issue={data.data}></DsIssueDetailsContent>
          )}
        </>
      )}
    </Modal>
  );
};

export default DsIssueDialog;
