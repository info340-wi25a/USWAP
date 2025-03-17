import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Container, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import saveUserData from './SaveUserData';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();  // Initialize the useNavigate hook

  const firebaseUIConfig = {
    signInOptions: [
      GoogleAuthProvider.PROVIDER_ID,
      { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
    ],
    signInFlow: 'popup',
    credentialHelper: 'none',
    callbacks: {
      signInSuccessWithAuthResult: (authResult) => {
        saveUserData(authResult.user); // Save user data to Firebase Realtime Database
        navigate('/');  // Redirect to the home page after successful login
        return false;  // Prevent the default redirect behavior
      }
    }
  };

  return (
    <Container className="my-4 p-4 rounded">
      <Card className="my-4 p-4 rounded p-3 bg-light">
        <Card.Body>
          <h1>Logging In</h1>
          <Card.Text>Logging in to USWAP allows you to purchase items, add items to your wishlist, and view your purchase history. Either sign in using a google account, or make an account with an email address.</Card.Text>
          <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;