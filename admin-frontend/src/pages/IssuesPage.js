// import React, { useState } from 'react';
// import { Table, Dropdown, Form, InputGroup } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// const sampleIssues = [
//   { id: 'CMP-001', category: 'Pothole', location: 'Main Street & 1st Ave', date: '2024-01-15', status: 'Open', priority: 'High', department: 'Roads & Infrastructure', reporter: 'John Doe' },
//   { id: 'CMP-002', category: 'Garbage Collection', location: 'Park Avenue, Block 5', date: '2024-01-14', status: 'Assigned', priority: 'Medium', department: 'Sanitation', reporter: 'Jane Doe' },
//   { id: 'CMP-003', category: 'Streetlight', location: 'Oak Street', date: '2024-01-13', status: 'Resolved', priority: 'Low', department: 'Utilities', reporter: 'Alex Lee' },
//   { id: 'CMP-004', category: 'Traffic Signal', location: 'Downtown Plaza', date: '2024-01-12', status: 'In Progress', priority: 'Critical', department: 'Traffic Management', reporter: 'Mike Roe' },
//   { id: 'CMP-005', category: 'Water Leak', location: 'Residential Area C', date: '2024-01-11', status: 'Open', priority: 'High', department: 'Utilities', reporter: 'Sam Chen' }
// ];

// const IssuesPage = () => {
//   const [issues, setIssues] = useState(sampleIssues);
//   const navigate = useNavigate();

//   const handleAction = (action, issueId) => {
//     if (action === 'View Details') {
//       navigate(`/issue/${issueId}`);
//     } else {
//       console.log(`${action} for issue ${issueId}`);
//     }
//   };

//   return (
//     <div className="issues-page">
//       <h2 className="main-title">All Issues ({issues.length})</h2>
      
//       <div className="filter-bar d-flex justify-content-between my-4">
//         <InputGroup className="search-input-group">
//           <InputGroup.Text><i className="bi bi-search"></i></InputGroup.Text>
//           <Form.Control placeholder="Search by complaint ID, location, tags, reporter..." />
//         </InputGroup>
//         {/* Filter dropdowns */}
//       </div>

//       <Table hover responsive className="issues-table">
//         <thead>
//           <tr>
//             <th></th>
//             <th>Category</th>
//             <th>Location</th>
//             <th>Date</th>
//             <th>Status</th>
//             <th>Priority</th>
//             <th>Department</th>
//             <th>Reporter</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {issues.map(issue => (
//             <tr key={issue.id}>
//               <td><Form.Check type="checkbox" /></td>
//               <td>{issue.category}</td>
//               <td>{issue.location}</td>
//               <td>{issue.date}</td>
//               <td>
//                 <span className={`status-badge status-${issue.status.toLowerCase().replace(' ', '-')}`}>{issue.status}</span>
//               </td>
//               <td>
//                 <span className={`priority-badge priority-${issue.priority.toLowerCase()}`}>{issue.priority}</span>
//               </td>
//               <td>{issue.department}</td>
//               <td>{issue.reporter}</td>
//               <td>
//                 <Dropdown>
//                   <Dropdown.Toggle variant="light" className="action-toggle">
//                     <i className="bi bi-three-dots"></i>
//                   </Dropdown.Toggle>
//                   <Dropdown.Menu align="end">
//                     <Dropdown.Item onClick={() => handleAction('View Details', issue.id)}>
//                       <i className="bi bi-eye-fill me-2"></i> View Details
//                     </Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleAction('Edit Issue', issue.id)}>
//                       <i className="bi bi-pencil-fill me-2"></i> Edit Issue
//                     </Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleAction('Assign Department', issue.id)}>
//                       <i className="bi bi-person-badge-fill me-2"></i> Assign Department
//                     </Dropdown.Item>
//                     <Dropdown.Divider />
//                     <Dropdown.Item onClick={() => handleAction('Mark as Resolved', issue.id)}>
//                       <i className="bi bi-check-circle-fill me-2"></i> Mark as Resolved
//                     </Dropdown.Item>
//                   </Dropdown.Menu>
//                 </Dropdown>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default IssuesPage;

// import React, { useState, useEffect } from 'react';
// import { Table, Dropdown, Form, InputGroup } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
// import { db } from "../lib/firebaseconfig"; 
// import { BsCheckCircleFill, BsPencilFill, BsPersonBadgeFill, BsThreeDots, BsEyeFill } from 'react-icons/bs';

// const IssuesPage = () => {
//   const [issues, setIssues] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Create a query to listen for real-time changes, ordered by date descending
//     const q = query(collection(db, "reports"), orderBy("date", "desc"));

//     // Set up the real-time listener
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const issuesData = querySnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data(),
//         // Convert Firebase Timestamp to a readable date string
//         date: doc.data().date?.toDate().toLocaleDateString()
//       }));
//       setIssues(issuesData);
//       setLoading(false);
//     }, (error) => {
//       console.error("Error fetching real-time issues:", error);
//       setLoading(false);
//     });

//     // Clean up the listener when the component unmounts
//     return () => unsubscribe();
//   }, []);

//   const handleAction = (action, issueId) => {
//     if (action === 'View Details') {
//       navigate(`/issue/${issueId}`);
//     } else {
//       console.log(`${action} for issue ${issueId}`);
//     }
//   };

//   if (loading) {
//     return <div className="p-4 text-center">Loading issues...</div>;
//   }

//   return (
//     <div className="issues-page">
//       <h2 className="main-title">All Issues ({issues.length})</h2>
      
//       <div className="filter-bar d-flex justify-content-between my-4">
//         <InputGroup className="search-input-group">
//           <InputGroup.Text><i className="bi bi-search"></i></InputGroup.Text>
//           <Form.Control placeholder="Search by complaint ID, location, tags, reporter..." aria-label="Search" />
//         </InputGroup>
//       </div>

//       <Table hover responsive className="issues-table">
//         <thead>
//           <tr>
//             <th></th>
//             <th>Category</th>
//             <th>Location</th>
//             <th>Date</th>
//             <th>Status</th>
//             <th>Priority</th>
//             <th>Department</th>
//             <th>Reporter</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {issues.map(issue => (
//             <tr key={issue.id}>
//               <td><Form.Check type="checkbox" /></td>
//               <td>{issue.type || 'N/A'}</td>
//               <td>{issue.location || 'N/A'}</td>
//               <td>{issue.date || 'N/A'}</td>
//               <td>
//                 <span className={`status-badge status-${issue.status?.toLowerCase().replace(' ', '-') || 'na'}`}>
//                   {issue.status || 'N/A'}
//                 </span>
//               </td>
//               <td>
//                 <span className={`priority-badge priority-${issue.priority?.toLowerCase() || 'na'}`}>
//                   {issue.priority || 'N/A'}
//                 </span>
//               </td>
//               <td>{issue.department || 'N/A'}</td>
//               <td>{issue.reporter || 'N/A'}</td>
//               <td>
//                 <Dropdown>
//                   <Dropdown.Toggle variant="light" className="action-toggle">
//                     <BsThreeDots />
//                   </Dropdown.Toggle>
//                   <Dropdown.Menu align="end">
//                     <Dropdown.Item onClick={() => handleAction('View Details', issue.id)}>
//                       <BsEyeFill className="me-2" /> View Details
//                     </Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleAction('Edit Issue', issue.id)}>
//                       <BsPencilFill className="me-2" /> Edit Issue
//                     </Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleAction('Assign Department', issue.id)}>
//                       <BsPersonBadgeFill className="me-2" /> Assign Department
//                     </Dropdown.Item>
//                     <Dropdown.Divider />
//                     <Dropdown.Item onClick={() => handleAction('Mark as Resolved', issue.id)}>
//                       <BsCheckCircleFill className="me-2" /> Mark as Resolved
//                     </Dropdown.Item>
//                   </Dropdown.Menu>
//                 </Dropdown>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default IssuesPage;

