import { Modal } from 'antd';
import { useState } from 'react';
import { FileTIssueSummary } from '~/server/issue/types/issue.summary.type';
import ImagePreviewById from '../ImagePreviewById/ImagePreviewById';

type ImageGalleryProps = {
	media: FileTIssueSummary[];
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ media }) => {
	const [open, setOpen] = useState(false);
	const renderImages = () => {
		const count = media.length;

		if (count === 1) {
			return (
				<div className='w-full h-96'>
					<ImagePreviewById id={media[0].id} />
				</div>
			);
		}

		if (count === 2) {
			return (
				<div className='flex gap-1 w-full h-96'>
					<div className='w-1/2 h-full'>
						<ImagePreviewById id={media[0].id} />
					</div>
					<div className='w-1/2 h-full'>
						<ImagePreviewById id={media[1].id} />
					</div>
				</div>
			);
		}

		if (count === 3) {
			return (
				<div className='flex gap-1 w-full h-96'>
					<div className='w-2/3 h-full'>
						<ImagePreviewById id={media[0].id} />
					</div>
					<div className='w-1/3 h-full flex flex-col gap-1'>
						<div className='h-1/2'>
							<ImagePreviewById id={media[1].id} />
						</div>
						<div className='h-1/2'>
							<ImagePreviewById id={media[2].id} />
						</div>
					</div>
				</div>
			);
		}

		if (count >= 4) {
			return (
				<div className='flex gap-1 w-full h-96'>
					<div className='w-2/3 h-full'>
						<ImagePreviewById id={media[0].id} />
					</div>
					<div className='w-1/3 h-full flex flex-col gap-1'>
						<div className='h-1/2'>
							<ImagePreviewById id={media[1].id} />
						</div>
						<div className='h-1/2'>
							<div className='layers full'>
								<div className='r-layer'>
									<ImagePreviewById id={media[2].id} />
								</div>
								<div className='a-layer'>
									<div className='full bg-[#33333399] text-white fcc'> {count - 3}+</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		}

		return null;
	};

	return (
		<div>
			<div onClick={() => setOpen(true)} className='image-gallery'>
				{renderImages()}
			</div>
			<Modal open={open} onCancel={() => setOpen(false)} footer={false}>
				<div className='mt-18px'>
					{media.map(({ id }) => (
						<div className='py-12px'>
							<ImagePreviewById wide id={id} />
						</div>
					))}
				</div>
			</Modal>
		</div>
	);
};

export default ImageGallery;
