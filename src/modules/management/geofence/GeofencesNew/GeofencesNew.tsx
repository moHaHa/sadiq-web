import { Button, Input } from 'antd';
import { FC, useState } from 'react';
import MainHeader from '~/components/MainHeader/MainHeader';
import { useGeofenceMutation } from '~/server/geofence/useGeofenceMutation/useGeofenceMutation';
import GeoJSONMapEditor from './components/GeofenceEditor/GeofenceEditor';

interface GeofencesNewProps {}

const GeofencesNew: FC<GeofencesNewProps> = ({}) => {
	const {} = useGeofenceMutation();
	const [name, setName] = useState<string | undefined>();
	return (
		<>
			<div>
				<MainHeader></MainHeader>
				<div className='pt-70px px-lg'>
					<div className='mb-12px  flex justify-center '>
						<Input
							value={name}
							onChange={(e) => setName(e.target.value)}
							className='w-400px'
							placeholder='اسم المنطقة'
						></Input>
					</div>
					<div className=' fcc  mb-12px'>
						<div className=' w-90vw '>
							<GeoJSONMapEditor
								onChange={(e) => {
									console.log(e.features.find((a: any, b: any) => b == 0)?.geometry);
								}}
							/>
						</div>
					</div>
					<div className='mb-12px  flex justify-center '>
						<Button className='font-sans' type='primary'>
							حفط
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default GeofencesNew;
