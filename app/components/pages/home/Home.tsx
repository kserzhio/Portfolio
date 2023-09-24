import React, { FC, MutableRefObject, useRef } from 'react';

import styles from './Home.module.scss';
import Layout from '../../layout/home/Layout';
import Nav from '@/components/ui/nav/Nav';
import HomeSection from './sections/Home/HomeSection';
import About from './sections/about/About';
import Experience from './sections/experience/Experience';
import Service from './sections/service/Service';
import Blog from './sections/blog/Blog';
import Contact from './sections/contact/Contact';
const Home: FC = () => {
  return (
    <>
      <Layout title='Portfolio'>
        <div className={styles.container}>
          <aside className={styles.aside}>
            <div className={styles.logo}>Kostenko</div>
            <Nav />
          </aside>
          <HomeSection />
          <About />
          <Experience />
          <Service />
          <Blog />
          <Contact />
        </div>
      </Layout>
    </>
  );
};

export default Home;
