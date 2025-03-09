import { Button, Popover } from 'antd';
import { useTheme } from 'antd-style';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '~/assets/logo.svg';
import { useAppWrapperContext } from '~/context/AppWrapperContent/AppWrapperContent';
import { useUrlState } from '~/hooks/useUrlState/useUrlState';
import { publicViews } from '~/router';
import { TIssueParams } from '~/server/issue/types/issue.params.type';
import tokenService from '~/services/tokenService';
import GlowingText from '../Login/components/GlowingText';
import AiStars from './components/AiStarts';
import BgAbs from './components/BgAbs';
import BgGreen from './components/BgGreen';
import FeedFilter from './components/FeedFilter/FeedFilter';
import GlowingTextHeader from './components/GlowingTextHeader';
import IssueButton from './components/IssueButton';
import FeedList from './FeedList';
import FeedMap from './FeedMap';
import './style.css';

interface FeedProps {}

const Feed: FC<FeedProps> = ({}) => {
	const { setUrlState, urlState } = useUrlState<{ value: 'map' | 'list' | 'analysis' }>({
		prefix: 'view.',
		initialValues: {
			value: 'list',
		},
	});
	const { mine } = useAppWrapperContext();

	const { urlState: params, setUrlState: setParams } = useUrlState<Partial<TIssueParams>>({
		prefix: 'q.',
		initialValues: {},
	});
	const navigate = useNavigate();
	const theme = useTheme();
	const popoverContent = (
		<div>
			{mine ? (
				<Button
					type='link'
					onClick={() => {
						tokenService.logout();
						navigate('/login');
					}}
				>
					تسجيل الخروج <div className='i-solar:logout-2-linear'></div>
				</Button>
			) : (
				<Button type='link' onClick={() => navigate('/login')}>
					Login
				</Button>
			)}
		</div>
	);

	return (
		<div className=''>
			<div>
				<BgGreen></BgGreen>
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
						<Popover placement='bottomRight' content={popoverContent} trigger='click'>
							{mine?.role == 'admin' ? (
								<>
									<div className='font-sans text-12px'>
										Admin Account
										<div className='i-solar:shield-star-bold-duotone ms-4px mb-2px text-16px text-base-primary-main'></div>
									</div>
								</>
							) : mine?.role == 'user' ? (
								<>
									<div className='font-sans text-12px w-30px h-30px border-1px border-solid border-[#33333333] fcc  rounded-full'>
										<div className='i-solar:user-rounded-bold-duotone text-18px text-[#333]'></div>
									</div>
								</>
							) : (
								<>
									<div className='font-sans text-12px'>
										Login
										<div className='i-solar:login-2-line-duotone ms-4px mb-2px text-16px text-base-primary-main'></div>
									</div>
								</>
							)}
						</Popover>
					</div>
				</div>
				<div className='fixed z-999 left-0 right-0 bottom-0 psm in-vis flex justify-center '>
					<div className='vis h-58px w-320px bg-[#ffffffcc] shadow-[0px_3px_6px_rgba(0,0,0,0.03)] border-1px  backdrop-blur-2px rounded-12px  relative overflow-hidden '>
						<BgAbs></BgAbs>
						<div className=' full flex justify-between ic px-8px'>
							<div className='flex gap-8px bg-[#cccccc22] rounded-8px p4px'>
								<button
									style={{
										color: urlState?.value === 'map' ? theme.colorPrimary : '#111',
										backgroundColor: '#fff',
									}}
									className='border-0 w-30px h-30px  bg-transparent transition rounded-12px'
									onClick={() => setUrlState({ value: 'map' })}
								>
									<div className='relative'>
										<div className='i-solar:streets-map-point-bold-duotone text-18px mb-2px'></div>
										{urlState?.value === 'map' && (
											<div className='absolute top--4px right-0px'>
												<AiStars />
											</div>
										)}
									</div>
								</button>

								<button
									style={{
										color: urlState?.value === 'list' ? theme.colorPrimary : '#111',
										backgroundColor: '#fff',
									}}
									className='border-0 w-30px h-30px  bg-transparent transition rounded-12px'
									onClick={() => setUrlState({ value: 'list' })}
								>
									<div className='relative'>
										<div className='i-solar:document-text-line-duotone text-18px mb-2px'></div>
									</div>
								</button>
								<button
									style={{
										color: urlState?.value === 'analysis' ? theme.colorPrimary : '#111',
										backgroundColor: '#fff',
									}}
									className='border-0 w-30px h-30px  relative bg-transparent transition rounded-12px'
									onClick={() => setUrlState({ value: 'analysis' })}
								>
									<div className='relative'>
										<div className='i-solar:chart-square-broken text-18px mb-2px'></div>
									</div>
									<div className='bottom-0px left--6px absolute w-28px h-14px text-11px bg-blue rounded-full text-white fcc'>
										قريبا
									</div>
								</button>
							</div>
							<div onClick={() => navigate(publicViews.IssueNewByNormal.path)}>
								<IssueButton></IssueButton>
							</div>
						</div>
					</div>
				</div>
				<div className='pt-50px'></div>
				<div className='sticky top-50px z-999 '>
					<FeedFilter value={params} onParamsChange={setParams}></FeedFilter>
				</div>
				<div className=''>
					{urlState?.value === 'map' ? (
						<FeedMap params={params}></FeedMap>
					) : urlState?.value === 'analysis' ? (
						<div className='h-400px fcc font-sans'>
							<GlowingText text='قريبا..'></GlowingText>
						</div>
					) : (
						<FeedList params={params}></FeedList>
					)}
				</div>
			</div>
		</div>
	);
};

export default Feed;
