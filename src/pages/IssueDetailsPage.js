// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { Card, Row, Col, Dropdown, Button, Form } from 'react-bootstrap';
// import { FaDownload, FaPencilAlt, FaComment, FaShareAlt, FaExclamationCircle, FaTimesCircle } from 'react-icons/fa';

// // Sample data for a single issue
// const issueData = {
//   id: 'CMP-001',
//   title: 'Large pothole causing traffic issues',
//   description: "There is a large pothole on Main Street near the intersection with 1st Avenue. It's causing vehicles to swerve and creating a safety hazard. The pothole appears to be about 3 feet wide and 6 inches deep.",
//   category: 'Pothole',
//   tags: ['traffic-hazard', 'main-street', 'urgent-repair'],
//   location: 'Main Street & 1st Ave, Ward 5',
//   status: 'Open',
//   priority: 'High',
//   media: {
//     photo: 'https://i.imgur.com/B9B1v2i.jpg', // Placeholder image
//     audio: {
//       url: '#',
//       transcription: "This is a voice report about the pothole on Main Street. It's really dangerous and needs immediate attention."
//     }
//   },
//   assignment: {
//     department: 'Roads & Infrastructure',
//     assignedTo: 'Mike Wilson'
//   },
//   reporter: {
//     name: 'John Doe',
//     contact: 'johndoe@example.com'
//   },
//   timeline: [
//     { type: 'Reported', by: 'John Doe', date: '15/01/2024 at 16:00:00' },
//     { type: 'Acknowledged', by: 'System', date: '15/01/2024 at 16:15:00' },
//   ]
// };

// const IssueDetailsPage = () => {
//   const { id } = useParams();
  
//   if (id !== 'CMP-001') {
//     return <div className="p-4">Issue not found.</div>;
//   }
  
//   return (
//     <div className="issue-details-page p-4">
//       <Link to="/issues" className="back-link mb-3 d-inline-block">
//         <i className="bi bi-arrow-left me-2"></i> Back to Issues
//       </Link>
      
//       <h2 className="issue-id">{issueData.id}</h2>
//       <p className="issue-title">{issueData.title}</p>
      
//       <Row className="mt-4 g-4">
//         <Col md={8}>
//           <Card className="detail-card mb-4">
//             <Card.Body>
//               <h5>Complaint Details</h5>
//               <div className="mb-3">
//                 <h6 className="detail-label">Description</h6>
//                 <p className="detail-text">{issueData.description}</p>
//               </div>
//               <div className="d-flex mb-3">
//                 <div className="me-4">
//                   <h6 className="detail-label">Category</h6>
//                   <span className="badge-category">{issueData.category}</span>
//                 </div>
//                 <div>
//                   <h6 className="detail-label">Tags</h6>
//                   <div className="d-flex flex-wrap">
//                     {issueData.tags.map(tag => (
//                       <span key={tag} className="badge-tag me-2 mb-1">{tag}</span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <div className="location-info">
//                 <h6 className="detail-label">Location</h6>
//                 <p><i className="bi bi-geo-alt-fill me-1"></i> {issueData.location}</p>
//               </div>
//             </Card.Body>
//           </Card>
          
//           <Card className="detail-card mb-4">
//             <Card.Body>
//               <h5><i className="bi bi-image me-2"></i>Media & Evidence</h5>
//               {issueData.media.photo && (
//                 <div className="media-container mb-3">
//                   <div className="media-header d-flex justify-content-between align-items-center mb-2">
//                     <span className="media-type"><i className="bi bi-image-fill me-1"></i> Photo</span>
//                     <a href={issueData.media.photo} download><FaDownload /></a>
//                   </div>
//                   <img src={issueData.media.photo} alt="Pothole" className="img-fluid rounded" />
//                 </div>
//               )}
//               {issueData.media.audio && (
//                 <div className="media-container mt-4">
//                   <div className="media-header d-flex justify-content-between align-items-center mb-2">
//                     <span className="media-type"><i className="bi bi-mic-fill me-1"></i> Audio (0:45)</span>
//                     <div>
//                       <i className="bi bi-play-fill me-2"></i>
//                       <a href={issueData.media.audio.url} download><FaDownload /></a>
//                     </div>
//                   </div>
//                   <Card className="transcription-card">
//                     <Card.Body>
//                       <h6 className="mb-2">Audio Transcription:</h6>
//                       <p className="mb-0">"{issueData.media.audio.transcription}"</p>
//                     </Card.Body>
//                   </Card>
//                 </div>
//               )}
//             </Card.Body>
//           </Card>
          
//           <Card className="detail-card mb-4">
//             <Card.Body>
//               <h5><i className="bi bi-clock me-2"></i>Timeline</h5>
//               <ul className="timeline-list">
//                 {issueData.timeline.map((event, index) => (
//                   <li key={index} className="timeline-item d-flex mb-3">
//                     <div className="timeline-icon me-3">
//                       <i className="bi bi-exclamation-triangle-fill"></i>
//                     </div>
//                     <div className="timeline-content">
//                       <h6 className="mb-0">{event.type}</h6>
//                       <p className="text-muted mb-0">Complaint submitted by citizen</p>
//                       <small className="text-muted"><i className="bi bi-person-fill me-1"></i>{event.by} | {event.date}</small>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </Card.Body>
//           </Card>
//         </Col>
        
//         <Col md={4}>
//           <div className="right-sidebar">
//             <Card className="sidebar-card status-card mb-4">
//               <Card.Body>
//                 <h5>Status & Priority</h5>
//                 <div className="d-flex justify-content-between align-items-center mb-3">
//                   <span className="sidebar-label">Status:</span>
//                   <span className={`status-badge status-${issueData.status.toLowerCase()}`}>{issueData.status}</span>
//                 </div>
//                 <div className="d-flex justify-content-between align-items-center mb-4">
//                   <span className="sidebar-label">Priority:</span>
//                   <span className={`priority-badge priority-${issueData.priority.toLowerCase()}`}>{issueData.priority}</span>
//                 </div>
//                 <Form>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Update Status</Form.Label>
//                     <Form.Select>
//                       <option>Open</option>
//                       <option>Assigned</option>
//                       <option>In Progress</option>
//                       <option>Resolved</option>
//                     </Form.Select>
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Update Priority</Form.Label>
//                     <Form.Select>
//                       <option>High</option>
//                       <option>Critical</option>
//                       <option>Medium</option>
//                       <option>Low</option>
//                     </Form.Select>
//                   </Form.Group>
//                 </Form>
//               </Card.Body>
//             </Card>
            
//             <Card className="sidebar-card mb-4">
//               <Card.Body>
//                 <h5>Assignment</h5>
//                 <div className="d-flex align-items-center mb-2">
//                   <i className="bi bi-building-fill me-2"></i>
//                   <Form.Select className="w-auto">
//                     <option>{issueData.assignment.department}</option>
//                   </Form.Select>
//                 </div>
//                 <div className="d-flex align-items-center">
//                   <i className="bi bi-person-fill me-2"></i>
//                   <span>{issueData.assignment.assignedTo}</span>
//                 </div>
//               </Card.Body>
//             </Card>
            
//             <Card className="sidebar-card mb-4">
//               <Card.Body>
//                 <h5>Reporter Information</h5>
//                 <div className="d-flex align-items-center mb-2">
//                   <i className="bi bi-person-fill me-2"></i>
//                   <span>{issueData.reporter.name}</span>
//                 </div>
//                 <div className="d-flex align-items-center">
//                   <i className="bi bi-envelope-fill me-2"></i>
//                   <span>{issueData.reporter.contact}</span>
//                 </div>
//               </Card.Body>
//             </Card>
            
//             <Card className="sidebar-card actions-card mb-4">
//               <Card.Body>
//                 <h5>Actions</h5>
//                 <div className="d-grid gap-2">
//                   <Button variant="success"><i className="bi bi-check-circle-fill me-2"></i> Mark as Resolved</Button>
//                   <Button variant="outline-secondary"><FaPencilAlt className="me-2" /> Edit Complaint</Button>
//                   <Button variant="outline-secondary"><FaComment className="me-2" /> Add Comment</Button>
//                   <Button variant="outline-secondary"><FaShareAlt className="me-2" /> Share with Team</Button>
//                   <hr />
//                   <Button variant="outline-danger"><FaExclamationCircle className="me-2" /> Escalate Issue</Button>
//                   <Button variant="outline-danger"><FaTimesCircle className="me-2" /> Close Complaint</Button>
//                 </div>
//               </Card.Body>
//             </Card>
//           </div>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default IssueDetailsPage;

// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { Card, Row, Col, Dropdown, Button, Form } from 'react-bootstrap';
// import { FaDownload, FaPencilAlt, FaComment, FaShareAlt, FaExclamationCircle, FaTimesCircle } from 'react-icons/fa';
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../lib/firebaseconfig";

// const IssueDetailsPage = () => {
//     const { id } = useParams();
//     const [issue, setIssue] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchIssueDetails = async () => {
//             if (!id) {
//                 setLoading(false);
//                 return;
//             }
            
//             try {
//                 const docRef = doc(db, "reports", id);
//                 const docSnap = await getDoc(docRef);

//                 if (docSnap.exists()) {
//                     const issueData = docSnap.data();
                    
//                     // Convert Firestore Timestamps to a readable string
//                     if (issueData.date && typeof issueData.date.toDate === 'function') {
//                         issueData.date = issueData.date.toDate().toLocaleDateString();
//                     }
//                     if (issueData.createdAt && typeof issueData.createdAt.toDate === 'function') {
//                         issueData.createdAt = issueData.createdAt.toDate().toLocaleDateString();
//                     }
//                     if (issueData.timeline) {
//                         issueData.timeline = issueData.timeline.map(event => {
//                             if (event.date && typeof event.date.toDate === 'function') {
//                                 return {
//                                     ...event,
//                                     date: event.date.toDate().toLocaleString()
//                                 };
//                             }
//                             return event;
//                         });
//                     }

//                     setIssue(issueData);
//                 } else {
//                     console.log("No such document!");
//                     setIssue(null);
//                 }
//             } catch (error) {
//                 console.error("Error fetching document:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchIssueDetails();
//     }, [id]); // The effect re-runs when the ID in the URL changes

//     if (loading) {
//         return <div className="p-4 text-center">Loading issue details...</div>;
//     }

//     if (!issue) {
//         return <div className="p-4 text-center">Issue not found.</div>;
//     }

//     return (
//         <div className="issue-details-page p-4">
//             <Link to="/issues" className="back-link mb-3 d-inline-block">
//                 <i className="bi bi-arrow-left me-2"></i> Back to Issues
//             </Link>
            
//             <h2 className="issue-id">{id}</h2>
//             <p className="issue-title">{issue.title || 'N/A'}</p>
            
//             <Row className="mt-4 g-4">
//                 <Col md={8}>
//                     <Card className="detail-card mb-4">
//                         <Card.Body>
//                             <h5>Complaint Details</h5>
//                             <div className="mb-3">
//                                 <h6 className="detail-label">Description</h6>
//                                 <p className="detail-text">{issue.description || 'N/A'}</p>
//                             </div>
//                             <div className="d-flex mb-3">
//                                 <div className="me-4">
//                                     <h6 className="detail-label">Category</h6>
//                                     <span className="badge-category">{issue.category || 'N/A'}</span>
//                                 </div>
//                                 <div>
//                                     <h6 className="detail-label">Tags</h6>
//                                     <div className="d-flex flex-wrap">
//                                         {issue.tags && issue.tags.length > 0 ? (
//                                             issue.tags.map((tag, index) => (
//                                                 <span key={index} className="badge-tag me-2 mb-1">{tag}</span>
//                                             ))
//                                         ) : (
//                                             <span className="text-muted">No tags</span>
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="location-info">
//                                 <h6 className="detail-label">Location</h6>
//                                 <p><i className="bi bi-geo-alt-fill me-1"></i> {issue.location || 'N/A'}</p>
//                             </div>
//                         </Card.Body>
//                     </Card>
                    
//                     <Card className="detail-card mb-4">
//                         <Card.Body>
//                             <h5><i className="bi bi-image me-2"></i>Media & Evidence</h5>
//                             {issue.media?.photo && (
//                                 <div className="media-container mb-3">
//                                     <div className="media-header d-flex justify-content-between align-items-center mb-2">
//                                         <span className="media-type"><i className="bi bi-image-fill me-1"></i> Photo</span>
//                                         <a href={issue.media.photo} download><FaDownload /></a>
//                                     </div>
//                                     <img src={issue.media.photo} alt="Issue evidence" className="img-fluid rounded" />
//                                 </div>
//                             )}

//                             {issue.media?.audio && (
//                                 <div className="media-container mt-4">
//                                     <div className="media-header d-flex justify-content-between align-items-center mb-2">
//                                         <span className="media-type"><i className="bi bi-mic-fill me-1"></i> Audio (0:45)</span>
//                                         <div>
//                                             <i className="bi bi-play-fill me-2"></i>
//                                             <a href={issue.media.audio.url} download><FaDownload /></a>
//                                         </div>
//                                     </div>
//                                     <Card className="transcription-card">
//                                         <Card.Body>
//                                             <h6 className="mb-2">Audio Transcription:</h6>
//                                             <p className="mb-0">"{issue.media.audio.transcription}"</p>
//                                         </Card.Body>
//                                     </Card>
//                                 </div>
//                             )}
//                         </Card.Body>
//                     </Card>
                    
