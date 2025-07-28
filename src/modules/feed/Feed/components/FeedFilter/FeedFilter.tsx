import { Button, Input } from 'antd';
import { useTheme } from 'antd-style';
import { FC } from 'react';
import GeofenceSelect from '~/components/GeofenceSelect/GeofenceSelect';
import DatePeriodSelect from '~/components/SelectStartTimePeriod/DatePeriodSelect';
import ZoneSelect from '~/components/ZoneSelect/ZoneSelect';
import { useCategoriesQuery } from '~/server/category/useCategoriesQuery/useCategoriesQuery';
import { TIssueParams } from '~/server/issue/types/issue.params.type';
import { IssueStatus } from '~/server/types/issueStatus.type';
import { IssueType } from '~/server/types/issueType.type';
import './FeedFilter.css';

interface FeedFilterProps {
	onParamsChange?: (value: TIssueParams) => void;
	value?: TIssueParams;
}

const FeedFilter: FC<FeedFilterProps> = ({ onParamsChange, value }) => {
	const handleIssueTypeClick = (clickedValue: IssueType) => {
		const newTypes = value?.type?.includes(clickedValue)
			? value.type?.filter((v) => v !== clickedValue) // Remove if already exists
			: [...(value?.type ?? []), clickedValue]; // Add if not exists

		const newParams = { ...value, type: newTypes };
		onParamsChange?.(newParams); // Trigger callback
	};
	const handleIssueCategoryClick = (clickedValue: string) => {
		const newTypes = value?.category?.includes(clickedValue)
			? value.category?.filter((v) => v !== clickedValue)
			: [...(value?.category ?? []), clickedValue];

		const newParams = { ...value, category: newTypes };
		onParamsChange?.(newParams);
	};

	const handleIssueStatusClick = (clickedValue: IssueStatus) => {
		const newStatuses = value?.status?.includes(clickedValue)
			? value.status.filter((v) => v !== clickedValue) // Remove if already exists
			: [...(value?.status ?? []), clickedValue]; // Add if not exists

		const newParams = { ...value, status: newStatuses };
		onParamsChange?.(newParams); // Trigger callback
	};

	// const handleGovernorateChange = (selectedGovernorates: string[]) => {
	// 	const newParams = { ...value, governorate: selectedGovernorates };
	// 	onParamsChange?.(newParams);
	// };
	const handleZoneChange = (selectedZones: string[]) => {
		const newParams = { ...value, zone: selectedZones };
		onParamsChange?.(newParams);
	};
	const handleGeofenceChange = (selectedGeofences: string[]) => {
		const newParams = { ...value, geofence: selectedGeofences };
		onParamsChange?.(newParams);
	};

	const handleCityChange = (selectedCities: string[]) => {
		const newParams = { ...value, city: selectedCities };
		onParamsChange?.(newParams);
	};

	const handleDatePeriodChange = (startDate: string, endDate: string) => {
		const newParams = { ...value, 'createdAt[gte]': startDate, 'createdAt[lte]': endDate };
		onParamsChange?.(newParams);
	};

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newParams = { ...value, text: event.target.value };
		onParamsChange?.(newParams);
	};

	const handlePublishSwitchChange = (checked: boolean | undefined) => {
		const newParams = { ...value, publish: checked };
		onParamsChange?.(newParams);
	};
	const theme = useTheme();

	const { data } = useCategoriesQuery({ limit: 100, total: true, skip: 0 });

	return (
		<div
			className={`feed-filter-container  bg-[#ffffff55] backdrop-blur-4px overflow-hidden max-w-100vw relative py-4px shadow-inner shadow-[0px_0px_6px_rgba(0,0,0,0.2)] ${
				true ? '' : 'hidden'
			}`}
		>
			<div className='op-0 absolute in-vis top-0px left-0px z-1  h-full w-20px bg-gradient-to-r from-[#33333311] to-[#00000000]'></div>
			<div className='no-bar-scroll  flex overflow-x-scroll gap-8px w-full '>
				<div className='flex  ic px-4px'>
					{(() => {
						const keysCount = Object.values({ ...(value ?? {}) }).filter(
							(e) => e != undefined && Boolean(Array.isArray(e) && e.length > 0)
						).length;
						const isApplied = keysCount > 0;

						return (
							<div
								onClick={() => onParamsChange?.({})}
								className='i-line-md:filter hover:i-solar:close-circle-line-duotone'
								style={{
									color: isApplied ? theme.colorPrimary : '#33333377',
								}}
							></div>
						);
					})()}
				</div>

				{data?.data.map((e) => (
					<Button
						size='small'
						type={value?.category?.includes(e.id) ? 'primary' : 'dashed'}
						onClick={() => handleIssueCategoryClick(e.id)}
					>
						{e.name}
					</Button>
				))}
				<div className='fcc'>
					<div className='h-20px w-1px bg-[#33333344] '></div>
				</div>

				<Button
					size='small'
					type={value?.status?.includes('open') ? 'primary' : 'dashed'}
					onClick={() => handleIssueStatusClick('open')}
				>
					<div className='i-solar:clock-circle-linear' /> {/* Icon */}
					<span>Open</span>
				</Button>
				<Button
					size='small'
					type={value?.status?.includes('in progress') ? 'primary' : 'dashed'}
					onClick={() => handleIssueStatusClick('in progress')}
				>
					<div className='i-svg-spinners:pulse-multiple' /> {/* Icon */}
					<span>In Progress</span>
				</Button>
				<Button
					size='small'
					type={value?.status?.includes('closed') ? 'primary' : 'dashed'}
					onClick={() => handleIssueStatusClick('closed')}
				>
					<div className='i-solar:check-read-linear' /> {/* Icon */}
					<span>Closed</span>
				</Button>
				<div className='min-w-200px'>
					<ZoneSelect
						size='small'
						value={value?.zone}
						onChange={(e) => handleZoneChange(e as string[])}
						mode='multiple'
						style={{ width: '100%' }}
					></ZoneSelect>
				</div>

				<div className='min-w-200px'>
					<GeofenceSelect
						size='small'
						value={value?.geofence}
						onChange={(e) => handleGeofenceChange(e as string[])}
						mode='multiple'
						style={{ width: '100%' }}
					></GeofenceSelect>
				</div>
				<div className='min-w-130px'>
					<DatePeriodSelect
						size='small'
						value={
							value?.['createdAt[gte]'] && value?.['createdAt[lte]']
								? { start: value?.['createdAt[gte]'], end: value?.['createdAt[lte]'] }
								: undefined
						}
						onChange={(e) => handleDatePeriodChange(e?.start as string, e?.end as string)}
					></DatePeriodSelect>
				</div>
				<div className='min-w-160px'>
					<Input
						size='small'
						placeholder='بحث في وصف البلاغ'
						value={value?.text}
						onChange={handleSearchChange}
					></Input>
				</div>
				<div className='min-w-130px fcc'>
					<Button.Group>
						<Button
							size='small'
							onClick={() => {
								handlePublishSwitchChange(undefined);
							}}
							type={value?.publish == undefined ? 'primary' : 'default'}
						>
							<div className='i-solar:users-group-two-rounded-bold'></div>
							<div className='i-solar:lock-outline'></div>
						</Button>
						<Button
							size='small'
							onClick={() => {
								handlePublishSwitchChange(true);
							}}
							type={value?.publish == true ? 'primary' : 'default'}
						>
							<div className='i-solar:users-group-two-rounded-bold'></div>
						</Button>
						<Button
							size='small'
							onClick={() => {
								handlePublishSwitchChange(false);
							}}
							type={value?.publish == false ? 'primary' : 'default'}
						>
							<div className='i-solar:lock-outline'></div>
						</Button>
					</Button.Group>
				</div>
			</div>
		</div>
	);
};

export default FeedFilter;
