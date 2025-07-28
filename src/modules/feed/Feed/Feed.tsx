import { useTheme } from 'antd-style';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import MainHeader from '~/components/MainHeader/MainHeader';
import { useAppWrapperContext } from '~/context/AppWrapperContent/AppWrapperContent';
import { useUrlState } from '~/hooks/useUrlState/useUrlState';
import { publicViews } from '~/router';
import { TIssueParams } from '~/server/issue/types/issue.params.type';
import GlowingText from '../Login/components/GlowingText';
import AiStars from './components/AiStarts';
import BgAbs from './components/BgAbs';
import FeedFilter from './components/FeedFilter/FeedFilter';
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

	return (
		<div className='bg-[#eeeadf]'>
			<div>
				{/* <BgGreen></BgGreen> */}
				<MainHeader></MainHeader>
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
				{mine?.role == 'admin' && (
					<div className='sticky top-50px z-999 '>
						<FeedFilter value={params} onParamsChange={setParams}></FeedFilter>
					</div>
				)}
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
