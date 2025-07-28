import { FC } from 'react';
import SyrianLogo from './components/SyrianLogo';

interface HomeLoadingProps {}

const HomeLoading: FC<HomeLoadingProps> = ({}) => {
	return (
		<>
			<div className='flex justify-center mt-40px'>
				<div className='flex flex-col lg:flex-row ic  '>
					<div className='text-white text-46px font-600  ' style={{ fontFamily: 'ZagelArabic' }}>
						محافظة دمشق
					</div>

					<div className='px-30px'>
						<div className='w-200px logo-up-down '>
							<SyrianLogo></SyrianLogo>
						</div>
					</div>
					<div className='text-white text-36px font-400 lg:pe-63px ' style={{ fontFamily: 'ZagelArabic' }}>
						<div className='text-center'>مديرية الصيانة</div>
						<div className='text-center'>قسم الشكاوى</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomeLoading;
