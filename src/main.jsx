import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { inject } from '@vercel/analytics';
import './index.css'
import router from './router/Router';

inject();

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)