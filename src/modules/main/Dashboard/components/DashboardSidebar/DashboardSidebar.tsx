// components/DashboardSidebar.tsx
import { Divider, Pagination } from 'antd';
import { FC } from 'react';
import { useAppWrapperContext } from '~/context/AppWrapperContent/AppWrapperContent';
import { useUrlState } from '~/hooks/useUrlState/useUrlState';
import { useUrlStateReader } from '~/hooks/useUrlState/useUrlStateReader';
import { useIssuesQuery } from '~/server/issue/useIssuesQuery/useIssuesQuery';
import DsAddIssueDialog from './components/DsAddIssue/DsAddIssueDialog';
import DsIssueCard from './components/DsIssueCard/DsIssueCard';
import DsIssueDialog from './components/DsIssueDialog/DsIssueDialog';
import DsIssuesFilterDialog from './components/DsIssuesFilter/DsIssuesFilterDialog';

const DashboardSidebar: FC = () => {
	const { mine } = useAppWrapperContext();

	const { data } = useIssuesQuery(mine?.role != 'admin');
	const { setUrlState } = useUrlState<{ id?: string }>({
		prefix: 'issueDetails.',
		initialValues: {
			id: undefined,
		},
	});
	const { urlState } = useUrlStateReader<{ id?: string }>({
		prefix: 'issueDetails.',
	});
	return (
		<div className='w-400px bg-white  '>
			<div className='text-24px text-base-primary-darker font-sans pt-sm ps-sm'>البلاغات الواردة</div>
			<div className='b-b-1px b-b-solid b-b-[#EAECF1] mt-14px'></div>
			<div className='psm'>
				<DsIssuesFilterDialog></DsIssuesFilterDialog>
			</div>
			<div className='b-b-1px b-b-solid b-b-[#EAECF1] '></div>
			<div className='h-[calc(100vh-260px)] overflow-y-scroll px-18px ptsm'>
				{data?.data.map((issue) => (
					<div className='mb-8px'>
						<DsIssueCard
							onOpenDetails={(e) => {
								setUrlState({ id: e });
							}}
							issue={issue}
						></DsIssueCard>
						<Divider></Divider>
					</div>
				))}
				<DsIssueDialog
					onClose={() => {
						setUrlState({});
					}}
					id={urlState?.id}
				></DsIssueDialog>
			</div>
			<div className=' mb-sm b-b-1px b-b-solid b-b-[#EAECF1] '></div>

			<div className='flex ic' dir='ltr'>
				<Pagination total={20}></Pagination>
				<div className='font-sans text-12px op40 ms-sm'> Total (20)</div>
			</div>
			<div className='py-sm bg-white px-sm select-none cursor-pointer'>
				<DsAddIssueDialog
					button={
						<div className='text-white bg-base-primary-main fcc psm rounded-xl'>
							<div className='flex gap-12px ic'>
								<div className='i-solar:pen-new-round-linear'></div>
								<div>تقديم طلب</div>
							</div>
						</div>
					}
				></DsAddIssueDialog>
			</div>
		</div>
	);
};

export default DashboardSidebar;
