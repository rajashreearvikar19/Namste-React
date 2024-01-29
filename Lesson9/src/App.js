import React, { lazy,Suspense } from 'react'
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Error from './components/Error';
import RestrauantMenu from './components/RestrauantMenu';

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Outlet />
        </div>
    )
}

const Grocery= lazy(()=> import("./components/Grocery"));

const appRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <AppLayout />,
            errorElement: <Error />,
            children: [
                {
                    path: "/",
                    element: <Body />,
                },
                {
                    path: "/about",
                    element: <About />,
                },
                {
                    path: "/contact",
                    element: <ContactUs />,
                },
                {
                    path: "/restaurant/:resId",
                    element: <RestrauantMenu />,
                },
                {
                path: '/grocery', 
                element: <Suspense fallback={<h1>Loading ...........</h1>}><Grocery/></Suspense>
                }
            ]
        },

    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);