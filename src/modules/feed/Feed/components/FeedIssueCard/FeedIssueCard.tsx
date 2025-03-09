import { message } from 'antd';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { FC, useState } from 'react';
import ImageGallery from '~/components/ImageGallery/ImageGallery';
import { useAppWrapperContext } from '~/context/AppWrapperContent/AppWrapperContent';
import { getIssueStatusConfig } from '~/server/helpers/getIssueStatusConfig';
import { getIssueTypeConfig } from '~/server/helpers/getIssueTypeConfig';
import { TIssueSummary } from '~/server/issue/types/issue.summary.type';
import FeedIssueCardActivities from './components/FeedIssueCardActivities/FeedIssueCardActivities';
import IssuePublishToggle from './components/IssuePublishToggle/IssuePublishToggle';
dayjs.extend(relativeTime);

interface FeedIssueCardProps {
	issue: TIssueSummary;
	onOpenDetails: (id: string) => void;
}

const FeedIssueCard: FC<FeedIssueCardProps> = ({ issue, onOpenDetails }) => {
	const { arWord, color, icon } = getIssueTypeConfig(issue.type);
	const { tag } = getIssueStatusConfig(issue.status);
	const [open, setOpen] = useState(false);
	const [publish, setPublish] = useState(issue.publish);
	const media = issue.files.filter((e) => e.mimetype == 'image/jpeg' || e.mimetype == 'image/png');
	const copyLinkToClipboard = (link: string) => {
		navigator.clipboard
			.writeText(link)
			.then(() => {
				message.success('الرابط تم نسخه بنجاح');
			})
			.catch(() => {
				message.error('حدث خطأ أثناء نسخ الرابط');
			});
	};

	const { mine } = useAppWrapperContext();

	return (
		<div className='font-sans bg-white py-12px   rounded-lg'>
			<div className='flex justify-between px-12px ic '>
				<div className='pt-12px'>
					<div className='text-14px flex ic'>
						<div className='me-sm'>{icon} </div>
						<div>
							<div className='flex ic'>
								{issue.governorate?.nameAr ?? issue.governorate?.name}
								<span className='mx-4px'>، </span>
								{issue.city?.nameAr ?? issue.city?.name}
							</div>
							<div className='text-12px op-35 mt-4px'>
								<span dir='ltr'>{dayjs(issue.createdAt).fromNow()}</span>
							</div>
						</div>
					</div>
				</div>
				<div>{tag}</div>
			</div>
			<div className=' pt-8px text-14px op-50 flex flex-gap-4px px12px'>
				{issue.text.slice(0, 54)}
				{issue.text.length > 54 && '..'}
			</div>
			<div className='mt-12px'>
				<ImageGallery media={media}></ImageGallery>
			</div>
			{mine?.role == 'admin' && (
				<>
					<div className='mt-14px f justify-between items-end px-12px '>
						<div className='text-12px op50 '></div>
						<div className='f flex-gap-8px  '>
							<div
								onClick={() => setOpen(!open)}
								className='bg-light-5 w-40px h-24px fcc gap-4px cursor-pointer rounded-full'
							>
								<div className='text-12px op-70'>{issue.activityCount}</div>
								<div className='i-solar:chat-round-linear'></div>
							</div>
						</div>
					</div>
					<div>
						<FeedIssueCardActivities issue={issue} open={open} issueId={issue.id}></FeedIssueCardActivities>
					</div>
					<div className='pt-4px fcc'>
						<IssuePublishToggle
							onSuccess={(value) => setPublish(value)}
							issueId={issue.id}
							value={publish}
						></IssuePublishToggle>
					</div>
				</>
			)}

			{/* <div className="flex flex-wrap gap-8px mt-4px">
        <Button disabled>Assign </Button>
        <Button onClick={() => onOpenDetails?.(issue.id)}>Details </Button>
        <Button>Open In new tab </Button>
        <Button>Copy Link </Button>
      </div> */}
		</div>
	);
};

export default FeedIssueCard;