//                     <Card className="detail-card mb-4">
//                         <Card.Body>
//                             <h5><i className="bi bi-clock me-2"></i>Timeline</h5>
//                             <ul className="timeline-list">
//                                 {issue.timeline && issue.timeline.length > 0 ? (
//                                     issue.timeline.map((event, index) => (
//                                         <li key={index} className="timeline-item d-flex mb-3">
//                                             <div className="timeline-icon me-3">
//                                                 <i className="bi bi-exclamation-triangle-fill"></i>
//                                             </div>
//                                             <div className="timeline-content">
//                                                 <h6 className="mb-0">{event.type || 'N/A'}</h6>
//                                                 <p className="text-muted mb-0">Complaint submitted by citizen</p>
//                                                 <small className="text-muted"><i className="bi bi-person-fill me-1"></i>{event.by || 'N/A'} | {event.date || 'N/A'}</small>
//                                             </div>
//                                         </li>
//                                     ))
//                                 ) : (
//                                     <p className="text-muted">No timeline events to display.</p>
//                                 )}
//                             </ul>
//                         </Card.Body>
//                     </Card>
//                 </Col>
                
//                 <Col md={4}>
//                     <div className="right-sidebar">
//                         <Card className="sidebar-card status-card mb-4">
//                             <Card.Body>
//                                 <h5>Status & Priority</h5>
//                                 <div className="d-flex justify-content-between align-items-center mb-3">
//                                     <span className="sidebar-label">Status:</span>
//                                     <span className={`status-badge status-${(issue.status || 'na').toLowerCase().replace(' ', '-')}`}>{issue.status || 'N/A'}</span>
//                                 </div>
//                                 <div className="d-flex justify-content-between align-items-center mb-4">
//                                     <span className="sidebar-label">Priority:</span>
//                                     <span className={`priority-badge priority-${(issue.priority || 'na').toLowerCase()}`}>{issue.priority || 'N/A'}</span>
//                                 </div>
//                                 <Form>
//                                     <Form.Group className="mb-3">
//                                         <Form.Label>Update Status</Form.Label>
//                                         <Form.Select>
//                                             <option>Open</option>
//                                             <option>Assigned</option>
//                                             <option>In Progress</option>
//                                             <option>Resolved</option>
//                                         </Form.Select>
//                                     </Form.Group>
//                                     <Form.Group className="mb-3">
//                                         <Form.Label>Update Priority</Form.Label>
//                                         <Form.Select>
//                                             <option>High</option>
//                                             <option>Critical</option>
//                                             <option>Medium</option>
//                                             <option>Low</option>
//                                         </Form.Select>
//                                     </Form.Group>
//                                 </Form>
//                             </Card.Body>
//                         </Card>
                        
//                         <Card className="sidebar-card mb-4">
//                             <Card.Body>
//                                 <h5>Assignment</h5>
//                                 <div className="d-flex align-items-center mb-2">
//                                     <i className="bi bi-building-fill me-2"></i>
//                                     <Form.Select className="w-auto">
//                                         <option>{issue.assignment?.department || 'Unassigned'}</option>
//                                     </Form.Select>
//                                 </div>
//                                 <div className="d-flex align-items-center">
//                                     <i className="bi bi-person-fill me-2"></i>
//                                     <span>{issue.assignment?.assignedTo || 'Unassigned'}</span>
//                                 </div>
//                             </Card.Body>
//                         </Card>
                        
//                         <Card className="sidebar-card mb-4">
//                             <Card.Body>
//                                 <h5>Reporter Information</h5>
//                                 <div className="d-flex align-items-center mb-2">
//                                     <i className="bi bi-person-fill me-2"></i>
//                                     <span>{issue.reporter?.name || 'Anonymous'}</span>
//                                 </div>
//                                 <div className="d-flex align-items-center">
//                                     <i className="bi bi-envelope-fill me-2"></i>
//                                     <span>{issue.reporter?.contact || 'N/A'}</span>
//                                 </div>
//                             </Card.Body>
//                         </Card>
                        
//                         <Card className="sidebar-card actions-card mb-4">
//                             <Card.Body>
//                                 <h5>Actions</h5>
//                                 <div className="d-grid gap-2">
//                                     <Button variant="success"><i className="bi bi-check-circle-fill me-2"></i> Mark as Resolved</Button>
//                                     <Button variant="outline-secondary"><FaPencilAlt className="me-2" /> Edit Complaint</Button>
//                                     <Button variant="outline-secondary"><FaComment className="me-2" /> Add Comment</Button>
//                                     <Button variant="outline-secondary"><FaShareAlt className="me-2" /> Share with Team</Button>
//                                     <hr />
//                                     <Button variant="outline-danger"><FaExclamationCircle className="me-2" /> Escalate Issue</Button>
//                                     <Button variant="outline-danger"><FaTimesCircle className="me-2" /> Close Complaint</Button>
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                 </Col>
//             </Row>
//         </div>
//     );
// };

// export default IssueDetailsPage;

// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { Card, Row, Col, Dropdown, Button, Form } from 'react-bootstrap';
// import { FaDownload, FaPencilAlt, FaComment, FaShareAlt, FaExclamationCircle, FaTimesCircle } from 'react-icons/fa';
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../lib/firebaseconfig";

// const IssueDetailsPage = () => {
//     const { id } = useParams();
//     const [issue, setIssue] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchIssueDetails = async () => {
//             if (!id) {
//                 setLoading(false);
//                 return;
//             }

//             try {
//                 const docRef = doc(db, "reports", id);
//                 const docSnap = await getDoc(docRef);

//                 if (docSnap.exists()) {
//                     const issueData = docSnap.data();

//                     if (issueData.date && typeof issueData.date.toDate === 'function') {
//                         issueData.date = issueData.date.toDate().toLocaleDateString();
//                     }
//                     if (issueData.createdAt && typeof issueData.createdAt.toDate === 'function') {
//                         issueData.createdAt = issueData.createdAt.toDate().toLocaleDateString();
//                     }
//                     if (issueData.timeline) {
//                         issueData.timeline = issueData.timeline.map(event => {
//                             if (event.date && typeof event.date.toDate === 'function') {
//                                 return {
//                                     ...event,
//                                     date: event.date.toDate().toLocaleString()
//                                 };
//                             }
//                             return event;
//                         });
//                     }

//                     setIssue(issueData);
//                 } else {
//                     console.log("No such document!");
//                     setIssue(null);
//                 }
//             } catch (error) {
//                 console.error("Error fetching document:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchIssueDetails();
//     }, [id]);

//     if (loading) {
//         return <div className="p-4 text-center">Loading issue details...</div>;
//     }

//     if (!issue) {
//         return <div className="p-4 text-center">Issue not found.</div>;
//     }

//     return (
//         <div className="issue-details-page p-4">
//             <Link to="/issues" className="back-link mb-3 d-inline-block">
//                 <i className="bi bi-arrow-left me-2"></i> Back to Issues
//             </Link>

//             <h2 className="issue-id">{id}</h2>
//             <p className="issue-title">{issue.title || 'N/A'}</p>

//             <Row className="mt-4 g-4">
//                 <Col md={8}>
//                     <Card className="detail-card mb-4">
//                         <Card.Body>
//                             <h5>Complaint Details</h5>
//                             <div className="mb-3">
//                                 <h6 className="detail-label">Description</h6>
//                                 <p className="detail-text">{issue.description || 'N/A'}</p>
//                             </div>
//                             <div className="d-flex mb-3">
//                                 <div className="me-4">
//                                     <h6 className="detail-label">Category</h6>
//                                     <span className="badge-category">{issue.category || 'N/A'}</span>
//                                 </div>
//                                 <div>
//                                     <h6 className="detail-label">Tags</h6>
//                                     <div className="d-flex flex-wrap">
//                                         {issue.tags && issue.tags.length > 0 ? (
//                                             issue.tags.map((tag, index) => (
//                                                 <span key={index} className="badge-tag me-2 mb-1">{tag}</span>
//                                             ))
//                                         ) : (
//                                             <span className="text-muted">No tags</span>
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="location-info">
//                                 <h6 className="detail-label">Location</h6>
//                                 <p><i className="bi bi-geo-alt-fill me-1"></i> {issue.location || 'N/A'}</p>
//                             </div>
//                         </Card.Body>
//                     </Card>

//                     <Card className="detail-card mb-4">
//                         <Card.Body>
//                             <h5><i className="bi bi-image me-2"></i>Media & Evidence</h5>
//                             {issue.media?.photo && (
//                                 <div className="media-container mb-3">
//                                     <div className="media-header d-flex justify-content-between align-items-center mb-2">
//                                         <span className="media-type"><i className="bi bi-image-fill me-1"></i> Photo</span>
//                                         <a href={issue.media.photo} download><FaDownload /></a>
//                                     </div>
//                                     <img src={issue.media.photo} alt="Issue evidence" className="img-fluid rounded" />
//                                 </div>
//                             )}

//                             {/* Added Video Player */}
//                             {issue.media?.video && (
//                                 <div className="media-container mt-4">
//                                     <div className="media-header d-flex justify-content-between align-items-center mb-2">
//                                         <span className="media-type"><i className="bi bi-camera-video-fill me-1"></i> Video</span>
//                                         <a href={issue.media.video} download><FaDownload /></a>
//                                     </div>
//                                     <video controls className="w-100 rounded">
//                                         <source src={issue.media.video} type="video/mp4" />
//                                         Your browser does not support the video tag.
//                                     </video>
//                                 </div>
//                             )}

//                             {/* Updated Audio Player */}
//                             {issue.media?.audio && (
//                                 <div className="media-container mt-4">
//                                     <div className="media-header d-flex justify-content-between align-items-center mb-2">
//                                         <span className="media-type"><i className="bi bi-mic-fill me-1"></i> Audio</span>
//                                         <a href={issue.media.audio} download><FaDownload /></a>
//                                     </div>
//                                     <audio controls className="w-100">
//                                         <source src={issue.media.audio} type="audio/webm" />
//                                         Your browser does not support the audio element.
//                                     </audio>
//                                     {issue.media.transcription && (
//                                       <Card className="transcription-card mt-2">
//                                         <Card.Body>
//                                           <h6 className="mb-2">Audio Transcription:</h6>
//                                           <p className="mb-0">"{issue.media.transcription}"</p>
//                                         </Card.Body>
//                                       </Card>
//                                     )}
//                                 </div>
//                             )}
//                         </Card.Body>
//                     </Card>

//                     <Card className="detail-card mb-4">
//                         <Card.Body>
//                             <h5><i className="bi bi-clock me-2"></i>Timeline</h5>
//                             <ul className="timeline-list">
//                                 {issue.timeline && issue.timeline.length > 0 ? (
//                                     issue.timeline.map((event, index) => (
//                                         <li key={index} className="timeline-item d-flex mb-3">
//                                             <div className="timeline-icon me-3">
//                                                 <i className="bi bi-exclamation-triangle-fill"></i>
//                                             </div>
//                                             <div className="timeline-content">
//                                                 <h6 className="mb-0">{event.type || 'N/A'}</h6>
//                                                 <p className="text-muted mb-0">Complaint submitted by citizen</p>
//                                                 <small className="text-muted"><i className="bi bi-person-fill me-1"></i>{event.by || 'N/A'} | {event.date || 'N/A'}</small>
//                                             </div>
//                                         </li>
//                                     ))
//                                 ) : (
//                                     <p className="text-muted">No timeline events to display.</p>
//                                 )}
//                             </ul>
//                         </Card.Body>
//                     </Card>
//                 </Col>

//                 <Col md={4}>
//                     <div className="right-sidebar">
//                         <Card className="sidebar-card status-card mb-4">
//                             <Card.Body>
//                                 <h5>Status & Priority</h5>
//                                 <div className="d-flex justify-content-between align-items-center mb-3">
//                                     <span className="sidebar-label">Status:</span>
//                                     <span className={`status-badge status-${(issue.status || 'na').toLowerCase().replace(' ', '-')}`}>{issue.status || 'N/A'}</span>
//                                 </div>
//                                 <div className="d-flex justify-content-between align-items-center mb-4">
//                                     <span className="sidebar-label">Priority:</span>
//                                     <span className={`priority-badge priority-${(issue.priority || 'na').toLowerCase()}`}>{issue.priority || 'N/A'}</span>
//                                 </div>
//                                 <Form>
//                                     <Form.Group className="mb-3">
//                                         <Form.Label>Update Status</Form.Label>
//                                         <Form.Select>
//                                             <option>Open</option>
//                                             <option>Assigned</option>
//                                             <option>In Progress</option>
//                                             <option>Resolved</option>
//                                         </Form.Select>
//                                     </Form.Group>
//                                     <Form.Group className="mb-3">
//                                         <Form.Label>Update Priority</Form.Label>
//                                         <Form.Select>
//                                             <option>High</option>
//                                             <option>Critical</option>
//                                             <option>Medium</option>
//                                             <option>Low</option>
//                                         </Form.Select>
//                                     </Form.Group>
//                                 </Form>
//                             </Card.Body>
//                         </Card>

