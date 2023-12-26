import { RouterProvider } from 'react-router-dom';
import router from './Routes';

const App = () => {
  // fragments
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;