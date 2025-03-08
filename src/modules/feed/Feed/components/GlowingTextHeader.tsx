import { FC } from 'react';
import './GlowingTextHeader.css';
interface GlowingTextHeaderProps {
	text: string;
}

const GlowingTextHeader: FC<GlowingTextHeaderProps> = ({ text }) => {
	return (
		<div className='relative inline-block'>
			<div className=' text-12px  font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7ADA9D] via-teal-600 to-[#3D6D4F] animate-glow-header'>
				{text}
			</div>
		</div>
	);
};

export default GlowingTextHeader;
