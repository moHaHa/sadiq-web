export interface TGeofenceMutation {
	name: string;
	zone: string;
	geofence: {
		type: string;
		coordinates: number[][][];
	};
}
