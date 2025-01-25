import { Button, Divider, message } from "antd";
import dayjs from "dayjs";
import { FC } from "react";
import { getIssueStatusConfig } from "~/server/helpers/getIssueStatusConfig";
import { getIssueTypeConfig } from "~/server/helpers/getIssueTypeConfig";
import { TIssueItem } from "~/server/issue/types/issue.item.type";
import DsIssueDetailsViewLocation from "./DsIssueDetailsViewLocation";

interface DsIssueDetailsContentProps {
  issue: TIssueItem;
}

const DsIssueDetailsContent: FC<DsIssueDetailsContentProps> = ({ issue }) => {
  const { arWord, color, icon, arFullWord } = getIssueTypeConfig(issue.type);
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
      <div className="f flex-col ic mb-14px">
        <div className="">{icon} </div>
        <div className="text-18px">{arFullWord} </div>
        <div>
          <div className=" pt-8px text-14px op-50 flex flex-gap-4px">
            {issue.location?.governorate}, {issue.location?.city}
          </div>
        </div>
      </div>
      <div className="flex justify-between ic">
        <div className="flex ic">{issue.text}</div>
      </div>
      <Divider></Divider>
      <div className="flex">
        {issue.files?.map((url) => (
          <div className="h-80px w-80px me-sm rounded-lg overflow-hidden">
            <img src={url} className="w-full"></img>
          </div>
        ))}
      </div>
      <Divider></Divider>
      <div className="h-300px">
        <DsIssueDetailsViewLocation
          value={issue.location}
        ></DsIssueDetailsViewLocation>
      </div>

      <Divider></Divider>
      <div className="mt-14px f justify-between items-end ">
        <div className="text-14px op50 ">
          <span dir="ltr">
            {dayjs(issue.createdAt).fromNow()} |{" "}
            {dayjs(issue.createdAt).format("MM/DD/YYYY (h:mmA)")}
          </span>
        </div>
        <div className="f flex-gap-8px ">
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
    </div>
  );
};

export default DsIssueDetailsContent;
