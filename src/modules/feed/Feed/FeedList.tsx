import { Pagination } from 'antd';
import { FC } from 'react';
import { usePagination } from '~/hooks/usePagination/usePagination';
import { TIssueParams } from '~/server/issue/types/issue.params.type';
import { useIssuesQuery } from '~/server/issue/useIssuesQuery/useIssuesQuery';
import FeedIssueCard from './components/FeedIssueCard/FeedIssueCard';

interface FeedListProps {
	params?: TIssueParams;
}

const FeedList: FC<FeedListProps> = ({ params }) => {
	const { limit, pagination, setPage, skip } = usePagination({ pageSize: 50, initialPage: 1 });
	const { data } = useIssuesQuery({
		...params,
		total: true,
		limit,
		skip,
	});
	return (
		<div className='pb-140px max-w-400px mx-auto'>
			{data?.data.map((issue) => (
				<div className='mb-8px' key={issue.id}>
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
