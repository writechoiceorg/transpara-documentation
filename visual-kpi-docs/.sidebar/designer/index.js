module.exports = [
  {
    type: 'doc',
    id: 'visual-kpi-design/overview',
    // label: 'How to Use the Documentation',
    // className: '',
  },
  {
    type: 'category',
    label: "Installation and Setup",
    // className: '',
    link: {
      type: 'doc',
      id: 'visual-kpi-design/installation-and-setup/overview',
    },
    items: [
      'visual-kpi-design/installation-and-setup/installation',
      'visual-kpi-design/installation-and-setup/connecting',
      'visual-kpi-design/installation-and-setup/ui-tour',
      'visual-kpi-design/installation-and-setup/basic-setup',
    ],
  },
  
  {
    type: 'category',
    label: "Authoring",
    // className: '',
    link: {
      type: 'doc',
      id: 'visual-kpi-design/authoring/overview',
    },
    items: [
      'visual-kpi-design/authoring/profiles-dashboards',
      'visual-kpi-design/authoring/contacts-alerts',
      'visual-kpi-design/authoring/features-config',
      'visual-kpi-design/authoring/advanced',
    ],
  },
  {
    type: 'category',
    label: "Design",
    // className: '',
    link: {
      type: 'doc',
      id: 'visual-kpi-design/design/overview',
    },
    items: [

      {
        type: 'category',
        label: "Groups",
         //className: '',
        link: {
          type: 'doc',
          id: 'visual-kpi-design/design/groups',
        },
        items: [
          'visual-kpi-design/design/query-builder',
          'visual-kpi-design/design/group-maps',
        ],
      },

        {
          type: 'category',
          label: "KPIs",
           //className: '',
          link: {
            type: 'doc',
            id: 'visual-kpi-design/design/kpis',
          },
          items: [
            'visual-kpi-design/design/kpis-sources',
            'visual-kpi-design/design/spc-kpis',
            'visual-kpi-design/design/kpis-trends',
          ],
        },

        {
          type: 'category',
          label: "Charts",
           //className: '',
          link: {
            type: 'doc',
            id: 'visual-kpi-design/design/charts',
          },
          items: [
            'visual-kpi-design/design/bar-chart',
            'visual-kpi-design/design/gantt-chart',
            'visual-kpi-design/design/pareto-chart',
            'visual-kpi-design/design/pie-chart',
            'visual-kpi-design/design/xy-plots',
            'visual-kpi-design/design/query-based-chart',
            'visual-kpi-design/design/box-plots',
          ],
        },

        'visual-kpi-design/design/tables',
        'visual-kpi-design/design/trends',

    ],
  },
  // {
  //   type: 'category',
  //   label: "Reference Tables",
  //   // className: '',
  //   link: {
  //     type: 'doc',
  //     id: 'visual-kpi-design/reference-tables',
  //   },
  //   items: [
  //     'visual-kpi-design/reference-tables/website-reference',
  //     'visual-kpi-design/reference-tables/profiles-dashboards-reference',
  //     'visual-kpi-design/reference-tables/ranges-dates-reference',
  //     'visual-kpi-design/reference-tables/contacts-alerts-reference',
  //     'visual-kpi-design/reference-tables/features-configuration-reference',
  //     'visual-kpi-design/reference-tables/advanced-reference',
  //     'visual-kpi-design/reference-tables/groups-reference',
  //     'visual-kpi-design/reference-tables/kpis-reference',
  //     'visual-kpi-design/reference-tables/charts-reference',
  //     'visual-kpi-design/reference-tables/tables-reference',
  //     'visual-kpi-design/reference-tables/functions-reference',
  //   ],
  // },
  /*{
    type: 'doc',
    id: 'visual-kpi-design/best-practices',
    // label: 'How to Use the Documentation',
    // className: '',
  },*/
]