// import React, { useState, useEffect, useRef } from 'react';
// import { Table, Dropdown, Form, InputGroup } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
// import { db } from "../lib/firebaseconfig"; 
// import { BsCheckCircleFill, BsPencilFill, BsPersonBadgeFill, BsThreeDots, BsEyeFill } from 'react-icons/bs';

// const IssuesPage = () => {
//   const [issues, setIssues] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const isMounted = useRef(false);

//   useEffect(() => {
//     if (!isMounted.current) {
//         isMounted.current = true;

//         const q = query(collection(db, "reports"), orderBy("date", "desc"));
//         const unsubscribe = onSnapshot(q, (querySnapshot) => {
//             const issuesData = querySnapshot.docs.map(doc => {
//                 const data = doc.data();
//                 return {
//                     id: doc.id,
//                     ...data,
//                     // Check if 'date' exists before calling toDate()
//                     date: data.date?.toDate ? data.date.toDate().toLocaleDateString() : 'N/A'
//                 };
//             });
//             setIssues(issuesData);
//             setLoading(false);
//         }, (error) => {
//             console.error("Error fetching real-time issues:", error);
//             setLoading(false);
//         });

//         return () => unsubscribe();
//     }
//   }, []);

//   const handleAction = (action, issueId) => {
//     if (action === 'View Details') {
//       navigate(`/issue/${issueId}`);
//     } else {
//       console.log(`${action} for issue ${issueId}`);
//     }
//   };

//   if (loading) {
//     return <div className="p-4 text-center">Loading issues...</div>;
//   }

//   return (
//     <div className="issues-page">
//       <h2 className="main-title">All Issues ({issues.length})</h2>
      
//       <div className="filter-bar d-flex justify-content-between my-4">
//         <InputGroup className="search-input-group">
//           <InputGroup.Text><i className="bi bi-search"></i></InputGroup.Text>
//           <Form.Control placeholder="Search by complaint ID, location, tags, reporter..." aria-label="Search" />
//         </InputGroup>
//       </div>

//       <Table hover responsive className="issues-table">
//         <thead>
//           <tr>
//             <th></th>
//             <th>Category</th>
//             <th>Location</th>
//             <th>Date</th>
//             <th>Status</th>
//             <th>Priority</th>
//             <th>Department</th>
//             <th>Reporter</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {issues.map(issue => (
//             <tr key={issue.id}>
//               <td><Form.Check type="checkbox" /></td>
//               <td>{issue.type || 'N/A'}</td>
//               <td>{issue.location || 'N/A'}</td>
//               <td>{issue.date || 'N/A'}</td>
//               <td>
//                 <span className={`status-badge status-${issue.status?.toLowerCase().replace(' ', '-') || 'na'}`}>
//                   {issue.status || 'N/A'}
//                 </span>
//               </td>
//               <td>
//                 <span className={`priority-badge priority-${issue.priority?.toLowerCase() || 'na'}`}>
//                   {issue.priority || 'N/A'}
//                 </span>
//               </td>
//               <td>{issue.department || 'N/A'}</td>
//               <td>{issue.reporter || 'N/A'}</td>
//               <td>
//                 <Dropdown>
//                   <Dropdown.Toggle variant="light" className="action-toggle">
//                     <BsThreeDots />
//                   </Dropdown.Toggle>
//                   <Dropdown.Menu align="end">
//                     <Dropdown.Item onClick={() => handleAction('View Details', issue.id)}>
//                       <BsEyeFill className="me-2" /> View Details
//                     </Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleAction('Edit Issue', issue.id)}>
//                       <BsPencilFill className="me-2" /> Edit Issue
//                     </Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleAction('Assign Department', issue.id)}>
//                       <BsPersonBadgeFill className="me-2" /> Assign Department
//                     </Dropdown.Item>
//                     <Dropdown.Divider />
//                     <Dropdown.Item onClick={() => handleAction('Mark as Resolved', issue.id)}>
//                       <BsCheckCircleFill className="me-2" /> Mark as Resolved
//                     </Dropdown.Item>
//                   </Dropdown.Menu>
//                 </Dropdown>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default IssuesPage;

// import React, { useState, useEffect, useRef } from 'react';
// import { Table, Dropdown, Form, InputGroup } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
// import { db } from "../lib/firebaseconfig"; 
// import { BsCheckCircleFill, BsPencilFill, BsPersonBadgeFill, BsThreeDots, BsEyeFill } from 'react-icons/bs';

// const IssuesPage = () => {
//   const [issues, setIssues] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const isMounted = useRef(false);

//   useEffect(() => {
//     if (!isMounted.current) {
//         isMounted.current = true;

//         const q = query(collection(db, "reports"), orderBy("date", "desc"));
//         const unsubscribe = onSnapshot(q, (querySnapshot) => {
//             const issuesData = querySnapshot.docs.map(doc => {
//                 const data = doc.data();
//                 return {
//                     id: doc.id,
//                     ...data,
//                     // Check if 'date' exists before calling toDate()
//                     date: data.date?.toDate ? data.date.toDate().toLocaleDateString() : 'N/A'
//                 };
//             });
//             setIssues(issuesData);
//             setLoading(false);
//         }, (error) => {
//             console.error("Error fetching real-time issues:", error);
//             setLoading(false);
//         });

//         return () => unsubscribe();
//     }
//   }, []);

//   const handleAction = (action, issueId) => {
//     if (action === 'View Details') {
//       navigate(`/issue/${issueId}`);
//     } else {
//       console.log(`${action} for issue ${issueId}`);
//     }
//   };

//   if (loading) {
//     return <div className="p-4 text-center">Loading issues...</div>;
//   }

//   return (
//     <div className="issues-page">
//       <h2 className="main-title">All Issues ({issues.length})</h2>
      
//       <div className="filter-bar d-flex justify-content-between my-4">
//         <InputGroup className="search-input-group">
//           <InputGroup.Text><i className="bi bi-search"></i></InputGroup.Text>
//           <Form.Control placeholder="Search by complaint ID, location, tags, reporter..." aria-label="Search" />
//         </InputGroup>
//       </div>

