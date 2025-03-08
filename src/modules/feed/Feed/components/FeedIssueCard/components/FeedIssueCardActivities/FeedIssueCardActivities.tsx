import { Spin } from 'antd';
import { FC } from 'react';
import { TIssueSummary } from '~/server/issue/types/issue.summary.type';
import { useIssueActivitiesQuery } from '~/server/issue/useIssueActivitiesQuery/useIssueActivitiesQuery';
import ActivityHistory from '../ActivityHistory/ActivityHistory';

interface FeedIssueCardActivitiesProps {
	open: boolean;
	issueId: string;
	issue: TIssueSummary;
}

const FeedIssueCardActivities: FC<FeedIssueCardActivitiesProps> = ({ issueId, open, issue }) => {
	const { data, isLoading } = useIssueActivitiesQuery(
		issueId,
		{
			total: true,

			limit: 100,
		},
		{
			enabled: open,
		}
	);
	return (
		<>
			{open && (
				<div>
					{isLoading ? (
						<div className='fcc min-h-40px'>
							<Spin></Spin>
						</div>
					) : (
						<>
							{data?.data.length! > 0 && (
								<div className='layers z-1'>
									<div className='a-layer z-1 pt-12px ps-50px pb-40px'>
										<div className='w-1px bg-[#33333344] h-full '></div>
									</div>
									<div className='r-layer-content z-2 '>
										<ActivityHistory issue={issue} activities={data?.data ?? []}></ActivityHistory>
									</div>
								</div>
							)}
						</>
					)}
				</div>
			)}
		</>
	);
};

export default FeedIssueCardActivities;