//                         <Card className="sidebar-card mb-4">
//                             <Card.Body>
//                                 <h5>Assignment</h5>
//                                 <div className="d-flex align-items-center mb-2">
//                                     <i className="bi bi-building-fill me-2"></i>
//                                     <Form.Select className="w-auto">
//                                         <option>{issue.assignment?.department || 'Unassigned'}</option>
//                                     </Form.Select>
//                                 </div>
//                                 <div className="d-flex align-items-center">
//                                     <i className="bi bi-person-fill me-2"></i>
//                                     <span>{issue.assignment?.assignedTo || 'Unassigned'}</span>
//                                 </div>
//                             </Card.Body>
//                         </Card>

//                         <Card className="sidebar-card mb-4">
//                             <Card.Body>
//                                 <h5>Reporter Information</h5>
//                                 <div className="d-flex align-items-center mb-2">
//                                     <i className="bi bi-person-fill me-2"></i>
//                                     <span>{issue.reporter?.name || 'Anonymous'}</span>
//                                 </div>
//                                 <div className="d-flex align-items-center">
//                                     <i className="bi bi-envelope-fill me-2"></i>
//                                     <span>{issue.reporter?.contact || 'N/A'}</span>
//                                 </div>
//                             </Card.Body>
//                         </Card>

//                         <Card className="sidebar-card actions-card mb-4">
//                             <Card.Body>
//                                 <h5>Actions</h5>
//                                 <div className="d-grid gap-2">
//                                     <Button variant="success"><i className="bi bi-check-circle-fill me-2"></i> Mark as Resolved</Button>
//                                     <Button variant="outline-secondary"><FaPencilAlt className="me-2" /> Edit Complaint</Button>
//                                     <Button variant="outline-secondary"><FaComment className="me-2" /> Add Comment</Button>
//                                     <Button variant="outline-secondary"><FaShareAlt className="me-2" /> Share with Team</Button>
//                                     <hr />
//                                     <Button variant="outline-danger"><FaExclamationCircle className="me-2" /> Escalate Issue</Button>
//                                     <Button variant="outline-danger"><FaTimesCircle className="me-2" /> Close Complaint</Button>
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                 </Col>
//             </Row>
//         </div>
//     );
// };

// export default IssueDetailsPage;


// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { Card, Row, Col, Dropdown, Button, Form } from 'react-bootstrap';
// // Make sure FaDownload is imported from react-icons
// import { FaDownload, FaPencilAlt, FaComment, FaShareAlt, FaExclamationCircle, FaTimesCircle } from 'react-icons/fa';
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../lib/firebaseconfig";

// const IssueDetailsPage = () => {
//     const { id } = useParams();
//     const [issue, setIssue] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchIssueDetails = async () => {
//             if (!id) {
//                 setLoading(false);
//                 return;
//             }

//             try {
//                 const docRef = doc(db, "reports", id);
//                 const docSnap = await getDoc(docRef);

//                 if (docSnap.exists()) {
//                     const issueData = docSnap.data();

//                     // Convert Firestore Timestamps to readable dates
//                     if (issueData.createdAt && typeof issueData.createdAt.toDate === 'function') {
//                         issueData.createdAt = issueData.createdAt.toDate().toLocaleString();
//                     }
                    
//                     setIssue(issueData);
//                 } else {
//                     console.log("No such document!");
//                     setIssue(null);
//                 }
//             } catch (error) {
//                 console.error("Error fetching document:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchIssueDetails();
//     }, [id]);

//     if (loading) {
//         return <div className="p-4 text-center">Loading issue details...</div>;
//     }

//     if (!issue) {
//         return <div className="p-4 text-center">Issue not found.</div>;
//     }

//     return (
//         <div className="issue-details-page p-4">
//             <Link to="/issues" className="back-link mb-3 d-inline-block">
//                 <i className="bi bi-arrow-left me-2"></i> Back to Issues
//             </Link>

//             <h2 className="issue-id">{id}</h2>
//             <p className="issue-title">{issue.type || 'N/A'}</p>

//             <Row className="mt-4 g-4">
//                 <Col md={8}>
//                     {/* Complaint Details Card */}
//                     <Card className="detail-card mb-4">
//                         <Card.Body>
//                             <h5>Complaint Details</h5>
//                             <div className="mb-3">
//                                 <h6 className="detail-label">Description</h6>
//                                 <p className="detail-text">{issue.description || 'N/A'}</p>
//                             </div>
//                             <div className="location-info">
//                                 <h6 className="detail-label">Location</h6>
//                                 <p><i className="bi bi-geo-alt-fill me-1"></i> {issue.location || 'N/A'}</p>
//                             </div>
//                         </Card.Body>
//                     </Card>

//                     {/* --- MODIFIED MEDIA & EVIDENCE CARD --- */}
//                     <Card className="detail-card mb-4">
//                         <Card.Body>
//                             <h5><i className="bi bi-paperclip me-2"></i>Media & Evidence</h5>

//                             {/* Image Display Logic */}
//                             {issue.image && (
//                                 <div className="media-container mb-3">
//                                     <div className="media-header d-flex justify-content-between align-items-center mb-2">
//                                         <span className="media-type"><i className="bi bi-image-fill me-1"></i> Photo</span>
//                                         <a href={issue.image} download target="_blank" rel="noopener noreferrer"><FaDownload /></a>
//                                     </div>
//                                     <img src={issue.image} alt="Issue evidence" className="img-fluid rounded border" />
//                                 </div>
//                             )}

//                             {/* Audio Player Logic */}
//                             {issue.audio && (
//                                 <div className="media-container mt-4">
//                                     <div className="media-header d-flex justify-content-between align-items-center mb-2">
//                                         <span className="media-type"><i className="bi bi-mic-fill me-1"></i> Audio</span>
//                                         <a href={issue.audio} download target="_blank" rel="noopener noreferrer"><FaDownload /></a>
//                                     </div>
//                                     <audio controls className="w-100">
//                                         <source src={issue.audio} type="audio/webm" />
//                                         Your browser does not support the audio element.
//                                     </audio>
//                                 </div>
//                             )}

//                             {/* Message if no media is available */}
//                             {!issue.image && !issue.audio && (
//                                 <p className="text-muted">No media was provided for this issue.</p>
//                             )}

//                         </Card.Body>
//                     </Card>

//                     {/* Timeline Card */}
//                     <Card className="detail-card mb-4">
//                        {/* ... your timeline card remains the same ... */}
//                     </Card>
//                 </Col>

//                 <Col md={4}>
//                    {/* ... your right sidebar with status, actions, etc., remains the same ... */}
//                 </Col>
//             </Row>
//         </div>
//     );
// };

// export default IssueDetailsPage;

// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { Card, Row, Col, Button, Form } from 'react-bootstrap';
// import { FaDownload, FaPencilAlt, FaComment, FaShareAlt, FaExclamationCircle, FaTimesCircle } from 'react-icons/fa';
// import { doc, getDoc, updateDoc } from "firebase/firestore";
// import { db } from "../lib/firebaseconfig";

// const IssueDetailsPage = () => {
//     const { id } = useParams();
//     const [issue, setIssue] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [status, setStatus] = useState('');
//     const [priority, setPriority] = useState('');

//     // Function to fetch issue details
//     const fetchIssueDetails = async () => {
//         if (!id) {
//             setLoading(false);
//             return;
//         }
//         try {
//             const docRef = doc(db, "reports", id);
//             const docSnap = await getDoc(docRef);

//             if (docSnap.exists()) {
//                 const issueData = docSnap.data();

//                 // Convert Firestore Timestamps to readable dates
//                 if (issueData.createdAt && typeof issueData.createdAt.toDate === 'function') {
//                     issueData.createdAt = issueData.createdAt.toDate().toLocaleString();
//                 }
                
//                 setIssue(issueData);
//                 setStatus(issueData.status || 'pending'); // Set initial status
//                 setPriority(issueData.priority || 'Medium'); // Set initial priority
//             } else {
//                 console.log("No such document!");
//                 setIssue(null);
//             }
//         } catch (error) {
//             console.error("Error fetching document:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchIssueDetails();
//     }, [id]);

//     // Function to handle status/priority updates
//     const handleUpdate = async () => {
//         if (!id) return;
//         const docRef = doc(db, "reports", id);
//         try {
//             await updateDoc(docRef, {
//                 status: status,
//                 priority: priority
//             });
//             // Re-fetch data to show the update
//             fetchIssueDetails(); 
//             alert('Issue updated successfully!');
//         } catch (error) {
//             console.error("Error updating document: ", error);
//             alert('Failed to update issue.');
//         }
//     };

//     if (loading) {
//         return <div className="p-4 text-center">Loading issue details...</div>;
//     }

//     if (!issue) {
//         return <div className="p-4 text-center">Issue not found.</div>;
//     }

//     return (
//         <div className="issue-details-page p-4">
//             <Link to="/issues" className="back-link mb-3 d-inline-block">
//                 <i className="bi bi-arrow-left me-2"></i> Back to Issues
//             </Link>

//             <h2 className="issue-id">{id}</h2>
//             <p className="issue-title">{issue.type || 'N/A'}</p>

//             <Row className="mt-4 g-4">
//                 <Col md={8}>
//                     {/* Complaint Details Card */}
//                     <Card className="detail-card mb-4">
//                         <Card.Body>
//                             <h5>Complaint Details</h5>
//                             <div className="mb-3">
//                                 <h6 className="detail-label">Description</h6>
//                                 <p className="detail-text">{issue.description || 'N/A'}</p>
//                             </div>
//                             <div className="location-info">
//                                 <h6 className="detail-label">Location</h6>
//                                 <p><i className="bi bi-geo-alt-fill me-1"></i> {issue.location || 'N/A'}</p>
//                             </div>
//                         </Card.Body>
//                     </Card>

//                     {/* Media & Evidence Card */}
//                     <Card className="detail-card mb-4">
//                         <Card.Body>
//                             <h5><i className="bi bi-paperclip me-2"></i>Media & Evidence</h5>
//                             {issue.image && (
//                                 <div className="media-container mb-3">
//                                     <div className="media-header d-flex justify-content-between align-items-center mb-2">
//                                         <span className="media-type"><i className="bi bi-image-fill me-1"></i> Photo</span>
//                                         <a href={issue.image} download target="_blank" rel="noopener noreferrer"><FaDownload /></a>
//                                     </div>
//                                     <img src={issue.image} alt="Issue evidence" className="img-fluid rounded border" />
//                                 </div>
//                             )}
//                             {issue.audio && (
//                                 <div className="media-container mt-4">
//                                     <div className="media-header d-flex justify-content-between align-items-center mb-2">
//                                         <span className="media-type"><i className="bi bi-mic-fill me-1"></i> Audio</span>
//                                         <a href={issue.audio} download target="_blank" rel="noopener noreferrer"><FaDownload /></a>
//                                     </div>
//                                     <audio controls className="w-100">
//                                         <source src={issue.audio} type="audio/webm" />
//                                         Your browser does not support the audio element.
//                                     </audio>
//                                 </div>
//                             )}
//                             {!issue.image && !issue.audio && (
//                                 <p className="text-muted">No media was provided for this issue.</p>
//                             )}
//                         </Card.Body>
//                     </Card>
//                 </Col>

//                 {/* --- FULL RIGHT SIDEBAR --- */}
//                 <Col md={4}>
//                     <div className="right-sidebar">
//                         <Card className="sidebar-card status-card mb-4">
//                             <Card.Body>
//                                 <h5>Status & Priority</h5>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Update Status</Form.Label>
//                                     <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
//                                         <option value="pending">Pending</option>
//                                         <option value="Assigned">Assigned</option>
//                                         <option value="In Progress">In Progress</option>
//                                         <option value="Resolved">Resolved</option>
//                                     </Form.Select>
//                                 </Form.Group>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Update Priority</Form.Label>
//                                     <Form.Select value={priority} onChange={(e) => setPriority(e.target.value)}>
//                                         <option value="Low">Low</option>
//                                         <option value="Medium">Medium</option>
//                                         <option value="High">High</option>
//                                         <option value="Critical">Critical</option>
//                                     </Form.Select>
//                                 </Form.Group>
//                                 <Button variant="primary" className="w-100" onClick={handleUpdate}>
//                                     Save Changes
//                                 </Button>
//                             </Card.Body>
//                         </Card>

//                         <Card className="sidebar-card mb-4">
//                             <Card.Body>
//                                 <h5>Assignment</h5>
//                                 <div className="d-flex align-items-center mb-2">
//                                     <i className="bi bi-building-fill me-2"></i>
//                                     <span>{issue.assignment?.department || 'Unassigned'}</span>
//                                 </div>
//                                 <div className="d-flex align-items-center">
//                                     <i className="bi bi-person-fill me-2"></i>
//                                     <span>{issue.assignment?.assignedTo || 'Unassigned'}</span>
//                                 </div>
//                             </Card.Body>
//                         </Card>

