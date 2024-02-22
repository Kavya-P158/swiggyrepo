import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Restocard from './components/Restocard';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
// import { About } from './components/About';
import { Contact } from './components/Contact';
import { Error } from './components/Error';
import { Link } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';
/*header
  ->nav
  ->logo
  */

//This is a comment
const Grocery = lazy(() => import("./components/Grocery"))
const About = lazy(() => import("./components/About"))

const Applayout = () => {
    return (
        <Provider store={appStore}>
            <div className='app'>
                <Header />
                <Outlet />

            </div>
        </Provider>

    )
}
const appRoute = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading about...please wait</h1>}><About /></Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/Grocery",
                element: <Suspense fallback={<h1>Loading....Please wait</h1>}><Grocery /></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }
            , {
                path: "/cart",
                element: <Cart />
            }

        ],
        errorElement: <Error />
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute} />);
