import { Button, Space } from "antd";
import { FC, useState } from "react";
import { IssueStatus } from "~/server/types/issueStatus.type";

interface IssueStatusSelectProps {}

const IssueStatusSelect: FC<IssueStatusSelectProps> = ({}) => {
  const [selectedValues, setSelectedValues] = useState<IssueStatus[]>([]);

  const items: { label: string; value: IssueStatus; icon: JSX.Element }[] = [
    {
      value: "open",
      label: "open",
      icon: <div className="i-solar:clock-circle-linear" />,
    },
    {
      value: "inProgress",
      label: "In Progress",
      icon: <div className="i-svg-spinners:pulse-multiple" />,
    },
    {
      value: "resolved",
      label: "Resolved",
      icon: <div className="i-solar:check-read-linear" />,
    },
  ];

  const handleButtonClick = (value: IssueStatus) => {
    setSelectedValues(
      (prevSelected) =>
        prevSelected.includes(value)
          ? prevSelected.filter((v) => v !== value) // Deselect if already selected
          : [...prevSelected, value] // Add if not selected
    );
  };

  return (
    <Space style={{ width: "100%" }} direction="horizontal" wrap>
      {items.map((item) => (
        <Button
          key={item.value}
          type={selectedValues.includes(item.value) ? "primary" : "dashed"}
          onClick={() => handleButtonClick(item.value)}
        >
          {item.icon} {/* Render the icon */}
          {item.label}
        </Button>
      ))}
    </Space>
  );
};

export default IssueStatusSelect;