//       <Table hover responsive className="issues-table">
//         <thead>
//           <tr>
//             <th></th>
//             <th>Category</th>
//             <th>Location</th>
//             <th>Date</th>
//             <th>Status</th>
//             <th>Priority</th>
//             <th>Department</th>
//             <th>Reporter</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {issues.map(issue => (
//             <tr key={issue.id}>
//               <td><Form.Check type="checkbox" /></td>
//               <td>{issue.type || 'N/A'}</td>
//               <td>{issue.location || 'N/A'}</td>
//               <td>{issue.date || 'N/A'}</td>
//               <td>
//                 <span className={`status-badge status-${issue.status?.toLowerCase().replace(' ', '-') || 'na'}`}>
//                   {issue.status || 'N/A'}
//                 </span>
//               </td>
//               <td>
//                 <span className={`priority-badge priority-${issue.priority?.toLowerCase() || 'na'}`}>
//                   {issue.priority || 'N/A'}
//                 </span>
//               </td>
//               <td>{issue.department || 'N/A'}</td>
//               <td>{issue.reporter || 'N/A'}</td>
//               <td>
//                 <Dropdown>
//                   <Dropdown.Toggle variant="light" className="action-toggle">
//                     <BsThreeDots />
//                   </Dropdown.Toggle>
//                   <Dropdown.Menu align="end">
//                     <Dropdown.Item onClick={() => handleAction('View Details', issue.id)}>
//                       <BsEyeFill className="me-2" /> View Details
//                     </Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleAction('Edit Issue', issue.id)}>
//                       <BsPencilFill className="me-2" /> Edit Issue
//                     </Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleAction('Assign Department', issue.id)}>
//                       <BsPersonBadgeFill className="me-2" /> Assign Department
//                     </Dropdown.Item>
//                     <Dropdown.Divider />
//                     <Dropdown.Item onClick={() => handleAction('Mark as Resolved', issue.id)}>
//                       <BsCheckCircleFill className="me-2" /> Mark as Resolved
//                     </Dropdown.Item>
//                   </Dropdown.Menu>
//                 </Dropdown>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default IssuesPage;

// import React, { useState, useEffect, useRef } from 'react';
// import { Table, Dropdown, Form, InputGroup } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
// import { db } from "../lib/firebaseconfig"; 
// import { BsCheckCircleFill, BsPencilFill, BsPersonBadgeFill, BsThreeDots, BsEyeFill } from 'react-icons/bs';

// const IssuesPage = () => {
//   const [issues, setIssues] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const isMounted = useRef(false);

//   useEffect(() => {
//     if (!isMounted.current) {
//         isMounted.current = true;

//         const q = query(collection(db, "reports"), orderBy("date", "desc"));
//         const unsubscribe = onSnapshot(q, (querySnapshot) => {
//             const issuesData = querySnapshot.docs.map(doc => {
//                 const data = doc.data();
//                 return {
//                     id: doc.id,
//                     ...data,
//                     date: data.date?.toDate ? data.date.toDate().toLocaleDateString() : 'N/A'
//                 };
//             });
//             setIssues(issuesData);
//             setLoading(false);
//         }, (error) => {
//             console.error("Error fetching real-time issues:", error);
//             setLoading(false);
//         });

//         return () => unsubscribe();
//     }
//   }, []);

//   const handleAction = (action, issueId) => {
//     if (action === 'View Details') {
//       navigate(`/issue/${issueId}`);
//     } else {
//       console.log(`${action} for issue ${issueId}`);
//     }
//   };

//   if (loading) {
//     return <div className="p-4 text-center">Loading issues...</div>;
//   }

//   return (
//     <div className="issues-page">
//       <h2 className="main-title">All Issues ({issues.length})</h2>
      
//       <div className="filter-bar d-flex justify-content-between my-4">
//         <InputGroup className="search-input-group">
//           <InputGroup.Text><i className="bi bi-search"></i></InputGroup.Text>
//           <Form.Control placeholder="Search by complaint ID, location, tags, reporter..." aria-label="Search" />
//         </InputGroup>
//       </div>

//       <Table hover responsive className="issues-table">
//         <thead>
//           <tr>
//             <th></th>
//             <th>Category</th>
//             <th>Location</th>
//             <th>Date</th>
//             <th>Status</th>
//             <th>Priority</th>
//             <th>Department</th>
//             <th>Reporter</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {issues.map(issue => (
//             <tr key={issue.id}>
//               <td><Form.Check type="checkbox" /></td>
//               <td>{issue.type || 'N/A'}</td>
//               <td>{issue.location || 'N/A'}</td>
//               <td>{issue.date || 'N/A'}</td>
//               <td>
//                 <span className={`status-badge status-${issue.status?.toLowerCase().replace(' ', '-') || 'na'}`}>
//                   {issue.status || 'N/A'}
//                 </span>
//               </td>
//               <td>
//                 <span className={`priority-badge priority-${issue.priority?.toLowerCase() || 'na'}`}>
//                   {issue.priority || 'N/A'}
//                 </span>
//               </td>
//               <td>{issue.department || 'N/A'}</td>
//               <td>{issue.reporter || 'N/A'}</td>
//               <td>
//                 <Dropdown>
//                   <Dropdown.Toggle variant="light" className="action-toggle">
//                     <BsThreeDots />
//                   </Dropdown.Toggle>
//                   <Dropdown.Menu align="end">
//                     <Dropdown.Item onClick={() => handleAction('View Details', issue.id)}>
//                       <BsEyeFill className="me-2" /> View Details
//                     </Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleAction('Edit Issue', issue.id)}>
//                       <BsPencilFill className="me-2" /> Edit Issue
//                     </Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleAction('Assign Department', issue.id)}>
//                       <BsPersonBadgeFill className="me-2" /> Assign Department
//                     </Dropdown.Item>
//                     <Dropdown.Divider />
//                     <Dropdown.Item onClick={() => handleAction('Mark as Resolved', issue.id)}>
//                       <BsCheckCircleFill className="me-2" /> Mark as Resolved
//                     </Dropdown.Item>
//                   </Dropdown.Menu>
//                 </Dropdown>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default IssuesPage;

// import React, { useState, useEffect, useRef } from 'react';
// import { Table, Dropdown, Form, InputGroup } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
// import { db } from "../lib/firebaseconfig"; 
// import { BsCheckCircleFill, BsPencilFill, BsPersonBadgeFill, BsThreeDots, BsEyeFill } from 'react-icons/bs';

// const IssuesPage = () => {
//   const [issues, setIssues] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const isMounted = useRef(false);

//   useEffect(() => {
//     if (!isMounted.current) {
//         isMounted.current = true;

