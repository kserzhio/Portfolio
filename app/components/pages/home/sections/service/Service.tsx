import React from 'react';
import styles from './Service.module.scss';
import Accordion from '@/components/ui/accordion/Accordion';
const Service = () => {
  const dataAccordion = [
    {
      title: 'WordPress',
      description: 'Experience',
      text: `Creating seamless and stunning WordPress websites.With a keen eye for design and a knack for functionality, I craft websites that not only look great but also perform exceptionally. Let's turn your ideas into digital reality.`,
      img: '/img/WordPress_blue_logo.svg.png',
    },
    ,
    {
      title: 'React',
      description: 'Experience',
      text: 'Lorem',
      img: '/img/logoReact300px.png',
    },
    {
      title: 'HTML/CSS',
      description: 'Experience',
      text: 'Lorem',
      img: '/img/web-development-html-cascading-style-sheets-css3-javascript-javascript-html-css3.jpg',
    },
  ];
  return (
    <section id="services" className={styles.service}>
      <div className='container'>
        <div className={styles['service__heading']}>
          <p
            data-aos='fade-up'
            data-aos-duration='800'
            data-aos-delay='100'
            className='aos-init aos-animate'
          >
            My Service
          </p>
          <h2
            data-aos='fade-up'
            data-aos-duration='800'
            data-aos-delay='200'
            className='aos-init aos-animate'
          >
            My Specialties
          </h2>
        </div>
        <div>
          <Accordion items={dataAccordion} />
        </div>
      </div>
    </section>
  );
};

export default Service;
