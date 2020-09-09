
import React from 'react';
import { Icon, Button, Avatar, Badge, Image} from '@stack-ui/components';


export const columns = [
    {
      cell: row => <Icon size={16} icon="endorsed" />,
      allowOverflow: true,
      button: true,
      width: '56px', // custom width for icon button
    },
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
      grow: 2,
    },
    {
      name: 'Type',
      selector: 'type',
      sortable: true,
    },
    {
      name: 'Calories (g)',
      selector: 'calories',
      sortable: true,
      right: true,
    },
    {
      name: 'Fat (g)',
      selector: 'fat',
      sortable: true,
      right: true,
    },
    {
      name: 'Carbs (g)',
      selector: 'carbs',
      sortable: true,
      right: true,
    },
    {
      name: 'Protein (g)',
      selector: 'protein',
      sortable: true,
      right: true,
    },
    {
      name: 'Sodium (mg)',
      selector: 'sodium',
      sortable: true,
      right: true,
    },
    {
      name: 'Calcium (%)',
      selector: 'calcium',
      sortable: true,
      right: true,
    },
    {
      name: 'Iron (%)',
      selector: 'iron',
      sortable: true,
      right: true,
    },
    {
        cell: () => <Button btnType="primary" btnVariant="contained" icon="add"> </Button>,
        button: true,
    },
  ];

  export const TransData = [
    {
      name: 'Satish Maurya',
      card: '**** 9058',
      date: '29.03.2018',
      amount: '$6,542.32',
      status: "paid",
      avatar: "https://lh3.googleusercontent.com/a-/AOh14Ghswtzu3rnt1tWVdCnc9xEBjRbq9eFNo0u6DnKNLQ=s56-c-k-no"
    },
    {
        name: 'Vaishali Chaudhary',
        card: '**** 6950',
        date: '29.03.2018',
        amount: '$6,542.32',
        status: "fail",
        avatar: "https://lh5.googleusercontent.com/-3jvJBiUD2Js/AAAAAAAAAAI/AAAAAAAAAZM/pLD1BJTWE7cKHrwqmCRjRr6Q6GzkytmEgCLcDEAE/s64-c-k-no-mo/photo.jpg"
    },
    {
        name: 'Kajol Singh',
        card: '**** 8415',
        date: '29.03.2018',
        amount: '$6,542.32',
        status: "paid",
        avatar: "https://lh6.googleusercontent.com/-1UpYgUv_Zx8/AAAAAAAAAAI/AAAAAAAAAlg/OvpwHSip_HkeNFPh9Q6Nj46J4cidHn7SwCLcDEAE/s80-c-k-no-mo/photo.jpg"
    },
    {
        name: 'Shubham Mishra',
        card: '**** 2015',
        date: '29.03.2018',
        amount: '$6,542.32',
        status: "fail",
        avatar: "https://lh5.googleusercontent.com/-13SFS5l_xoE/AAAAAAAAAAI/AAAAAAAABIA/wrANEDB_9n4kcITtO1lWF-KQkCUmfNz7wCLcDEAE/s80-c-k-no-mo/photo.jpg"
    },

  ]

  export const TransColumns = [
    {
      cell: row => <Avatar size="sm" src={row.avatar} alt="smallAvatar" />,
      allowOverflow: true,
      button: true,
      width: '56px', // custom width for icon button
    },
    {
        name: 'NAME',
        selector: 'name',
        sortable: true,
        grow: 2,
      },
    {
        name: 'CARD',
        selector: 'card',
        sortable: true,
        grow: 2,
    },
    {
        name: 'DATE',
        selector: 'date',
        sortable: true,
        grow: 2,
      },
      {
        name: 'AMOUNT',
        selector: 'amount',
        sortable: true,
        grow: 2,
      },
      {
        name: 'STATUS',
        cell: row => <>{row.status==='paid'?<Badge variant="success">Paid</Badge>:<Badge variant="danger">Failed</Badge>}</>,
        selector: 'status'
      }
]