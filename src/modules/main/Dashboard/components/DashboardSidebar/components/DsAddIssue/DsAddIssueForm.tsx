import { Button, Form, message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import TextArea from 'antd/es/input/TextArea';
import { FC, useState } from 'react';
import AddIssueIssueTypeSelect from '~/modules/main/components/AddIssueIssueTypeSelect';
import FilesAdder from '~/modules/main/components/FilesAdder/FilesAdder';
import MapLocationSelect from '~/modules/main/components/MapLocationSelect/MapLocationSelect';
import { TIssueMutation } from '~/server/issue/types/issue.mutation.type';
import { useIssueMutation } from '~/server/issue/useIssueMutation/useIssueMutation';

interface DsAddIssueFormProps {
	onSuccess: () => void;
}

const DsAddIssueForm: FC<DsAddIssueFormProps> = ({ onSuccess }) => {
	const [form] = useForm<TIssueMutation>();
	const [step, setStep] = useState(1);
	const { mutate, isLoading } = useIssueMutation({
		onSuccess() {
			onSuccess();
			message.success('تم ارسال البلاغ بنجاح');
		},
	});
	return (
		<div className='pt-14px'>
			<div className='flex flex-gap-4px mb-sm'>
				<div onClick={() => setStep(1)} className='bg-base-primary-main h-6px flex-1 rounded-full'></div>
				{step == 1 ? (
					<div className='bg-base-primary-main op-20 h-6px flex-1 rounded-full'></div>
				) : (
					<div className='bg-base-primary-main h-6px flex-1 rounded-full'></div>
				)}
			</div>
			<Form
				form={form}
				onFinish={() => {
					const fields: TIssueMutation = form.getFieldsValue(true);
					console.log(fields);
					const formData = new FormData();
					console.log('fields.files', fields.files);
					fields.files.forEach((e) => {
						formData.append('files', e.originFileObj as any);
					});

					formData.append('type', fields.type);
					formData.append('text', fields.text);

					fields.location?.lat &&
						fields.location?.lng &&
						formData.append('location', `${fields.location?.lat},${fields.location?.lng}`);
					mutate(formData as any);
				}}
			>
				<div className=' text-black font-sans'>
					{step == 1 ? (
						<>
							<div className='mb-8px text-18px'>نوع البلاغ </div>
							<div className='flex gap-8px flex-wrap mb-8px'>
								<Form.Item noStyle name={'type'}>
									<AddIssueIssueTypeSelect></AddIssueIssueTypeSelect>
								</Form.Item>
							</div>
							<div className='border-b-1px border-b-solid op-20 my-12px'></div>

							<div className='mb-8px text-18px'>الوصف </div>
							<div className='flex gap-8px flex-wrap mb-8px'>
								<Form.Item noStyle name={'text'}>
									<TextArea rows={8}></TextArea>
								</Form.Item>
							</div>
							<div className='border-b-1px border-b-solid op-20 my-12px'></div>

							<div className='mb-8px text-18px'> إرفاق صور او ملفات او تسجيلات</div>
							<div className='flex gap-8px flex-wrap mb-8px'>
								<Form.Item noStyle name={'files'}>
									<FilesAdder onChange={console.log}></FilesAdder>
								</Form.Item>
								<div className='text-12px text-center op-40'>
									<i>" كذلك يمكنك التقاط صور او تسجيل فيدوهات او تسجيل صوتي بشكل مباشر"</i>
								</div>
							</div>
							<div className='mt-md'>
								<Button onClick={() => setStep(2)} className='font-sans' block type='primary'>
									التالي
								</Button>
							</div>
						</>
					) : (
						<>
							<div>
								<div
									className='i-solar-arrow-right-outline text-18px cursor-pointer'
									onClick={() => setStep(1)}
								></div>
							</div>
							<div className='mb-8px text-18px'>تحديد موقع على الخريطة</div>
							<div className='mb-8px text-center text-12px op-40'>
								<div>
									<i>يرجي تحديد موقع دقيق للمنطقة</i>
								</div>
								<i>
									" باستخدام اصبعين يمكن التكبير و التوجه للمكان المحدد ،<b>بالنقر مرتين</b> سوف تضع مؤشر على
									المكان المطلوب بدقة"
								</i>
							</div>
							<div className='py-sm'>
								<Form.Item noStyle name={'location'}>
									<MapLocationSelect></MapLocationSelect>
								</Form.Item>
							</div>
							<div className='mt-md'>
								<Button htmlType='submit' loading={isLoading} className='font-sans' block type='primary'>
									حفط
								</Button>
							</div>
						</>
					)}
				</div>
			</Form>
		</div>
	);
};

export default DsAddIssueForm;
