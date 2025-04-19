import { Button, Input, message } from 'antd';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainHeader from '~/components/MainHeader/MainHeader';
import ZoneSelect from '~/components/ZoneSelect/ZoneSelect';
import { adminViews } from '~/router';
import { TGeofenceMutation } from '~/server/geofence/types/mutation';
import { useGeofenceMutation } from '~/server/geofence/useGeofenceMutation/useGeofenceMutation';
import { invalidateGeofencesQuery } from '~/server/geofence/useGeofencesQuery/useGeofencesQuery';
import GeoJSONMapEditor from './components/GeofenceEditor/GeofenceEditor';

interface GeofencesNewProps {}

const GeofencesNew: FC<GeofencesNewProps> = ({}) => {
	const { mutate, isLoading } = useGeofenceMutation();
	const [body, setBody] = useState<Partial<TGeofenceMutation> | undefined>();
	const navigate = useNavigate();
	return (
		<>
			<div>
				<MainHeader></MainHeader>
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
						<ZoneSelect
							value={body?.zone}
							onChange={(e) => setBody({ ...body, zone: e as string })}
							className='w-400px'
						></ZoneSelect>
					</div>
					<div className=' fcc  mb-12px'>
						<div className=' w-90vw '>
							<GeoJSONMapEditor
								onChange={(e) => {
									const geofence = e.features.find((a: any, b: any) => b == 0)?.geometry;
									setBody((prev) => ({ ...prev, geofence }));
								}}
							/>
						</div>
					</div>
					<div className='mb-12px  flex justify-center '>
						<Button
							onClick={() => {
								body &&
									mutate(body as TGeofenceMutation, {
										onSuccess() {
											message.success('Success');
											navigate(adminViews.Geofences.path);
											invalidateGeofencesQuery();
										},
									});
							}}
							className='font-sans'
							type='primary'
							loading={isLoading}
						>
							حفط
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default GeofencesNew;
