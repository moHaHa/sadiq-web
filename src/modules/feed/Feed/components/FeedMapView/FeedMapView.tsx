import { FC, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { buildIconMarkerContent } from '~/modules/main/Dashboard/components/helpers/buildIconMarkerContent';
import { TIssueSummary } from '~/server/issue/types/issue.summary.type';
interface DashboardMapViewProps {
	issues: TIssueSummary[];
}

const FeedMapView: FC<DashboardMapViewProps> = ({ issues }) => {
	const mapRef = useRef<HTMLDivElement | null>(null);
	const [map, setMap] = useState<google.maps.Map | null>(null);
	const navigate = useNavigate();
	useEffect(() => {
		const loadGoogleMapsScript = () => {
			const script = document.createElement('script');
			script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`;
			script.async = true;
			script.onload = initializeMap;
			document.body.appendChild(script);
		};

		const initializeMap = async () => {
			if (mapRef.current) {
				const position = { lat: 33.51523954533201, lng: 36.2717525114952 };
				const { Map } = (await google.maps.importLibrary('maps')) as google.maps.MapsLibrary;
				const { AdvancedMarkerElement } = (await google.maps.importLibrary('marker')) as google.maps.MarkerLibrary;

				const newMap = new Map(mapRef.current as HTMLElement, {
					zoom: 7,
					center: position,
					mapId: 'DEMO_MAP_ID',
					disableDefaultUI: true,
				});

				issues.forEach((issue) => {
					const AdvancedMarkerElement = new google.maps.marker.AdvancedMarkerElement({
						map: newMap,
						content: buildIconMarkerContent(issue.type),
						position: issue.location,
						title: issue.text,
					});

					AdvancedMarkerElement.addListener('click', () => {
						navigate('/?issueDetails.id=' + issue.id);
					});
				});

				setMap(newMap);
			}
		};

		if (!window.google || !window.google.maps) {
			loadGoogleMapsScript();
		} else {
			initializeMap();
		}
	}, [issues]);

	return (
		<div
			ref={mapRef}
			style={{
				width: '100%',
				height: '100%',
				borderRadius: '12px',
				boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.15)',
			}}
		></div>
	);
};

export default FeedMapView;
