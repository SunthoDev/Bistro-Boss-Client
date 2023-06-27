import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Component/Home/Home";
import Main from "../Component/MainHome/Main";
import OurMenu from "../Component/OurMenu/OurMenu";
import OurShop from "../Component/OurShop/OurShop";
import Login from "../Component/AuthoncationSystem/Login/Login";
import Register from "../Component/AuthoncationSystem/Register/Register";
import Dashboard from "../Component/LayOut/Dashbord/Dashboard";
import PrivateRoute from "../Component/AuthoncationSystem/PrivateRoute/PrivateRoute";
import MyCart from "../Component/LayOut/MyCart/MyCart";
import AllUser from "../Component/LayOut/AdminPanel/AllUser/AllUser";
import AddItemAdmin from "../Component/LayOut/AdminPanel/AddItems/AddItemAdmin";
import AdminRoute from "./AdminRoute";
import ManageItem from "../Component/LayOut/AdminPanel/ManageItems/ManageItem";
import ManageBooking from "../Component/LayOut/AdminPanel/ManageBooking/ManageBooking";
import MyPayment from "../Component/LayOut/UserPanel/MyPayment/MyPayment";
import AdminHome from "../Component/LayOut/AdminPanel/AdminHome/AdminHome";
import PaymentHistry from "../Component/LayOut/UserPanel/PaymentHistory/PaymentHistry";
import UserHome from "../Component/LayOut/UserPanel/UserHome/UserHome";
import AddReview from "../Component/LayOut/UserPanel/AddReview/AddReview";
import Contact from "../Component/Contact/Contact";


export let route = createBrowserRouter([

    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/",
                element: <Main></Main>
            },
            {
                path: "/ourMenu",
                element:<OurMenu></OurMenu>
            },
            {
                path: "/ourShop/:category",
                element: <OurShop></OurShop>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            }
        ]
    },

    // dashboard route alada 
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "/dashboard/myCart",
                element: <MyCart></MyCart>
            },
            {
                path:"/dashboard/adminHome",
                element:<AdminRoute> <AdminHome></AdminHome> </AdminRoute>
            },
            {
                path: "/dashboard/allUser",
                element: <AllUser></AllUser>
            },
            {
                path: "/dashboard/paymentHistory",
                element: <PaymentHistry></PaymentHistry>
            },
            {
                path: "/dashboard/addItems",
                element: <AdminRoute> <AddItemAdmin></AddItemAdmin> </AdminRoute>
            },
            {
                path: "/dashboard/manageItems",
                element: <AdminRoute> <ManageItem></ManageItem> </AdminRoute>
            },
            {
                path: "/dashboard/manageBooking",
                element: <AdminRoute> <ManageBooking></ManageBooking> </AdminRoute>
            },
            {
                path: "/dashboard/myPayment",
                element: <MyPayment></MyPayment>
            },
            {
                path: "/dashboard/userHome",
                element:<PrivateRoute> <UserHome></UserHome> </PrivateRoute>
            },
            {
                path: "/dashboard/addReview",
                element: <AddReview></AddReview>
            }
        ]
    }
])




//   https://portfolio-e1927.web.app/








