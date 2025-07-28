import { FC } from 'react';
import '../style.css';
import AnWord from './AnWord';
interface IssueButtonProps {}

const IssueButton: FC<IssueButtonProps> = ({}) => {
	const gradient = `linear-gradient(to right, ${'#084239'} 0%, ${'#427f77'} 51%, ${'#084239'} 100%)`;

	return (
		<>
			<div
				className=' btn-grad cursor-pointer   border-none  h-40px  px-8px w-170px bg-gradient-to-r text-white p-4 rounded-xl shadow-md'
				style={{ backgroundImage: gradient }}
			>
				<div className='text-14px text-white font-sans flex justify-center gap-4px w-full h-full ic   '>
					<div className='h-20px '>شكوى حول</div>
					<AnWord></AnWord>
				</div>
			</div>
		</>
	);
};

export default IssueButton;
