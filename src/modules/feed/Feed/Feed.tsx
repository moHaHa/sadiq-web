import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '~/assets/logo.svg';
import { useUrlState } from '~/hooks/useUrlState/useUrlState';
import { publicViews } from '~/router';
import AiStars from './components/AiStarts';
import BgAbs from './components/BgAbs';
import BgGreen from './components/BgGreen';
import IssueButton from './components/IssueButton';
import FeedList from './FeedList';
import FeedMap from './FeedMap';
import './style.css';
interface FeedProps {}

const Feed: FC<FeedProps> = ({}) => {
	const { setUrlState, urlState } = useUrlState({
		prefix: 'view.',
		initialValues: {
			value: 'list',
		},
	});

	const navigate = useNavigate();
	return (
		<div>
			<BgGreen></BgGreen>
			<div className='fixed z-999 left-0 right-0 top-0  bg-[#ffffff99] backdrop-blur-lg h-50px shadow-[0px_3px_6px_rgba(0,0,0,0.07)]'>
				<div className='full flex ic px-4px'>
					<div className='w-40px'>
						<img className='w-full' src={logo as any} alt='' />
					</div>
				</div>
			</div>
			<div className='fixed z-999 left-0 right-0 bottom-0 psm in-vis flex justify-center '>
				<div className='vis h-58px w-300px bg-[#ffffffcc] shadow-[0px_3px_6px_rgba(0,0,0,0.03)] border-1px  backdrop-blur-2px rounded-12px  relative overflow-hidden '>
					<BgAbs></BgAbs>
					<div className=' full flex justify-between ic px-8px'>
						<div className='flex gap-8px bg-[#cccccc22] rounded-8px p4px'>
							{/* <button className='border-0 w-40px h-40px text-24px text-[#51da93] bg-[#51da9322] hover:bg-[#51da9344] transition rounded-full    '>
								<div className='i-line-md:map-marker-alt-loop'></div>
							</button> */}
							<button className='border-0 w-30px h-30px  text-[#111]   bg-transparent transition rounded-12px    '>
								<div>
									<div className='relative'>
										<div className='i-solar:streets-map-point-bold-duotone text-18px mb-2px'></div>
										<div className='absolute  top--4px right-0px'>
											<AiStars />
										</div>
									</div>
								</div>
							</button>
							<button className='border-0 w-30px h-30px text-[#51da93]  focus:bg-[#51da9322]  bg-[#51da9322]    hover:bg-[#cccccc44]  transition rounded-8px    '>
								<div>
									<div>
										<div className='i-solar:document-text-line-duotone text-18px mb-2px'></div>
										{/* <div className=' text-18px'></div> */}
									</div>
								</div>
							</button>
						</div>
						<div onClick={() => navigate(publicViews.IssueNewByNormal.path)}>
							<IssueButton></IssueButton>
						</div>
					</div>
				</div>
			</div>
			<div className='pt-60px px-8px'>{urlState?.value == 'map' ? <FeedMap></FeedMap> : <FeedList></FeedList>}</div>
		</div>
	);
};

export default Feed;
