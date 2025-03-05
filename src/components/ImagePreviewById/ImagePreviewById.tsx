import { Spin } from 'antd';
import { FC, useEffect } from 'react';
import { useFileMutation } from '~/server/file/useFileMutation';
interface ImagePreviewByIdProps {
	id: string;
	wide?: boolean;
}
const ImagePreviewById: FC<ImagePreviewByIdProps> = ({ id, wide = false }) => {
	const { data, mutate, isLoading } = useFileMutation();
	useEffect(() => {
		mutate({ id: id });
	}, []);
	return (
		<>
			{isLoading ? (
				<Spin></Spin>
			) : (
				<img
					src={data?.blobURL}
					style={wide ? { width: '100%' } : { width: '100%', height: '100%', objectFit: 'cover' }}
				/>
			)}
		</>
	);
};
export default ImagePreviewById;
