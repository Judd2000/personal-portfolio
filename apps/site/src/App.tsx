import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from './pages/Experience';
import Layout from './components/Layout';


// TODO: IMPLEMENT ROUTER, API and SERVER (with guards against repeated calls)`
const App = () => {
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
