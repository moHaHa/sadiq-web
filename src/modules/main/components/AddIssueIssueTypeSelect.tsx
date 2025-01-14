import { FC } from "react";
import { IssueType } from "~/server/types/issueType.type";

interface AddIssueIssueTypeSelectProps {
  value?: IssueType;
  onChange?: (value: IssueType) => void;
}

const AddIssueIssueTypeSelect: FC<AddIssueIssueTypeSelectProps> = ({
  onChange,
  value,
}) => {
  return (
    <div className="flex gap-8px flex-wrap text-black">
      <label
        className={`px-8px border-1px ${
          value === "violation"
            ? " bg-[#3bd47d] border-solid border-[#3bd47d] text-white   shadow-md"
            : "border-dashed border-black"
        } py-4px rounded-lg cursor-pointer`}
      >
        <input
          type="radio"
          name="reportType"
          value="violation"
          checked={value === "violation"}
          onChange={() => onChange?.("violation")}
          className="hidden"
        />
        بلاغ عن انتهاك
      </label>
      <label
        className={`px-8px border-1px ${
          value === "corruption"
            ? " bg-[#3bd47d] border-solid border-[#3bd47d] text-white   shadow-md"
            : "border-dashed border-black"
        } py-4px rounded-lg cursor-pointer`}
      >
        <input
          type="radio"
          name="reportType"
          value="corruption"
          checked={value === "corruption"}
          onChange={() => onChange?.("corruption")}
          className="hidden"
        />
        بلاغ عن فساد
      </label>
      <label
        className={`px-8px border-1px ${
          value === "serviceIssue"
            ? " bg-[#3bd47d] border-solid border-[#3bd47d] text-white   shadow-md"
            : "border-dashed border-black"
        } py-4px rounded-lg cursor-pointer`}
      >
        <input
          type="radio"
          name="reportType"
          value="serviceIssue"
          checked={value === "serviceIssue"}
          onChange={() => onChange?.("serviceIssue")}
          className="hidden"
        />
        بلاغ عن مشكلة خدمية
      </label>
      <label
        className={`px-8px border-1px ${
          value === "suggestion"
            ? " bg-[#3bd47d] border-solid border-[#3bd47d] text-white   shadow-md"
            : "border-dashed border-black"
        } py-4px rounded-lg cursor-pointer`}
      >
        <input
          type="radio"
          name="reportType"
          value="suggestion"
          checked={value === "suggestion"}
          onChange={() => onChange?.("suggestion")}
          className="hidden"
        />
        مُقترح
      </label>
    </div>
  );
};

export default AddIssueIssueTypeSelect;
