import { FC } from 'react';
import { usePagination } from '~/hooks/usePagination/usePagination';
import { TIssueParams } from '~/server/issue/types/issue.params.type';
import { useIssuesQuery } from '~/server/issue/useIssuesQuery/useIssuesQuery';
import FeedMapView from './components/FeedMapView/FeedMapView';

interface FeedMapProps {
	params?: TIssueParams;
}

const FeedMap: FC<FeedMapProps> = ({ params }) => {
	const { limit, pagination, setPage, skip } = usePagination({ pageSize: 100, initialPage: 1 });
	const { data } = useIssuesQuery({
		...params,
		total: true,
		limit,
		skip,
	});
	console.log('foo');
	return (
		<div className='h-[calc(100vh-50px)] h-[calc(100vh-50px)] w-100vw'>
			<FeedMapView issues={data?.data ?? []}></FeedMapView>
		</div>
	);
};

export default FeedMap;
