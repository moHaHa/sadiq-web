import TextArea from 'antd/es/input/TextArea';
import { FC, useState } from 'react';
import { TIssueSummary } from '~/server/issue/types/issue.summary.type';
import { invalidateIssueActivitiesQuery } from '~/server/issue/useIssueActivitiesQuery/useIssueActivitiesQuery';
import {
	TIssueActivityMutationMutation,
	useIssueActivityMutationMutation,
} from '~/server/issue/useIssueActivityMutation/useIssueActivityMutation';

interface ActivityReplayAreaProps {
	issue: TIssueSummary;
}
const ActivityReplayArea: FC<ActivityReplayAreaProps> = ({ issue }) => {
	const [text, setText] = useState('');
	const [action, setAction] = useState<'comment' | 'start' | 'close' | 'open'>('comment');
	const { mutate, isLoading } = useIssueActivityMutationMutation(issue.id);

	const handleSubmit = () => {
		const body: TIssueActivityMutationMutation = {
			action,
			text,
		};
		mutate(body, {
			onSuccess: () => {
				setText('');
				setAction('comment');
				invalidateIssueActivitiesQuery(issue.id);
			},
			onError: (error) => {
				console.error('Error submitting activity:', error);
			},
		});
	};

	return (
		<div>
			<div className='flex'>
				<div className='w-30px h-30px fcc'>
					<div className='i-solar:user-circle-broken'></div>
				</div>
				<div className='shadow bg-[#eee] rounded-lg w-full text-12px'>
					<div className='flex justify-between rounded-t-6px p4px bg-[#33333311]'>
						<div className='op-70'>أنت</div>
						<div className='op-70'></div>
					</div>
					<div className='p4px'>
						<TextArea value={text} onChange={(e) => setText(e.target.value)} placeholder='أضف تعليقًا...' />
					</div>
					<div className='mt-4px p4px flex flex-col gap-4px'>
						<label className='font-sans flex items-center gap-2'>
							<input
								type='radio'
								name='action'
								value='close'
								checked={action === 'close'}
								onChange={() => setAction('close')}
								className='radio'
							/>
							إغلاق
						</label>
						<label className='font-sans flex items-center gap-2'>
							<input
								type='radio'
								name='action'
								value='start'
								checked={action === 'start'}
								onChange={() => setAction('start')}
								className='radio'
							/>
							بدء العمل
						</label>
						<label className='font-sans flex items-center gap-2'>
							<input
								type='radio'
								name='action'
								value='open'
								checked={action === 'open'}
								onChange={() => setAction('open')}
								className='radio'
							/>
							فتح
						</label>
						<label className='font-sans flex items-center gap-2'>
							<input
								type='radio'
								name='action'
								value='comment'
								checked={action === 'comment'}
								onChange={() => setAction('comment')}
								className='radio'
							/>
							إضافة تعليق فقط
						</label>
					</div>
					<div className='mt-4px p4px flex gap-4px'>
						<button disabled={isLoading} className='font-sans btn' onClick={handleSubmit}>
							إضافة {isLoading && <div className='i-svg-spinners:eclipse'></div>}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ActivityReplayArea;
