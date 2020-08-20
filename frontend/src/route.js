import HomePage from './components/HomePage';
import Login from './components/Login';
import Logout from './components/Logout';
import Users from './components/Users';
import Messages from './components/Messages';
import AboutUs from './components/About';

export default [
    {
        path: '/',
        Component: HomePage
    },
    {
        path: '/home',
        Component: HomePage
    },
    {
        path: '/login',
        Component: Login
    },
    {
        path: '/logout',
        Component: Logout
    },
    {
        path: '/users',
        Component: Users
    },
    {
        path: '/messages',
        Component: Messages
    },
    {
        path: '/about-us',
        Component: AboutUs
    },

];
