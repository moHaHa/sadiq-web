import { Button } from 'antd';
import { FC } from 'react';
import { useAppWrapperContext } from '~/context/AppWrapperContent/AppWrapperContent';
import { useIssuePublishMutation } from '~/server/issue/useIssuePublishMutation/useIssuePublishMutation';

interface IssuePublishToggleProps {
	issueId: string;
	value: boolean;
	onSuccess: (value: boolean) => void;
}

const IssuePublishToggle: FC<IssuePublishToggleProps> = ({ issueId, value, onSuccess }) => {
	const { mutate, isLoading } = useIssuePublishMutation(issueId, {
		onSuccess() {
			onSuccess?.(!value);
		},
	});

	const { modal } = useAppWrapperContext();

	return (
		<>
			<Button.Group>
				<Button
					size='small'
					onClick={() => {
						modal.confirm({
							title: <div className='font-sans'>تأكيد النشر</div>,
							onOk: () => {
								mutate({ publish: true });
							},
							icon: (
								<div className='i-solar:shield-warning-linear text-20px me-4px text-base-primary-main'></div>
							),
							okText: 'تأكيد',
							cancelText: 'إلغاء',
							okButtonProps: {
								className: 'font-sans',
							},
							cancelButtonProps: {
								className: 'font-sans',
							},
						});
					}}
					loading={value && isLoading}
					type={value ? 'primary' : 'default'}
				>
					<div className='i-solar:users-group-two-rounded-bold'></div>
				</Button>
				<Button
					size='small'
					onClick={() => {
						modal.confirm({
							title: <div className='font-sans'>تقييد الوصل</div>,
							onOk: () => {
								mutate({ publish: false });
							},
							icon: (
								<div className='i-solar:shield-warning-linear text-20px me-4px text-base-primary-main'></div>
							),
							okText: 'تأكيد',
							okButtonProps: {
								className: 'font-sans',
							},
							cancelButtonProps: {
								className: 'font-sans',
							},
							cancelText: 'إلغاء',
						});
					}}
					loading={!value && isLoading}
					type={value ? 'default' : 'primary'}
				>
					<div className='i-solar:lock-outline'></div>
				</Button>
			</Button.Group>
		</>
	);
};

export default IssuePublishToggle;
