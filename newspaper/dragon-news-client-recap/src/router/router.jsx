import { Navigate, createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../components/Pages/Home/Home';
import NewsLayout from '../layouts/NewsLayout';
import NewsDetails from '../components/Pages/NewsDetails/NewsDetails';
import LoginLayout from '../layouts/LoginLayout';
import Login from '../components/Pages/Login/Login';
import Register from '../components/Pages/Register/Register';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Navigate to={`/news/0`}></Navigate>
            },
            {
                path:"/news/:id",
                element:<Home></Home>,
                loader:({params}) => fetch(`https://dragon-website-server-recap-souravbsk.vercel.app/news/${params.id}`)
            },
        ]
    },
    {
        path:"/newsDetails",
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path:":id",
                element:<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
                loader:({params}) => fetch(`https://dragon-website-server-recap-souravbsk.vercel.app/categoryNews/${params.id}`)

            }
        ]
        
    },
    {
        path:"/",
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    }
])

export default router;