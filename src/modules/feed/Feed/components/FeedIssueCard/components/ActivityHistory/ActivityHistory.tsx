import { FC } from 'react';
import { TIssueSummary } from '~/server/issue/types/issue.summary.type';
import { TIssueActivitiesSummary } from '~/server/issue/useIssueActivitiesQuery/types';
import ActivityRenderClosed from './components/ActivityRenderClosed/ActivityRenderClosed';
import ActivityRenderComment from './components/ActivityRenderComment/ActivityRenderComment';
import ActivityRenderOpen from './components/ActivityRenderOpen/ActivityRenderOpen';
import ActivityRenderStart from './components/ActivityRenderStart/ActivityRenderStart';
import ActivityReplayArea from './components/ActivityReplayArea/ActivityReplayArea';

interface ActivityHistoryProps {
	activities: TIssueActivitiesSummary[];
	issue: TIssueSummary;
}

const ActivityHistory: FC<ActivityHistoryProps> = ({ activities, issue }) => {
	const renderActivity = (activity: TIssueActivitiesSummary, firstItem: boolean) => {
		switch (activity.action) {
			case 'open':
				return <ActivityRenderOpen isReOpen={!firstItem} issue={issue} activity={activity}></ActivityRenderOpen>;
			case 'start':
				return <ActivityRenderStart issue={issue} activity={activity}></ActivityRenderStart>;
			case 'close':
				return <ActivityRenderClosed issue={issue} activity={activity}></ActivityRenderClosed>;
			case 'comment':
				return <ActivityRenderComment activity={activity}></ActivityRenderComment>;
			default:
				<></>;
		}
	};

	return (
		<div className='px-8px flex flex-col gap-10px py-8px mt-8px bg-[#99999933]'>
			{activities.map((activity, index) => renderActivity(activity, index == 0))}
			<ActivityReplayArea issue={issue} />
		</div>
	);
};

export default ActivityHistory;
