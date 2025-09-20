// // src/components/MainLayout.js

// import React, { useState } from 'react';
// import { Container, Button } from 'react-bootstrap';
// import Sidebar from './Sidebar'; // Import the new Sidebar component
// import DashboardPage from '../pages/DashboardPage';
// import IssuesPage from '../pages/IssuesPage';
// // import other pages here
// import { Routes, Route } from 'react-router-dom';

// const MainLayout = () => {
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarCollapsed(!sidebarCollapsed);
//   };

//   return (
//     <div className="d-flex" id="wrapper">
//       <div className={`sidebar-wrapper bg-dark ${sidebarCollapsed ? 'toggled' : ''}`}>
//         <Sidebar />
//       </div>
      
//       <div id="page-content-wrapper" className="flex-grow-1">
//         <Button onClick={toggleSidebar} className="m-3 d-md-none">
//           Toggle Sidebar
//         </Button>
//         <Container fluid>
//           <Routes>
//             <Route path="/dashboard" element={<DashboardPage />} />
//             <Route path="/issues" element={<IssuesPage />} />
//             {/* Add more routes for other pages */}
//           </Routes>
//         </Container>
//       </div>
//     </div>
//   );
// };

// export default MainLayout;

// src/components/MainLayout.js

import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import DashboardPage from '../pages/DashboardPage';
import IssuesPage from '../pages/IssuesPage';
import IssueDetailsPage from '../pages/IssueDetailsPage';
import { FaBars } from 'react-icons/fa'; // Import the hamburger icon

const MainLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="d-flex vw-100 vh-100">
      {/* Sidebar Component */}
      <div className={`sidebar-container ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <Sidebar toggleSidebar={toggleSidebar} isCollapsed={sidebarCollapsed} />
      </div>

      {/* Main Content Area */}
      <div className="main-content-container flex-grow-1 overflow-auto">
        {/* Toggle button for mobile */}
        <div className="d-lg-none p-3">
          <Button onClick={toggleSidebar} className="toggle-button">
            <FaBars />
          </Button>
        </div>

        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/issues" element={<IssuesPage />} />
          <Route path="/issue/:id" element={<IssueDetailsPage />} />
          {/* Add more routes here */}
        </Routes>
      </div>
    </div>
  );
};

export default MainLayout;