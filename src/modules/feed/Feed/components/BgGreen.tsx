import { FC } from 'react';

interface BgGreenProps {}

const BgGreen: FC<BgGreenProps> = ({}) => {
	return (
		<>
			<div className='fixed top-200px w-100vw right--40px blur-50px in-vis'>
				<svg className='w-100vw op-20' viewBox='0 0 104 150' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						opacity='0.61'
						d='M19.2976 0.0417275L103.787 58.9531L92.2534 113.085L40.8719 149.184L20.8285 52.9204L75.5776 21.607L23.504 37.7187L0.761932 10.8897L19.2976 0.0417275Z'
						fill='url(#paint0_linear_3_3)'
					/>
					<defs>
						<linearGradient
							id='paint0_linear_3_3'
							x1='37.2626'
							y1='71.5281'
							x2='-25.6525'
							y2='161.759'
							gradientUnits='userSpaceOnUse'
						>
							<stop stop-color='#8FE5E3' />
							<stop offset='1' stop-color='#59df98' />
						</linearGradient>
					</defs>
				</svg>
			</div>
		</>
	);
};

export default BgGreen;
