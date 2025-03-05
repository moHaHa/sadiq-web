import { FC } from 'react';
import { useIssuesQuery } from '~/server/issue/useIssuesQuery/useIssuesQuery';
import FeedIssueCard from './components/FeedIssueCard/FeedIssueCard';

interface FeedListProps {}

const FeedList: FC<FeedListProps> = ({}) => {
	const { data } = useIssuesQuery();
	return (
		<div>
			{data?.data.map((issue) => (
				<div className='mb-8px'>
					<FeedIssueCard issue={issue} onOpenDetails={() => {}}></FeedIssueCard>
				</div>
			))}
		</div>
	);
};

export default FeedList;
