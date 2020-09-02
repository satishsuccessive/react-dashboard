import React from 'react';
import { Badge } from '@stack-ui/components';

export const sidebarNav = [
    {
      sidebarText: "Dashboards",
      iconLeft: "dashboard",
      iconRight:"chevron-right",
      dropDown: [
        {
          navText: "Dashboards 1",
          navLink: "/dashboard",
          navIcon: "dropDown1.svg",
        },
        {
          navText: "Dashboards 2",
          navIcon: "dropDown1.svg",
        },
      ],
    },
      {
        sidebarText: "Apps",
        iconLeft: "cube",
        iconRight:"chevron-right",
      },
      {
        sidebarText: "Layouts",
        iconLeft: "duplicate",
        iconRight:"chevron-right",
      },
      {
        sidebarText: "Email",
        iconLeft: "envelope",
        iconRight:"chevron-right",
    },{
        sidebarText: "Pages",
        iconLeft: "document",
        iconRight:"chevron-right",
        dropDown: [
            {
              navText: "Log In",
              navLink: "/",
              navIcon: "dropDown1.svg",
            },
            {
              navText: "Register",
              navLink: "/register",
              navIcon: "dropDown1.svg",
            },
            {
                navText: "Recover Password",
                navLink: "/recover-password",
                navIcon: "dropDown1.svg",
              },
              {
                navText: "Lock Screen",
                navIcon: "dropDown1.svg",
              },
              {
                navText: "Logout",
                navLink: "/logout",
                navIcon: "dropDown1.svg",
              },
              {
                navText: "Confirm Mail",
                navLink: "/confirm-mail",
                navIcon: "dropDown1.svg",
              },
              {
                navText: "Error 404",
                navLink: "/dropDown1",
                navIcon: "dropDown1.svg",
              },
              {
                navText: "Error 505",
                navLink: "/internal500",
                navIcon: "dropDown1.svg",
              },
          ],
    },
    {
        sidebarText: "Extra Pages",
        iconLeft: "symbol-diamond",
        iconRight:<Badge variant="warning">New</Badge> ,
    },{
        sidebarText: "UI Elements",
        iconLeft: "briefcase",
        iconRight:"chevron-right",
    },{
        sidebarText: "Widgets",
        iconLeft: "cube",
        iconRight:"chevron-right",
    },{
        sidebarText: "Admin UI",
        iconLeft: "volume-up",
        iconRight: <Badge variant="info">Hot</Badge> ,
    },{
        sidebarText: "Icons",
        sidebarLink: "/dashboard",
        iconLeft: "cube",
        iconRight:"chevron-right",
    },{
        sidebarText: "Forms",
        iconLeft: "cube",
        sidebarLink: "/dashboard",
        iconRight:"chevron-right",
    },{
        sidebarText: "Tables",
        iconLeft: "th",
        sidebarLink: "/dashboard",
        iconRight:"chevron-right",
    },{
        sidebarText: "Charts",
        iconLeft: "chart",
        sidebarLink: "/dashboard",
        iconRight:"chevron-right",
    },{
        sidebarText: "Maps",
        iconLeft: "map",
        iconRight:"chevron-right",
    }
  ];
  