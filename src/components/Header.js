// import React from 'react';
// import { Button } from 'react-bootstrap';
// import { ChevronLeft } from 'react-bootstrap-icons';
// import { Navbar, Form, FormControl, Dropdown } from 'react-bootstrap';

// const Header = () => {
//   return (
//     <Navbar className="header-bar p-3 shadow-sm">
//         <Button 
//         variant="ghost" 
//         className="d-lg-none"
//         onClick={toggleSidebar}
//       >
//         <ChevronLeft size={24} />
//       </Button>
//       <div className="search-bar flex-grow-1">
//         <Form className="d-flex">
//           <FormControl
//             type="search"
//             placeholder="Search by complaint ID, location, tags, reporter..."
//             className="me-2 search-input"
//             aria-label="Search"
//           />
//         </Form>
//       </div>
//       <div className="header-icons d-flex align-items-center ms-3">
//         <div className="notification-icon position-relative me-3">
//           <i className="bi bi-bell-fill"></i>
//           <span className="notification-badge">2</span>
//         </div>
//         <Dropdown>
//           <Dropdown.Toggle variant="light" id="dropdown-basic" className="user-profile-dropdown d-flex align-items-center">
//             <i className="bi bi-person-circle user-avatar me-2"></i>
//             Admin User
//           </Dropdown.Toggle>
//           <Dropdown.Menu align="end">
//             <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
//             <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
//             <Dropdown.Divider />
//             <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>
//       </div>
//     </Navbar>
//   );
// };

// export default Header;


// import React from 'react';
// import { Button } from 'react-bootstrap';
// import { ChevronLeft } from 'react-bootstrap-icons';
// import { Navbar, Form, FormControl, Dropdown } from 'react-bootstrap';

// const Header = ({ toggleSidebar }) => {
//   return (
//     <Navbar className="header-bar p-3 shadow-sm bg-light">
//       <Button 
//         variant="ghost" 
//         className="d-lg-none"
//         onClick={toggleSidebar}
//       >
//         <ChevronLeft size={24} />
//       </Button>
//       <div className="search-bar flex-grow-1">
//         <Form className="d-flex">
//           <FormControl
//             type="search"
//             placeholder="Search by complaint ID, location, tags, reporter..."
//             className="me-2 search-input"
//             aria-label="Search"
//           />
//         </Form>
//       </div>
//       <div className="header-icons d-flex align-items-center ms-3">
//         <div className="notification-icon position-relative me-3">
//           <i className="bi bi-bell-fill"></i>
//           <span className="notification-badge">2</span>
//         </div>
//         <Dropdown>
//           <Dropdown.Toggle variant="light" id="dropdown-basic" className="user-profile-dropdown d-flex align-items-center">
//             <i className="bi bi-person-circle user-avatar me-2"></i>
//             Admin User
//           </Dropdown.Toggle>
//           <Dropdown.Menu align="end">
//             <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
//             <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
//             <Dropdown.Divider />
//             <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>
//       </div>
//     </Navbar>
//   );
// };

// export default Header;

// import React from 'react';
// import { Button } from 'react-bootstrap';
// import { ChevronLeft } from 'react-bootstrap-icons';
// import { Navbar, Form, FormControl, Dropdown } from 'react-bootstrap';

// const Header = ({ toggleSidebar }) => {
//   return (
//     <Navbar className="header-bar p-3 shadow-sm bg-light">
//       <Button 
//         variant="ghost" 
//         className="d-lg-none"
//         onClick={toggleSidebar}
//       >
//         <ChevronLeft size={24} />
//       </Button>
//       <div className="search-bar flex-grow-1">
//         <Form className="d-flex">
//           <FormControl
//             type="search"
//             placeholder="Search by complaint ID, location, tags, reporter..."
//             className="me-2 search-input"
//             aria-label="Search"
//           />
//         </Form>
//       </div>
//       <div className="header-icons d-flex align-items-center ms-3">
//         <div className="notification-icon position-relative me-3">
//           <i className="bi bi-bell-fill"></i>
//           <span className="notification-badge">2</span>
//         </div>
//         <Dropdown>
//           <Dropdown.Toggle variant="light" id="dropdown-basic" className="user-profile-dropdown d-flex align-items-center">
//             <i className="bi bi-person-circle user-avatar me-2"></i>
//             Admin User
//           </Dropdown.Toggle>
//           <Dropdown.Menu align="end">
//             <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
//             <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
//             <Dropdown.Divider />
//             <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>
//       </div>
//     </Navbar>
//   );
// };

// export default Header;

// src/components/Header.js

// import React from 'react';
// import { Button, Navbar, Form, FormControl, Dropdown } from 'react-bootstrap';
// import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';

// // Accept `isSidebarOpen` prop to conditionally render the icon
// const Header = ({ toggleSidebar, isSidebarOpen, newIssueCount, onNotificationClick }) => {
//   return (
//     <Navbar className="header-bar p-3 shadow-sm bg-light">
//       {/* This button is only visible on screens smaller than lg (992px) */}
//       <Button 
//         variant="ghost" 
//         className="d-lg-none me-2" // Added margin for spacing
//         onClick={toggleSidebar}
//       >
//         {/* Change icon based on sidebar state */}
//         {isSidebarOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
//       </Button>

