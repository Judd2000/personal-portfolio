import './App.css';

import { useEffect } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from './pages/Experience';
import Layout from './components/Layout';


const App = () => {
    useEffect(() => {
        document.title = 'Nathaniel Judd Portfolio'
    }, []);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/projects',
                    element: < Projects />
                },
                {
                    path: '/experience',
                    element: <Experience />
                }
            ]
        }
    ])
  return (
    <RouterProvider router={router} />
  );
};

export default App;
