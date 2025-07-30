import { CloseOutlined } from '@ant-design/icons';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FC, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { buildIconMarkerContent } from '~/modules/main/Dashboard/components/helpers/buildIconMarkerContent';
import { TIssueSummary } from '~/server/issue/types/issue.summary.type';
import FeedIssueCard from '../FeedIssueCard/FeedIssueCard';

interface DashboardMapViewProps {
	issues: TIssueSummary[];
}

const FeedMapView: FC<DashboardMapViewProps> = ({ issues }) => {
	const mapRef = useRef<HTMLDivElement | null>(null);
	const mapInstanceRef = useRef<L.Map | null>(null);
	const [selectedIssue, setSelectedIssue] = useState<TIssueSummary | null>(null);
	const navigate = useNavigate();

	useEffect(() => {
		if (!mapRef.current) return;

		if (!mapInstanceRef.current) {
			mapInstanceRef.current = L.map(mapRef.current).setView([33.51523954533201, 36.2717525114952], 7);

			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution: '&copy; OpenStreetMap contributors',
			}).addTo(mapInstanceRef.current);
		}

		const map = mapInstanceRef.current;

		// Remove old markers
		map.eachLayer((layer) => {
			if ((layer as any)._icon && layer instanceof L.Marker) {
				map.removeLayer(layer);
			}
		});

		// Add markers
		issues.forEach((issue) => {
			const markerEl = L.divIcon({
				html: buildIconMarkerContent('serviceIssue'),
				className: 'custom-marker',
				iconSize: [30, 42],
			});

			const marker = L.marker([issue.location.lat, issue.location.lng], {
				icon: markerEl,
			}).addTo(map);

			marker.on('click', () => {
				setSelectedIssue(issue); // Open dialog
			});
		});
	}, [issues]);

	return (
		<>
			<div
				ref={mapRef}
				style={{
					width: '100%',
					height: '100%',
					borderRadius: '12px',
					boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.15)',
				}}
			/>

			{/* Dialog */}
			{selectedIssue && (
				<div
					style={{
						position: 'fixed',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						background: 'rgba(0,0,0,0.4)',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						zIndex: 1000,
					}}
					onClick={() => setSelectedIssue(null)} // close on backdrop click
				>
					<div
						style={{
							background: '#fff',
							padding: '24px',
							borderRadius: '12px',
							width: '90%',
							maxWidth: '600px',
							maxHeight: '90vh',
							overflowY: 'auto',
							boxShadow: '0px 4px 12px rgba(0,0,0,0.2)',
						}}
						onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
					>
						<div className='flex justify-end'>
							<CloseOutlined
								onClick={() => {
									setSelectedIssue(null);
								}}
							></CloseOutlined>
						</div>
						<FeedIssueCard onOpenDetails={() => {}} issue={selectedIssue} />
					</div>
				</div>
			)}
		</>
	);
};

export default FeedMapView;
