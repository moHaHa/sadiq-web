import { FC } from 'react';
import './GlowingLogo.css';
const GlowingLogo: FC = () => {
	return (
		<div className='relative flex items-center justify-center'>
			{/* Blurred Background Layer */}
			<div className='absolute inset-0 bg-gradient-to-r from-teal-100 to-teal-200 blur-lg opacity-50'></div>

			{/* Logo with Glow Effect */}
			<svg width='70' viewBox='0 0 550 340' fill='none' xmlns='http://www.w3.org/2000/svg' className='glowing-logo'>
				<path
					d='M221.803 113.993L232.577 90.681C247.362 55.565 268.451 6.88603 314.086 32.405C331.549 31.727 340.385 39.2473 340.595 54.9659C331.47 39.3829 299.763 47.837 305.671 62.679C310.459 74.716 314.72 86.719 319.652 98.244C299.869 108.444 280.561 118.28 260.698 127.934L228.675 214.387L99.489 191.327L71.6611 137.761L194.094 153.761L32.6941 77.928L0 0.00195312L221.803 113.993ZM549.615 0L274.809 141.234L246.429 217.558L223.319 279.679L274.809 339.514L326.299 279.679L303.193 217.558L450.133 191.328L477.961 137.761L355.501 153.761L516.923 77.928L549.615 0Z'
					fill='url(#paint0_linear_15_27)'
				/>
				<defs>
					<linearGradient
						id='paint0_linear_15_27'
						x1='274.807'
						y1='0'
						x2='274.807'
						y2='339.514'
						gradientUnits='userSpaceOnUse'
					>
						<stop stopColor='#7ADA9D' />
						<stop offset='1' stopColor='#3D6D4F' /> {/* Lighter teal */}
					</linearGradient>
				</defs>
			</svg>
		</div>
	);
};

export default GlowingLogo;
