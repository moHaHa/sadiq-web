import { Button, Modal } from "antd";
import { FC, ReactNode, useState } from "react";
import DsAddIssueForm from "./DsAddIssueForm";

interface DsAddIssueDialogProps {
  button: ReactNode;
}

const DsAddIssueDialog: FC<DsAddIssueDialogProps> = ({ button }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div onClick={() => setOpen(true)}>
        {button ? button : <Button>Add</Button>}
      </div>
      <Modal
        title={
          <div className=" flex ic  flex-gap-14px">
            <div className="i-solar:pen-new-round-linear text-24px"></div>
            <div className="font-sans text-20px ">إنشاء بلاغ</div>
          </div>
        }
        open={open}
        onCancel={() => setOpen(false)}
        footer={false}
      >
        <DsAddIssueForm></DsAddIssueForm>
      </Modal>
    </div>
  );
};

export default DsAddIssueDialog;
