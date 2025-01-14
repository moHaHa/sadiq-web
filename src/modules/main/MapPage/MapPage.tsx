import { FC } from "react";
import AppLayout from "~/layouts/AppLayout/AppLayout";

interface MapPageProps {}

const MapPage: FC<MapPageProps> = ({}) => {
  return (
    <>
      <AppLayout title="الخريطة">
        <div className="plg">
          <div className="bg-white rounded-xl  p-sm border-1px border-solid border-[#ccc]"></div>
        </div>
      </AppLayout>
    </>
  );
};

export default MapPage;
