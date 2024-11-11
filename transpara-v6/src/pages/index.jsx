import React from 'react';
// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import Translate, { translate } from '@docusaurus/Translate';

// import styles from './index.module.css';
import '../css/HomePage.css';
import '../css/sidebar.css';
import '../css/navbar.css';
import '../css/svg.css';
import '../css/callout.css';
import '../css/iconCards.css';
import '../css/linkCards.css';
import HomepageHeader from '../components/Homepage/Header';
import Card from '../components/Homepage/Card';

const mainCard = {
  title: "How to use the documentation",
  content: "Find out all available user paths Visual KPI documentation provides. Here you get a complete overvier of what you find on the documentation and how to take the most of it.",
  button: "Learn more",
  route: "/docs/how-to-use-the-documentation",
}

const essentials = [
  {
    title: "Setup and automation",
    content: "Configure your system for Visual KPI software instalattion and importing your existing KPIs.",
    button: "Learn more",
    route: "/docs/",
  },
  // {
  //   title: "Automation",
  //   content: "Check how to import your existing KPIs to Visual KPI seamnsly.",
  //   button: "Learn more",
  //   route: "/docs/",
  // },
  {
    title: "Design",
    content: "Create KPIs, charts, tables and define the hierarchy of your data.",
    button: "Learn more",
    route: "/docs/",
    imageClass: "image1",
  },
  {
    title: "Use Visual KPI",
    content: "Explore all features and functionalities available on Visual KPI.",
    title: "Tutorial",
    content: "Here you find a tutorial.",
    button: "Learn more",
    route: "/docs/",
    imageClass: "image2",
  },
  {
    title: "Viewers",
    content: "Here you find viewers.",
    button: "Learn more",
    route: "/docs/",
    imageClass: "image3",
  }
]

const allOptions = [
  {
    title: "Setup and Instalation",
    content: "Prepare your system and intall the Visual KPI software.",
    button: "Learn more",
    route: "/docs/",
  },
  {
    title: "Automation",
    content: "Check how to import your existing KPIs to Visual KPI seamnsly.",
    button: "Learn more",
    route: "/docs/",
  },
  {
    title: "Interfaces",
    content: "Use existing interfaces or create new ones to connect new data sources into your system.",
    button: "Learn more",
    route: "/docs/",
  },
  {
    title: "Design",
    content: "Create KPIs, charts, tables and define the hierarchy of your data.",
    button: "Learn more",
    route: "/docs/",
  },
  {
    title: "Use Visual KPI",
    content: "Explore all features and functionalities available on Visual KPI.",
    button: "Learn more",
    route: "/docs/",
  }
]

const first3Cards = [
  {
    title: "Setup and Instalation",
    content: "Prepare your system and intall the Visual KPI software.",
    button: "Learn more",
    route: "/docs/",
    imageClass: "image1",
  },
  {
    title: "Automation",
    content: "Check how to import your existing KPIs to Visual KPI seamnsly.",
    button: "Learn more",
    route: "/docs/",
    imageClass: "image2",
  },
  {
    title: "Interfaces",
    content: "Use existing interfaces or create new ones to connect new data sources into your system.",
    button: "Learn more",
    route: "/docs/",
    imageClass: "image3",
  },
]

const otherUSers = [
  {
    title: "Design",
    content: "Create KPIs, charts, tables and define the hierarchy of your data.",
    button: "Learn more",
    route: "/docs/",
  },
  {
    title: "Use Visual KPI",
    content: "Explore all features and functionalities available on Visual KPI.",
    button: "Learn more",
    route: "/docs/",
  }
]



const second2Cards = [
  {
    title: "Installation",
    content: "How to install.",
    button: "Learn more",
    route: "/docs/",
    imageClass: "image4",
  },
  {
    title: "Tutorial",
    content: "Here you find a tutorial.",
    button: "Learn more",
    route: "/docs/",
    imageClass: "image5",
  },
]

const cardsContent = [
  /*{
    title: "Setup and Instalation",
    content: "Prepare your system and intall the Visual KPI software.",
    button: "Learn more",
    route: "/docs/",
    imageClass: "image1",
  },*/
  {
    title: "Use Visual KPI",
    content: "Explore all features and functionalities available on Visual KPI.",
    route: "/",
    imageClass: "image1",
  },
  {
    title: "Design",
    content: "Create KPIs, charts, tables and define the hierarchy of your data.",
    route: "/",
    imageClass: "image3",
  },
  {
    title: "Interfaces",
    content: "Use existing interfaces or create new ones to connect new data sources into your system.",
    button: "Learn more",
    route: "/",
    imageClass: "image2",
  },
  {
    title: "Setup and Instalation",
    content: "Prepare your system and intall the Visual KPI software.",
    route: "/",
    imageClass: "image4",
  },
  {
    title: "Tutorial",
    content: "Check our free and online courses.",
    route: "https://www.transpara.com/training/",
    imageClass: "image5",
  },
  {
    title: "FAQ",
    content: "Access Transpara Visual KPI to find answers for your questions.",
    route: "/",
    imageClass: "image6",
  },
]

export default function Home() {
  // const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={'Docs'}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div className="cards_container first_cards_section">
          {
            [...cardsContent].map((card) => (
              <Card key={card.title} card={ card } className="card"/>
            ))
          }
        </div>
      </main>
    </Layout>
  );
}
