import { Spin } from 'antd';
import { FC } from 'react';
import { useCategoriesQuery } from '~/server/category/useCategoriesQuery/useCategoriesQuery';

interface AddIssueIssueCategorySelectProps {
	value?: string;
	onChange?: (value: string) => void;
}

const AddIssueIssueCategorySelect: FC<AddIssueIssueCategorySelectProps> = ({ onChange, value }) => {
	const { data, isLoading } = useCategoriesQuery({ limit: 100, skip: 0, total: true });
	return (
		<div className='flex gap-8px flex-wrap text-black'>
			{isLoading && <Spin></Spin>}
			{data?.data.map((e) => (
				<label
					className={`px-8px border-1px ${
						value === e.id
							? ' bg-[#427f77] border-solid border-[#427f77] text-white   shadow-md'
							: 'border-dashed border-black'
					} py-4px rounded-lg cursor-pointer`}
				>
					<input
						type='radio'
						name='reportType'
						value={e.id}
						checked={value === e.id}
						onChange={() => onChange?.(e.id)}
						className='hidden'
					/>
					{e.name}
				</label>
			))}
		</div>
	);
};

export default AddIssueIssueCategorySelect;
