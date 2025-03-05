import { FC } from 'react';
import './GlowingText.css';
interface GlowingTextProps {
	text: string;
}

const GlowingText: FC<GlowingTextProps> = ({ text }) => {
	return (
		<div className='relative inline-block'>
			<h2 className='text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-600 to-teal-400 animate-glow'>
				{text}
			</h2>
		</div>
	);
};

export default GlowingText;
