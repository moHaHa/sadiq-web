import { Button, ColorPicker, Input } from 'antd';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminViews } from '~/router';
import { TZoneMutation } from '~/server/zone/types';
import { useZoneMutation } from '~/server/zone/useZoneMutation/useZoneMutation';
import { invalidateZonesQuery } from '~/server/zone/useZonesQuery/useZonesQuery';

interface UpsertZoneProps {
	id?: string;
	initialValues?: TZoneMutation;
}

const UpsertZone: FC<UpsertZoneProps> = ({ id, initialValues }) => {
	const { mutate, isLoading } = useZoneMutation();
	const [body, setBody] = useState<Partial<TZoneMutation> | undefined>(initialValues);
	const navigate = useNavigate();
	return (
		<>
			<div className='pt-70px px-lg'>
				<div className='mb-12px  flex justify-center '>
					<Input
						value={body?.name}
						onChange={(e) => setBody({ ...body, name: e.target.value })}
						className='w-400px'
						placeholder='اسم المنطقة'
					></Input>
				</div>
				<div className='mb-12px  flex justify-center '>
					<ColorPicker
						value={body?.color}
						onChange={(e) => setBody({ ...body, color: e.toHexString() })}
						className='w-400px'
					></ColorPicker>
				</div>

				<div className='mb-12px  flex justify-center '>
					<Button
						onClick={() => {
							body &&
								mutate(
									{
										id: id,
										body: body as TZoneMutation,
									},
									{
										onSuccess() {
											navigate(adminViews.Zones.path);
											invalidateZonesQuery();
										},
									}
								);
						}}
						className='font-sans'
						type='primary'
						loading={isLoading}
					>
						حفظ
					</Button>
				</div>
			</div>
		</>
	);
};

export default UpsertZone;
