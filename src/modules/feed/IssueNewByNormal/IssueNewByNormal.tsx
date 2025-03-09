import { FC } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import logo from '~/assets/logo.svg';
import { useAppWrapperContext } from '~/context/AppWrapperContent/AppWrapperContent';
import DsAddIssueForm from '~/modules/main/Dashboard/components/DashboardSidebar/components/DsAddIssue/DsAddIssueForm';
import { publicViews } from '~/router';
interface IssueNewByNormalProps {}

const IssueNewByNormal: FC<IssueNewByNormalProps> = ({}) => {
	const navigate = useNavigate();

	const { user } = useAppWrapperContext();

	if (user === null) {
		return <Navigate to={publicViews.Login.path + `?next=${publicViews.IssueNewByNormal.path}`} />;
	}
	return (
		<div className='max-w-400px mx-auto'>
			<div className='fixed left-0 right-0 top-0  bg-[#ffffff55] backdrop-blur-lg h-50px shadow-[0px_3px_6px_rgba(0,0,0,0.03)]'>
				<div className='full flex ic px-4px justify-between'>
					<div className='flex ic'>
						<div className='w-40px'>
							<img className='w-full' src={logo as any} alt='' />
						</div>
						<div className='font-sans ms-14px'>إنشاء بلاغ/مقترح</div>
					</div>
					<div
						className='i-solar:arrow-left-linear text-black text-22px me-10px '
						onClick={() => navigate(publicViews.Feed.path)}
					></div>
				</div>
			</div>
			<div className='px-10px pt-50px'>
				<DsAddIssueForm
					onSuccess={() => {
						navigate('/');
					}}
				></DsAddIssueForm>
			</div>
		</div>
	);
};

export default IssueNewByNormal;
