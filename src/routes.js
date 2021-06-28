import One from './page/One';
import Two from './page/Two';
import Login from './page/Login';
import Login2 from './page/Login2';

const routes = [
    { path: '/', component: One, exact : true },
    { path: '/two', component: Two,},
    { path: '/login', component: Login,},
    { path: '/login2', component: Login2,},
  ];
  
  export default routes;