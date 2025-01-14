// components/DashboardSidebar.tsx
import { FC } from "react";
import { useUrlState } from "~/hooks/useUrlState/useUrlState";
import { useIssuesQuery } from "~/server/issue/useIssuesQuery/useIssuesQuery";
import DsAddIssueDialog from "./components/DsAddIssue/DsAddIssueDialog";
import DsIssueCard from "./components/DsIssueCard/DsIssueCard";
import DsIssueDialog from "./components/DsIssueDialog/DsIssueDialog";

const DashboardSidebar: FC = () => {
  const { data } = useIssuesQuery();
  const { urlState, setUrlState } = useUrlState<{ id?: string }>({
    prefix: "issueDetails.",
    initialValues: {
      id: undefined,
    },
  });
  return (
    <div className="w-400px bg-white  pt-lg">
      <div className="text-24px text-base-primary-darker font-sans">
        البلاغات الواردة
      </div>
      <div className="b-b-1px b-b-solid b-b-[#EAECF1] mt-14px"></div>
      <div className="h-[calc(100vh-140px)] overflow-y-scroll pt-60px px-18px">
        {data?.data.map((issue) => (
          <div className="mb-8px">
            <DsIssueCard
              onOpenDetails={(e) => {
                setUrlState({ id: e });
              }}
              issue={issue}
            ></DsIssueCard>
          </div>
        ))}
        <DsIssueDialog
          onClose={() => {
            setUrlState({});
          }}
          id={urlState?.id}
        ></DsIssueDialog>
      </div>
      <div className="py-sm bg-white px-sm select-none cursor-pointer">
        <DsAddIssueDialog
          button={
            <div className="text-white bg-base-primary-main fcc psm rounded-xl">
              <div className="flex gap-12px ic">
                <div className="i-solar:pen-new-round-linear"></div>
                <div>تقديم طلب</div>
              </div>
            </div>
          }
        ></DsAddIssueDialog>
      </div>
    </div>
  );
};

export default DashboardSidebar;
