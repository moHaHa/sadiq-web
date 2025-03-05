import { FC } from 'react';
import '../style.css';
import AnWord from './AnWord';
interface IssueButtonProps {}

const IssueButton: FC<IssueButtonProps> = ({}) => {
	return (
		<>
			<div className=' btn-grad   border-none  h-40px  px-8px w-190px'>
				<div className='text-14px text-white font-sans flex justify-center gap-4px w-full h-full ic   '>
					<div className='h-20px '>بلّغ عن</div>
					<AnWord></AnWord>
				</div>
			</div>
		</>
	);
};

export default IssueButton;
