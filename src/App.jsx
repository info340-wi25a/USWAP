import '../project-draft/css/style.css';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
<<<<<<< HEAD
import ListingPage from './components/ListingPage';
import AddItem from './components/AddItem';



/*const App = () => (
  <div>
    <Header />
   
    <Footer />
  </div>
);
*/

function App(props) {
  return (
        <div>
    <Header />
    <Routes>
      <Route path="/" element={<h2>Welcome to USWAP</h2>} />
      <Route path="/purchase" element={<h2>Buying Page</h2>} />
      <Route path="/listings" element={<ListingPage items={props.items} />} />
      <Route path="/add-item" element={<AddItem />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    <Footer />
  </div>
  );
};
export default App;









=======
import "./index.css";


export default function App() {
  return (
    <>
      <Header />
      <FAQ />
      <Footer />
    </>
  );
}
>>>>>>> f8b149126813ba3e288ff613c1f6f037fb8c5ca6
