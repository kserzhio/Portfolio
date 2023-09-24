import React from 'react';
import cn from 'classnames';
import { scroller } from 'react-scroll';
import styles from './Home.module.scss';
import { useTranslation } from 'next-i18next';

const HomeSection = () => {
  const { t, i18n } = useTranslation('common');
  const scrollToSection = () => {
    scroller.scrollTo('contact', {
      duration: 2000, // Scroll duration in milliseconds
      smooth: 'easeInOutQuart', // Timing function for smooth scrolling
    });
  };
  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };
  return (
    <section id='home' className={styles.home}>
      <button
        className='btn'
        type='button'
        onClick={() => changeLanguage('ua')}
      >
        ua
      </button>
      <button
        className='btn'
        type='button'
        onClick={() => changeLanguage('en')}
      >
        en
      </button>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles['text']}>
            <div
              data-aos='fade-up'
              data-aos-duration='800'
              data-aos-delay='200'
              className={cn(styles['text__title'], 'aos-init aos-animate')}
            >
              {t('h1')}
            </div>
            <div
              data-aos='fade-up'
              data-aos-duration='800'
              data-aos-delay='400'
              className={cn(
                styles['text__description'],
                'aos-init aos-animate'
              )}
            >
              Front-End Developer
            </div>
            <div>
              <a
                onClick={scrollToSection}
                href='#'
                data-aos='fade-up'
                data-aos-duration='800'
                data-aos-delay='500'
                className={cn('btn', 'aos-init aos-animate')}
              >
                Work with me
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                  role='img'
                  width='1em'
                  height='1em'
                  viewBox='0 0 16 16'
                >
                  <path
                    fill='currentColor'
                    fillRule='evenodd'
                    d='M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z'
                  ></path>
                </svg>
              </a>
            </div>
            <div
              data-aos='fade-up'
              data-aos-duration='800'
              data-aos-delay='600'
              className={cn(styles['info'], 'aos-init aos-animate')}
            >
              <p>
                <svg
                  aria-hidden='true'
                  role='img'
                  width='1em'
                  height='1em'
                  viewBox='0 0 16 16'
                >
                  <g fill='currentColor'>
                    <path d='M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z'></path>
                    <path d='M8 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2z'></path>
                  </g>
                </svg>
                <span>+380687100550</span>
              </p>
              <p>
                <svg
                  aria-hidden='true'
                  role='img'
                  width='1em'
                  height='1em'
                  viewBox='0 0 16 16'
                >
                  <path
                    fill='currentColor'
                    d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2l7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383l-4.708 2.825L15 11.105V5.383Zm-.034 6.876l-5.64-3.471L8 9.583l-1.326-.795l-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z'
                  ></path>
                </svg>
                <span>kserzhio@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.social}>
        <div className={styles['social__links']}>
          <a
            href=''
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Search'
          >
            <svg
              aria-hidden='true'
              role='img'
              width='1em'
              height='1em'
              viewBox='0 0 512 512'
            >
              <path
                fill='currentColor'
                d='M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248s248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955c-6.984-1.477-77.018-15.682-147.502-6.818c-5.752-14.041-11.181-26.393-18.617-41.614c78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519c-34.712-63.776-73.185-116.168-79.04-124.008c67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509c-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473c9.268.19 111.92 1.513 217.706-30.146c6.064 11.868 11.857 23.915 17.174 35.949c-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756c29.74 77.283 42.039 142.053 45.189 160.638c-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033c66.38-10.626 124.7 6.768 131.947 9.055c-9.442 58.941-43.273 109.844-90.795 141.978z'
              ></path>
            </svg>
          </a>
          <a
            href=''
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Search'
          >
            <svg
              aria-hidden='true'
              role='img'
              width='0.88em'
              height='1em'
              viewBox='0 0 448 512'
            >
              <path
                fill='currentColor'
                d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
              ></path>
            </svg>
          </a>
          <a
            href=''
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Search'
          >
            <svg
              aria-hidden='true'
              role='img'
              width='1em'
              height='1em'
              viewBox='0 0 512 512'
            >
              <path
                fill='currentColor'
                d='M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z'
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
export default HomeSection;
