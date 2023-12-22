import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Contact from '../layouts/Contact';
import Login from '../layouts/Login';
import SignUp from '../layouts/Signup';
import Dashbord from '../layouts/Dashbord';
import ToDo from '../layouts/ToDo';
import Task from '../layouts/Task';
import PrivateRoute from './PrivateRoute';



const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/contactUs',
                element: <Contact/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/signUp",
                element:<SignUp/>
            }
        ]
    },
    {
        path:'dashbord',
        element:<PrivateRoute><Dashbord></Dashbord></PrivateRoute>,
        children:[
          {
            path:'dashbord/task',
            element:<PrivateRoute><Task></Task></PrivateRoute>
          },
          {
            path:'dashbord/todo',
            element:<PrivateRoute><ToDo></ToDo></PrivateRoute>
          }
        ]
      }  
])

export default routes;
