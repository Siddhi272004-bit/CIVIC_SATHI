// import React from 'react';
// import { Table, Dropdown } from 'react-bootstrap';

// // This data can eventually be moved to a database, but for now, we'll keep it here.
// const departments = [
//     {
//         id: 'PCB-01',
//         name: 'Pollution Control Board',
//         email: 'pollution.control@bmccorp.gov.in',
//     },
//     {
//         id: 'RTO-02',
//         name: 'Transport Department (RTO)',
//         email: 'transport.rto@bmccorp.gov.in',
//     },
//     {
//         id: 'ACVS-03',
//         name: 'Animal Control & Veterinary Services',
//         email: 'animal.control@bmccorp.gov.in',
//     },
//     {
//         id: 'PWD-04',
//         name: 'Public Works Department (PWD)',
//         email: 'pwd@bmccorp.gov.in',
//     },
//     {
//         id: 'WSS-05',
//         name: 'Water Supply & Sewerage Department',
//         email: 'water.sewerage@bmccorp.gov.in',
//     },
//     {
//         id: 'HSD-06',
//         name: 'Health & Sanitation Department',
//         email: 'health.sanitation@bmccorp.gov.in',
//     },
//     {
//         id: 'SLD-07',
//         name: 'Street Light Department',
//         email: 'street.light@bmccorp.gov.in',
//     },
//     {
//         id: 'HPD-08',
//         name: 'Horticulture & Parks Department',
//         email: 'horticulture.parks@bmccorp.gov.in',
//     },
//     {
//         id: 'TPD-09',
//         name: 'Town Planning Department',
//         email: 'town.planning@bmccorp.gov.in',
//     },
//     {
//         id: 'ED-10',
//         name: 'Electricity Department',
//         email: 'electricity.dept@bmccorp.gov.in',
//     },
//     {
//         id: 'ED-11',
//         name: 'General Grievance Cell / Public Relations Office',
//         email: 'grievance.cell@bmccorp.gov.in',
//     }
// ];

// const DepartmentsPage = () => {
//     return (
//         <div className="departments-page">
//             <h2 className="main-title">Departments Directory</h2>
//             <p className="subtitle">List of all municipal departments and their contact information.</p>
            
//             <Table hover responsive className="departments-table mt-4">
//                 <thead>
//                     <tr>
//                         <th>#</th>
//                         <th>Department ID</th>
//                         <th>Department Name</th>
//                         <th>Email Address</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {departments.map((dept, index) => (
//                         <tr key={dept.id}>
//                             <td>{index + 1}</td>
//                             <td>{dept.id}</td>
//                             <td>{dept.name}</td>
//                             <td><a href={`mailto:${dept.email}`}>{dept.email}</a></td>
//                             <td>
//                                 <Dropdown>
//                                     <Dropdown.Toggle variant="light" className="action-toggle">
//                                         <i className="bi bi-three-dots"></i>
//                                     </Dropdown.Toggle>
//                                     <Dropdown.Menu align="end">
//                                         <Dropdown.Item href="#">
//                                             <i className="bi bi-pencil-fill me-2"></i> Edit
//                                         </Dropdown.Item>
//                                         <Dropdown.Item href="#">
//                                             <i className="bi bi-eye-fill me-2"></i> View Associated Issues
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

// export default DepartmentsPage;

import React from 'react';
import { Table, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { departments } from '../lib/departments';

const DepartmentsPage = () => {
    const navigate = useNavigate();

    const handleViewIssues = (departmentName) => {
        // Encode the department name to make it safe for a URL
        const encodedDeptName = encodeURIComponent(departmentName);
        navigate(`/issues?department=${encodedDeptName}`);
    };

    return (
        <div className="departments-page">
            <h2 className="main-title">Departments Directory</h2>
            <p className="subtitle">List of all municipal departments and their contact information.</p>
            
            <Table hover responsive className="departments-table mt-4">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Department ID</th>
                        <th>Department Name</th>
                        <th>Email Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {departments.map((dept, index) => (
                        <tr key={dept.id}>
                            <td>{index + 1}</td>
                            <td>{dept.id}</td>
                            <td>{dept.name}</td>
                            <td><a href={`mailto:${dept.email}`}>{dept.email}</a></td>
                            <td>
                                <Dropdown>
                                    <Dropdown.Toggle variant="light" className="action-toggle">
                                        <i className="bi bi-three-dots"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu align="end">
                                        <Dropdown.Item href="#">
                                            <i className="bi bi-pencil-fill me-2"></i> Edit
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleViewIssues(dept.name)}>
                                            <i className="bi bi-eye-fill me-2"></i> View Associated Issues
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

export default DepartmentsPage;