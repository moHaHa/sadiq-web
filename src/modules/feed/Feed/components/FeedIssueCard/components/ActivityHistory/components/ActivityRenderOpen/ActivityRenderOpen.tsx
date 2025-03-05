import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { FC } from 'react';
import { TIssueSummary } from '~/server/issue/types/issue.summary.type';
import { TIssueActivitiesSummary } from '~/server/issue/useIssueActivitiesQuery/types';
dayjs.extend(relativeTime);

interface ActivityRenderOpenProps {
	activity: TIssueActivitiesSummary;
	issue: TIssueSummary;
	isReOpen: boolean;
}

const ActivityRenderOpen: FC<ActivityRenderOpenProps> = ({ activity, issue, isReOpen }) => {
	return (
		<>
			<div>
				<div className='flex'>
					<div className='w-30px h-30px fcc'>
						<div className='i-solar:user-circle-broken'></div>
					</div>
					<div className='shadow  bg-[#9B59B6] text-white border-solid border-[#33333311]  rounded-lg  w-full text-12px'>
						<div className='flex justify-between rounded-t-6px p4px  bg-[#33333311]'>
							<div className='op-70 '>{activity.createdBy.email}</div>
							<div className='op-70'>
								<span dir='ltr'>{dayjs(activity.createdAt).fromNow()}</span>
							</div>
						</div>
						<div className='p4px'> {isReOpen ? activity.text : issue.text}</div>
					</div>
				</div>
			</div>
			<div>
				<div className='flex'>
					<div className='w-30px h-30px fcc'></div>
					<div
						className='inline-block'
						style={{
							color: '#9B59B6',
							padding: '4px 8px',
							borderRadius: '4px',
							background: '#F6EAFB', // Light purple background
						}}
					>
						{isReOpen ? 'فتح البلاغ مجددا' : 'مفتوح'}
						<div className='i-solar:clock-circle-linear' />
					</div>
				</div>
			</div>
		</>
	);
};

export default ActivityRenderOpen;
