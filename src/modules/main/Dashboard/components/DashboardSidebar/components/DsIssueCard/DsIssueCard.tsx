import { Button, message } from "antd";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { FC } from "react";
import { getIssueStatusConfig } from "~/server/helpers/getIssueStatusConfig";
import { getIssueTypeConfig } from "~/server/helpers/getIssueTypeConfig";
import { TIssueSummary } from "~/server/issue/types/issue.summary.type";
dayjs.extend(relativeTime);

interface DsIssueCardProps {
  issue: TIssueSummary;
  onOpenDetails: (id: string) => void;
}

const DsIssueCard: FC<DsIssueCardProps> = ({ issue, onOpenDetails }) => {
  const { arWord, color, icon } = getIssueTypeConfig(issue.type);
  const { tag } = getIssueStatusConfig(issue.status);
  const copyLinkToClipboard = (link: string) => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        message.success("الرابط تم نسخه بنجاح");
      })
      .catch(() => {
        message.error("حدث خطأ أثناء نسخ الرابط");
      });
  };

  return (
    <div className="font-sans   rounded-lg">
      <div className="flex justify-between ic">
        <div className="flex ic">
          <div className="me-sm">{icon} </div>
          {issue.text.slice(0, 24)}
          {issue.text.length > 24 && ".."}
        </div>
        <div>{tag}</div>
      </div>
      <div className=" pt-8px text-14px op-50 flex flex-gap-4px">
        {issue.location?.governorate}
        <span>، </span>
        {issue.location?.city}
      </div>
      <div className="mt-14px f justify-between items-end ">
        <div className="text-12px op50 ">
          <span dir="ltr">{dayjs(issue.createdAt).fromNow()}</span>
        </div>
        <div className="f flex-gap-8px ">
          <Button
            size="small"
            onClick={() => onOpenDetails?.(issue.id)}
            className="font-sans"
            icon={<div className="i-solar-eye-outline"></div>}
          >
            التفاصيل
          </Button>
          <Button
            size="small"
            onClick={() => copyLinkToClipboard?.(issue.id)}
            className="font-sans"
            icon={<div className="i-solar-copy-outline"></div>}
          >
            نسخ الرابط
          </Button>
        </div>
      </div>

      {/* <div className="flex flex-wrap gap-8px mt-4px">
        <Button disabled>Assign </Button>
        <Button onClick={() => onOpenDetails?.(issue.id)}>Details </Button>
        <Button>Open In new tab </Button>
        <Button>Copy Link </Button>
      </div> */}
    </div>
  );
};

export default DsIssueCard;
