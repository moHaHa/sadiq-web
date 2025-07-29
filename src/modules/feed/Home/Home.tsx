import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useIssueCountsQuery } from '~/server/issue/useIssueCountsQuery/useIssueCountsQuery';
import { httpLog } from '~/server/other/httpLog';
import SyrianArabRepublic from './components/SyrianArabRepublic';
import SyrianLogo from './components/SyrianLogo';

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
	useEffect(() => {
		httpLog('Home');
	}, []);
	const { data } = useIssueCountsQuery();
	return (
		<>
			<div>
				<div className='flex justify-between ic pt-24px px-40px'>
					<div className='w-140px md:w-240px'>
						<SyrianArabRepublic></SyrianArabRepublic>
					</div>
					<div></div>
					<div></div>
				</div>
				<div className='flex justify-center mt-40px'>
					<div className='flex flex-col lg:flex-row ic  '>
						<div className='text-white text-36px md:text-46px font-600  ' style={{ fontFamily: 'ZagelArabic' }}>
							محافظة دمشق
						</div>

						<div className='px-30px'>
							<div className='w-120px py-42px md:w-200px logo-up-down '>
								<SyrianLogo></SyrianLogo>
							</div>
						</div>
						<div
							className='text-white text-30px md:text-36px font-400 lg:pe-63px '
							style={{ fontFamily: 'ZagelArabic' }}
						>
							<div className='text-center'>مديرية الصيانة</div>
							<div className='text-center'>قسم الشكاوى</div>
						</div>
					</div>
				</div>

				<div
					className='mt-42px text-14px flex justify-center gap-12px text-white'
					style={{ fontFamily: 'ZagelArabic' }}
				>
					<div className='text-center rounded-full border-white border-solid border-1px h-80px w-80px flex ic flex-col justify-center '>
						<div>قيد المراجعة</div>
						<div>{data?.data.open}</div>
					</div>
					<div className='text-center rounded-full border-white border-solid border-1px h-80px w-80px flex ic flex-col justify-center '>
						<div>قيد العمل</div>
						<div>{data?.data.inProgress}</div>
					</div>
					<div className='text-center rounded-full border-white border-solid border-1px h-80px w-80px flex ic flex-col justify-center '>
						<div>تم</div>
						<div>{data?.data.closed}</div>
					</div>
				</div>
				<div className='fixed left-0 right-0 bottom-0'>
					<div className='flex justify-center pb-42px lg:pb-120px gap12px'>
						<Link className='decoration-none ' to={'/issue/new'}>
							<button
								className='cursor-pointer text-24px ic flex gap-4px border-none bg-[#b9a87b] rounded-12px px-12px py-6px text-[#0a2724]'
								style={{
									fontFamily: 'ZagelArabic',
								}}
							>
								إضافة شكوى <div className='i-solar:pen-new-square-outline'></div>
							</button>
						</Link>
						<Link className='decoration-none ' to={'/feed'}>
							<button
								className='cursor-pointer text-24px border-none bg-[#b9a87b] rounded-12px px-12px py-6px text-[#0a2724]'
								style={{
									fontFamily: 'ZagelArabic',
								}}
							>
								تصفح
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
