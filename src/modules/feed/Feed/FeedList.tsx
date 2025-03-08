import { Pagination } from 'antd';
import { FC } from 'react';
import { usePagination } from '~/hooks/usePagination/usePagination';
import { useIssuesQuery } from '~/server/issue/useIssuesQuery/useIssuesQuery';
import FeedIssueCard from './components/FeedIssueCard/FeedIssueCard';

interface FeedListProps {}

const FeedList: FC<FeedListProps> = ({}) => {
	const { limit, pagination, setPage, skip } = usePagination({ pageSize: 50, initialPage: 1 });
	const { data } = useIssuesQuery({
		total: true,
		limit,
		skip,
	});
	return (
		<div className='pb-140px'>
			{data?.data.map((issue) => (
				<div className='mb-8px'>
					<FeedIssueCard issue={issue} onOpenDetails={() => {}}></FeedIssueCard>
				</div>
			))}
			<div className='flex fcc mt-14px w-full' dir='ltr'>
				<Pagination size='small' {...pagination} total={data?.totalRecords}></Pagination>
			</div>
		</div>
	);
};

export default FeedList;
