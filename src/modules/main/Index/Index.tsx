import { FC } from "react";
import AppLayout from "~/layouts/AppLayout/AppLayout";

interface IndexProps {}

const Index: FC<IndexProps> = ({}) => {
  return (
    <>
      <AppLayout title="الرئيسية">
        <div className="plg">
          <div className="bg-white rounded-xl  p-sm border-1px border-solid border-[#ccc]">
            Index
          </div>
        </div>
      </AppLayout>
    </>
  );
};

export default Index;
