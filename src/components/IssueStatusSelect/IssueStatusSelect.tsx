import { Button, Space } from 'antd';
import { FC } from 'react';
import { IssueStatus } from '~/server/types/issueStatus.type';

interface IssueStatusSelectProps {
	value?: IssueStatus[];
	onChange?: (value: IssueStatus[]) => void;
}

const IssueStatusSelect: FC<IssueStatusSelectProps> = ({ onChange, value }) => {
	const items: { label: string; value: IssueStatus; icon: JSX.Element }[] = [
		{
			value: 'open',
			label: 'open',
			icon: <div className='i-solar:clock-circle-linear' />,
		},
		{
			value: 'in progress',
			label: 'In Progress',
			icon: <div className='i-svg-spinners:pulse-multiple' />,
		},
		{
			value: 'closed',
			label: 'Closed',
			icon: <div className='i-solar:check-read-linear' />,
		},
	];

	const handleButtonClick = (e: IssueStatus) => {
		if (value?.includes(e)) {
			onChange?.(value.filter((v) => v !== e));
		} else {
			[...(value ?? []), e];
		}
	};

	return (
		<Space style={{ width: '100%' }} direction='horizontal' wrap>
			{items.map((item) => (
				<Button
					key={item.value}
					type={value?.includes(item.value) ? 'primary' : 'dashed'}
					onClick={() => handleButtonClick(item.value)}
				>
					{item.icon} {/* Render the icon */}
					{item.label}
				</Button>
			))}
		</Space>
	);
};

export default IssueStatusSelect;
