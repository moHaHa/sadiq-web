import { Button } from "antd";
import { FC, useState } from "react";
import { IssueType } from "~/server/types/issueType.type";

interface IssueTypeSelectProps {}

const IssueTypeSelect: FC<IssueTypeSelectProps> = ({}) => {
  const [selectedValues, setSelectedValues] = useState<IssueType[]>([]);

  const items: { label: string; value: IssueType }[] = [
    { value: "violation", label: "انتهاك" },
    { value: "corruption", label: "فساد" },
    { value: "serviceIssue", label: "مشكلة خدمية" },
    { value: "suggestion", label: "مقترح" },
  ];

  const handleButtonClick = (value: IssueType) => {
    setSelectedValues(
      (prevSelected) =>
        prevSelected.includes(value)
          ? prevSelected.filter((v) => v !== value) // Deselect if already selected
          : [...prevSelected, value] // Add if not selected
    );
  };

  return (
    <div className="flex  gap-8px">
      {items.map((item) => (
        <Button
          type={selectedValues.includes(item.value) ? "primary" : "dashed"}
          key={item.value}
          onClick={() => handleButtonClick(item.value)}
        >
          {item.label}
        </Button>
      ))}
    </div>
  );
};

export default IssueTypeSelect;
