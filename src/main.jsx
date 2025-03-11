import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import App from './App.jsx'

const root = createRoot(document.getElementById('root'))

root.render(<BrowserRouter><App /></BrowserRouter>);