//         // Try to order by 'date' first, and if not present, fall back to 'createdAt'
//         const q = query(collection(db, "reports"), orderBy("date", "desc"));
//         const unsubscribe = onSnapshot(q, (querySnapshot) => {
//             const issuesData = querySnapshot.docs.map(doc => {
//                 const data = doc.data();
//                 return {
//                     id: doc.id,
//                     ...data,
//                     // Check for either 'date' or 'createdAt' before converting to a date string
//                     date: data.date?.toDate ? data.date.toDate().toLocaleDateString() : (data.createdAt?.toDate ? data.createdAt.toDate().toLocaleDateString() : 'N/A')
//                 };
//             });
//             setIssues(issuesData);
//             setLoading(false);
//         }, (error) => {
//             console.error("Error fetching real-time issues:", error);
//             setLoading(false);
//         });

//         return () => unsubscribe();
//     }
//   }, []);

//   const handleAction = (action, issueId) => {
//     if (action === 'View Details') {
//       navigate(`/issue/${issueId}`);
//     } else {
//       console.log(`${action} for issue ${issueId}`);
//     }
//   };

//   if (loading) {
//     return <div className="p-4 text-center">Loading issues...</div>;
//   }

//   return (
//     <div className="issues-page">
//       <h2 className="main-title">All Issues ({issues.length})</h2>
      
//       <div className="filter-bar d-flex justify-content-between my-4">
//         <InputGroup className="search-input-group">
//           <InputGroup.Text><i className="bi bi-search"></i></InputGroup.Text>
//           <Form.Control placeholder="Search by complaint ID, location, tags, reporter..." aria-label="Search" />
//         </InputGroup>
//       </div>

//       <Table hover responsive className="issues-table">
//         <thead>
//           <tr>
//             <th></th>
//             <th>Category</th>
//             <th>Location</th>
//             <th>Date</th>
//             <th>Status</th>
//             <th>Priority</th>
//             <th>Department</th>
//             <th>Reporter</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {issues.map(issue => (
//             <tr key={issue.id}>
//               <td><Form.Check type="checkbox" /></td>
//               <td>{issue.type || 'N/A'}</td>
//               <td>{issue.location || 'N/A'}</td>
//               <td>{issue.date || 'N/A'}</td>
//               <td>
//                 <span className={`status-badge status-${issue.status?.toLowerCase().replace(' ', '-') || 'na'}`}>
//                   {issue.status || 'N/A'}
//                 </span>
//               </td>
//               <td>
//                 <span className={`priority-badge priority-${issue.priority?.toLowerCase() || 'na'}`}>
//                   {issue.priority || 'N/A'}
//                 </span>
//               </td>
//               <td>{issue.department || 'N/A'}</td>
//               <td>{issue.reporter || 'N/A'}</td>
//               <td>
//                 <Dropdown>
//                   <Dropdown.Toggle variant="light" className="action-toggle">
//                     <BsThreeDots />
//                   </Dropdown.Toggle>
//                   <Dropdown.Menu align="end">
//                     <Dropdown.Item onClick={() => handleAction('View Details', issue.id)}>
//                       <BsEyeFill className="me-2" /> View Details
//                     </Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleAction('Edit Issue', issue.id)}>
//                       <BsPencilFill className="me-2" /> Edit Issue
//                     </Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleAction('Assign Department', issue.id)}>
//                       <BsPersonBadgeFill className="me-2" /> Assign Department
//                     </Dropdown.Item>
//                     <Dropdown.Divider />
//                     <Dropdown.Item onClick={() => handleAction('Mark as Resolved', issue.id)}>
//                       <BsCheckCircleFill className="me-2" /> Mark as Resolved
//                     </Dropdown.Item>
//                   </Dropdown.Menu>
//                 </Dropdown>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default IssuesPage;

// import React, { useState, useEffect, useRef } from 'react';
// import { Table, Dropdown, Form, InputGroup } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { collection, query, onSnapshot, orderBy } from "firebase/firestore"; // Added orderBy here
// import { db } from "../lib/firebaseconfig"; 
// import { BsCheckCircleFill, BsPencilFill, BsPersonBadgeFill, BsThreeDots, BsEyeFill } from 'react-icons/bs';

// const IssuesPage = () => {
//   const [issues, setIssues] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const isMounted = useRef(false);

//   useEffect(() => {
//     if (!isMounted.current) {
//         isMounted.current = true;

//         // Query for all reports. Manual sorting is safer due to mixed field names.
//         const q = query(collection(db, "reports"));
//         const unsubscribe = onSnapshot(q, (querySnapshot) => {
//             const issuesData = querySnapshot.docs.map(doc => {
//                 const data = doc.data();
//                 return {
//                     id: doc.id,
//                     ...data,
//                     // Check for either 'date' or 'createdAt' before converting to a date string
//                     date: data.date?.toDate ? data.date.toDate().toLocaleDateString() : (data.createdAt?.toDate ? data.createdAt.toDate().toLocaleDateString() : 'N/A')
//                 };
//             });

//             // Manually sort the data since Firestore can't order by two different fields
//             issuesData.sort((a, b) => {
//                 const dateA = (a.date !== 'N/A') ? new Date(a.date) : new Date(0);
//                 const dateB = (b.date !== 'N/A') ? new Date(b.date) : new Date(0);
//                 return dateB.getTime() - dateA.getTime();
//             });

//             setIssues(issuesData);
//             setLoading(false);
//         }, (error) => {
//             console.error("Error fetching real-time issues:", error);
//             setLoading(false);
//         });

//         return () => unsubscribe();
//     }
//   }, []);

//   const handleAction = (action, issueId) => {
//     if (action === 'View Details') {
//       navigate(`/issue/${issueId}`);
//     } else {
//       console.log(`${action} for issue ${issueId}`);
//     }
//   };

//   if (loading) {
//     return <div className="p-4 text-center">Loading issues...</div>;
//   }

//   return (
//     <div className="issues-page">
//       <h2 className="main-title">All Issues ({issues.length})</h2>
      
//       <div className="filter-bar d-flex justify-content-between my-4">
//         <InputGroup className="search-input-group">
//           <InputGroup.Text><i className="bi bi-search"></i></InputGroup.Text>
//           <Form.Control placeholder="Search by complaint ID, location, tags, reporter..." aria-label="Search" />
//         </InputGroup>
//       </div>

