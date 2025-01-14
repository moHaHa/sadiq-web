// components/DashboardHeader.tsx
import { FC } from "react";
import avatarSample from "~/assets/avatar-sample.png";

const DashboardHeader: FC = () => {
  return (
    <div className="fixed top-30px left-30px z-99">
      <div className="flex gap-8px">
        <div className="p-sm bg-white font-sans rounded-xl flex ic gap-8px">
          <div className="i-solar:phone-calling-rounded-linear text-24px"></div>
          <div>الارقام</div>
        </div>
        <div className="p-sm bg-white font-sans rounded-xl flex ic gap-8px">
          <div className="i-solar:info-square-broken text-24px"></div>
          <div>المساعدة</div>
        </div>
        <div className="p-sm py-4px bg-white rounded-xl flex gap-8px ic">
          <div className="w-30px h-30px rounded-full overflow-hidden">
            <img src={avatarSample} className="w-full" alt="User Avatar" />
          </div>
          <div className="font-sans">اسم المستخدم</div>
          <div className="i-solar:alt-arrow-down-line-duotone text-18px"></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
