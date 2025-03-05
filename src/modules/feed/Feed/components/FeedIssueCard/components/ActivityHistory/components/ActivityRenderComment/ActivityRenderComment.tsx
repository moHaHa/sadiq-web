import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { FC } from 'react';
import { TIssueActivitiesSummary } from '~/server/issue/useIssueActivitiesQuery/types';
dayjs.extend(relativeTime);

interface ActivityRenderCommentProps {
	activity: TIssueActivitiesSummary;
}

const ActivityRenderComment: FC<ActivityRenderCommentProps> = ({ activity }) => {
	return (
		<div>
			<div className='flex'>
				<div className='w-30px h-30px fcc'>
					<div className='i-solar:user-circle-broken'></div>
				</div>
				<div className='shadow  bg-[#eeeeee] border-solid border-[#33333311]  rounded-lg  w-full text-12px'>
					<div className='flex justify-between rounded-t-6px p4px  bg-[#33333311]'>
						<div className='op-70 '>{activity.createdBy.email}</div>
						<div className='op-70'>
							<span dir='ltr'>{dayjs(activity.createdAt).fromNow()}</span>
						</div>
					</div>
					<div className='p4px'> {activity.text}</div>
				</div>
			</div>
		</div>
	);
};

export default ActivityRenderComment;