//       <Table hover responsive className="issues-table">
//         <thead>
//           <tr>
//             <th></th>
//             <th>Category</th>
//             <th>Location</th>
//             <th>Date</th>
//             <th>Status</th>
//             <th>Priority</th>
//             <th>Department</th>
//             <th>Reporter</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {issues.map(issue => (
//             <tr key={issue.id}>
//               <td><Form.Check type="checkbox" /></td>
//               <td>{issue.type || 'N/A'}</td>
//               <td>{issue.location || 'N/A'}</td>
//               <td>{issue.date || 'N/A'}</td>
//               <td>
//                 <span className={`status-badge status-${issue.status?.toLowerCase().replace(' ', '-') || 'na'}`}>
//                   {issue.status || 'N/A'}
//                 </span>
//               </td>
//               <td>
//                 <span className={`priority-badge priority-${issue.priority?.toLowerCase() || 'na'}`}>
//                   {issue.priority || 'N/A'}
//                 </span>
//               </td>
//               <td>{issue.department || 'N/A'}</td>
//               <td>{issue.reporter || 'N/A'}</td>
//               <td>
//                 <Dropdown>
//                   <Dropdown.Toggle variant="light" className="action-toggle">
//                     <BsThreeDots />
//                   </Dropdown.Toggle>
//                   <Dropdown.Menu align="end">
//                     <Dropdown.Item onClick={() => handleAction('View Details', issue.id)}>
//                       <BsEyeFill className="me-2" /> View Details
//                     </Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleAction('Edit Issue', issue.id)}>
//                       <BsPencilFill className="me-2" /> Edit Issue
//                     </Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleAction('Assign Department', issue.id)}>
//                       <BsPersonBadgeFill className="me-2" /> Assign Department
//                     </Dropdown.Item>
//                     <Dropdown.Divider />
//                     <Dropdown.Item onClick={() => handleAction('Mark as Resolved', issue.id)}>
//                       <BsCheckCircleFill className="me-2" /> Mark as Resolved
//                     </Dropdown.Item>
//                   </Dropdown.Menu>
//                 </Dropdown>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default IssuesPage;

// import React, { useState, useEffect, useRef } from 'react';
// import { Table, Dropdown, Form, InputGroup } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { collection, query, onSnapshot, orderBy } from "firebase/firestore"; 
// import { db } from "../lib/firebaseconfig"; 
// import { BsCheckCircleFill, BsPencilFill, BsPersonBadgeFill, BsThreeDots, BsEyeFill } from 'react-icons/bs';

// const IssuesPage = () => {
//   const [issues, setIssues] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const isMounted = useRef(false);

//   useEffect(() => {
//     if (!isMounted.current) {
//         isMounted.current = true;

//         const q = query(collection(db, "reports"));
//         const unsubscribe = onSnapshot(q, (querySnapshot) => {
//             const issuesData = querySnapshot.docs.map(doc => {
//                 const data = doc.data();
//                 return {
//                     id: doc.id,
//                     ...data,
//                     date: data.date?.toDate ? data.date.toDate().toLocaleDateString() : (data.createdAt?.toDate ? data.createdAt.toDate().toLocaleDateString() : 'N/A')
//                 };
//             });

//             issuesData.sort((a, b) => {
//                 const dateA = (a.date !== 'N/A') ? new Date(a.date) : new Date(0);
//                 const dateB = (b.date !== 'N/A') ? new Date(b.date) : new Date(0);
//                 return dateB.getTime() - dateA.getTime();
//             });

//             setIssues(issuesData);
//             setLoading(false);
//         }, (error) => {
//             console.error("Error fetching real-time issues:", error);
//             setLoading(false);
//         });

//         return () => unsubscribe();
//     }
//   }, []);

//   const handleAction = (action, issueId) => {
//     if (action === 'View Details') {
//       navigate(`/issue/${issueId}`);
//     } else {
//       console.log(`${action} for issue ${issueId}`);
//     }
//   };

//   if (loading) {
//     return <div className="p-4 text-center">Loading issues...</div>;
//   }

//   return (
//     <div className="issues-page">
//       <h2 className="main-title">All Issues ({issues.length})</h2>
      
//       <div className="filter-bar d-flex justify-content-between my-4">
//         <InputGroup className="search-input-group">
//           <InputGroup.Text><i className="bi bi-search"></i></InputGroup.Text>
//           <Form.Control placeholder="Search by complaint ID, location, tags, reporter..." aria-label="Search" />
//         </InputGroup>
//       </div>

//       <Table hover responsive className="issues-table">
//         <thead>
//           <tr>
//             <th></th>
//             <th>Category</th>
//             <th>Location</th>
//             <th>Date</th>
//             <th>Status</th>
//             <th>Priority</th>
//             <th>Department</th>
//             <th>Reporter</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {issues.map(issue => (
//             <tr key={issue.id}>
//               <td><Form.Check type="checkbox" /></td>
//               <td>{issue.type || 'N/A'}</td>
//               <td>{issue.location || 'N/A'}</td>
//               <td>{issue.date || 'N/A'}</td>
//               <td>
//                 <span className={`status-badge status-${issue.status?.toLowerCase().replace(' ', '-') || 'na'}`}>
//                   {issue.status || 'N/A'}
//                 </span>
//               </td>
//               <td>
//                 <span className={`priority-badge priority-${issue.priority?.toLowerCase() || 'na'}`}>
//                   {issue.priority || 'N/A'}
//                 </span>
//               </td>
//               <td>{issue.department || 'N/A'}</td>
//               <td>{issue.reporter || 'N/A'}</td>
//               <td>
//                 <Dropdown>
//                   <Dropdown.Toggle variant="light" className="action-toggle">
//                     <BsThreeDots />
//                   </Dropdown.Toggle>
//                   <Dropdown.Menu align="end">
//                     <Dropdown.Item onClick={() => handleAction('View Details', issue.id)}>
//                       <BsEyeFill className="me-2" /> View Details
//                     </Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleAction('Edit Issue', issue.id)}>
//                       <BsPencilFill className="me-2" /> Edit Issue
//                     </Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleAction('Assign Department', issue.id)}>
//                       <BsPersonBadgeFill className="me-2" /> Assign Department
//                     </Dropdown.Item>
//                     <Dropdown.Divider />
//                     <Dropdown.Item onClick={() => handleAction('Mark as Resolved', issue.id)}>
//                       <BsCheckCircleFill className="me-2" /> Mark as Resolved
//                     </Dropdown.Item>
//                   </Dropdown.Menu>
//                 </Dropdown>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default IssuesPage;

// import React, { useState, useEffect, useRef } from 'react';
// import { Table, Dropdown, Form, InputGroup } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { collection, query, onSnapshot } from "firebase/firestore";
// import { db } from "../lib/firebaseconfig";
// import { BsCheckCircleFill, BsPencilFill, BsPersonBadgeFill, BsThreeDots, BsEyeFill } from 'react-icons/bs';

// const IssuesPage = () => {
//   const [issues, setIssues] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const isMounted = useRef(false);

//   useEffect(() => {
//     if (!isMounted.current) {
//         isMounted.current = true;

//         const q = query(collection(db, "reports"));
//         const unsubscribe = onSnapshot(q, (querySnapshot) => {
//             const issuesData = querySnapshot.docs.map(doc => {
//                 const data = doc.data();
//                 return {
//                     id: doc.id,
//                     ...data,
//                     // Use a temporary field to store the converted date object
//                     dateObject: data.date?.toDate ? data.date.toDate() : (data.createdAt?.toDate ? data.createdAt.toDate() : null)
//                 };
//             });

