import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '~/assets/logo.svg';
import { useAppWrapperContext } from '~/context/AppWrapperContent/AppWrapperContent';
import GlowingTextHeader from '~/modules/feed/Feed/components/GlowingTextHeader';
import NavDrawer from './NavDrawer/NavDrawer';

interface MainHeaderProps {}

const MainHeader: FC<MainHeaderProps> = ({}) => {
	const { mine } = useAppWrapperContext();
	const navigate = useNavigate();

	return (
		<>
			<div className='fixed z-999 left-0 right-0 top-0  bg-[#ffffff11] backdrop-blur-lg h-50px shadow-[0px_3px_6px_rgba(0,0,0,0.07)]'>
				<div className='full flex ic justify-between px-4px'>
					<div>
						<div className='flex ic'>
							<div className='w-40px flex flex-col ic'>
								<img className='w-full' src={logo as any} alt='' />
								<GlowingTextHeader text='صديق'></GlowingTextHeader>
							</div>
						</div>
					</div>
					<div className='flex ic'>
						{mine?.role == 'admin' ? (
							<>
								<div className='font-sans text-12px'>
									Admin Account
									<div className='i-solar:shield-star-bold-duotone ms-4px mb-2px text-16px text-base-primary-main'></div>
								</div>
							</>
						) : (
							<>
								<div
									onClick={() => navigate('/login')}
									className='font-sans text-12px font-sans ic flex cursor-pointer'
								>
									تسجيل دخول
									<div className='mx-4px mt-4px i-solar:login-2-line-duotone ms-4px mb-2px text-16px text-base-primary-main'></div>
								</div>
							</>
						)}
						{mine?.role == 'admin' && <NavDrawer></NavDrawer>}
					</div>
				</div>
			</div>
		</>
	);
};

export default MainHeader;
