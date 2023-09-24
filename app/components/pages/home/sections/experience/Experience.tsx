import React from 'react';
import styles from './Experience.module.scss';
import cn from 'classnames';
const Experience = () => {
  return (
    <section id='about' className={styles.experience}>
      <div className='container'>
        <div className={styles['row']}>
          <div className={styles['experience__left']}>
            <div className={styles['experience__left__item']}>
              <div className={styles['experience__heading']}>
                <p
                  data-aos='fade-up'
                  data-aos-duration='800'
                  data-aos-delay='100'
                  className='aos-init aos-animate'
                >
                  Experience
                </p>
                <h2
                  data-aos='fade-up'
                  data-aos-duration='800'
                  data-aos-delay='200'
                  className='aos-init aos-animate'
                >
                  My Experience
                </h2>
              </div>
              <p
                data-aos='fade-up'
                data-aos-duration='800'
                data-aos-delay='200'
                className={cn(
                  styles['experience__description'],
                  'aos-init aos-animate'
                )}
              >
                {`Hello there! My name is Kostenko Serhii. I am a Frontend
                Developer, and I'm incredibly passionate and dedicated to my
                work.`}
              </p>
              <div
                data-aos='fade-up'
                data-aos-duration='800'
                data-aos-delay='200'
                className={cn(
                  styles['experience__btn'],
                  'aos-init aos-animate'
                )}
              >
                <a className='btn dark'>
                  Download my resume
                  <svg
                    aria-hidden='true'
                    role='img'
                    width='1em'
                    height='1em'
                    viewBox='0 0 16 16'
                  >
                    <g fill='currentColor'>
                      <path d='M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z'></path>
                      <path d='M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z'></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className={styles['experience__right']}>
            <ul className={styles['experience__resume']}>
              <li
                data-aos='fade-up'
                data-aos-duration='800'
                className={cn(
                  styles['experience__resume__item'],
                  'aos-init aos-animate'
                )}
              >
                <div className={styles['experience__resume__heading']}>
                  <span>-2021-Present</span>
                  <p>-React/Next</p>
                </div>
                <h5>Front-End</h5>
              </li>
              <li
                data-aos='fade-up'
                data-aos-duration='800'
                className={cn(
                  styles['experience__resume__item'],
                  'aos-init aos-animate'
                )}
              >
                <div className={styles['experience__resume__heading']}>
                  <span>-2020-2021</span>
                  <p>-Angular/HTML</p>
                </div>
                <h5>Front-End</h5>
              </li>
              <li
                data-aos='fade-up'
                data-aos-duration='800'
                className={cn(
                  styles['experience__resume__item'],
                  'aos-init aos-animate'
                )}
              >
                <div className={styles['experience__resume__heading']}>
                  <span>-2016-2020</span>
                  <p>-WordPress</p>
                </div>
                <h5>Front-End</h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
