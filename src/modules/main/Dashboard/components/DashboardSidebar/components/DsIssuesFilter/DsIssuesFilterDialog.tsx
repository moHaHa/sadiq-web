import { Button, Modal } from "antd";
import { FC, useState } from "react";
import DsIssuesFilter from "./DsIssuesFilter";

interface DsIssuesFilterDialogProps {}

const DsIssuesFilterDialog: FC<DsIssuesFilterDialogProps> = ({}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button className="font-sans" onClick={() => setOpen(true)}>
        تصفية
      </Button>
      <Modal
        title={<div className="font-sans">تصفية</div>}
        open={open}
        onCancel={() => setOpen(false)}
      >
        <DsIssuesFilter></DsIssuesFilter>
      </Modal>
    </>
  );
};

export default DsIssuesFilterDialog;
