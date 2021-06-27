import One from './page/One';
import Two from './page/Two';
import Login from './page/Login';

const routes = [
    { path: '/', component: One, exact : true },
    { path: '/two', component: Two,},
    { path: '/login', component: Login,},
  ];
  
  export default routes;