import React from 'react';
import * as RiIcons from 'react-icons/ri';
import * as IoIcons from 'react-icons/io';
import * as TiIcons from 'react-icons/ti';

export const SidebarData =[
    {
        title: 'Today',
        path: '/',
        icon: <TiIcons.TiWeatherPartlySunny size={30} />,
        cName: 'nav-text text-light' 
    },
    {
        title: 'Hourly',
        path: '/hourly',
        icon: <RiIcons.Ri24HoursFill size={30} />,
        cName: 'nav-text text-light' 
    },
    {
        title: '7-Day',
        path: '/7day',
        icon: <IoIcons.IoIosToday size={30} />,
        cName: 'nav-text text-light' 
    },
    {
        title: 'Air Quality',
        path: '/air',
        icon: <RiIcons.RiWindyLine size={30} />,
        cName: 'nav-text text-light' 
    },
    {
        title: 'Covid',
        path: '/covid',
        icon: <RiIcons.RiSurgicalMaskFill size={30} />,
        cName: 'nav-text text-light' 
    }
]