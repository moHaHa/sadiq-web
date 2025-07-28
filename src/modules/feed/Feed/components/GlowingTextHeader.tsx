import { FC } from 'react';
import './GlowingTextHeader.css';
interface GlowingTextHeaderProps {
	text: string;
}

const GlowingTextHeader: FC<GlowingTextHeaderProps> = ({ text }) => {
	return (
		<div className='relative inline-block'>
			<div className=' text-12px  font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#978362] via-[#b8a679] to-[#978362] animate-glow-header'>
				{text}
			</div>
		</div>
	);
};

export default GlowingTextHeader;
