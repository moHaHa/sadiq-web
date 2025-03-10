import { FC } from 'react';
import './AiStarts.css';
interface AiStarsProps {}

const AiStars: FC<AiStarsProps> = ({}) => {
	return (
		<>
			<svg width='16' viewBox='0 0 44 47' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					className='star star1'
					d='M3.65333 15.6667L5.33333 12L7 15.6667L10.6667 17.3333L7 19.0133L5.33333 22.6667L3.65333 19.0133L0 17.3333L3.65333 15.6667Z'
					fill='#FFE77E'
				/>
				<path
					className='star star2'
					d='M23.8225 5.84375L26.5 0L29.1562 5.84375L35 8.5L29.1562 11.1775L26.5 17L23.8225 11.1775L18 8.5L23.8225 5.84375Z'
					fill='#FFE77E'
				/>
				<path
					className='star star3'
					d='M29.535 32.5625L33 25L36.4375 32.5625L44 36L36.4375 39.465L33 47L29.535 39.465L22 36L29.535 32.5625Z'
					fill='#FFE77E'
				/>
			</svg>
		</>
	);
};

export default AiStars;
