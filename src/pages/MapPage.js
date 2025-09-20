// src/pages/MapPage.js

// import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { collection, query, onSnapshot } from "firebase/firestore";
// import { db } from "../lib/firebaseconfig";
// import L from 'leaflet'; // Import Leaflet library
// import { Link } from 'react-router-dom';
// import './MapPage.css'; // We'll create this file for styling

// // Function to create custom, color-coded map icons
// const getPriorityIcon = (priority) => {
//   const priorityColor = {
//     'Critical': '#d9534f', // Red
//     'High': '#f0ad4e',     // Orange
//     'Medium': '#0275d8',   // Blue
//     'Low': '#5cb85c',      // Green
//     'default': '#777'      // Gray for others
//   };

//   const color = priorityColor[priority] || priorityColor['default'];

//   // SVG for the custom marker
//   const markerHtml = `
//     <svg viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
//       <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="${color}"/>
//     </svg>`;

//   return new L.DivIcon({
//     html: markerHtml,
//     className: 'custom-div-icon', // Use this class for custom styling
//     iconSize: [32, 32],
//     iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
//     popupAnchor: [0, -32] // Point from which the popup should open relative to the iconAnchor
//   });
// };

// const MapPage = () => {
//   const [issues, setIssues] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch data from Firestore in real-time
//   useEffect(() => {
//     const q = query(collection(db, "reports"));
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const issuesData = querySnapshot.docs
//         .map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }))
//         .filter(issue => issue.location && typeof issue.location === 'string'); // Ensure location exists

//       setIssues(issuesData);
//       setLoading(false);
//     }, (error) => {
//       console.error("Error fetching real-time issues:", error);
//       setLoading(false);
//     });

//     return () => unsubscribe(); // Cleanup listener on unmount
//   }, []);

//   if (loading) {
//     return <div className="p-4 text-center">Loading map data...</div>;
//   }
  
//   // Default map position (e.g., center of your city)
//   const defaultPosition = [20.2961, 85.8245]; // Bhubaneswar, India

