import React, { useEffect, useState } from 'react';
import './AnWord.css'; // Import the CSS file

const AnWord: React.FC = () => {
	const words = ['اسفلت', 'حفرة', 'لافتات', 'نفايات', 'ارصفة', 'مرافق', 'جدار'];
	const [currentWordIndex, setCurrentWordIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
		}, 2800); // Change word every 2 seconds

		return () => clearInterval(interval); // Cleanup interval on unmount
	}, [words.length]);

	return (
		<div className='animated-button w-50px  font-sans  h-20px '>
			<div className='word-container'>
				{words.map((word, index) => (
					<div key={word} className={` word ${index === currentWordIndex ? 'visible' : ''}`}>
						{word}
					</div>
				))}
			</div>
		</div>
	);
};

export default AnWord;
