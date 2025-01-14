import { Button } from "antd";
import { FC, useState } from "react";
import { commonDays } from "~/utils/commonDays";
import { TPreFilterType } from "./types";
import PreFiltersSelectUi from "./ui/PreFiltersSelectUi";

interface PreFiltersSelectProps {}

const PreFiltersSelect: FC<PreFiltersSelectProps> = ({}) => {
  const [open, setOpen] = useState(false);
  const { thisDay } = commonDays();
  const preDefinedFiltersList: TPreFilterType[] = [
    {
      title: "اليوم",
      filter: {
        "createdAt[gte]": thisDay.start,
        "createdAt[lte]": thisDay.end,
      },
    },
    {
      title: "اليوم في ضاحية قدسيا",
      filter: {
        "createdAt[gte]": thisDay.start,
        "createdAt[lte]": thisDay.end,
      },
    },
    {
      title: "انتهاكات في ضاحية قدسيا",
      filter: {
        "createdAt[gte]": thisDay.start,
        "createdAt[lte]": thisDay.end,
      },
    },
  ];
  return (
    <PreFiltersSelectUi
      open={open}
      setOpen={setOpen}
      title="تصفية مسبق"
      button={
        <div className="flex gap-10px">
          <div>اختيار تصفية مسبق</div>
          <div>
            <div className="i-solar:inbox-archive-linear"></div>
          </div>
        </div>
      }
      content={
        <div className="pt-14px">
          {preDefinedFiltersList.map(({ title }) => (
            <div className="bg-[#eee] psm mb-4px rounded-lg">{title}</div>
          ))}

          <div className="pt-14px flex jc">
            <Button>إضافة </Button>
          </div>
        </div>
      }
    />
  );
};

export default PreFiltersSelect;
