// import React from 'react';
// import { Nav } from 'react-bootstrap';
// import { Link, useLocation } from 'react-router-dom';

// const Sidebar = () => {
//   const location = useLocation();

//   return (
//     <div className="sidebar-menu p-3">
//       <div className="logo d-flex align-items-center mb-4">
//         <h4 className="m-0">Municipal Dashboard</h4>
//       </div>
//       <Nav className="flex-column">
//         <Nav.Item>
//           <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>
//             <i className="bi bi-speedometer2 me-2"></i> Dashboard
//           </Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link as={Link} to="/issues" className={location.pathname.startsWith('/issues') ? 'active' : ''}>
//             <i className="bi bi-exclamation-triangle-fill me-2"></i> Issues / Complaints
//           </Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link as={Link} to="/map" className={location.pathname.startsWith('/map') ? 'active' : ''}>
//             <i className="bi bi-geo-alt-fill me-2"></i> Map View
//           </Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link as={Link} to="/departments" className={location.pathname.startsWith('/departments') ? 'active' : ''}>
//             <i className="bi bi-building-fill me-2"></i> Departments
//           </Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link as={Link} to="/analytics" className={location.pathname.startsWith('/analytics') ? 'active' : ''}>
//             <i className="bi bi-graph-up me-2"></i> Analytics & Reports
//           </Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link as={Link} to="/settings" className={location.pathname.startsWith('/settings') ? 'active' : ''}>
//             <i className="bi bi-gear-fill me-2"></i> Settings / Alerts
//           </Nav.Link>
//         </Nav.Item>
//       </Nav>
//     </div>
//   );
// };

// export default Sidebar;

// import React from 'react';
// import { Nav, Button } from 'react-bootstrap';
// import { Link, useLocation } from 'react-router-dom';
// import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';

// const navigation = [
//   { name: "Dashboard", href: "/", icon: "bi-layout-dashboard" },
//   { name: "Issues / Complaints", href: "/issues", icon: "bi-exclamation-triangle-fill" },
//   { name: "Map View", href: "/map", icon: "bi-geo-alt-fill" },
//   { name: "Departments", href: "/departments", icon: "bi-building-fill" },
//   { name: "Users", href: "/users", icon: "bi-people-fill" },
//   { name: "Analytics & Reports", href: "/analytics", icon: "bi-bar-chart-fill" },
//   { name: "Settings / Alerts", href: "/settings", icon: "bi-gear-fill" },
// ];

// export function Sidebar({ toggleSidebar, isCollapsed }) {
//   const location = useLocation();

//   return (
//     <div className={`sidebar-menu p-3 ${isCollapsed ? 'collapsed' : ''}`}>
//       <div className="d-flex align-items-center justify-content-between">
//         {!isCollapsed && (
//           <div className="d-flex align-items-center">
//             <h2 className="fs-6 fw-bold mb-0">Municipal</h2>
//           </div>
//         )}
//         <Button variant="ghost" className="h-8 w-8 p-0 toggle-button" onClick={toggleSidebar}>
//           {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
//         </Button>
//       </div>

//       <div className="mt-4">
//         <Nav className="flex-column">
//           {navigation.map((item) => {
//             const isActive = location.pathname === item.href;
//             return (
//               <Nav.Item key={item.name}>
//                 <Link to={item.href} className={`nav-link d-flex align-items-center ${isActive ? 'active' : ''}`}>
//                   <i className={`${item.icon} fs-5 me-2`}></i>
//                   {!isCollapsed && <span className="ms-2">{item.name}</span>}
//                 </Link>
//               </Nav.Item>
//             );
//           })}
//         </Nav>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;

// import React from 'react';
// import { Nav, Button } from 'react-bootstrap';
// import { Link, useLocation } from 'react-router-dom';
// import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';

// const navigation = [
//   { name: "Dashboard", href: "/", icon: "bi-layout-dashboard" },
//   { name: "Issues / Complaints", href: "/issues", icon: "bi-exclamation-triangle-fill" },
//   { name: "Map View", href: "/map", icon: "bi-geo-alt-fill" },
//   { name: "Departments", href: "/departments", icon: "bi-building-fill" },
//   { name: "Users", href: "/users", icon: "bi-people-fill" },
//   { name: "Analytics & Reports", href: "/analytics", icon: "bi-bar-chart-fill" },
//   { name: "Settings / Alerts", href: "/settings", icon: "bi-gear-fill" },
// ];

// export function Sidebar({ isCollapsed }) {
//   const location = useLocation();

//   return (
//     <div className={`sidebar-menu p-3 h-100 ${isCollapsed ? 'collapsed' : ''}`}>
//       <div className="d-flex align-items-center justify-content-between">
//         {!isCollapsed && (
//           <div className="d-flex align-items-center">
//             <h2 className="fs-6 fw-bold mb-0">Municipal</h2>
//           </div>
//         )}
//       </div>

//       <div className="mt-4">
//         <Nav className="flex-column">
//           {navigation.map((item) => {
//             const isActive = location.pathname === item.href;
//             return (
//               <Nav.Item key={item.name}>
//                 <Link to={item.href} className={`nav-link d-flex align-items-center ${isActive ? 'active' : ''}`}>
//                   <i className={`${item.icon} fs-5 me-2`}></i>
//                   {!isCollapsed && <span className="ms-2">{item.name}</span>}
//                 </Link>
//               </Nav.Item>
//             );
//           })}
//         </Nav>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;

// import React from 'react';
// import { Nav, Button } from 'react-bootstrap';
// import { Link, useLocation } from 'react-router-dom';
// import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';

