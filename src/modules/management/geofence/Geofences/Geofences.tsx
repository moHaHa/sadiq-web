import { Button } from 'antd';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import MainHeader from '~/components/MainHeader/MainHeader';
import { adminViews } from '~/router';

interface GeofencesProps {}

const Geofences: FC<GeofencesProps> = ({}) => {
	return (
		<>
			<div>
				<MainHeader></MainHeader>
				<div className='pt-70px plg'>
					<Link to={adminViews.GeofencesNew.path}>
						<Button type='primary' block>
							New Geofence
						</Button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Geofences;