//       <div className="search-bar flex-grow-1">
//         <Form className="d-flex">
//           <FormControl
//             type="search"
//             placeholder="Search by complaint ID, location, tags, reporter..."
//             className="me-2 search-input"
//             aria-label="Search"
//           />
//         </Form>
//       </div>

//       {/* <div className="header-icons d-flex align-items-center ms-3">
//         <div className="notification-icon position-relative me-3">
//           <i className="bi bi-bell-fill"></i>
//           <span className="notification-badge">2</span>
//         </div> */}
//         {/* <div className="header-icons d-flex align-items-center ms-3">
//         <div className="notification-icon position-relative me-3">
//           <i className="bi bi-bell-fill"></i>
          
//           {/* 2. Conditionally render the badge with the live count */}
//           {/* {newIssueCount > 0 && (
//             <span className="notification-badge">{newIssueCount}</span>
//           )}

//         </div> */} 

//         <div className="header-icons d-flex align-items-center ms-3">
//         {/* 2. Make the notification icon a clickable button */}
//         <Button 
//           variant="ghost" 
//           onClick={onNotificationClick} 
//           className="notification-icon position-relative me-3 border-0 p-0"
//         >
//           <i className="bi bi-bell-fill"></i>
//           {newIssueCount > 0 && (
//             <span className="notification-badge">{newIssueCount}</span>
//           )}
//         </Button>

//         <Dropdown>
//           <Dropdown.Toggle variant="light" id="dropdown-basic" className="user-profile-dropdown d-flex align-items-center">
//             <i className="bi bi-person-circle user-avatar me-2"></i>
//             Admin User
//           </Dropdown.Toggle>
//           <Dropdown.Menu align="end">
//             <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
//             <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
//             <Dropdown.Divider />
//             <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>
//       </div>
//     </Navbar>
//   );
// };

// export default Header;

// import React from 'react';
// import { Button, Navbar, Form, FormControl, Dropdown } from 'react-bootstrap';
// import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
// import { Link } from 'react-router-dom';

// // 1. Accept searchTerm and setSearchTerm as props
// const Header = ({ 
//   toggleSidebar, 
//   isSidebarOpen, 
//   newIssueCount, 
//   onNotificationClick, 
//   searchTerm, 
//   setSearchTerm 
// }) => {
//   return (
//     <Navbar className="header-bar p-3 shadow-sm bg-light">
//       <Button 
//         variant="ghost" 
//         className="d-lg-none me-2"
//         onClick={toggleSidebar}
//       >
//         {isSidebarOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
//       </Button>

//       <div className="search-bar flex-grow-1">
//         <Form className="d-flex">
//           <FormControl
//             type="search"
//             placeholder="Search by ID, category, location, status..."
//             className="me-2 search-input"
//             aria-label="Search"
//             // 2. Connect the input to the state from App.js
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </Form>
//       </div>

//       <div className="header-icons d-flex align-items-center ms-3">
//         <Button 
//           variant="ghost" 
//           onClick={onNotificationClick} 
//           className="notification-icon position-relative me-3 border-0 p-0"
//         >
//           <i className="bi bi-bell-fill"></i>
//           {newIssueCount > 0 && (
//             <span className="notification-badge">{newIssueCount}</span>
//           )}
//         </Button>
        
//         <Dropdown>
//           <Dropdown.Toggle variant="light" id="dropdown-basic" className="user-profile-dropdown d-flex align-items-center">
//             <i className="bi bi-person-circle user-avatar me-2"></i>
//             Admin User
//           </Dropdown.Toggle>
//           {/* <Dropdown.Menu align="end">
//             <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
//             <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
//             <Dropdown.Divider />
//             <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
//           </Dropdown.Menu> */}
//           <Dropdown.Menu align="end">
//             {/* 👇 2. Update these links */}
//             <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
//             <Dropdown.Item as={Link} to="/settings">Settings</Dropdown.Item>
//             <Dropdown.Divider />
//             <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>
//       </div>
//     </Navbar>
//   );
// };

// export default Header;

import React from 'react';
import { Button, Navbar, Form, FormControl, Dropdown } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Header = ({ 
  toggleSidebar, 
  isSidebarOpen, 
  newIssueCount, 
  onNotificationClick, 
  searchTerm, 
  setSearchTerm 
}) => {
  return (
    <Navbar className="header-bar p-3 shadow-sm bg-light">
      <Button 
        variant="ghost" 
        className="d-lg-none me-2"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
      </Button>

      <div className="search-bar flex-grow-1">
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search by ID, category, location, status..."
            className="me-2 search-input"
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Form>
      </div>

      <div className="header-icons d-flex align-items-center ms-3">
        <Button 
          variant="ghost" 
          onClick={onNotificationClick} 
          className="notification-icon position-relative me-3 border-0 p-0"
        >
          <i className="bi bi-bell-fill"></i>
          {newIssueCount > 0 && (
            <span className="notification-badge">{newIssueCount}</span>
          )}
        </Button>
        
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic" className="user-profile-dropdown d-flex align-items-center">
            <i className="bi bi-person-circle user-avatar me-2"></i>
            Admin User
          </Dropdown.Toggle>
          <Dropdown.Menu align="end">
            <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
            <Dropdown.Item as={Link} to="/settings">Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Navbar>
  );
};

export default Header;