//                         <Card className="sidebar-card mb-4">
//                             <Card.Body>
//                                 <h5>Reporter Information</h5>
//                                 <div className="d-flex align-items-center mb-2">
//                                     <i className="bi bi-person-fill me-2"></i>
//                                     <span>{issue.reporter?.name || 'Anonymous'}</span>
//                                 </div>
//                                 <div className="d-flex align-items-center">
//                                     <i className="bi bi-envelope-fill me-2"></i>
//                                     <span>{issue.reporter?.contact || 'N/A'}</span>
//                                 </div>
//                             </Card.Body>
//                         </Card>

//                         <Card className="sidebar-card actions-card mb-4">
//                             <Card.Body>
//                                 <h5>Actions</h5>
//                                 <div className="d-grid gap-2">
//                                     <Button variant="outline-secondary"><FaPencilAlt className="me-2" /> Edit Complaint</Button>
//                                     <Button variant="outline-secondary"><FaComment className="me-2" /> Add Comment</Button>
//                                     <Button variant="outline-secondary"><FaShareAlt className="me-2" /> Share with Team</Button>
//                                     <hr />
//                                     <Button variant="outline-danger"><FaExclamationCircle className="me-2" /> Escalate Issue</Button>
//                                     <Button variant="outline-danger"><FaTimesCircle className="me-2" /> Close Complaint</Button>
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                 </Col>
//             </Row>
//         </div>
//     );
// };

// export default IssueDetailsPage;

// src/pages/IssueDetailsPage.js

// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { Card, Row, Col, Button, Form } from 'react-bootstrap';
// import { FaDownload, FaPencilAlt, FaComment, FaShareAlt, FaExclamationCircle, FaTimesCircle } from 'react-icons/fa';
// import { doc, getDoc, updateDoc } from "firebase/firestore";
// import { db } from "../lib/firebaseconfig";

// const IssueDetailsPage = () => {
//     const { id } = useParams();
//     const [issue, setIssue] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [status, setStatus] = useState('');
//     const [priority, setPriority] = useState('');

//     const fetchIssueDetails = async () => {
//         if (!id) {
//             setLoading(false);
//             return;
//         }
//         try {
//             const docRef = doc(db, "reports", id);
//             const docSnap = await getDoc(docRef);
//             if (docSnap.exists()) {
//                 const issueData = docSnap.data();
//                 if (issueData.createdAt && typeof issueData.createdAt.toDate === 'function') {
//                     issueData.createdAt = issueData.createdAt.toDate().toLocaleString();
//                 }
//                 setIssue(issueData);
//                 setStatus(issueData.status || 'pending');
//                 setPriority(issueData.priority || 'Medium');
//             } else {
//                 console.log("No such document!");
//                 setIssue(null);
//             }
//         } catch (error) {
//             console.error("Error fetching document:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchIssueDetails();
//     }, [id]);

//     const handleUpdate = async () => {
//         if (!id) return;
//         const docRef = doc(db, "reports", id);
//         try {
//             await updateDoc(docRef, {
//                 status: status,
//                 priority: priority
//             });
//             fetchIssueDetails();
//             alert('Issue updated successfully!');
//         } catch (error) {
//             console.error("Error updating document: ", error);
//             alert('Failed to update issue.');
//         }
//     };

//     if (loading) {
//         return <div className="p-4 text-center">Loading issue details...</div>;
//     }

//     if (!issue) {
//         return <div className="p-4 text-center">Issue not found.</div>;
//     }
    
//     const getLocationCoords = () => {
//         if (!issue.location || typeof issue.location !== 'string') return null;
//         const coords = issue.location.split(',').map(c => parseFloat(c.trim()));
//         if (coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1])) {
//             return coords;
//         }
//         return null;
//     };
//     const locationCoords = getLocationCoords();

//     return (
//         <div className="issue-details-page p-4">
//             <Link to="/issues" className="back-link mb-3 d-inline-block">
//                 <i className="bi bi-arrow-left me-2"></i> Back to Issues
//             </Link>

//             <h2 className="issue-id">{id}</h2>
//             <p className="issue-title">{issue.type || 'N/A'}</p>

//             <Row className="mt-4 g-4">
//                 <Col md={8}>
//                     <Card className="detail-card mb-4">
//                         <Card.Body>
//                             <h5>Complaint Details</h5>
//                             <div className="mb-3">
//                                 <h6 className="detail-label">Description</h6>
//                                 <p className="detail-text">{issue.description || 'N/A'}</p>
//                             </div>
//                             <div className="location-info">
//                                 <h6 className="detail-label">Location</h6>
//                                 <p className="mb-1"><i className="bi bi-geo-alt-fill me-1"></i> {issue.location || 'N/A'}</p>
//                                 {locationCoords && (
//                                     <Link 
//                                         to="/map" 
//                                         state={{ center: locationCoords }}
//                                         className="fw-bold"
//                                     >
//                                         View on Map
//                                     </Link>
//                                 )}
//                             </div>
//                         </Card.Body>
//                     </Card>

//                     <Card className="detail-card mb-4">
//                         <Card.Body>
//                             <h5><i className="bi bi-paperclip me-2"></i>Media & Evidence</h5>
//                             {issue.image && (
//                                 <div className="media-container mb-3">
//                                     <div className="media-header d-flex justify-content-between align-items-center mb-2">
//                                         <span className="media-type"><i className="bi bi-image-fill me-1"></i> Photo</span>
//                                         <a href={issue.image} download target="_blank" rel="noopener noreferrer"><FaDownload /></a>
//                                     </div>
//                                     <img src={issue.image} alt="Issue evidence" className="img-fluid rounded border" />
//                                 </div>
//                             )}
//                             {issue.audio && (
//                                 <div className="media-container mt-4">
//                                     <div className="media-header d-flex justify-content-between align-items-center mb-2">
//                                         <span className="media-type"><i className="bi bi-mic-fill me-1"></i> Audio</span>
//                                         <a href={issue.audio} download target="_blank" rel="noopener noreferrer"><FaDownload /></a>
//                                     </div>
//                                     <audio controls className="w-100">
//                                         <source src={issue.audio} type="audio/webm" />
//                                         Your browser does not support the audio element.
//                                     </audio>
//                                 </div>
//                             )}
//                             {!issue.image && !issue.audio && (
//                                 <p className="text-muted">No media was provided for this issue.</p>
//                             )}
//                         </Card.Body>
//                     </Card>
//                 </Col>

//                 <Col md={4}>
//                     <div className="right-sidebar">
//                         <Card className="sidebar-card status-card mb-4">
//                             <Card.Body>
//                                 <h5>Status & Priority</h5>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Update Status</Form.Label>
//                                     <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
//                                         <option value="pending">Pending</option>
//                                         <option value="Assigned">Assigned</option>
//                                         <option value="In Progress">In Progress</option>
//                                         <option value="Resolved">Resolved</option>
//                                     </Form.Select>
//                                 </Form.Group>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Update Priority</Form.Label>
//                                     <Form.Select value={priority} onChange={(e) => setPriority(e.target.value)}>
//                                         <option value="Low">Low</option>
//                                         <option value="Medium">Medium</option>
//                                         <option value="High">High</option>
//                                         <option value="Critical">Critical</option>
//                                     </Form.Select>
//                                 </Form.Group>
//                                 <Button variant="primary" className="w-100" onClick={handleUpdate}>
//                                     Save Changes
//                                 </Button>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                 </Col>
//             </Row>
//         </div>
//     );
// };

// export default IssueDetailsPage;

// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { Card, Row, Col, Button, Form } from 'react-bootstrap';
// import { FaDownload } from 'react-icons/fa';
// import { doc, getDoc, updateDoc } from "firebase/firestore";
// import { db } from "../lib/firebaseconfig";

// const IssueDetailsPage = () => {
//     const { id } = useParams();
//     const [issue, setIssue] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [status, setStatus] = useState('');
//     const [priority, setPriority] = useState('');

//     const fetchIssueDetails = async () => {
//         if (!id) {
//             setLoading(false);
//             return;
//         }
//         try {
//             const docRef = doc(db, "reports", id);
//             const docSnap = await getDoc(docRef);

//             if (docSnap.exists()) {
//                 const issueData = docSnap.data();
//                 if (issueData.createdAt && typeof issueData.createdAt.toDate === 'function') {
//                     issueData.createdAt = issueData.createdAt.toDate().toLocaleString();
//                 }
//                 setIssue(issueData);
//                 setStatus(issueData.status || 'pending');
//                 setPriority(issueData.priority || 'Medium');
//             } else {
//                 setIssue(null);
//             }
//         } catch (error) {
//             console.error("Error fetching document:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchIssueDetails();
//     }, [id]);

//     const handleUpdate = async () => {
//         if (!id) return;
//         const docRef = doc(db, "reports", id);
//         try {
//             await updateDoc(docRef, {
//                 status: status,
//                 priority: priority
//             });
//             fetchIssueDetails();
//             alert('Issue updated successfully!');
//         } catch (error) {
//             console.error("Error updating document: ", error);
//             alert('Failed to update issue.');
//         }
//     };

//     if (loading) {
//         return <div className="p-4 text-center">Loading issue details...</div>;
//     }

//     if (!issue) {
//         return <div className="p-4 text-center">Issue not found.</div>;
//     }

//     return (
//         <div className="issue-details-page p-4">
//             <Link to="/issues" className="back-link mb-3 d-inline-block">
//                 <i className="bi bi-arrow-left me-2"></i> Back to Issues
//             </Link>
//             <h2 className="issue-id">{id}</h2>
//             <p className="issue-title">{issue.type || 'N/A'}</p>

//             <Row className="mt-4 g-4">
//                 <Col md={8}>
//                     <Card className="detail-card mb-4">
//                         <Card.Body>
//                             <h5>Complaint Details</h5>
//                             <div className="mb-3">
//                                 <h6 className="detail-label">Description</h6>
//                                 <p className="detail-text">{issue.description || 'N/A'}</p>
//                             </div>
//                             <div className="mb-3">
//                                 <h6 className="detail-label">Location</h6>
//                                 <p className="mb-0"><i className="bi bi-geo-alt-fill me-1"></i> {issue.location || 'N/A'}</p>
//                             </div>
//                             <div className="mb-3">
//                                 <h6 className="detail-label">Reported On</h6>
//                                 <p className="mb-0"><i className="bi bi-clock-fill me-1"></i> {issue.createdAt || 'N/A'}</p>
//                             </div>
//                         </Card.Body>
//                     </Card>

//                     {/* Media & Evidence Card */}
//                     <Card className="detail-card mb-4">
//                         <Card.Body>
//                             <h5><i className="bi bi-paperclip me-2"></i>Media & Evidence</h5>
//                             {issue.image && (
//                                 <div className="media-container mb-3">
//                                     <div className="media-header d-flex justify-content-between align-items-center mb-2">
//                                         <span className="media-type"><i className="bi bi-image-fill me-1"></i> Photo</span>
//                                         <a href={issue.image} download target="_blank" rel="noopener noreferrer"><FaDownload /></a>
//                                     </div>
//                                     <img src={issue.image} alt="Issue evidence" className="img-fluid rounded border" />
//                                 </div>
//                             )}
//                             {issue.audio && (
//                                 <div className="media-container mt-4">
//                                     <div className="media-header d-flex justify-content-between align-items-center mb-2">
//                                         <span className="media-type"><i className="bi bi-mic-fill me-1"></i> Audio</span>
//                                         <a href={issue.audio} download target="_blank" rel="noopener noreferrer"><FaDownload /></a>
//                                     </div>
//                                     <audio controls className="w-100">
//                                         <source src={issue.audio} type="audio/webm" />
//                                         Your browser does not support the audio element.
//                                     </audio>
//                                 </div>
//                             )}
//                             {!issue.image && !issue.audio && (
//                                 <p className="text-muted">No media was provided for this issue.</p>
//                             )}
//                         </Card.Body>
//                     </Card>
//                 </Col>
//                 <Col md={4}>
//                     <div className="right-sidebar">
//                         <Card className="sidebar-card status-card mb-4">
//                             <Card.Body>
//                                 <h5>Status & Priority</h5>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Update Status</Form.Label>
//                                     <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
//                                         <option value="pending">Pending</option>
//                                         <option value="Assigned">Assigned</option>
//                                         <option value="In Progress">In Progress</option>
//                                         <option value="Resolved">Resolved</option>
//                                     </Form.Select>
//                                 </Form.Group>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Update Priority</Form.Label>
//                                     <Form.Select value={priority} onChange={(e) => setPriority(e.target.value)}>
//                                         <option value="Low">Low</option>
//                                         <option value="Medium">Medium</option>
//                                         <option value="High">High</option>
//                                         <option value="Critical">Critical</option>
//                                     </Form.Select>
//                                 </Form.Group>
//                                 <Button variant="primary" className="w-100" onClick={handleUpdate}>
//                                     Save Changes
//                                 </Button>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                 </Col>
//             </Row>
//         </div>
//     );
// };

// export default IssueDetailsPage;

// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { Card, Row, Col, Button, Form } from 'react-bootstrap';
// import { FaDownload } from 'react-icons/fa';
// import { doc, getDoc, updateDoc } from "firebase/firestore";
// import { db } from "../lib/firebaseconfig";

