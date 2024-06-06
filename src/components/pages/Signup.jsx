import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Card, Form, Button } from "react-bootstrap";

function Signup() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      const temp = { ...prev };
      temp[name] = value;
      return temp;
    });
  };

  const handleSubmit = () => {};

  return (
    <Container className="mt-5" style={{ maxWidth: "600px" }}>
      <Card>
        <Card.Body>
          <Card.Title className="text-center">Sign Up</Card.Title>
          <Form onSubmit={handleSubmit} className="d-flex flex-column gap-2">
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                size="lg"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                size="lg"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                size="lg"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button type="submit" className="mt-3" size="lg">
              Signup
            </Button>
            <div className="mt-2">
              Already have an account? <Link to="/login">Login</Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Signup;