//             // Manually sort the data by date in descending order
//             issuesData.sort((a, b) => {
//                 const dateA = a.dateObject || new Date(0);
//                 const dateB = b.dateObject || new Date(0);
//                 return dateB.getTime() - dateA.getTime();
//             });

//             setIssues(issuesData);
//             setLoading(false);
//         }, (error) => {
//             console.error("Error fetching real-time issues:", error);
//             setLoading(false);
//         });

//         // Cleanup listener on component unmount
//         return () => unsubscribe();
//     }
//   }, []);

//   const handleAction = (action, issueId) => {
//     if (action === 'View Details') {
//       navigate(`/issue/${issueId}`);
//     } else {
//       console.log(`${action} for issue ${issueId}`);
//     }
//   };

//   if (loading) {
//     return <div className="p-4 text-center">Loading issues...</div>;
//   }

//   return (
//     <div className="issues-page">
//       <h2 className="main-title">All Issues ({issues.length})</h2>
      
//       <div className="filter-bar d-flex justify-content-between my-4">
//         <InputGroup className="search-input-group">
//           <InputGroup.Text><i className="bi bi-search"></i></InputGroup.Text>
//           <Form.Control placeholder="Search by complaint ID, location, tags, reporter..." />
//         </InputGroup>
//       </div>

//       <Table hover responsive className="issues-table">
//         <thead>
//           <tr>
//             <th></th>
//             <th>Category</th>
//             <th>Location</th>
//             <th>Date</th>
//             <th>Status</th>
//             <th>Priority</th>
//             <th>Department</th>
//             <th>Reporter</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {issues.map(issue => (
//             <tr key={issue.id}>
//               <td><Form.Check type="checkbox" /></td>
//               <td>{issue.type || 'N/A'}</td>
//               <td>{issue.location || 'N/A'}</td>
//               <td>{issue.dateObject?.toLocaleDateString() || 'N/A'}</td>
//               <td>
//                 <span className={`status-badge status-${issue.status?.toLowerCase().replace(' ', '-') || 'na'}`}>
//                   {issue.status || 'N/A'}
//                 </span>
//               </td>
//               <td>
//                 <span className={`priority-badge priority-${issue.priority?.toLowerCase() || 'na'}`}>
//                   {issue.priority || 'N/A'}
//                 </span>
//               </td>
//               <td>{issue.department || 'N/A'}</td>
//               <td>{issue.reporter || 'N/A'}</td>
//               <td>
//                 <Dropdown>
//                   <Dropdown.Toggle variant="light" className="action-toggle">
//                     <i className="bi bi-three-dots"></i>
//                   </Dropdown.Toggle>
//                   <Dropdown.Menu align="end">
//                     <Dropdown.Item onClick={() => handleAction('View Details', issue.id)}>
//                       <i className="bi bi-eye-fill me-2"></i> View Details
//                     </Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleAction('Edit Issue', issue.id)}>
//                       <i className="bi bi-pencil-fill me-2"></i> Edit Issue
//                     </Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleAction('Assign Department', issue.id)}>
//                       <i className="bi bi-person-badge-fill me-2"></i> Assign Department
//                     </Dropdown.Item>
//                     <Dropdown.Divider />
//                     <Dropdown.Item onClick={() => handleAction('Mark as Resolved', issue.id)}>
//                       <i className="bi bi-check-circle-fill me-2"></i> Mark as Resolved
//                     </Dropdown.Item>
//                   </Dropdown.Menu>
//                 </Dropdown>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default IssuesPage;

// import React, { useState, useEffect, useRef } from 'react';
// import { Table, Dropdown, Form, InputGroup } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { collection, query, onSnapshot } from "firebase/firestore";
// import { db } from "../lib/firebaseconfig";
// import { BsCheckCircleFill, BsPencilFill, BsPersonBadgeFill, BsThreeDots, BsEyeFill } from 'react-icons/bs';

// const IssuesPage = () => {
//   const [issues, setIssues] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const isMounted = useRef(false);

// //   useEffect(() => {
// //     if (!isMounted.current) {
// //         isMounted.current = true;

// //         const q = query(collection(db, "reports"));
// //         const unsubscribe = onSnapshot(q, (querySnapshot) => {
// //             const issuesData = querySnapshot.docs.map(doc => {
// //                 const data = doc.data();
// //                 return {
// //                     id: doc.id,
// //                     ...data,
// //                 };
// //             });

// //             issuesData.sort((a, b) => {
// //                 const dateA = new Date(a.date || a.createdAt || '1970-01-01');
// //                 const dateB = new Date(b.date || b.createdAt || '1970-01-01');
// //                 return dateB.getTime() - dateA.getTime();
// //             });

// //             setIssues(issuesData);
// //             setLoading(false);
// //         }, (error) => {
// //             console.error("Error fetching real-time issues:", error);
// //             setLoading(false);
// //         });

// //         return () => unsubscribe();
// //     }
// //   }, []);

// // This is the updated useEffect block for IssuesPage.js

// useEffect(() => {
//     const q = query(collection(db, "reports"));
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//         try {
//             const issuesData = querySnapshot.docs.map(doc => ({
//                 id: doc.id,
//                 ...doc.data()
//             }));
            
//             // This is the line that needs to be fixed
//             setIssues(issuesData); // Changed from setReports to setIssues

//         } catch (error) {
//             console.error("Error processing documents:", error);
//         } finally {
//             setLoading(false);
//         }
//     }, (error) => {
//         console.error("Error fetching real-time reports:", error);
//         setLoading(false);
//     });

//     return () => unsubscribe();
// }, []);

//   const handleAction = (action, issueId) => {
//     if (action === 'View Details') {
//       navigate(`/issue/${issueId}`);
//     } else {
//       console.log(`${action} for issue ${issueId}`);
//     }
//   };

//   if (loading) {
//     return <div className="p-4 text-center">Loading issues...</div>;
//   }

//   return (
//     <div className="issues-page">
//       <h2 className="main-title">All Issues ({issues.length})</h2>
      
//       <div className="filter-bar d-flex justify-content-between my-4">
//         <InputGroup className="search-input-group">
//           <InputGroup.Text><i className="bi bi-search"></i></InputGroup.Text>
//           <Form.Control placeholder="Search by complaint ID, location, tags, reporter..." />
//         </InputGroup>
//       </div>

