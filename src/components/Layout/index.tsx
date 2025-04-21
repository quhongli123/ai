import { useLocation, Outlet } from 'react-router-dom';
import BackButton from '../BackButton';

const Layout = () => {
  const location = useLocation();
  
  return (
    <>
      {location.pathname !== '/home' && <BackButton />}
      <Outlet />
    </>
  );
};

export default Layout; 