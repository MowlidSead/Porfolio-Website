import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Router = () => {
  return (
    <div className='webContent'>
      {/* HEADER */}

      <Header />

      {/* OUTLET */}
      <Outlet />

      {/* FOOTER */}

      <Footer/>
    </div>
  );
};

export default Router;