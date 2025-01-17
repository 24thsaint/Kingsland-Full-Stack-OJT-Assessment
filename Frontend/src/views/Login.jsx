import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {
  return (
    <Container className='h-100 d-flex flex-column align-items-center justify-content-center'>
      <h2>Login</h2>
      <Form>
        <Form.Group className='mb-3' controlId='formUsername'>
          <Form.Label>Username</Form.Label>
          <Form.Control type='text' placeholder='Enter Username' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
