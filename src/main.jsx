import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../project-draft/css/style.css';
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

const root = createRoot(document.getElementById('root'))

root.render(<BrowserRouter><App /></BrowserRouter>);

