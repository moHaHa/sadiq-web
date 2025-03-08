import { Button, Switch } from 'antd';
import Search from 'antd/es/transfer/search';
import { FC, useState } from 'react';
import CitySelect from '~/components/CitySelect/CitySelect';
import GovernorateSelect from '~/components/GovernorateSelect/GovernorateSelect';
import DatePeriodSelect from '~/components/SelectStartTimePeriod/DatePeriodSelect';
import { TIssueParams } from '~/server/issue/types/issue.params.type';
import { IssueStatus } from '~/server/types/issueStatus.type';
import { IssueType } from '~/server/types/issueType.type';
import './FeedFilter.css';
interface FeedFilterProps {
	onParamsChange?: (params: TIssueParams) => void;
}

const FeedFilter: FC<FeedFilterProps> = ({ onParamsChange }) => {
	// Single state object for all filter parameters
	const [params, setParams] = useState<TIssueParams>({
		type: [],
		status: [],
		'createdAt[gte]': undefined,
		'createdAt[lte]': undefined,
	});

	// Handler for issue type buttons
	const handleIssueTypeClick = (clickedValue: IssueType) => {
		const newTypes = params.type?.includes(clickedValue)
			? params.type.filter((v) => v !== clickedValue) // Remove if already exists
			: [...(params.type ?? []), clickedValue]; // Add if not exists

		// Update params with the new types
		const newParams = { ...params, type: newTypes };
		setParams(newParams);
		onParamsChange?.(newParams); // Trigger callback
	};

	// Handler for issue status buttons
	const handleIssueStatusClick = (clickedValue: IssueStatus) => {
		const newStatuses = params.status?.includes(clickedValue)
			? params.status.filter((v) => v !== clickedValue) // Remove if already exists
			: [...(params.status ?? []), clickedValue]; // Add if not exists

		// Update params with the new statuses
		const newParams = { ...params, status: newStatuses };
		setParams(newParams);
		onParamsChange?.(newParams); // Trigger callback
	};

	return (
		<div className='bg-[#eee] p-4px overflow-hidden max-w-100vw'>
			{/* Issue Type Buttons */}
			<div className='no-bar-scroll flex overflow-x-scroll gap-8px w-full '>
				<Button
					type={params.type?.includes('violation') ? 'primary' : 'dashed'}
					onClick={() => handleIssueTypeClick('violation')}
				>
					انتهاك
				</Button>
				<Button
					type={params.type?.includes('corruption') ? 'primary' : 'dashed'}
					onClick={() => handleIssueTypeClick('corruption')}
				>
					فساد
				</Button>
				<Button
					type={params.type?.includes('serviceIssue') ? 'primary' : 'dashed'}
					onClick={() => handleIssueTypeClick('serviceIssue')}
				>
					مشكلة خدمية
				</Button>
				<Button
					type={params.type?.includes('suggestion') ? 'primary' : 'dashed'}
					onClick={() => handleIssueTypeClick('suggestion')}
				>
					مقترح
				</Button>
				<div className='fcc'>
					<div className='h-20px w-1px bg-[#33333344] '></div>
				</div>

				<Button
					type={params.status?.includes('open') ? 'primary' : 'dashed'}
					onClick={() => handleIssueStatusClick('open')}
				>
					<div className='i-solar:clock-circle-linear' /> {/* Icon */}
					<span>Open</span>
				</Button>
				<Button
					type={params.status?.includes('in progress') ? 'primary' : 'dashed'}
					onClick={() => handleIssueStatusClick('in progress')}
				>
					<div className='i-svg-spinners:pulse-multiple' /> {/* Icon */}
					<span>In Progress</span>
				</Button>
				<Button
					type={params.status?.includes('closed') ? 'primary' : 'dashed'}
					onClick={() => handleIssueStatusClick('closed')}
				>
					<div className='i-solar:check-read-linear' /> {/* Icon */}
					<span>Closed</span>
				</Button>
				<div className='min-w-200px'>
					<GovernorateSelect
						onChange={(e) => {
							console.log(e as string[]);
						}}
						mode='multiple'
						style={{ width: '100%' }}
					></GovernorateSelect>
				</div>
				<div className='min-w-200px'>
					<CitySelect
						onChange={(e) => {
							console.log(e as string[]);
						}}
						mode='multiple'
						style={{ width: '100%' }}
					></CitySelect>
				</div>
				<div className='min-w-130px'>
					<DatePeriodSelect
						onChange={(e) => {
							console.log(e?.start);
							console.log(e?.end);
						}}
					></DatePeriodSelect>
				</div>
				<div className='min-w-160px'>
					<Search
						placeholder='بحث في وصف البلاغ'
						onChange={(e) => {
							console.log(e.target.value);
						}}
					></Search>
				</div>
				<div className='min-w-130px fcc'>
					<Switch unCheckedChildren={'Published'} checkedChildren={'UnPublished'}></Switch>
				</div>
			</div>
		</div>
	);
};

export default FeedFilter;