//       <Table hover responsive className="issues-table">
//         <thead>
//           <tr>
//             <th></th>
//             <th>Category</th>
//             <th>Location</th>
//             <th>Date</th>
//             <th>Status</th>
//             <th>Priority</th>
//             <th>Department</th>
//             <th>Reporter</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {issues.map(issue => (
//             <tr key={issue.id}>
//               <td><Form.Check type="checkbox" /></td>
//               <td>{issue.type || 'N/A'}</td>
//               <td>{issue.location || 'N/A'}</td>
//               {/* <td>{issue.date || 'N/A'}</td> */}
//               <td>{issue.date?.toDate()?.toLocaleDateString() || 'N/A'}</td>
//               <td>
//                 <span className={`status-badge status-${issue.status?.toLowerCase().replace(' ', '-') || 'na'}`}>
//                   {issue.status || 'N/A'}
//                 </span>
//               </td>
//               <td>
//                 <span className={`priority-badge priority-${issue.priority?.toLowerCase() || 'na'}`}>
//                   {issue.priority || 'N/A'}
//                 </span>
//               </td>
//               <td>{issue.department || 'N/A'}</td>
//               <td>{issue.reporter || 'N/A'}</td>
//               <td>
//                 <Dropdown>
//                   <Dropdown.Toggle variant="light" className="action-toggle">
//                     <i className="bi bi-three-dots"></i>
//                   </Dropdown.Toggle>
//                   <Dropdown.Menu align="end">
//                     <Dropdown.Item onClick={() => handleAction('View Details', issue.id)}>
//                       <i className="bi bi-eye-fill me-2"></i> View Details
//                     </Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleAction('Edit Issue', issue.id)}>
//                       <i className="bi bi-pencil-fill me-2"></i> Edit Issue
//                     </Dropdown.Item>
//                     <Dropdown.Item onClick={() => handleAction('Assign Department', issue.id)}>
//                       <i className="bi bi-person-badge-fill me-2"></i> Assign Department
//                     </Dropdown.Item>
//                     <Dropdown.Divider />
//                     <Dropdown.Item onClick={() => handleAction('Mark as Resolved', issue.id)}>
//                       <i className="bi bi-check-circle-fill me-2"></i> Mark as Resolved
//                     </Dropdown.Item>
//                   </Dropdown.Menu>
//                 </Dropdown>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default IssuesPage;

// import React, { useState, useEffect } from 'react';
// import { Table, Dropdown, Form, InputGroup } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// // 1. Import 'orderBy' to sort the issues
// import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
// import { db } from "../lib/firebaseconfig";

// const IssuesPage = () => {
//     const [issues, setIssues] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate();

//     useEffect(() => {
//         // 2. Modify the query to order reports by creation date, newest first
//         const q = query(collection(db, "reports"), orderBy("createdAt", "desc"));

//         const unsubscribe = onSnapshot(q, (querySnapshot) => {
//             const issuesData = querySnapshot.docs.map(doc => ({
//                 id: doc.id,
//                 ...doc.data()
//             }));
//             setIssues(issuesData);
//             setLoading(false);
//         }, (error) => {
//             console.error("Error fetching real-time reports:", error);
//             setLoading(false);
//         });

//         return () => unsubscribe();
//     }, []);

//     const handleAction = (action, issueId) => {
//         if (action === 'View Details') {
//             navigate(`/issue/${issueId}`);
//         } else {
//             console.log(`${action} for issue ${issueId}`);
//         }
//     };

//     if (loading) {
//         return <div className="p-4 text-center">Loading issues...</div>;
//     }

//     return (
//         <div className="issues-page">
//             <h2 className="main-title">All Issues ({issues.length})</h2>
            
//             <div className="filter-bar d-flex justify-content-between my-4">
//                 <InputGroup className="search-input-group">
//                     <InputGroup.Text><i className="bi bi-search"></i></InputGroup.Text>
//                     <Form.Control placeholder="Search by complaint ID, location, etc..." />
//                 </InputGroup>
//             </div>

//             <Table hover responsive className="issues-table">
//                 <thead>
//                     <tr>
//                         <th>Category</th>
//                         <th>Location</th>
//                         <th>Date & Time</th>
//                         <th>Status</th>
//                         <th>Priority</th>
//                         <th>Department</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {issues.map(issue => (
//                         <tr key={issue.id}>
//                             <td>{issue.type || 'N/A'}</td>
//                             <td>{issue.location || 'N/A'}</td>

//                             {/* 3. Corrected field name and formatting */}
//                             <td>{issue.createdAt?.toDate()?.toLocaleString() || 'N/A'}</td>
                            
//                             <td>
//                                 <span className={`status-badge status-${issue.status?.toLowerCase().replace(' ', '-') || 'na'}`}>
//                                     {issue.status || 'N/A'}
//                                 </span>
//                             </td>
//                             <td>
//                                 <span className={`priority-badge priority-${issue.priority?.toLowerCase() || 'na'}`}>
//                                     {issue.priority || 'N/A'}
//                                 </span>
//                             </td>
//                             <td>{issue.department || 'N/A'}</td>
//                             <td>
//                                 <Dropdown>
//                                     <Dropdown.Toggle variant="light" className="action-toggle">
//                                         <i className="bi bi-three-dots"></i>
//                                     </Dropdown.Toggle>
//                                     <Dropdown.Menu align="end">
//                                         <Dropdown.Item onClick={() => handleAction('View Details', issue.id)}>
//                                             <i className="bi bi-eye-fill me-2"></i> View Details
//                                         </Dropdown.Item>
//                                     </Dropdown.Menu>
//                                 </Dropdown>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>
//         </div>
//     );
// };

// export default IssuesPage;

// import React, { useState, useEffect } from 'react';
// import { Table, Dropdown } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
// import { db } from "../lib/firebaseconfig";

// // 1. Accept searchTerm as a prop
// const IssuesPage = ({ searchTerm }) => {
//     const [issues, setIssues] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const q = query(collection(db, "reports"), orderBy("createdAt", "desc"));
//         const unsubscribe = onSnapshot(q, (querySnapshot) => {
//             const issuesData = querySnapshot.docs.map(doc => ({
//                 id: doc.id,
//                 ...doc.data()
//             }));
//             setIssues(issuesData);
//             setLoading(false);
//         });
//         return () => unsubscribe();
//     }, []);
    
//     // 2. Filter issues based on the search term before rendering
//     const filteredIssues = issues.filter(issue => {
//         const searchLower = searchTerm.toLowerCase();
        
//         return (
//             issue.id.toLowerCase().includes(searchLower) ||
//             (issue.type && issue.type.toLowerCase().includes(searchLower)) ||
//             (issue.location && issue.location.toLowerCase().includes(searchLower)) ||
//             (issue.status && issue.status.toLowerCase().includes(searchLower)) ||
//             (issue.department && issue.department.toLowerCase().includes(searchLower))
//         );
//     });

//     const handleAction = (action, issueId) => {
//         if (action === 'View Details') {
//             navigate(`/issue/${issueId}`);
//         }
//     };

//     if (loading) {
//         return <div className="p-4 text-center">Loading issues...</div>;
//     }

//     return (
//         <div className="issues-page">
//             <h2 className="main-title">All Issues ({filteredIssues.length})</h2>
            
