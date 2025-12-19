import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home.tsx";
import SendMessage from "./pages/SendMessage.tsx";
import Projects from "./pages/Projects.tsx";
import Experience from './pages/Experience.tsx';
import Layout from './components/Layout.tsx';


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
                },
                {
                    path: '/message',
                    element: <SendMessage />
                }
            ]
        }
    ])
  return (
    <RouterProvider router={router} />
  );
};

export default App;
