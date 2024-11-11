import React from 'react';
import clsx from 'clsx';
import HomeBtn from '../buttons/HomeBtn';
import styles from '../../pages/index.module.css';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';



export default function HomepageHeader() {
  // const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container header_container">
        <div className="first_column">
          <h1>Visual KPI Docs</h1>
          <p>Everything in One Place, From Any Place</p>
        </div>
        <div className="second_column">
          <p>
          THIS HOME PACE IS JUST A PLACE HOLDER.
          </p>
          <HomeBtn text={'Get started'} btnClass={'headerBtn'} route={'/'}/>
        </div>
      </div>
    </header>
  );
}