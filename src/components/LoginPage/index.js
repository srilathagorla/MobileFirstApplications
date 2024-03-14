import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import './index.css'
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'srilatha' && password === 'srilu0703') {
      onLogin(true);
    } else {
       setError('* Invalid username or password');
    }
  };

  return (
    <Container className=" container ">
      <div className='container shadow'>
        <h1>Sample Requirements</h1>
        <p>Username:  srilatha</p>
        <p>Password:  srilu0703</p>
    </div>
      <div className="container name">
        <h1 className='name '>Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail" className='mb-3'>
            <Form.Label>Username:</Form.Label>
            <Form.Control className='name'
            type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className='mb-3'>
            <Form.Label>Password:</Form.Label>
            <Form.Control className='name' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          {error && <div className="text-danger error">{error}</div>}
          
          <Button variant="primary" type="submit" className="button" >
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;