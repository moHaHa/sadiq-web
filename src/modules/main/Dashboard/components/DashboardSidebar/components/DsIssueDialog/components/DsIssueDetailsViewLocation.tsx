import { FC, useEffect, useRef, useState } from "react";
import { IssueType } from "~/server/types/issueType.type";
import { buildIconMarkerContent } from "../../../../helpers/buildIconMarkerContent";

interface DsIssueDetailsViewLocationProps {
  value?: { lng: number; lat: number };
  issueType: IssueType;
}

const DsIssueDetailsViewLocation: FC<DsIssueDetailsViewLocationProps> = ({
  value,
  issueType,
}) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const marker = useRef<google.maps.marker.AdvancedMarkerElement>();

  useEffect(() => {
    // Load the Google Maps script
    const loadGoogleMapsScript = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${
        import.meta.env.VITE_GOOGLE_MAPS_API_KEY
      }`;
      script.async = true;
      script.onload = initializeMap;
      document.body.appendChild(script);
    };

    // Initialize the map
    const initializeMap = async () => {
      if (mapRef.current) {
        const { Map } = (await google.maps.importLibrary(
          "maps"
        )) as google.maps.MapsLibrary;
        const { AdvancedMarkerElement } = (await google.maps.importLibrary(
          "marker"
        )) as google.maps.MarkerLibrary;

        const newMap = new Map(mapRef.current as HTMLElement, {
          zoom: 12,
          center: value,
          mapId: "DsIssueDetailsViewLocation_ID",
          disableDefaultUI: true,
        });

        // add init marker
        if (value != undefined) {
          const exMarker = new AdvancedMarkerElement({
            map: newMap,
            position: value,
            content: buildIconMarkerContent(issueType),
          });
          marker.current = exMarker;
        }

        setMap(newMap);
      }
    };

    // Check if the Google Maps object is already loaded
    if (!window.google || !window.google.maps) {
      loadGoogleMapsScript();
    } else {
      initializeMap();
    }
  }, []);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "12px",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.15)", // Improved mobile styling
      }}
    ></div>
  );
};

export default DsIssueDetailsViewLocation;
