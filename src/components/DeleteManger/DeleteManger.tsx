import { DeleteOutlined } from '@ant-design/icons';
import { Button, message, Modal } from 'antd';
import useDeleteByRecordIdMutation from '~/server/other/useDeleteByRecordId';

export interface DeleteMangerProps {
	id: string;
	entity: string;
	text: string;
	invalidateQuery?: () => void;
	btnText?: string;
}

const DeleteManger = ({ id, entity, text, invalidateQuery, btnText }: DeleteMangerProps) => {
	const [modal, contextHolder] = Modal.useModal();

	const { mutate, isLoading } = useDeleteByRecordIdMutation(id, entity, {
		onSuccess: () => {
			message.success('Deleted Successfully');
			invalidateQuery?.();
		},
	});

	const handelDeleteItem = (e: React.MouseEvent) => {
		e.stopPropagation();
		modal.confirm({
			icon: null,
			title: 'Delete',
			content: ` Delete ${text} ?`,
			okText: 'Delete',
			cancelText: 'Cancel',
			okButtonProps: {
				danger: true,
				loading: isLoading,
			},
			onOk: () => mutate(),
		});
	};

	return (
		<div className='inline-flex'>
			{contextHolder}
			<Button loading={isLoading} danger icon={<DeleteOutlined />} onClick={handelDeleteItem}>
				{btnText}
			</Button>
		</div>
	);
};

export default DeleteManger;
