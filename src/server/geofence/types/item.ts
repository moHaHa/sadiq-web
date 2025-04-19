export interface TGeofenceItem {
	id: string;
	name: string;
	zone: {
		id: string;
		name: string;
		color: string;
	};
	geofence: {
		type: string;
		coordinates: number[][][];
	};
	createdAt: string;
}

export type TGeofenceSummary = {
	id: string;
	name: string;
	zone: {
		id: string;
		name: string;
		color: string;
	};
	geofence: {
		type: string;
		coordinates: number[][][];
	};
	createdAt: string;
};
