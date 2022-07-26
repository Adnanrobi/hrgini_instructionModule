import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import WorkIcon from '@mui/icons-material/Work';
import SettingsIcon from '@mui/icons-material/Settings';

export const SidebarData = [
    {
        header: "Main"
    },
    {
        title: "Dashboard",
        icon: <DashboardIcon/>,
        link:"/Dashboard"
    },
    {
        header: "Authentication"
    },
    {
        title: "Authentication",
        icon: <VpnKeyIcon/>,
        link:"/Authentication"
    },
    {
        header: "Applicant"
    },
    {
        title: "Applicant",
        icon: <AccountBoxIcon/>,
        link:"/Applicant"
    },
    {
        header: "Job"
    },
    {
        title: "Job",
        icon: <WorkIcon/>,
        link:"/Job"
    },
    {
        title: "Job Settings",
        icon: <SettingsIcon/>,
        link:"/JobSettings"
    }
]