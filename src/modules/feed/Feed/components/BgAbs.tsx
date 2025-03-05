import { FC } from 'react';

interface BgAbsProps {}

const BgAbs: FC<BgAbsProps> = ({}) => {
	return (
		<>
			<div className='left-0 top-0 absolute blur-40px op-50  z-1  in-vis'>
				<svg className='w-100%' viewBox='0 0 125 55' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						opacity='0.61'
						d='M9.75775 21.0161L105.715 25.6777L124.372 54.9163L112.152 0.321234L86.1279 35.8062L70.6796 36.835L37.9596 45.9964L64.6481 15.6274L32.281 37.943L0.848124 31.4162L9.75775 21.0161Z'
						fill='url(#paint0_linear_3_3)'
					/>
					<defs>
						<linearGradient
							id='paint0_linear_3_3'
							x1='71.9661'
							y1='24.0604'
							x2='69.0043'
							y2='85.0253'
							gradientUnits='userSpaceOnUse'
						>
							<stop stop-color='#8FE5E3' />
							<stop offset='1' stop-color='#0C72AD' />
						</linearGradient>
					</defs>
				</svg>
			</div>
		</>
	);
};

export default BgAbs;
