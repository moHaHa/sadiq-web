import { FC } from "react";
import AppLayout from "~/layouts/AppLayout/AppLayout";

interface BrowsePageProps {}

const BrowsePage: FC<BrowsePageProps> = ({}) => {
  return (
    <>
      <AppLayout title="تصفح">
        <div>
          <div className="flex border-b-1px border-b-solid border-b-[#ccc]   px-10px overflow-x-scroll w-100vw ">
            <div className="py-8px border-e-1px border-e-solid border-e-[#ccc] px-8px text-nowrap">
              الادارة العامة
            </div>
            <div className="py-8px border-e-1px border-e-solid border-e-[#ccc] px-8px text-nowrap">
              ادارة العمليات العسكرية
            </div>
            <div className="py-8px border-e-1px border-e-solid border-e-[#ccc] px-8px text-nowrap">
              مخفر ضاحية قدسيا
            </div>
            <div className="py-8px border-e-1px border-e-solid border-e-[#ccc] px-8px text-nowrap">
              بلدية ضاحية قدسيا
            </div>
            <div className="py-8px border-e-1px border-e-solid border-e-[#ccc] px-8px text-nowrap">
              رائج
            </div>
          </div>
        </div>
        <div className="plg">
          <div className="bg-white rounded-xl  p-sm border-1px border-solid border-[#ccc] mb-sm">
            <div className="text-center"> إبلاغ عن انتهاك</div>
            <div>حالة الإبلاغ : </div>
            <div className="flex ic gap-4px">
              <div className="w-4px h-4px rounded-full bg-[#ff0000]"></div>
              <div>لم يتم اتخاذ اي اجراء بعد </div>
            </div>
            <div>
              <div className="border-b-1px border-b-solid my-12px"></div>
            </div>
            <div className="flex gap-10px">
              <div className="flex-1">
                <div>موقع الإنتهاك </div>

                <div className="py-sm">
                  <div className="border-1px border-solid border-gray rounded-lg plg h-30px bg-[url(https://i.pinimg.com/736x/2d/1f/6c/2d1f6c60dad8f7b2101931ef19df16df.jpg)]"></div>
                </div>
              </div>
              <div className="flex-1">
                <div>الصور المرفقة </div>

                <div className="py-sm">
                  <div className="border-1px border-solid border-gray rounded-lg plg h-30px bg-[url(https://i.pinimg.com/736x/34/6d/89/346d896014bd32d5d30d29f5c915eb0b.jpg)]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  );
};

export default BrowsePage;