// const IssueDetailsPage = () => {
//     const { id } = useParams();
//     const [issue, setIssue] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [status, setStatus] = useState('');
//     const [priority, setPriority] = useState('');

//     const fetchIssueDetails = async () => {
//         if (!id) {
//             setLoading(false);
//             return;
//         }
//         try {
//             const docRef = doc(db, "reports", id);
//             const docSnap = await getDoc(docRef);

//             if (docSnap.exists()) {
//                 const issueData = docSnap.data();
//                 if (issueData.createdAt && typeof issueData.createdAt.toDate === 'function') {
//                     issueData.createdAt = issueData.createdAt.toDate().toLocaleString();
//                 }
//                 setIssue(issueData);
//                 setStatus(issueData.status || 'pending');
//                 setPriority(issueData.priority || 'Medium');
//             } else {
//                 setIssue(null);
//             }
//         } catch (error) {
//             console.error("Error fetching document:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchIssueDetails();
//     }, [id]);

//     const handleUpdate = async () => {
//         if (!id) return;
//         const docRef = doc(db, "reports", id);
//         try {
//             await updateDoc(docRef, {
//                 status: status,
//                 priority: priority
//             });
//             fetchIssueDetails();
//             alert('Issue updated successfully!');
//         } catch (error) {
//             console.error("Error updating document: ", error);
//             alert('Failed to update issue.');
//         }
//     };

//     if (loading) {
//         return <div className="p-4 text-center">Loading issue details...</div>;
//     }

//     if (!issue) {
//         return <div className="p-4 text-center">Issue not found.</div>;
//     }

//     // Helper function to parse coordinates safely
//     const getLocationCoords = () => {
//         if (!issue.location || typeof issue.location !== 'string') return null;
//         const coords = issue.location.split(',').map(c => parseFloat(c.trim()));
//         if (coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1])) {
//             return coords;
//         }
//         return null;
//     };
//     const locationCoords = getLocationCoords();

//     return (
//         <div className="issue-details-page p-4">
//             <Link to="/issues" className="back-link mb-3 d-inline-block">
//                 <i className="bi bi-arrow-left me-2"></i> Back to Issues
//             </Link>
//             <h2 className="issue-id">{id}</h2>
//             <p className="issue-title">{issue.type || 'N/A'}</p>

//             <Row className="mt-4 g-4">
//                 <Col md={8}>
//                     <Card className="detail-card mb-4">
//                         <Card.Body>
//                             <h5>Complaint Details</h5>
//                             <div className="mb-3">
//                                 <h6 className="detail-label">Description</h6>
//                                 <p className="detail-text">{issue.description || 'N/A'}</p>
//                             </div>
//                             <div className="mb-3">
//                                 <h6 className="detail-label">Location</h6>
//                                 <p className="mb-1"><i className="bi bi-geo-alt-fill me-1"></i> {issue.location || 'N/A'}</p>
                                
//                                 {/* --- "VIEW ON MAP" LINK ADDED BACK IN --- */}
//                                 {locationCoords && (
//                                     <Link 
//                                         to="/map" 
//                                         state={{ center: locationCoords }}
//                                         className="fw-bold"
//                                     >
//                                         View on Map
//                                     </Link>
//                                 )}
//                             </div>
//                             <div className="mb-3">
//                                 <h6 className="detail-label">Reported On</h6>
//                                 <p className="mb-0"><i className="bi bi-clock-fill me-1"></i> {issue.createdAt || 'N/A'}</p>
//                             </div>
//                         </Card.Body>
//                     </Card>

//                     {/* Media & Evidence Card */}
//                     <Card className="detail-card mb-4">
//                         <Card.Body>
//                             <h5><i className="bi bi-paperclip me-2"></i>Media & Evidence</h5>
//                             {issue.image && (
//                                 <div className="media-container mb-3">
//                                     <div className="media-header d-flex justify-content-between align-items-center mb-2">
//                                         <span className="media-type"><i className="bi bi-image-fill me-1"></i> Photo</span>
//                                         <a href={issue.image} download target="_blank" rel="noopener noreferrer"><FaDownload /></a>
//                                     </div>
//                                     <img src={issue.image} alt="Issue evidence" className="img-fluid rounded border" />
//                                 </div>
//                             )}
//                             {issue.audio && (
//                                 <div className="media-container mt-4">
//                                     <div className="media-header d-flex justify-content-between align-items-center mb-2">
//                                         <span className="media-type"><i className="bi bi-mic-fill me-1"></i> Audio</span>
//                                         <a href={issue.audio} download target="_blank" rel="noopener noreferrer"><FaDownload /></a>
//                                     </div>
//                                     <audio controls className="w-100">
//                                         <source src={issue.audio} type="audio/webm" />
//                                         Your browser does not support the audio element.
//                                     </audio>
//                                 </div>
//                             )}
//                             {!issue.image && !issue.audio && (
//                                 <p className="text-muted">No media was provided for this issue.</p>
//                             )}
//                         </Card.Body>
//                     </Card>
//                 </Col>
//                 <Col md={4}>
//                     <div className="right-sidebar">
//                         <Card className="sidebar-card status-card mb-4">
//                             <Card.Body>
//                                 <h5>Status & Priority</h5>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Update Status</Form.Label>
//                                     <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
//                                         <option value="pending">Pending</option>
//                                         <option value="Assigned">Assigned</option>
//                                         <option value="In Progress">In Progress</option>
//                                         <option value="Resolved">Resolved</option>
//                                     </Form.Select>
//                                 </Form.Group>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Update Priority</Form.Label>
//                                     <Form.Select value={priority} onChange={(e) => setPriority(e.target.value)}>
//                                         <option value="Low">Low</option>
//                                         <option value="Medium">Medium</option>
//                                         <option value="High">High</option>
//                                         <option value="Critical">Critical</option>
//                                     </Form.Select>
//                                 </Form.Group>
//                                 <Button variant="primary" className="w-100" onClick={handleUpdate}>
//                                     Save Changes
//                                 </Button>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                 </Col>
//             </Row>
//         </div>
//     );
// };

// export default IssueDetailsPage;

// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { Card, Row, Col, Button, Form } from 'react-bootstrap';
// import { FaDownload } from 'react-icons/fa';
// import { doc, getDoc, updateDoc } from "firebase/firestore";
// import { db } from "../lib/firebaseconfig";
// import { departments } from '../lib/departments';

// const IssueDetailsPage = () => {
//     const { id } = useParams();
//     const [issue, setIssue] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [status, setStatus] = useState('');
//     const [priority, setPriority] = useState('');

//     const fetchIssueDetails = async () => {
//         if (!id) {
//             setLoading(false);
//             return;
//         }
//         try {
//             const docRef = doc(db, "reports", id);
//             const docSnap = await getDoc(docRef);
//             if (docSnap.exists()) {
//                 const issueData = docSnap.data();
//                 if (issueData.createdAt && typeof issueData.createdAt.toDate === 'function') {
//                     issueData.createdAt = issueData.createdAt.toDate().toLocaleString();
//                 }
//                 setIssue(issueData);
//                 setStatus(issueData.status || 'pending');
//                 setPriority(issueData.priority || 'Medium');
//             } else {
//                 setIssue(null);
//             }
//         } catch (error) {
//             console.error("Error fetching document:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchIssueDetails();
//     }, [id]);

//     const handleUpdate = async () => {
//         if (!id) return;
//         const docRef = doc(db, "reports", id);
//         try {
//             await updateDoc(docRef, {
//                 status: status,
//                 priority: priority
//             });
//             fetchIssueDetails(); 
//             alert('Issue updated successfully!');
//         } catch (error) {
//             console.error("Error updating document: ", error);
//             alert('Failed to update issue.');
//         }
//     };

//     if (loading) {
//         return <div className="p-4 text-center">Loading issue details...</div>;
//     }

//     if (!issue) {
//         return <div className="p-4 text-center">Issue not found.</div>;
//     }

//     const getLocationCoords = () => {
//         if (!issue.location || typeof issue.location !== 'string') return null;
//         const coords = issue.location.split(',').map(c => parseFloat(c.trim()));
//         if (coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1])) {
//             return coords;
//         }
//         return null;
//     };
//     const locationCoords = getLocationCoords();

//     return (
//         <div className="issue-details-page p-4">
//             <Link to="/issues" className="back-link mb-3 d-inline-block">
//                 <i className="bi bi-arrow-left me-2"></i> Back to Issues
//             </Link>
//             <h2 className="issue-id">{id}</h2>
//             <p className="issue-title">{issue.type || 'N/A'}</p>

//             <Row className="mt-4 g-4">
//                 <Col md={8}>
//                     <Card className="detail-card mb-4">
//                         <Card.Body>
//                             <h5>Complaint Details</h5>
//                             <div className="mb-3">
//                                 <h6 className="detail-label">Description</h6>
//                                 <p className="detail-text">{issue.description || 'N/A'}</p>
//                             </div>
//                             <div className="mb-3">
//                                 <h6 className="detail-label">Location</h6>
//                                 <p className="mb-1"><i className="bi bi-geo-alt-fill me-1"></i> {issue.location || 'N/A'}</p>
                                
//                                 {/* --- "VIEW ON MAP" LINK IS INCLUDED --- */}
//                                 {locationCoords && (
//                                     <Link 
//                                         to="/map" 
//                                         state={{ center: locationCoords }}
//                                         className="fw-bold"
//                                     >
//                                         View on Map
//                                     </Link>
//                                 )}
//                             </div>
//                             <div className="mb-3">
//                                 <h6 className="detail-label">Reported On</h6>
//                                 <p className="mb-0"><i className="bi bi-clock-fill me-1"></i> {issue.createdAt || 'N/A'}</p>
//                             </div>
//                         </Card.Body>
//                     </Card>

//                     {/* --- MEDIA & EVIDENCE CARD IS COMPLETE --- */}
//                     <Card className="detail-card mb-4">
//                         <Card.Body>
//                             <h5><i className="bi bi-paperclip me-2"></i>Media & Evidence</h5>
//                             {issue.image && (
//                                 <div className="media-container mb-3">
//                                     <div className="media-header d-flex justify-content-between align-items-center mb-2">
//                                         <span className="media-type"><i className="bi bi-image-fill me-1"></i> Photo</span>
//                                         <a href={issue.image} download target="_blank" rel="noopener noreferrer"><FaDownload /></a>
//                                     </div>
//                                     <img src={issue.image} alt="Issue evidence" className="img-fluid rounded border" />
//                                 </div>
//                             )}
//                             {issue.audio && (
//                                 <div className="media-container mt-4">
//                                     <div className="media-header d-flex justify-content-between align-items-center mb-2">
//                                         <span className="media-type"><i className="bi bi-mic-fill me-1"></i> Audio</span>
//                                         <a href={issue.audio} download target="_blank" rel="noopener noreferrer"><FaDownload /></a>
//                                     </div>
//                                     <audio controls className="w-100">
//                                         <source src={issue.audio} type="audio/webm" />
//                                         Your browser does not support the audio element.
//                                     </audio>
//                                 </div>
//                             )}
//                             {!issue.image && !issue.audio && (
//                                 <p className="text-muted">No media was provided for this issue.</p>
//                             )}
//                         </Card.Body>
//                     </Card>
//                 </Col>
//                 <Col md={4}>
//                     <div className="right-sidebar">
//                         {/* --- STATUS & PRIORITY CARD IS COMPLETE --- */}
//                         <Card className="sidebar-card status-card mb-4">
//                             <Card.Body>
//                                 <h5>Status & Priority</h5>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Update Status</Form.Label>
//                                     <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
//                                         <option value="pending">Pending</option>
//                                         <option value="Assigned">Assigned</option>
//                                         <option value="In Progress">In Progress</option>
//                                         <option value="Resolved">Resolved</option>
//                                     </Form.Select>
//                                 </Form.Group>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Update Priority</Form.Label>
//                                     <Form.Select value={priority} onChange={(e) => setPriority(e.target.value)}>
//                                         <option value="Low">Low</option>
//                                         <option value="Medium">Medium</option>
//                                         <option value="High">High</option>
//                                         <option value="Critical">Critical</option>
//                                     </Form.Select>
//                                 </Form.Group>
//                             </Card.Body>
//                         </Card>

//                         {/* --- ASSIGNED DEPARTMENT CARD IS INCLUDED --- */}
//                         <Card className="sidebar-card mb-4">
//                             <Card.Body>
//                                 <h5>Assigned Department</h5>
//                                 <p className="fw-bold mb-0">
//                                     <i className="bi bi-building-fill me-2"></i>
//                                     {issue.assignedDepartment || 'Unassigned'}
//                                 </p>
//                             </Card.Body>
//                         </Card>
                        
//                         <Button variant="primary" className="w-100" onClick={handleUpdate}>
//                             Save Changes
//                         </Button>
//                     </div>
//                 </Col>
//             </Row>
//         </div>
//     );
// };

// export default IssueDetailsPage;

// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { Card, Row, Col, Button, Form } from 'react-bootstrap';
// import { FaDownload } from 'react-icons/fa';
// import { doc, getDoc, updateDoc } from "firebase/firestore";
// import { db } from "../lib/firebaseconfig";
// import { departments } from '../lib/departments';

