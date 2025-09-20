import React from 'react';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';

const ProfilePage = () => {
    return (
        <div className="profile-page">
            <h2 className="main-title">Admin Profile</h2>
            
            <Row className="mt-4">
                <Col md={8}>
                    <Card>
                        <Card.Header>
                            <h5 className="mb-0">Profile Details</h5>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center mb-4">
                                <i className="bi bi-person-circle display-4 me-3 text-secondary"></i>
                                <div>
                                    <h4 className="mb-0">Admin User</h4>
                                    <p className="text-muted mb-0">Administrator</p>
                                </div>
                            </div>

                            <Form>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column sm="3">Full Name</Form.Label>
                                    <Col sm="9">
                                        <Form.Control type="text" defaultValue="Admin User" readOnly />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column sm="3">Email</Form.Label>
                                    <Col sm="9">
                                        <Form.Control type="email" defaultValue="admin@bmccorp.gov.in" readOnly />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column sm="3">Role</Form.Label>
                                    <Col sm="9">
                                        <Form.Control type="text" defaultValue="Administrator" readOnly />
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>

                    <Card className="mt-4">
                        <Card.Header>
                            <h5 className="mb-0">Change Password</h5>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Current Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter current password" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter new password" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Confirm New Password</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm new password" />
                                </Form.Group>
                                <Button variant="primary">Update Password</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default ProfilePage;