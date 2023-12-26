import { createBrowserRouter } from 'react-router-dom';
import Router from './pages/Router';
import Home from './components/Home';
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage'
import { Projects } from './components/Projects';
import Login from './pages/Login';
import Slider from './pages/Slider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Router />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <AboutMe />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'slider',
        element: <Slider />,
      },
      {
        path: '*',
        element: <NoPage />,
      },
    ],
  },
]);

export default router;