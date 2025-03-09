import { Spin } from 'antd';
import { FC, useEffect } from 'react';
import { useAppWrapperContext } from '~/context/AppWrapperContent/AppWrapperContent';
import { useFileMutation } from '~/server/file/useFileMutation';
interface ImagePreviewByIdProps {
	id: string;
	wide?: boolean;
}
const ImagePreviewById: FC<ImagePreviewByIdProps> = ({ id, wide = false }) => {
	const { mine } = useAppWrapperContext();
	const { data, mutate, isLoading } = useFileMutation(mine?.role != 'admin');
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