// const IssueDetailsPage = () => {
//     const { id } = useParams();
//     const [issue, setIssue] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [status, setStatus] = useState('');
//     const [priority, setPriority] = useState('');

//     const fetchIssueDetails = async () => {
//         if (!id) {
//             setLoading(false);
//             return;
//         }
//         try {
//             const docRef = doc(db, "reports", id);
//             const docSnap = await getDoc(docRef);
//             if (docSnap.exists()) {
//                 const issueData = docSnap.data();
//                 if (issueData.createdAt && typeof issueData.createdAt.toDate === 'function') {
//                     issueData.createdAt = issueData.createdAt.toDate().toLocaleString();
//                 }
//                 setIssue(issueData);
//                 setStatus(issueData.status || 'pending');
//                 setPriority(issueData.priority || 'Medium');
//             } else {
//                 setIssue(null);
//             }
//         } catch (error) {
//             console.error("Error fetching document:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchIssueDetails();
//     }, [id]);

//     const handleUpdate = async () => {
//         if (!id) return;
//         const docRef = doc(db, "reports", id);
//         try {
//             await updateDoc(docRef, {
//                 status: status,
//                 priority: priority
//             });
//             fetchIssueDetails(); 
//             alert('Issue updated successfully!');
//         } catch (error) {
//             console.error("Error updating document: ", error);
//             alert('Failed to update issue.');
//         }
//     };

//     if (loading) {
//         return <div className="p-4 text-center">Loading issue details...</div>;
//     }

//     if (!issue) {
//         return <div className="p-4 text-center">Issue not found.</div>;
//     }

//     // Helper function for the "View on Map" link
//     const getLocationCoords = () => {
//         if (!issue.location || typeof issue.location !== 'string') return null;
//         const coords = issue.location.split(',').map(c => parseFloat(c.trim()));
//         if (coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1])) {
//             return coords;
//         }
//         return null;
//     };
//     const locationCoords = getLocationCoords();

//     // Logic for the "Draft Email" button
//     const assignedDeptInfo = departments.find(dept => dept.name === issue.assignedDepartment);
//     const departmentEmail = assignedDeptInfo ? assignedDeptInfo.email : null;

//     let mailtoLink = '';
//     if (departmentEmail) {
//         const subject = `Regarding Issue ID: ${id} - ${issue.type}`;
//         const body = `
// Dear ${issue.assignedDepartment},

// Please review the following reported issue:

// - Issue ID: ${id}
// - Type: ${issue.type || 'N/A'}
// - Location: ${issue.location || 'N/A'}
// - Reported On: ${issue.createdAt || 'N/A'}
// - Priority: ${priority} 
// - Status: ${status}

// Description:
// ${issue.description || 'N/A'}

// Thank you.
//         `;
//         mailtoLink = `mailto:${departmentEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body.trim())}`;
//     }

//     return (
//         <div className="issue-details-page p-4">
//             <Link to="/issues" className="back-link mb-3 d-inline-block">
//                 <i className="bi bi-arrow-left me-2"></i> Back to Issues
//             </Link>
//             <h2 className="issue-id">{id}</h2>
//             <p className="issue-title">{issue.type || 'N/A'}</p>

//             <Row className="mt-4 g-4">
//                 <Col md={8}>
//                     <Card className="detail-card mb-4">
//                         <Card.Body>
//                             <h5>Complaint Details</h5>
//                             <div className="mb-3">
//                                 <h6 className="detail-label">Description</h6>
//                                 <p className="detail-text">{issue.description || 'N/A'}</p>
//                             </div>
                            
//                             {issue.tags && (
//                                 <div className="mb-3">
//                                     <h6 className="detail-label">Tags</h6>
//                                     <div className="d-flex flex-wrap">
//                                         {issue.tags.split(',').map((tag, index) => (
//                                             <span key={index} className="badge-tag me-2 mb-2">
//                                                 {tag.trim()}
//                                             </span>
//                                         ))}
//                                     </div>
//                                 </div>
//                             )}

//                             <div className="mb-3">
//                                 <h6 className="detail-label">Location</h6>
//                                 <p className="mb-1"><i className="bi bi-geo-alt-fill me-1"></i> {issue.location || 'N/A'}</p>
//                                 {locationCoords && (
//                                     <Link to="/map" state={{ center: locationCoords }} className="fw-bold">
//                                         View on Map
//                                     </Link>
//                                 )}
//                             </div>
//                             <div className="mb-3">
//                                 <h6 className="detail-label">Reported On</h6>
//                                 <p className="mb-0"><i className="bi bi-clock-fill me-1"></i> {issue.createdAt || 'N/A'}</p>
//                             </div>
//                         </Card.Body>
//                     </Card>

//                     <Card className="detail-card mb-4">
//                         <Card.Body>
//                             <h5><i className="bi bi-paperclip me-2"></i>Media & Evidence</h5>
//                             {issue.image && (
//                                 <div className="media-container mb-3">
//                                     <div className="media-header d-flex justify-content-between align-items-center mb-2">
//                                         <span className="media-type"><i className="bi bi-image-fill me-1"></i> Photo</span>
//                                         <a href={issue.image} download target="_blank" rel="noopener noreferrer"><FaDownload /></a>
//                                     </div>
//                                     <img src={issue.image} alt="Issue evidence" className="img-fluid rounded border" />
//                                 </div>
//                             )}
//                             {issue.audio && (
//                                 <div className="media-container mt-4">
//                                     <div className="media-header d-flex justify-content-between align-items-center mb-2">
//                                         <span className="media-type"><i className="bi bi-mic-fill me-1"></i> Audio</span>
//                                         <a href={issue.audio} download target="_blank" rel="noopener noreferrer"><FaDownload /></a>
//                                     </div>
//                                     <audio controls className="w-100">
//                                         <source src={issue.audio} type="audio/webm" />
//                                         Your browser does not support the audio element.
//                                     </audio>
//                                 </div>
//                             )}
//                             {!issue.image && !issue.audio && (
//                                 <p className="text-muted">No media was provided for this issue.</p>
//                             )}
//                         </Card.Body>
//                     </Card>
//                 </Col>
//                 <Col md={4}>
//                     <div className="right-sidebar">
//                         <Card className="sidebar-card status-card mb-4">
//                             <Card.Body>
//                                 <h5>Status & Priority</h5>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Update Status</Form.Label>
//                                     <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
//                                         <option value="pending">Pending</option>
//                                         <option value="Assigned">Assigned</option>
//                                         <option value="In Progress">In Progress</option>
//                                         <option value="Resolved">Resolved</option>
//                                     </Form.Select>
//                                 </Form.Group>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Update Priority</Form.Label>
//                                     <Form.Select value={priority} onChange={(e) => setPriority(e.target.value)}>
//                                         <option value="Low">Low</option>
//                                         <option value="Medium">Medium</option>
//                                         <option value="High">High</option>
//                                         <option value="Critical">Critical</option>
//                                     </Form.Select>
//                                 </Form.Group>
//                             </Card.Body>
//                         </Card>

//                         <Card className="sidebar-card mb-4">
//                             <Card.Body>
//                                 <h5>Assigned Department</h5>
//                                 <p className="fw-bold mb-2">
//                                     <i className="bi bi-building-fill me-2"></i>
//                                     {issue.assignedDepartment || 'Unassigned'}
//                                 </p>
//                                 {departmentEmail && (
//                                     <Button as="a" href={mailtoLink} variant="outline-primary" className="w-100 mt-2">
//                                         <i className="bi bi-envelope-fill me-2"></i>
//                                         Draft Email to Department
//                                     </Button>
//                                 )}
//                             </Card.Body>
//                         </Card>
                        
//                         <Button variant="primary" className="w-100" onClick={handleUpdate}>
//                             Save Changes
//                         </Button>
//                     </div>
//                 </Col>
//             </Row>
//         </div>
//     );
// };

// export default IssueDetailsPage;

// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { Card, Row, Col, Button, Form } from 'react-bootstrap';
// import { FaDownload } from 'react-icons/fa';
// import { doc, getDoc, updateDoc } from "firebase/firestore";
// import { db } from "../lib/firebaseconfig";
// import { departments } from '../lib/departments';

// const IssueDetailsPage = () => {
//     const { id } = useParams();
//     const [issue, setIssue] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [status, setStatus] = useState('');
//     const [priority, setPriority] = useState('');

//     const fetchIssueDetails = async () => {
//         if (!id) {
//             setLoading(false);
//             return;
//         }
//         try {
//             const docRef = doc(db, "reports", id);
//             const docSnap = await getDoc(docRef);
//             if (docSnap.exists()) {
//                 const issueData = docSnap.data();
//                 if (issueData.createdAt && typeof issueData.createdAt.toDate === 'function') {
//                     issueData.createdAt = issueData.createdAt.toDate().toLocaleString();
//                 }
//                 setIssue(issueData);
//                 setStatus(issueData.status || 'pending');
//                 setPriority(issueData.priority || 'Medium');
//             } else {
//                 setIssue(null);
//             }
//         } catch (error) {
//             console.error("Error fetching document:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchIssueDetails();
//     }, [id]);

//     const handleUpdate = async () => {
//         if (!id) return;
//         const docRef = doc(db, "reports", id);
//         try {
//             await updateDoc(docRef, {
//                 status: status,
//                 priority: priority
//             });
//             fetchIssueDetails(); 
//             alert('Issue updated successfully!');
//         } catch (error) {
//             console.error("Error updating document: ", error);
//             alert('Failed to update issue.');
//         }
//     };

//     if (loading) {
//         return <div className="p-4 text-center">Loading issue details...</div>;
//     }

//     if (!issue) {
//         return <div className="p-4 text-center">Issue not found.</div>;
//     }

//     // Helper function for the "View on Map" link
//     const getLocationCoords = () => {
//         if (!issue.location || typeof issue.location !== 'string') return null;
//         const coords = issue.location.split(',').map(c => parseFloat(c.trim()));
//         if (coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1])) {
//             return coords;
//         }
//         return null;
//     };
//     const locationCoords = getLocationCoords();

//     // Logic for the "Draft Email" button
//     const assignedDeptInfo = departments.find(dept => dept.name === issue.assignedDepartment);
//     const departmentEmail = assignedDeptInfo ? assignedDeptInfo.email : null;

//     let mailtoLink = '';
//     if (departmentEmail) {
//         const subject = `Regarding Issue ID: ${id} - ${issue.type}`;
//         const body = `
// Dear ${issue.assignedDepartment},

// Please review the following reported issue:

// - Issue ID: ${id}
// - Type: ${issue.type || 'N/A'}
// - Location: ${issue.location || 'N/A'}
// - Reported On: ${issue.createdAt || 'N/A'}
// - Priority: ${priority} 
// - Status: ${status}

// Description:
// ${issue.description || 'N/A'}

// Thank you.
//         `;
//         mailtoLink = `mailto:${departmentEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body.trim())}`;
//     }

//     return (
//         <div className="issue-details-page p-4">
//             <Link to="/issues" className="back-link mb-3 d-inline-block">
//                 <i className="bi bi-arrow-left me-2"></i> Back to Issues
//             </Link>
//             <h2 className="issue-id">{id}</h2>
//             <p className="issue-title">{issue.type || 'N/A'}</p>

//             <Row className="mt-4 g-4">
//                 <Col md={8}>
//                     <Card className="detail-card mb-4">
//                         <Card.Body>
//                             <h5>Complaint Details</h5>
//                             <div className="mb-3">
//                                 <h6 className="detail-label">Description</h6>
//                                 <p className="detail-text">{issue.description || 'N/A'}</p>
//                             </div>
                            
//                             {/* --- TAGS ARE DISPLAYED HERE --- */}
//                             {issue.tags && (
//                                 <div className="mb-3">
//                                     <h6 className="detail-label">Tags</h6>
//                                     <div className="d-flex flex-wrap">
//                                         {issue.tags.split(',').map((tag, index) => (
//                                             <span key={index} className="badge-tag me-2 mb-2">
//                                                 {tag.trim()}
//                                             </span>
//                                         ))}
//                                     </div>
//                                 </div>
//                             )}

//                             <div className="mb-3">
//                                 <h6 className="detail-label">Location</h6>
//                                 <p className="mb-1"><i className="bi bi-geo-alt-fill me-1"></i> {issue.location || 'N/A'}</p>
//                                 {locationCoords && (
//                                     <Link to="/map" state={{ center: locationCoords }} className="fw-bold">
//                                         View on Map
//                                     </Link>
//                                 )}
//                             </div>
//                             <div className="mb-3">
//                                 <h6 className="detail-label">Reported On</h6>
//                                 <p className="mb-0"><i className="bi bi-clock-fill me-1"></i> {issue.createdAt || 'N/A'}</p>
//                             </div>
//                         </Card.Body>
//                     </Card>