// const navigation = [
//   { name: "Dashboard", href: "/", icon: "bi-layout-dashboard" },
//   { name: "Issues / Complaints", href: "/issues", icon: "bi-exclamation-triangle-fill" },
//   { name: "Map View", href: "/map", icon: "bi-geo-alt-fill" },
//   { name: "Departments", href: "/departments", icon: "bi-building-fill" },
//   { name: "Users", href: "/users", icon: "bi-people-fill" },
//   { name: "Analytics & Reports", href: "/analytics", icon: "bi-bar-chart-fill" },
//   { name: "Settings / Alerts", href: "/settings", icon: "bi-gear-fill" },
// ];

// export function Sidebar({ isCollapsed }) {
//   const location = useLocation();

//   return (
//     <div className={`sidebar-menu p-3 h-100 ${isCollapsed ? 'collapsed' : ''}`}>
//       <div className="d-flex align-items-center justify-content-between">
//         {!isCollapsed && (
//           <div className="d-flex align-items-center">
//             <h2 className="fs-6 fw-bold mb-0">Municipal</h2>
//           </div>
//         )}
//       </div>

//       <div className="mt-4">
//         <Nav className="flex-column">
//           {navigation.map((item) => {
//             const isActive = location.pathname === item.href;
//             return (
//               <Nav.Item key={item.name}>
//                 <Link to={item.href} className={`nav-link d-flex align-items-center ${isActive ? 'active' : ''}`}>
//                   <i className={`${item.icon} fs-5 me-2`}></i>
//                   {!isCollapsed && <span className="ms-2">{item.name}</span>}
//                 </Link>
//               </Nav.Item>
//             );
//           })}
//         </Nav>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;

// src/components/Sidebar.js

// import React from 'react';
// import { Nav } from 'react-bootstrap';
// import { Link, useLocation } from 'react-router-dom';

// const navigation = [
//   { name: "Dashboard", href: "/", icon: "bi-house-door-fill" },
//   { name: "Issues / Complaints", href: "/issues", icon: "bi-exclamation-triangle-fill" },
//   { name: "Map View", href: "/map", icon: "bi-geo-alt-fill" },
//   { name: "Departments", href: "/departments", icon: "bi-building-fill" },
//   { name: "Users", href: "/users", icon: "bi-people-fill" },
//   { name: "Analytics & Reports", href: "/analytics", icon: "bi-bar-chart-fill" },
//   { name: "Settings / Alerts", href: "/settings", icon: "bi-gear-fill" },
// ];

// export function Sidebar({ isCollapsed }) {
//   const location = useLocation();

//   return (
//     <aside className={`sidebar-menu p-3 h-100 ${isCollapsed ? 'collapsed' : ''}`}>
//       <div className="d-flex align-items-center justify-content-between mb-4">
//         {!isCollapsed && (
//           <div className="d-flex align-items-center">
//             <h2 className="fs-6 fw-bold mb-0">Municipal</h2>
//           </div>
//         )}
//       </div>

//       <Nav className="flex-column">
//         {navigation.map((item) => {
//           const isActive = location.pathname === item.href;
//           return (
//             <Nav.Item key={item.name}>
//               <Link 
//                 to={item.href} 
//                 className={`nav-link d-flex align-items-center ${isActive ? 'active' : ''} ${isCollapsed ? 'justify-content-center' : ''}`}
//                 title={isCollapsed ? item.name : ''} // Add tooltip when collapsed
//               >
//                 <i className={`${item.icon} fs-5 ${!isCollapsed ? 'me-2' : ''}`}></i>
//                 {!isCollapsed && <span>{item.name}</span>}
//               </Link>
//             </Nav.Item>
//           );
//         })}
//       </Nav>
//     </aside>
//   );
// }

// export default Sidebar;

import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft } from 'react-bootstrap-icons';

// Navigation items for the sidebar
const navigation = [
  { name: "Dashboard", href: "/", icon: "bi-house-door-fill" },
  { name: "Issues / Complaints", href: "/issues", icon: "bi-exclamation-triangle-fill" },
  { name: "Map View", href: "/map", icon: "bi-geo-alt-fill" },
  { name: "Departments", href: "/departments", icon: "bi-building-fill" },
  { name: "Analytics & Reports", href: "/analytics", icon: "bi-bar-chart-fill" },
  { name: "Settings / Alerts", href: "/settings", icon: "bi-gear-fill" },
];

/**
 * Sidebar component that can be collapsed or expanded.
 * @param {object} props - The component props.
 * @param {boolean} props.isCollapsed - Determines if the sidebar is collapsed.
 * @param {Function} props.toggleSidebar - Function to toggle the sidebar's state.
 */
export function Sidebar({ isCollapsed, toggleSidebar }) {
  const location = useLocation();

  return (
    <aside className={`sidebar-menu p-3 h-100 ${isCollapsed ? 'collapsed' : ''}`}>
      {/* Sidebar Header: Title and Close Button */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        {!isCollapsed && (
          <>
            <h4 className="m-0">Municipal Dashboard</h4>
            <Button
              variant="light"
              onClick={toggleSidebar}
              className="d-lg-none p-1" // Only visible on mobile
              style={{ lineHeight: 0 }}
            >
              <ChevronLeft size={20} />
            </Button>
          </>
        )}
      </div>

      {/* Navigation Links */}
      <Nav className="flex-column">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Nav.Item key={item.name}>
              <Link 
                to={item.href} 
                className={`nav-link d-flex align-items-center ${isActive ? 'active' : ''} ${isCollapsed ? 'justify-content-center' : ''}`}
                title={isCollapsed ? item.name : ''} // Shows item name on hover when collapsed
              >
                <i className={`${item.icon} fs-5 ${!isCollapsed ? 'me-2' : ''}`}></i>
                {!isCollapsed && <span>{item.name}</span>}
              </Link>
            </Nav.Item>
          );
        })}
      </Nav>
    </aside>
  );
}

export default Sidebar;