//   return (
//     <div className="map-page-container">
//       <h2 className="main-title p-3">Issues Map View</h2>
//       <MapContainer center={defaultPosition} zoom={13} className="map-view">
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {issues.map(issue => {
//           // Parse the location string "lat,lng" into an array [lat, lng]
//           const position = issue.location.split(',').map(coord => parseFloat(coord.trim()));

//           // Validate that the position is a valid coordinate pair
//           if (position.length !== 2 || isNaN(position[0]) || isNaN(position[1])) {
//             console.warn(`Skipping issue with invalid location: ${issue.id}`);
//             return null;
//           }

//           return (
//             <Marker key={issue.id} position={position} icon={getPriorityIcon(issue.priority)}>
//               <Popup>
//                 <div className="map-popup">
//                   <h5>{issue.type || 'N/A'}</h5>
//                   <p><strong>Status:</strong> {issue.status || 'N/A'}</p>
//                   <p><strong>Priority:</strong> {issue.priority || 'N/A'}</p>
//                   <Link to={`/issue/${issue.id}`}>View Details</Link>
//                 </div>
//               </Popup>
//             </Marker>
//           );
//         })}
//       </MapContainer>
//     </div>
//   );
// };

// export default MapPage;

// src/pages/MapPage.js

// import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { collection, query, onSnapshot } from "firebase/firestore";
// import { db } from "../lib/firebaseconfig";
// import L from 'leaflet';
// import { Link } from 'react-router-dom';
// import './MapPage.css';

// // Function to create custom, color-coded map icons
// const getPriorityIcon = (priority) => {
//   const priorityColor = {
//     'Critical': '#d9534f', // Red
//     'High': '#f0ad4e',     // Orange
//     'Medium': '#0275d8',   // Blue
//     'Low': '#5cb85c',      // Green
//     'default': '#777'      // Gray for others
//   };
//   const color = priorityColor[priority] || priorityColor['default'];
//   const markerHtml = `
//     <svg viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
//       <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="${color}"/>
//     </svg>`;
//   return new L.DivIcon({
//     html: markerHtml,
//     className: 'custom-div-icon',
//     iconSize: [32, 32],
//     iconAnchor: [16, 32],
//     popupAnchor: [0, -32]
//   });
// };

// const MapPage = () => {
//   const [issues, setIssues] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const q = query(collection(db, "reports"));
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const issuesData = querySnapshot.docs
//         .map(doc => ({ id: doc.id, ...doc.data() }))
//         .filter(issue => issue.location && typeof issue.location === 'string');
//       setIssues(issuesData);
//       setLoading(false);
//     }, (error) => {
//       console.error("Error fetching real-time issues:", error);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   if (loading) {
//     return <div className="p-4 text-center">Loading map data...</div>;
//   }

//   // Default map position (Bhubaneswar, Odisha)
//   const defaultPosition = [20.2961, 85.8245];

//   return (
//     <div className="map-page-container">
//       <h2 className="main-title p-3">Issues Map View</h2>
//       <MapContainer center={defaultPosition} zoom={13} className="map-view">
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {issues.map(issue => {
//           // --- THIS IS THE KEY LOGIC ---
//           // It parses the "latitude, longitude" string from Firestore
//           // into a numerical array like [20.2961, 85.8245] for the Marker.
//           const position = issue.location.split(',').map(coord => parseFloat(coord.trim()));

//           if (position.length !== 2 || isNaN(position[0]) || isNaN(position[1])) {
//             console.warn(`Skipping issue with invalid location: ${issue.id}`);
//             return null; // Skip rendering this marker if location is invalid
//           }

//           return (
//             <Marker key={issue.id} position={position} icon={getPriorityIcon(issue.priority)}>
//               <Popup>
//                 <div className="map-popup">
//                   <h5>{issue.type || 'N/A'}</h5>
//                   <p><strong>Status:</strong> {issue.status || 'N/A'}</p>
//                   <p><strong>Priority:</strong> {issue.priority || 'N/A'}</p>
//                   <Link to={`/issue/${issue.id}`}>View Details</Link>
//                 </div>
//               </Popup>
//             </Marker>
//           );
//         })}
//       </MapContainer>
//     </div>
//   );
// };

// export default MapPage;


// src/pages/MapPage.js

// import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { collection, query, onSnapshot } from "firebase/firestore";
// import { db } from "../lib/firebaseconfig";
// import L from 'leaflet';
// import { Link, useLocation } from 'react-router-dom';
// import './MapPage.css';

// const getPriorityIcon = (priority) => {
//   const priorityColor = {
//     'Critical': '#d9534f',
//     'High': '#f0ad4e',
//     'Medium': '#0275d8',
//     'Low': '#5cb85c',
//     'default': '#777'
//   };
//   const color = priorityColor[priority] || priorityColor['default'];
//   const markerHtml = `
//     <svg viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
//       <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="${color}"/>
//     </svg>`;
//   return new L.DivIcon({
//     html: markerHtml,
//     className: 'custom-div-icon',
//     iconSize: [32, 32],
//     iconAnchor: [16, 32],
//     popupAnchor: [0, -32]
//   });
// };

// const MapPage = () => {
//   const [issues, setIssues] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const location = useLocation();

//   const initialCenter = location.state?.center || [20.2961, 85.8245];
//   const initialZoom = location.state?.center ? 18 : 13;

//   useEffect(() => {
//     const q = query(collection(db, "reports"));
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const issuesData = querySnapshot.docs
//         .map(doc => ({ id: doc.id, ...doc.data() }))
//         .filter(issue => issue.location && typeof issue.location === 'string');
//       setIssues(issuesData);
//       setLoading(false);
//     }, (error) => {
//       console.error("Error fetching real-time issues:", error);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   if (loading) {
//     return <div className="p-4 text-center">Loading map data...</div>;
//   }

//   return (
//     <div className="map-page-container">
//       <h2 className="main-title p-3">Issues Map View</h2>
//       <MapContainer center={initialCenter} zoom={initialZoom} className="map-view">
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {issues.map(issue => {
//           const position = issue.location.split(',').map(coord => parseFloat(coord.trim()));
//           if (position.length !== 2 || isNaN(position[0]) || isNaN(position[1])) {
//             return null;
//           }
//           return (
//             <Marker key={issue.id} position={position} icon={getPriorityIcon(issue.priority)}>
//               <Popup>
//                 <div className="map-popup">
//                   <h5>{issue.type || 'N/A'}</h5>
//                   <p><strong>Status:</strong> {issue.status || 'N/A'}</p>
//                   <p><strong>Priority:</strong> {issue.priority || 'N/A'}</p>
//                   <Link to={`/issue/${issue.id}`}>View Details</Link>
//                 </div>
//               </Popup>
//             </Marker>
//           );
//         })}
//       </MapContainer>
//     </div>
//   );
// };

// export default MapPage;

// src/pages/MapPage.js

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../lib/firebaseconfig";
import L from 'leaflet';
import { Link, useLocation } from 'react-router-dom';
import MarkerClusterGroup from 'react-leaflet-markercluster'; // 👈 1. IMPORT CLUSTER GROUP

// Import the required CSS for marker clustering
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import './MapPage.css';

// ... getPriorityIcon function remains the same ...
const getPriorityIcon = (priority) => {
  // (This function is unchanged from the previous version)
  const priorityColor = { 'Critical': '#d9534f', 'High': '#f0ad4e', 'Medium': '#0275d8', 'Low': '#5cb85c', 'default': '#777' };
  const color = priorityColor[priority] || priorityColor['default'];
  const markerHtml = `<svg viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="${color}"/></svg>`;
  return new L.DivIcon({ html: markerHtml, className: 'custom-div-icon', iconSize: [32, 32], iconAnchor: [16, 32], popupAnchor: [0, -32] });
};

// 👈 2. NEW: Function to create custom cluster icons based on priority
const createClusterCustomIcon = function (cluster) {
  const markers = cluster.getAllChildMarkers();
  let highestPriority = 'Low'; // Default to lowest priority

  // Determine the highest priority within the cluster
  markers.forEach((marker) => {
    const priority = marker.options.priority;
    if (priority === 'Critical') highestPriority = 'Critical';
    else if (priority === 'High' && highestPriority !== 'Critical') highestPriority = 'High';
    else if (priority === 'Medium' && highestPriority !== 'Critical' && highestPriority !== 'High') highestPriority = 'Medium';
  });

  const clusterClassName = {
    'Critical': 'critical-cluster',
    'High': 'high-cluster',
    'Medium': 'medium-cluster',
    'Low': 'low-cluster',
  };
  
  return L.divIcon({
    html: `<span>${cluster.getChildCount()}</span>`,
    className: `marker-cluster ${clusterClassName[highestPriority]}`,
    iconSize: L.point(40, 40, true),
  });
};


const MapPage = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const initialCenter = location.state?.center || [20.2961, 85.8245];
  const initialZoom = location.state?.center ? 18 : 13;

  useEffect(() => {
    const q = query(collection(db, "reports"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const issuesData = querySnapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(issue => issue.location && typeof issue.location === 'string');
      setIssues(issuesData);
      setLoading(false);
    }, (error) => console.error("Error fetching issues:", error));
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="p-4 text-center">Loading map data...</div>;
  }

  return (
    <div className="map-page-container">
      <h2 className="main-title p-3">Issues Map View</h2>
      <MapContainer center={initialCenter} zoom={initialZoom} className="map-view">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* 👇 3. WRAP MARKERS in MarkerClusterGroup */}
        <MarkerClusterGroup iconCreateFunction={createClusterCustomIcon}>
          {issues.map(issue => {
            const position = issue.location.split(',').map(coord => parseFloat(coord.trim()));
            if (position.length !== 2 || isNaN(position[0]) || isNaN(position[1])) {
              return null;
            }
            return (
              <Marker 
                key={issue.id} 
                position={position} 
                icon={getPriorityIcon(issue.priority)}
                priority={issue.priority} // Pass priority as an option
              >
                <Popup>
                  <div className="map-popup">
                    <h5>{issue.type || 'N/A'}</h5>
                    <p><strong>Status:</strong> {issue.status || 'N/A'}</p>
                    <p><strong>Priority:</strong> {issue.priority || 'N/A'}</p>
                    <Link to={`/issue/${issue.id}`}>View Details</Link>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default MapPage;