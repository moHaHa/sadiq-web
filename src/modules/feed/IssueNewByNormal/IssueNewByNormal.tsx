import { FC, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import logo from '~/assets/logo.svg';
import { useAppWrapperContext } from '~/context/AppWrapperContent/AppWrapperContent';
import DsAddIssueForm from '~/modules/main/Dashboard/components/DashboardSidebar/components/DsAddIssue/DsAddIssueForm';
import { publicViews } from '~/router';
import { httpLog } from '~/server/other/httpLog';
interface IssueNewByNormalProps {}

const IssueNewByNormal: FC<IssueNewByNormalProps> = ({}) => {
	const navigate = useNavigate();

	const { user } = useAppWrapperContext();
	useEffect(() => {
		httpLog('New Issue');
	}, []);
	if (user === null) {
		return <Navigate to={publicViews.Login.path + `?next=${publicViews.IssueNewByNormal.path}`} />;
	}
	return (
		<div className='bg-[#eeeadf] min-h-100vh'>
			<div className='max-w-400px mx-auto'>
				<div className='fixed left-0 right-0 top-0  bg-[#ffffff55] backdrop-blur-lg h-50px shadow-[0px_3px_6px_rgba(0,0,0,0.03)]'>
					<div className='full flex ic px-4px justify-between'>
						<div className='flex ic'>
							<div className='w-40px'>
								<img className='w-full' src={logo as any} alt='' />
							</div>
							<div className='font-sans ms-14px'> إنشاء شكوى</div>
						</div>
						<div
							className='i-solar:arrow-left-linear text-black text-22px me-10px '
							onClick={() => navigate(publicViews.Feed.path)}
						></div>
					</div>
				</div>
				<div className='pt-60px'>
					<div className='px-10px pt-10px bg-white plg rounded-lg '>
						<DsAddIssueForm
							onSuccess={() => {
								navigate('/feed');
							}}
						></DsAddIssueForm>
					</div>
				</div>
			</div>
		</div>
	);
};

export default IssueNewByNormal;
