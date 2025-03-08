import { Button } from 'antd';
import { FC } from 'react';
import { IssueType } from '~/server/types/issueType.type';

interface IssueTypeSelectProps {
	value?: IssueType[];
	onChange?: (value: IssueType[]) => void;
}

const IssueTypeSelect: FC<IssueTypeSelectProps> = ({ value, onChange }) => {
	const items: { label: string; value: IssueType }[] = [
		{ value: 'violation', label: 'انتهاك' },
		{ value: 'corruption', label: 'فساد' },
		{ value: 'serviceIssue', label: 'مشكلة خدمية' },
		{ value: 'suggestion', label: 'مقترح' },
	];

	const handleButtonClick = (e: IssueType) => {
		if (value?.includes(e)) {
			onChange?.(value.filter((v) => v !== e));
		} else {
			[...(value ?? []), e];
		}
	};

	return (
		<div className='flex  gap-8px'>
			{items.map((item) => (
				<Button
					type={value?.includes(item.value) ? 'primary' : 'dashed'}
					key={item.value}
					onClick={() => handleButtonClick(item.value)}
				>
					{item.label}
				</Button>
			))}
		</div>
	);
};

export default IssueTypeSelect;
