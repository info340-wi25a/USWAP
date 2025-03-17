import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import saveUserData from './SaveUserData';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError(null);
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      saveUserData(userCredential.user); // Save user data
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const firebaseUIConfig = {
    signInOptions: [
      GoogleAuthProvider.PROVIDER_ID,
      { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
    ],
    signInFlow: 'popup',
    credentialHelper: 'none',
    callbacks: {
      signInSuccessWithAuthResult: (authResult) => {
        saveUserData(authResult.user);
        navigate('/');
        return false; 
      }
    }
  };

  return (
    <Container className="my-4 p-4 rounded">
      <Card className="my-4 p-4 rounded p-3 bg-light">
        <Card.Body>
          <h1>Logging In</h1>
          <Card.Text>
            Logging in to USWAP allows you to purchase items, add items to your wishlist, and view your purchase history.
            You can sign in using Google, or log in with your email and password.
          </Card.Text>
          <Form onSubmit={handleEmailLogin}>
            {error && <Alert variant="danger">{error}</Alert>}

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Enter password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </Form.Group>

            <Button variant="primary" type="submit">Login</Button>
          </Form>

          <hr />

          <h1>Signing Up</h1>
          <Card.Text>
            Click the Google button below to login or sign up with your google account, or click the email button below to sign up using your email.
          </Card.Text>
          <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