//             <Table hover responsive className="issues-table mt-4">
//                 <thead>
//                     <tr>
//                         <th>Category</th>
//                         <th>Location</th>
//                         <th>Date & Time</th>
//                         <th>Status</th>
//                         <th>Department</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {/* 3. Map over the filtered list */}
//                     {filteredIssues.map(issue => (
//                         <tr key={issue.id}>
//                             <td>{issue.type || 'N/A'}</td>
//                             <td>{issue.location || 'N/A'}</td>
//                             <td>{issue.createdAt?.toDate()?.toLocaleString() || 'N/A'}</td>
//                             <td>
//                                 <span className={`status-badge status-${issue.status?.toLowerCase().replace(' ', '-') || 'na'}`}>
//                                     {issue.status || 'N/A'}
//                                 </span>
//                             </td>
//                             <td>{issue.department || 'N/A'}</td>
//                             <td>
//                                 <Dropdown>
//                                     <Dropdown.Toggle variant="light" className="action-toggle">
//                                         <i className="bi bi-three-dots"></i>
//                                     </Dropdown.Toggle>
//                                     <Dropdown.Menu align="end">
//                                         <Dropdown.Item onClick={() => handleAction('View Details', issue.id)}>
//                                             <i className="bi bi-eye-fill me-2"></i> View Details
//                                         </Dropdown.Item>
//                                     </Dropdown.Menu>
//                                 </Dropdown>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>
//         </div>
//     );
// };

// export default IssuesPage;

// import React, { useState, useEffect } from 'react';
// import { Table, Dropdown } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
// import { db } from "../lib/firebaseconfig";

// const IssuesPage = ({ searchTerm }) => {
//     const [issues, setIssues] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const q = query(collection(db, "reports"), orderBy("createdAt", "desc"));
//         const unsubscribe = onSnapshot(q, (querySnapshot) => {
//             const issuesData = querySnapshot.docs.map(doc => ({
//                 id: doc.id,
//                 ...doc.data()
//             }));
//             setIssues(issuesData);
//             setLoading(false);
//         });
//         return () => unsubscribe();
//     }, []);
    
//     const filteredIssues = issues.filter(issue => {
//         const searchLower = searchTerm.toLowerCase();
        
//         return (
//             issue.id.toLowerCase().includes(searchLower) ||
//             (issue.type && issue.type.toLowerCase().includes(searchLower)) ||
//             (issue.location && issue.location.toLowerCase().includes(searchLower)) ||
//             (issue.status && issue.status.toLowerCase().includes(searchLower)) ||
//             // 1. CORRECTED FIELD NAME IN SEARCH FILTER
//             (issue.assignedDepartment && issue.assignedDepartment.toLowerCase().includes(searchLower))
//         );
//     });

//     const handleAction = (action, issueId) => {
//         if (action === 'View Details') {
//             navigate(`/issue/${issueId}`);
//         }
//     };

//     if (loading) {
//         return <div className="p-4 text-center">Loading issues...</div>;
//     }

//     return (
//         <div className="issues-page">
//             <h2 className="main-title">All Issues ({filteredIssues.length})</h2>
            
//             <Table hover responsive className="issues-table mt-4">
//                 <thead>
//                     <tr>
//                         <th>Category</th>
//                         <th>Location</th>
//                         <th>Date & Time</th>
//                         <th>Status</th>
//                         <th>Department</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {filteredIssues.map(issue => (
//                         <tr key={issue.id}>
//                             <td>{issue.type || 'N/A'}</td>
//                             <td>{issue.location || 'N/A'}</td>
//                             <td>{issue.createdAt?.toDate()?.toLocaleString() || 'N/A'}</td>
//                             <td>
//                                 <span className={`status-badge status-${issue.status?.toLowerCase().replace(' ', '-') || 'na'}`}>
//                                     {issue.status || 'N/A'}
//                                 </span>
//                             </td>
//                             {/* 2. CORRECTED FIELD NAME FOR DISPLAY */}
//                             <td>{issue.assignedDepartment || 'N/A'}</td>
//                             <td>
//                                 <Dropdown>
//                                     <Dropdown.Toggle variant="light" className="action-toggle">
//                                         <i className="bi bi-three-dots"></i>
//                                     </Dropdown.Toggle>
//                                     <Dropdown.Menu align="end">
//                                         <Dropdown.Item onClick={() => handleAction('View Details', issue.id)}>
//                                             <i className="bi bi-eye-fill me-2"></i> View Details
//                                         </Dropdown.Item>
//                                     </Dropdown.Menu>
//                                 </Dropdown>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>
//         </div>
//     );
// };

// export default IssuesPage;

import React, { useState, useEffect } from 'react';
import { Table, Dropdown } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../lib/firebaseconfig";

const IssuesPage = ({ searchTerm }) => {
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    
    // Get location object to access URL query string
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const departmentFilter = queryParams.get('department');

    useEffect(() => {
        const q = query(collection(db, "reports"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const issuesData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setIssues(issuesData);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);
    
    // Apply the department filter first (if it exists)
    const filteredByDepartment = departmentFilter
        ? issues.filter(issue => issue.assignedDepartment === departmentFilter)
        : issues;

    // Then, apply the search term filter to the result
    const filteredIssues = filteredByDepartment.filter(issue => {
        const searchLower = searchTerm.toLowerCase();
        
        return (
            issue.id.toLowerCase().includes(searchLower) ||
            (issue.type && issue.type.toLowerCase().includes(searchLower)) ||
            (issue.location && issue.location.toLowerCase().includes(searchLower)) ||
            (issue.status && issue.status.toLowerCase().includes(searchLower)) ||
            (issue.assignedDepartment && issue.assignedDepartment.toLowerCase().includes(searchLower))
        );
    });

    const handleAction = (action, issueId) => {
        if (action === 'View Details') {
            navigate(`/issue/${issueId}`);
        }
    };

    if (loading) {
        return <div className="p-4 text-center">Loading issues...</div>;
    }

    return (
        <div className="issues-page">
            <h2 className="main-title">
                {departmentFilter ? `Issues for ${departmentFilter}` : 'All Issues'} 
                ({filteredIssues.length})
            </h2>
            
            <Table hover responsive className="issues-table mt-4">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Location</th>
                        <th>Date & Time</th>
                        <th>Status</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredIssues.map(issue => (
                        <tr key={issue.id}>
                            <td>{issue.type || 'N/A'}</td>
                            <td>{issue.location || 'N/A'}</td>
                            <td>{issue.createdAt?.toDate()?.toLocaleString() || 'N/A'}</td>
                            <td>
                                <span className={`status-badge status-${issue.status?.toLowerCase().replace(' ', '-') || 'na'}`}>
                                    {issue.status || 'N/A'}
                                </span>
                            </td>
                            <td>{issue.assignedDepartment || 'N/A'}</td>
                            <td>
                                <Dropdown>
                                    <Dropdown.Toggle variant="light" className="action-toggle">
                                        <i className="bi bi-three-dots"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu align="end">
                                        <Dropdown.Item onClick={() => handleAction('View Details', issue.id)}>
                                            <i className="bi bi-eye-fill me-2"></i> View Details
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default IssuesPage;