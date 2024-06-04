import HomePage from '../views/pages/home';
import TarianPage from '../views/pages/tarian';
import AlatMusik from '../views/pages/alat-musik';

const routes = {
  '/': HomePage, // default page
  '/home': HomePage,
  '/tarian': TarianPage,
  '/musik': AlatMusik,
};

export default routes;
