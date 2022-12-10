import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ContactMe from '../ContactMe/ContactMe';
import Home from '../Home/Home';
import Main from '../Main/Main';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contactMe',
                element: <ContactMe></ContactMe>
            }
        ]
    }
])