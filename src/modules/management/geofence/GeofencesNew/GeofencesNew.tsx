import { Button, Input } from 'antd';
import { FC } from 'react';
import MainHeader from '~/components/MainHeader/MainHeader';
import GeoJSONMapEditor from './components/GeofenceEditor/GeofenceEditor';

interface GeofencesNewProps {}

const GeofencesNew: FC<GeofencesNewProps> = ({}) => {
	return (
		<>
			<div>
				<MainHeader></MainHeader>
				<div className='pt-70px px-lg'>
					<div className='mb-12px  flex justify-center '>
						<Input className='w-400px' placeholder='اسم المنطقة'></Input>
					</div>
					<div className=' fcc  mb-12px'>
						<div className=' w-90vw '>
							<GeoJSONMapEditor
								onChange={(e) => {
									console.log(e);
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
