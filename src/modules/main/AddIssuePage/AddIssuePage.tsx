import { Form } from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { FC } from "react";
import AppLayout from "~/layouts/AppLayout/AppLayout";
import { TIssueMutation } from "~/server/issue/types/issue.mutation.type";
import AddIssueIssueTypeSelect from "../components/AddIssueIssueTypeSelect";
import FilesAdder from "../components/FilesAdder/FilesAdder";
import MapLocationSelect from "../components/MapLocationSelect/MapLocationSelect";

interface AddIssuePageProps {}

const AddIssuePage: FC<AddIssuePageProps> = ({}) => {
  const [form] = useForm<TIssueMutation>();
  return (
    <>
      <AppLayout title="إنشاء بلاغ">
        <Form form={form}>
          <div className="plg text-black">
            <div className="bg-white rounded-xl p-sm border-1px border-solid border-[#ccc]">
              <div className="mb-8px text-18px">نوع البلاغ : </div>
              <div className="flex gap-8px flex-wrap mb-8px">
                <Form.Item noStyle name={"type"}>
                  <AddIssueIssueTypeSelect></AddIssueIssueTypeSelect>
                </Form.Item>
              </div>
              <div className="border-b-1px border-b-solid op-20 my-12px"></div>

              <div className="mb-8px text-18px">تفاصيل : </div>
              <div className="flex gap-8px flex-wrap mb-8px">
                <Form.Item noStyle name={"text"}>
                  <TextArea rows={10}></TextArea>
                </Form.Item>
              </div>
              <div className="border-b-1px border-b-solid op-20 my-12px"></div>

              <div className="mb-8px text-18px">
                {" "}
                إرفاق صور او ملفات او تسجيلات :
              </div>
              <div className="flex gap-8px flex-wrap mb-8px">
                <Form.Item noStyle name={"files"}>
                  <FilesAdder onChange={console.log}></FilesAdder>
                </Form.Item>
                <div className="text-12px text-center op-40">
                  <i>
                    " كذلك يمكنك التقاط صور او تسجيل فيدوهات او تسجيل صوتي بشكل
                    مباشر"
                  </i>
                </div>
              </div>

              <div className="border-b-1px border-b-solid op-20 my-12px"></div>
              <div className="mb-8px text-18px">تحديد موقع على الخريطة</div>
              <div className="mb-8px text-center text-12px op-40">
                <div>
                  <i>يرجي تحديد موقع دقيق للمنطقة</i>
                </div>
                <i>
                  " باستخدام اصبعين يمكن التكبير و التوجه للمكان المحدد ،
                  <b>بالنقر مرتين</b> سوف تضع مؤشر على المكان المطلوب بدقة"
                </i>
              </div>

              <div className="py-sm">
                <Form.Item noStyle name={"location"}>
                  <MapLocationSelect></MapLocationSelect>
                </Form.Item>
              </div>
            </div>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default AddIssuePage;
