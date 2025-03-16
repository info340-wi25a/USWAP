import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Container } from 'react-bootstrap';
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
      <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
    </Container>
  );
};

export default Login;