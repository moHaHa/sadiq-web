import { DatePicker, Select } from "antd";
import { FC } from "react";
import IssueStatusSelect from "~/components/IssueStatusSelect/IssueStatusSelect";
import IssueTypeSelect from "~/components/IssueTypeSelect/IssueTypeSelect";

interface DsIssuesFilterProps {}

const DsIssuesFilter: FC<DsIssuesFilterProps> = ({}) => {
  return (
    <>
      <div className=" font-sans border-dashed border-[#99999999] psm rounded-lg">
        <div>
          <div className="mb-12px">
            <div className=" mb-12px">نوع البلاغ :</div>
            <IssueTypeSelect></IssueTypeSelect>
          </div>
          <div className=" mb-12px">حالة البلاغ :</div>

          <div className="mb-12px">
            <IssueStatusSelect></IssueStatusSelect>
          </div>
          <div className=" mb-12px">جغرافيا : </div>
          <div className="mb-12px">
            <Select
              style={{ width: "100%" }}
              placeholder={" المحافظة"}
            ></Select>
          </div>
          <div className="mb-12px">
            <Select style={{ width: "100%" }} placeholder={" المدينة"}></Select>
          </div>
          <div className=" mb-12px">تاريخيا : </div>

          <div className="mb-12px flex gap-12px">
            <div className="flex-1">
              <DatePicker
                style={{ width: "100%" }}
                placeholder="من تاريخ"
              ></DatePicker>
            </div>
            <div className="flex-1">
              <DatePicker
                style={{ width: "100%" }}
                placeholder="الى تاريخ"
              ></DatePicker>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DsIssuesFilter;
