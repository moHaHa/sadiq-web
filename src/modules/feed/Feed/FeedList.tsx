import { Empty, Pagination, Skeleton } from 'antd'; // Import Skeleton from Antd
import { FC } from 'react';
import { useAppWrapperContext } from '~/context/AppWrapperContent/AppWrapperContent';
import { usePagination } from '~/hooks/usePagination/usePagination';
import { TIssueParams } from '~/server/issue/types/issue.params.type';
import { useIssuesQuery } from '~/server/issue/useIssuesQuery/useIssuesQuery';
import FeedIssueCard from './components/FeedIssueCard/FeedIssueCard';

interface FeedListProps {
	params?: TIssueParams;
}

const FeedList: FC<FeedListProps> = ({ params }) => {
	const { mine } = useAppWrapperContext();
	console.log(mine);
	const { limit, pagination, setPage, skip } = usePagination({ pageSize: 50, initialPage: 1 });
	const { data, isLoading } = useIssuesQuery(mine?.role != 'admin', {
		...params,
		total: true,
		limit,
		skip,
	});

	return (
		<div className='pb-140px max-w-400px mx-auto px-8px'>
			{isLoading ? (
				// Show skeleton loading cards while data is being fetched
				<>
					{Array.from({ length: 5 }).map((_, index) => (
						<div className='mb-8px' key={index}>
							<Skeleton
								active
								avatar={{ shape: 'circle', size: 'large' }}
								paragraph={{ rows: 3, width: ['100%', '80%', '60%'] }}
							/>
						</div>
					))}
				</>
			) : (
				// Render actual data once loaded
				data?.data.map((issue) => (
					<div className='mb-8px' key={issue.id}>
						<FeedIssueCard issue={issue} onOpenDetails={() => {}}></FeedIssueCard>
					</div>
				))
			)}
			{data?.data.length == 0 && <Empty className='mt-14px' />}
			{data?.data.length !== 0 && (
				<div className='flex fcc mt-14px w-full' dir='ltr'>
					<Pagination size='small' {...pagination} total={data?.totalRecords}></Pagination>
				</div>
			)}
		</div>
	);
};

export default FeedList;
