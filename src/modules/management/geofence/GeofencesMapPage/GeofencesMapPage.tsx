import { FC } from 'react';
import MainHeader from '~/components/MainHeader/MainHeader';
import { usePagination } from '~/hooks/usePagination/usePagination';
import { useGeofencesQuery } from '~/server/geofence/useGeofencesQuery/useGeofencesQuery';
import { TZoneItemWithGeofence } from '~/server/zone/types';
import { useZonesQuery } from '~/server/zone/useZonesQuery/useZonesQuery';
import GeofencesMapView from './components/GeofencesMapView';

interface GeofencesMapPageProps {}

const GeofencesMapPage: FC<GeofencesMapPageProps> = ({}) => {
	const { skip, limit, pagination } = usePagination();
	const { data } = useGeofencesQuery({ total: true, skip, limit });
	const { data: zones } = useZonesQuery<TZoneItemWithGeofence>({ 'include.geofence': true });

	return (
		<>
			<div>
				<MainHeader></MainHeader>
				<div className='pt-70px'></div>
				<div className='flex '>
					<div className='w-400px bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden'>
						<div className='divide-y divide-gray-200 dark:divide-gray-700 font-sans'>
							{zones?.data.map((zone) => (
								<div
									key={zone.id}
									className='transition-all duration-300 hover:shadow-md'
									style={{ backgroundColor: `${zone.color}44` }}
								>
									<div className='px-4 py-3 font-medium text-lg text-gray-800 dark:text-gray-100 flex items-center gap-2'>
										<div className=' h-3 rounded-full' style={{ backgroundColor: zone.color }}></div>
										إدارة {zone.name}
									</div>
									<div className='px-6 pb-3 '>
										{zone.geofence.map((g) => (
											<div
												key={g.id}
												className='px-4 py-2 my-1 bg-white/50 dark:bg-gray-900/50 rounded-lg text-gray-700 dark:text-gray-300  hover:bg-white/80 dark:hover:bg-gray-900/80 transition-colors cursor-pointer  flex items-center gap-2'
											>
												<div
													style={{ backgroundColor: zone.color }}
													className='w-2 h-2 rounded-full '
												></div>
												{g.name}
											</div>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
					<div className='flex-1 px-12px '>
						<GeofencesMapView data={data?.data}></GeofencesMapView>
					</div>
				</div>
			</div>
		</>
	);
};

export default GeofencesMapPage;