//                     <Card className="detail-card mb-4">
//                         <Card.Body>
//                             <h5><i className="bi bi-paperclip me-2"></i>Media & Evidence</h5>
//                             {issue.image && (
//                                 <div className="media-container mb-3">
//                                     <div className="media-header d-flex justify-content-between align-items-center mb-2">
//                                         <span className="media-type"><i className="bi bi-image-fill me-1"></i> Photo</span>
//                                         <a href={issue.image} download target="_blank" rel="noopener noreferrer"><FaDownload /></a>
//                                     </div>
//                                     <img src={issue.image} alt="Issue evidence" className="img-fluid rounded border" />
//                                 </div>
//                             )}
//                             {issue.audio && (
//                                 <div className="media-container mt-4">
//                                     <div className="media-header d-flex justify-content-between align-items-center mb-2">
//                                         <span className="media-type"><i className="bi bi-mic-fill me-1"></i> Audio</span>
//                                         <a href={issue.audio} download target="_blank" rel="noopener noreferrer"><FaDownload /></a>
//                                     </div>
//                                     <audio controls className="w-100">
//                                         <source src={issue.audio} type="audio/webm" />
//                                         Your browser does not support the audio element.
//                                     </audio>
//                                 </div>
//                             )}
//                             {!issue.image && !issue.audio && (
//                                 <p className="text-muted">No media was provided for this issue.</p>
//                             )}
//                         </Card.Body>
//                     </Card>
//                 </Col>
//                 <Col md={4}>
//                     <div className="right-sidebar">
//                         <Card className="sidebar-card status-card mb-4">
//                             <Card.Body>
//                                 <h5>Status & Priority</h5>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Update Status</Form.Label>
//                                     <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
//                                         <option value="pending">Pending</option>
//                                         <option value="Assigned">Assigned</option>
//                                         <option value="In Progress">In Progress</option>
//                                         <option value="Resolved">Resolved</option>
//                                     </Form.Select>
//                                 </Form.Group>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Update Priority</Form.Label>
//                                     <Form.Select value={priority} onChange={(e) => setPriority(e.target.value)}>
//                                         <option value="Low">Low</option>
//                                         <option value="Medium">Medium</option>
//                                         <option value="High">High</option>
//                                         <option value="Critical">Critical</option>
//                                     </Form.Select>
//                                 </Form.Group>
//                             </Card.Body>
//                         </Card>

//                         {/* --- DEPARTMENT AND EMAIL BUTTON ARE DISPLAYED HERE --- */}
//                         <Card className="sidebar-card mb-4">
//                             <Card.Body>
//                                 <h5>Assigned Department</h5>
//                                 <p className="fw-bold mb-2">
//                                     <i className="bi bi-building-fill me-2"></i>
//                                     {issue.assignedDepartment || 'Unassigned'}
//                                 </p>
//                                 {departmentEmail && (
//                                     <Button as="a" href={mailtoLink} variant="outline-primary" className="w-100 mt-2">
//                                         <i className="bi bi-envelope-fill me-2"></i>
//                                         Draft Email to Department
//                                     </Button>
//                                 )}
//                             </Card.Body>
//                         </Card>
                        
//                         <Button variant="primary" className="w-100" onClick={handleUpdate}>
//                             Save Changes
//                         </Button>
//                     </div>
//                 </Col>
//             </Row>
//         </div>
//     );
// };

// export default IssueDetailsPage;

// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { Card, Row, Col, Button, Form } from 'react-bootstrap';
// import { FaDownload } from 'react-icons/fa';
// import { doc, getDoc, updateDoc } from "firebase/firestore";
// import { db } from "../lib/firebaseconfig";
// import { departments } from '../lib/departments';

// const IssueDetailsPage = () => {
//     const { id } = useParams();
//     const [issue, setIssue] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [status, setStatus] = useState('');
//     const [priority, setPriority] = useState('');

//     const fetchIssueDetails = async () => {
//         if (!id) {
//             setLoading(false);
//             return;
//         }
//         try {
//             const docRef = doc(db, "reports", id);
//             const docSnap = await getDoc(docRef);
//             if (docSnap.exists()) {
//                 const issueData = docSnap.data();
//                 if (issueData.createdAt && typeof issueData.createdAt.toDate === 'function') {
//                     issueData.createdAt = issueData.createdAt.toDate().toLocaleString();
//                 }
//                 setIssue(issueData);
//                 setStatus(issueData.status || 'pending');
//                 setPriority(issueData.priority || 'Medium');
//             } else {
//                 setIssue(null);
//             }
//         } catch (error) {
//             console.error("Error fetching document:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchIssueDetails();
//     }, [id]);

//     const handleUpdate = async () => {
//         if (!id) return;
//         const docRef = doc(db, "reports", id);
//         try {
//             await updateDoc(docRef, {
//                 status: status,
//                 priority: priority
//             });
//             fetchIssueDetails(); 
//             alert('Issue updated successfully!');
//         } catch (error) {
//             console.error("Error updating document: ", error);
//             alert('Failed to update issue.');
//         }
//     };

//     if (loading) {
//         return <div className="p-4 text-center">Loading issue details...</div>;
//     }

//     if (!issue) {
//         return <div className="p-4 text-center">Issue not found.</div>;
//     }

//     // This logic now runs safely after the loading and issue checks
//     const getLocationCoords = () => {
//         if (!issue.location || typeof issue.location !== 'string') return null;
//         const coords = issue.location.split(',').map(c => parseFloat(c.trim()));
//         if (coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1])) {
//             return coords;
//         }
//         return null;
//     };
//     const locationCoords = getLocationCoords();

//     const assignedDeptInfo = departments.find(dept => dept.name === issue.assignedDepartment);
//     const departmentEmail = assignedDeptInfo ? assignedDeptInfo.email : null;

//     let mailtoLink = '';
//     if (departmentEmail) {
//         const subject = `Regarding Issue ID: ${id} - ${issue.type}`;
//         const body = `
// Dear ${issue.assignedDepartment},

// Please review the following reported issue:

// - Issue ID: ${id}
// - Type: ${issue.type || 'N/A'}
// - Location: ${issue.location || 'N/A'}
// - Reported On: ${issue.createdAt || 'N/A'}
// - Priority: ${priority} 
// - Status: ${status}

// Description:
// ${issue.description || 'N/A'}

// Thank you.
//         `;
//         mailtoLink = `mailto:${departmentEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body.trim())}`;
//     }

//     return (
//         <div className="issue-details-page p-4">
//             <Link to="/issues" className="back-link mb-3 d-inline-block">
//                 <i className="bi bi-arrow-left me-2"></i> Back to Issues
//             </Link>
//             <h2 className="issue-id">{id}</h2>
//             <p className="issue-title">{issue.type || 'N/A'}</p>

//             <Row className="mt-4 g-4">
//                 <Col md={8}>
//                     <Card className="detail-card mb-4">
//                         <Card.Body>
//                             <h5>Complaint Details</h5>
//                             <div className="mb-3">
//                                 <h6 className="detail-label">Description</h6>
//                                 <p className="detail-text">{issue.description || 'N/A'}</p>
//                             </div>
                            
//                             {issue.tags && (
//                                 <div className="mb-3">
//                                     <h6 className="detail-label">Tags</h6>
//                                     <div className="d-flex flex-wrap">
//                                         {issue.tags.split(',').map((tag, index) => (
//                                             <span key={index} className="badge-tag me-2 mb-2">
//                                                 {tag.trim()}
//                                             </span>
//                                         ))}
//                                     </div>
//                                 </div>
//                             )}

//                             <div className="mb-3">
//                                 <h6 className="detail-label">Location</h6>
//                                 <p className="mb-1"><i className="bi bi-geo-alt-fill me-1"></i> {issue.location || 'N/A'}</p>
//                                 {locationCoords && (
//                                     <Link to="/map" state={{ center: locationCoords }} className="fw-bold">
//                                         View on Map
//                                     </Link>
//                                 )}
//                             </div>
//                             <div className="mb-3">
//                                 <h6 className="detail-label">Reported On</h6>
//                                 <p className="mb-0"><i className="bi bi-clock-fill me-1"></i> {issue.createdAt || 'N/A'}</p>
//                             </div>
//                         </Card.Body>
//                     </Card>

//                     <Card className="detail-card mb-4">
//                         <Card.Body>
//                             <h5><i className="bi bi-paperclip me-2"></i>Media & Evidence</h5>
//                             {issue.image && (
//                                 <div className="media-container mb-3">
//                                     <div className="media-header d-flex justify-content-between align-items-center mb-2">
//                                         <span className="media-type"><i className="bi bi-image-fill me-1"></i> Photo</span>
//                                         <a href={issue.image} download target="_blank" rel="noopener noreferrer"><FaDownload /></a>
//                                     </div>
//                                     <img src={issue.image} alt="Issue evidence" className="img-fluid rounded border" />
//                                 </div>
//                             )}
//                             {issue.audio && (
//                                 <div className="media-container mt-4">
//                                     <div className="media-header d-flex justify-content-between align-items-center mb-2">
//                                         <span className="media-type"><i className="bi bi-mic-fill me-1"></i> Audio</span>
//                                         <a href={issue.audio} download target="_blank" rel="noopener noreferrer"><FaDownload /></a>
//                                     </div>
//                                     <audio controls className="w-100">
//                                         <source src={issue.audio} type="audio/webm" />
//                                         Your browser does not support the audio element.
//                                     </audio>
//                                 </div>
//                             )}
//                             {!issue.image && !issue.audio && (
//                                 <p className="text-muted">No media was provided for this issue.</p>
//                             )}
//                         </Card.Body>
//                     </Card>
//                 </Col>
//                 <Col md={4}>
//                     <div className="right-sidebar">
//                         <Card className="sidebar-card status-card mb-4">
//                             <Card.Body>
//                                 <h5>Status & Priority</h5>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Update Status</Form.Label>
//                                     <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
//                                         <option value="pending">Pending</option>
//                                         <option value="Assigned">Assigned</option>
//                                         <option value="In Progress">In Progress</option>
//                                         <option value="Resolved">Resolved</option>
//                                     </Form.Select>
//                                 </Form.Group>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Update Priority</Form.Label>
//                                     <Form.Select value={priority} onChange={(e) => setPriority(e.target.value)}>
//                                         <option value="Low">Low</option>
//                                         <option value="Medium">Medium</option>
//                                         <option value="High">High</option>
//                                         <option value="Critical">Critical</option>
//                                     </Form.Select>
//                                 </Form.Group>
//                             </Card.Body>
//                         </Card>

//                         <Card className="sidebar-card mb-4">
//                             <Card.Body>
//                                 <h5>Assigned Department</h5>
//                                 <p className="fw-bold mb-2">
//                                     <i className="bi bi-building-fill me-2"></i>
//                                     {issue.assignedDepartment || 'Unassigned'}
//                                 </p>
//                                 {departmentEmail && (
//                                     <Button as="a" href={mailtoLink} variant="outline-primary" className="w-100 mt-2">
//                                         <i className="bi bi-envelope-fill me-2"></i>
//                                         Draft Email to Department
//                                     </Button>
//                                 )}
//                             </Card.Body>
//                         </Card>
                        
//                         <Button variant="primary" className="w-100" onClick={handleUpdate}>
//                             Save Changes
//                         </Button>
//                     </div>
//                 </Col>
//             </Row>
//         </div>
//     );
// };

// export default IssueDetailsPage;

// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { Card, Row, Col, Button, Form } from 'react-bootstrap';
// import { FaDownload } from 'react-icons/fa';
// import { doc, getDoc, updateDoc } from "firebase/firestore";
// import { db } from "../lib/firebaseconfig";
// import { departments } from '../lib/departments';

// const IssueDetailsPage = () => {
//     const { id } = useParams();
//     const [issue, setIssue] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [status, setStatus] = useState('');
//     const [priority, setPriority] = useState('');

//     const fetchIssueDetails = async () => {
//         if (!id) {
//             setLoading(false);
//             return;
//         }
//         try {
//             const docRef = doc(db, "reports", id);
//             const docSnap = await getDoc(docRef);
//             if (docSnap.exists()) {
//                 const issueData = docSnap.data();
//                 if (issueData.createdAt && typeof issueData.createdAt.toDate === 'function') {
//                     issueData.createdAt = issueData.createdAt.toDate().toLocaleString();
//                 }
//                 setIssue(issueData);
//                 setStatus(issueData.status || 'pending');
//                 setPriority(issueData.priority || 'Medium');
//             } else {
//                 setIssue(null);
//             }
//         } catch (error) {
//             console.error("Error fetching document:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchIssueDetails();
//     }, [id]);

//     const handleUpdate = async () => {
//         if (!id) return;
//         const docRef = doc(db, "reports", id);
//         try {
//             await updateDoc(docRef, {
//                 status: status,
//                 priority: priority
//             });
//             fetchIssueDetails(); 
//             alert('Issue updated successfully!');
//         } catch (error) {
//             console.error("Error updating document: ", error);
//             alert('Failed to update issue.');
//         }
//     };

//     if (loading) {
//         return <div className="p-4 text-center">Loading issue details...</div>;
//     }

//     if (!issue) {
//         return <div className="p-4 text-center">Issue not found.</div>;
//     }

//     const getLocationCoords = () => {
//         if (!issue.location || typeof issue.location !== 'string') return null;
//         const coords = issue.location.split(',').map(c => parseFloat(c.trim()));
//         if (coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1])) {
//             return coords;
//         }
//         return null;
//     };
//     const locationCoords = getLocationCoords();

//     const assignedDeptInfo = departments.find(dept => dept.name === issue.assignedDepartment);
//     const departmentEmail = assignedDeptInfo ? assignedDeptInfo.email : null;

