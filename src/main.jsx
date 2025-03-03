import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import '../project-draft/css/style.css';
import App from './App.jsx'


const root = createRoot(document.getElementById('root'))

root.render(<BrowserRouter><App /></BrowserRouter>);

