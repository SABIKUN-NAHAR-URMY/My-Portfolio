import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AllProjects from '../AllProjects/AllProjects';
import ContactMe from '../ContactMe/ContactMe';
import Home from '../Home/Home';
import LensQueen from '../LensQueen/LensQueen';
import Main from '../Main/Main';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import TechEdu from '../TechEdu/TechEdu';
import WatchBD from '../WatchBD/WatchBD';

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
            },
            {
                path: '/projectDetails',
                element: <ProjectDetails></ProjectDetails>
            },
            {
                path: '/allProjects',
                element: <AllProjects></AllProjects>
            },
            {
                path: '/watchBD',
                element: <WatchBD></WatchBD>
            },
            {
                path: '/lensQueen',
                element: <LensQueen></LensQueen>
            },
            {
                path: '/techEdu',
                element: <TechEdu></TechEdu>
            }
        ]
    }
])