//     // This logic now creates a specific Gmail URL
//     let gmailLink = '';
//     if (departmentEmail) {
//         const subject = `Regarding Issue ID: ${id} - ${issue.type}`;
//         const body = `
// Dear ${issue.assignedDepartment},

// Please review the following reported issue:

// - Issue ID: ${id}
// - Type: ${issue.type || 'N/A'}
// - Location: ${issue.location || 'N/A'}
// - Reported On: ${issue.createdAt || 'N/A'}
// - Priority: ${priority} 
// - Status: ${status}

// Description:
// ${issue.description || 'N/A'}

// Thank you.
//         `;
//         const gmailBaseUrl = "https://mail.google.com/mail/?view=cm&fs=1";
//         gmailLink = `${gmailBaseUrl}&to=${encodeURIComponent(departmentEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body.trim())}`;
//     }

//     return (
//         <div className="issue-details-page p-4">
//             <Link to="/issues" className="back-link mb-3 d-inline-block">
//                 <i className="bi bi-arrow-left me-2"></i> Back to Issues
//             </Link>
//             <h2 className="issue-id">{id}</h2>
//             <p className="issue-title">{issue.type || 'N/A'}</p>

//             <Row className="mt-4 g-4">
//                 <Col md={8}>
//                     <Card className="detail-card mb-4">
//                         <Card.Body>
//                             <h5>Complaint Details</h5>
//                             <div className="mb-3">
//                                 <h6 className="detail-label">Description</h6>
//                                 <p className="detail-text">{issue.description || 'N/A'}</p>
//                             </div>
                            
//                             {issue.tags && (
//                                 <div className="mb-3">
//                                     <h6 className="detail-label">Tags</h6>
//                                     <div className="d-flex flex-wrap">
//                                         {issue.tags.split(',').map((tag, index) => (
//                                             <span key={index} className="badge-tag me-2 mb-2">
//                                                 {tag.trim()}
//                                             </span>
//                                         ))}
//                                     </div>
//                                 </div>
//                             )}

//                             <div className="mb-3">
//                                 <h6 className="detail-label">Location</h6>
//                                 <p className="mb-1"><i className="bi bi-geo-alt-fill me-1"></i> {issue.location || 'N/A'}</p>
//                                 {locationCoords && (
//                                     <Link to="/map" state={{ center: locationCoords }} className="fw-bold">
//                                         View on Map
//                                     </Link>
//                                 )}
//                             </div>
//                             <div className="mb-3">
//                                 <h6 className="detail-label">Reported On</h6>
//                                 <p className="mb-0"><i className="bi bi-clock-fill me-1"></i> {issue.createdAt || 'N/A'}</p>
//                             </div>
//                         </Card.Body>
//                     </Card>

//                     <Card className="detail-card mb-4">
//                         <Card.Body>
//                             <h5><i className="bi bi-paperclip me-2"></i>Media & Evidence</h5>
//                             {issue.image && (
//                                 <div className="media-container mb-3">
//                                     <div className="media-header d-flex justify-content-between align-items-center mb-2">
//                                         <span className="media-type"><i className="bi bi-image-fill me-1"></i> Photo</span>
//                                         <a href={issue.image} download target="_blank" rel="noopener noreferrer"><FaDownload /></a>
//                                     </div>
//                                     <img src={issue.image} alt="Issue evidence" className="img-fluid rounded border" />
//                                 </div>
//                             )}
//                             {issue.audio && (
//                                 <div className="media-container mt-4">
//                                     <div className="media-header d-flex justify-content-between align-items-center mb-2">
//                                         <span className="media-type"><i className="bi bi-mic-fill me-1"></i> Audio</span>
//                                         <a href={issue.audio} download target="_blank" rel="noopener noreferrer"><FaDownload /></a>
//                                     </div>
//                                     <audio controls className="w-100">
//                                         <source src={issue.audio} type="audio/webm" />
//                                         Your browser does not support the audio element.
//                                     </audio>
//                                 </div>
//                             )}
//                             {!issue.image && !issue.audio && (
//                                 <p className="text-muted">No media was provided for this issue.</p>
//                             )}
//                         </Card.Body>
//                     </Card>
//                 </Col>
//                 <Col md={4}>
//                     <div className="right-sidebar">
//                         <Card className="sidebar-card status-card mb-4">
//                             <Card.Body>
//                                 <h5>Status & Priority</h5>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Update Status</Form.Label>
//                                     <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
//                                         <option value="pending">Pending</option>
//                                         <option value="Assigned">Assigned</option>
//                                         <option value="In Progress">In Progress</option>
//                                         <option value="Resolved">Resolved</option>
//                                     </Form.Select>
//                                 </Form.Group>
//                                 <Form.Group className="mb-3">
//                                     <Form.Label>Update Priority</Form.Label>
//                                     <Form.Select value={priority} onChange={(e) => setPriority(e.target.value)}>
//                                         <option value="Low">Low</option>
//                                         <option value="Medium">Medium</option>
//                                         <option value="High">High</option>
//                                         <option value="Critical">Critical</option>
//                                     </Form.Select>
//                                 </Form.Group>
//                             </Card.Body>
//                         </Card>

//                         <Card className="sidebar-card mb-4">
//                             <Card.Body>
//                                 <h5>Assigned Department</h5>
//                                 <p className="fw-bold mb-2">
//                                     <i className="bi bi-building-fill me-2"></i>
//                                     {issue.assignedDepartment || 'Unassigned'}
//                                 </p>
//                                 {departmentEmail && (
//                                     <Button 
//                                         as="a" 
//                                         href={gmailLink} 
//                                         target="_blank" 
//                                         rel="noopener noreferrer"
//                                         variant="outline-primary" 
//                                         className="w-100 mt-2"
//                                     >
//                                         <i className="bi bi-envelope-fill me-2"></i>
//                                         Draft Email in Gmail
//                                     </Button>
//                                 )}
//                             </Card.Body>
//                         </Card>
                        
//                         <Button variant="primary" className="w-100" onClick={handleUpdate}>
//                             Save Changes
//                         </Button>
//                     </div>
//                 </Col>
//             </Row>
//         </div>
//     );
// };

// export default IssueDetailsPage;

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Row, Col, Button, Form } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../lib/firebaseconfig";
import { departments } from '../lib/departments';

const IssueDetailsPage = () => {
    const { id } = useParams();
    const [issue, setIssue] = useState(null);
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState('');
    const [priority, setPriority] = useState('');

    const fetchIssueDetails = async () => {
        if (!id) {
            setLoading(false);
            return;
        }
        try {
            const docRef = doc(db, "reports", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const issueData = docSnap.data();
                if (issueData.createdAt && typeof issueData.createdAt.toDate === 'function') {
                    issueData.createdAt = issueData.createdAt.toDate().toLocaleString();
                }
                setIssue(issueData);
                setStatus(issueData.status || 'pending');
                setPriority(issueData.priority || 'Medium');
            } else {
                setIssue(null);
            }
        } catch (error) {
            console.error("Error fetching document:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchIssueDetails();
    }, [id]);

    const handleUpdate = async () => {
        if (!id) return;
        const docRef = doc(db, "reports", id);
        try {
            await updateDoc(docRef, {
                status: status,
                priority: priority
            });
            fetchIssueDetails(); 
            alert('Issue updated successfully!');
        } catch (error) {
            console.error("Error updating document: ", error);
            alert('Failed to update issue.');
        }
    };

    if (loading) {
        return <div className="p-4 text-center">Loading issue details...</div>;
    }

    if (!issue) {
        return <div className="p-4 text-center">Issue not found.</div>;
    }

    const getLocationCoords = () => {
        if (!issue.location || typeof issue.location !== 'string') return null;
        const coords = issue.location.split(',').map(c => parseFloat(c.trim()));
        if (coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1])) {
            return coords;
        }
        return null;
    };
    const locationCoords = getLocationCoords();

    const assignedDeptInfo = departments.find(dept => dept.name === issue.assignedDepartment);
    const departmentEmail = assignedDeptInfo ? assignedDeptInfo.email : null;

    let gmailLink = '';
    if (departmentEmail) {
        const subject = `Regarding Issue ID: ${id} - ${issue.type}`;
        
        // Conditionally add the image link to the body text
        const imageLinkText = issue.image 
            ? `\n- View Attached Image: ${issue.image}` 
            : '';

        const body = `
Dear ${issue.assignedDepartment},

Please review the following reported issue:

- Issue ID: ${id}
- Type: ${issue.type || 'N/A'}
- Location: ${issue.location || 'N/A'}
- Reported On: ${issue.createdAt || 'N/A'}
- Priority: ${priority} 
- Status: ${status}${imageLinkText}

Description:
${issue.description || 'N/A'}

Thank you.
        `;
        const gmailBaseUrl = "https://mail.google.com/mail/?view=cm&fs=1";
        gmailLink = `${gmailBaseUrl}&to=${encodeURIComponent(departmentEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body.trim())}`;
    }

    return (
        <div className="issue-details-page p-4">
            <Link to="/issues" className="back-link mb-3 d-inline-block">
                <i className="bi bi-arrow-left me-2"></i> Back to Issues
            </Link>
            <h2 className="issue-id">{id}</h2>
            <p className="issue-title">{issue.type || 'N/A'}</p>

            <Row className="mt-4 g-4">
                <Col md={8}>
                    <Card className="detail-card mb-4">
                        <Card.Body>
                            <h5>Complaint Details</h5>
                            <div className="mb-3">
                                <h6 className="detail-label">Description</h6>
                                <p className="detail-text">{issue.description || 'N/A'}</p>
                            </div>
                            
                            {issue.tags && (
                                <div className="mb-3">
                                    <h6 className="detail-label">Tags</h6>
                                    <div className="d-flex flex-wrap">
                                        {issue.tags.split(',').map((tag, index) => (
                                            <span key={index} className="badge-tag me-2 mb-2">
                                                {tag.trim()}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="mb-3">
                                <h6 className="detail-label">Location</h6>
                                <p className="mb-1"><i className="bi bi-geo-alt-fill me-1"></i> {issue.location || 'N/A'}</p>
                                {locationCoords && (
                                    <Link to="/map" state={{ center: locationCoords }} className="fw-bold">
                                        View on Map
                                    </Link>
                                )}
                            </div>
                            <div className="mb-3">
                                <h6 className="detail-label">Reported On</h6>
                                <p className="mb-0"><i className="bi bi-clock-fill me-1"></i> {issue.createdAt || 'N/A'}</p>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card className="detail-card mb-4">
                        <Card.Body>
                            <h5><i className="bi bi-paperclip me-2"></i>Media & Evidence</h5>
                            {issue.image && (
                                <div className="media-container mb-3">
                                    <div className="media-header d-flex justify-content-between align-items-center mb-2">
                                        <span className="media-type"><i className="bi bi-image-fill me-1"></i> Photo</span>
                                        <a href={issue.image} download target="_blank" rel="noopener noreferrer"><FaDownload /></a>
                                    </div>
                                    <img src={issue.image} alt="Issue evidence" className="img-fluid rounded border" />
                                </div>
                            )}
                            {issue.audio && (
                                <div className="media-container mt-4">
                                    <div className="media-header d-flex justify-content-between align-items-center mb-2">
                                        <span className="media-type"><i className="bi bi-mic-fill me-1"></i> Audio</span>
                                        <a href={issue.audio} download target="_blank" rel="noopener noreferrer"><FaDownload /></a>
                                    </div>
                                    <audio controls className="w-100">
                                        <source src={issue.audio} type="audio/webm" />
                                        Your browser does not support the audio element.
                                    </audio>
                                </div>
                            )}
                            {!issue.image && !issue.audio && (
                                <p className="text-muted">No media was provided for this issue.</p>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <div className="right-sidebar">
                        <Card className="sidebar-card status-card mb-4">
                            <Card.Body>
                                <h5>Status & Priority</h5>
                                <Form.Group className="mb-3">
                                    <Form.Label>Update Status</Form.Label>
                                    <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
                                        <option value="pending">Pending</option>
                                        <option value="Assigned">Assigned</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Resolved">Resolved</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Update Priority</Form.Label>
                                    <Form.Select value={priority} onChange={(e) => setPriority(e.target.value)}>
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                        <option value="Critical">Critical</option>
                                    </Form.Select>
                                </Form.Group>
                            </Card.Body>
                        </Card>

                        <Card className="sidebar-card mb-4">
                            <Card.Body>
                                <h5>Assigned Department</h5>
                                <p className="fw-bold mb-2">
                                    <i className="bi bi-building-fill me-2"></i>
                                    {issue.assignedDepartment || 'Unassigned'}
                                </p>
                                {departmentEmail && (
                                    <Button 
                                        as="a" 
                                        href={gmailLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        variant="outline-primary" 
                                        className="w-100 mt-2"
                                    >
                                        <i className="bi bi-envelope-fill me-2"></i>
                                        Draft Email in Gmail
                                    </Button>
                                )}
                            </Card.Body>
                        </Card>
                        
                        <Button variant="primary" className="w-100" onClick={handleUpdate}>
                            Save Changes
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default IssueDetailsPage;