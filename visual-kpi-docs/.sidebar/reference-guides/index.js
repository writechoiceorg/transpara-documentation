module.exports = [
  /*{
    type: 'doc',
    id: 'references/references',
    label: 'References',
  },*/
  {
    type: 'category',
    label: "Setup and Administration",
    link: {
      type: 'doc',
      id: 'references/setup-and-administration/setup-and-administration-reference',
    },
    items: [
      {
        type: 'category',
        label: "AF Database Keywords",
        items: [
          'references/setup-and-administration/af-database-keywords/kpi-keywords',
          'references/setup-and-administration/af-database-keywords/trend-keywords',
          'references/setup-and-administration/af-database-keywords/table-keywords',
          'references/setup-and-administration/af-database-keywords/group-keywords',
          'references/setup-and-administration/af-database-keywords/value-keywords',
        ],
      },
      {
        type: 'category',
        label: "SQL Database Keywords",
        items: [
          'references/setup-and-administration/sql-database-keywords/kpi-keywords',
          'references/setup-and-administration/sql-database-keywords/table-keywords',
          'references/setup-and-administration/sql-database-keywords/group-keywords',
          'references/setup-and-administration/sql-database-keywords/charts-keywords',
        ],
      },
    ],
  },
  {
    type: 'category',
    label: "Visual KPI Designer",
    link: {
      type: 'doc',
      id: 'references/visual-kpi-designer/visual-kpi-designer-references',
    },
    items: [
      {
        type: 'category',
        label: "Data Limits",
        items: [
          'references/visual-kpi-designer/data-limits/data-limits-for-attributes',
          'references/visual-kpi-designer/data-limits/data-limits-for-default-ranges',
          'references/visual-kpi-designer/data-limits/data-limits-for-groups',
          'references/visual-kpi-designer/data-limits/data-limits-for-interfaces',
          'references/visual-kpi-designer/data-limits/data-limits-for-kpis',
          'references/visual-kpi-designer/data-limits/data-limits-for-links',
          'references/visual-kpi-designer/data-limits/data-limits-for-trend-ranges',
          'references/visual-kpi-designer/data-limits/data-limits-for-trends',
          'references/visual-kpi-designer/data-limits/data-limits-for-website-configuration'
        ],
      },
      /*{ 
        type: 'doc',
        id: 'references/visual-kpi-designer/groups-attributes-keywords/groups-attributes-keywords',
      },*/
      {
        type: 'category',
        label: "Attributes & Keywords",
        items: [
          'references/visual-kpi-designer/attributes-and-keywords/attributes-and-keywords-bar-charts',
          'references/visual-kpi-designer/attributes-and-keywords/attributes-and-keywords-embedded-content',
          'references/visual-kpi-designer/attributes-and-keywords/attributes-and-keywords-gantt-charts',
          'references/visual-kpi-designer/attributes-and-keywords/attributes-and-keywords-groups',
          'references/visual-kpi-designer/attributes-and-keywords/attributes-and-keywords-kpis',
          'references/visual-kpi-designer/attributes-and-keywords/attributes-and-keywords-managed-trends',
          'references/visual-kpi-designer/attributes-and-keywords/attributes-and-keywords-pareto-charts',
          'references/visual-kpi-designer/attributes-and-keywords/attributes-and-keywords-pie-charts',
          'references/visual-kpi-designer/attributes-and-keywords/attributes-and-keywords-tables',
          'references/visual-kpi-designer/attributes-and-keywords/attributes-and-keywords-xy-plots'
        ],
      },
      {
        type: 'category',
        label: "Site Settings",
        items: [
          'references/visual-kpi-designer/site-settings/site-settings-alerts',
          'references/visual-kpi-designer/site-settings/site-settings-chart-color',
          'references/visual-kpi-designer/site-settings/site-settings-chart-dates',
          'references/visual-kpi-designer/site-settings/site-settings-chart-ranges',
          'references/visual-kpi-designer/site-settings/site-settings-contacts',
          'references/visual-kpi-designer/site-settings/site-settings-dashboards',
          'references/visual-kpi-designer/site-settings/site-settings-default-ranges',
          'references/visual-kpi-designer/site-settings/site-settings-event-ranges',
          'references/visual-kpi-designer/site-settings/site-settings-features',
          'references/visual-kpi-designer/site-settings/site-settings-kpi-status',
          'references/visual-kpi-designer/site-settings/site-settings-profile-groups',
          'references/visual-kpi-designer/site-settings/site-settings-profiles',
          'references/visual-kpi-designer/site-settings/site-settings-visual-kpi-website',
        ],
      },
      {
        type: 'category',
        label: "Advanced Site Settings",
        items: [
          'references/visual-kpi-designer/advanced-site-settings/advanced-site-settings-attributes',
          'references/visual-kpi-designer/advanced-site-settings/advanced-site-settings-interfaces',
          'references/visual-kpi-designer/advanced-site-settings/advanced-site-settings-nav-bar-links',
          'references/visual-kpi-designer/advanced-site-settings/advanced-site-settings-site-rollups'
        ],
      },
      
    ],
  },
  
]