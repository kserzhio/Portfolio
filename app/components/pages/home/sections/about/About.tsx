import React from 'react';
import cn from 'classnames';
import styles from './About.module.scss';
const About = () => {
  return (
    <section id='about' className={styles.about}>
      <div className={styles.container}>
        <div
          data-aos-duration='800'
          data-aos='fade-up'
          data-aos-delay='100'
          className={cn(styles['about__heading'], 'aos-init aos-animate')}
        >
          <h6>Nice to meet you!</h6>
        </div>
        <div
          data-aos='fade-up'
          data-aos-duration='800'
          data-aos-delay='500'
          className={cn(styles['info'], 'aos-init aos-animate')}
        >
          <div className={styles['info__avatar']}>
            {/* <img src='/img/me.png' alt='' /> */}
            <picture>
              <source
                srcSet='/img/me.png'
                type='image/avif'
              />
              <source
                srcSet='/img/me.png'
                type='image/webp'
              />
              <img
                src='/img/me.png'
                alt='Landscape picture'
                width={800}
                height={500}
              />
            </picture>
            <div className={styles['info__left']}>
              <h3>Kostenko Serhii</h3>
              <p>Front-End Developer</p>
              <div className={styles['info__left__btn']}>
                <a href='https://' className='btn'>
                  Download CV
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
          <div className={styles['info__text']}>
            <div className={styles['info__text__description']}>
              Born in 2000, AB type living in USA. We provide on-screen design
              for websites and apps, as well as front-end implementation. We
              will continue to pursue a wide range of expressions and better
              code by pursuing our “likes”.
            </div>
            <div className={styles['info__contact']}>
              <div className={styles['info__contact__item']}>
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
                  </svg>{' '}
                  <span>+123 45 666 7788</span>
                </p>
              </div>
              <div className={styles['info__contact__item']}>
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
                      d='M8 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1s1-4 6-4s6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664h10Z'
                    ></path>
                  </svg>{' '}
                  <span>Lilon Macwan</span>
                </p>
              </div>
              <div className={styles['info__contact__item']}>
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
                  </svg>{' '}
                  <span>lilonesigner@gmail.com</span>
                </p>
              </div>
              <div className={styles['info__contact__item']}>
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
                      fillRule='evenodd'
                      d='M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98l4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z'
                    ></path>
                  </svg>{' '}
                  <span>California, USA</span>
                </p>
              </div>
            </div>
            <div className={styles['info__exp']}>
              <div className={styles['info__row']}>
                <div className={styles['info__exp__item']}>
                  <div className={styles['info__exp__number']}>
                    <h6>7+</h6>
                    <span>
                      Years <br /> experience
                    </span>
                  </div>
                  <p className={styles['info__exp__lead']}>
                    Hello there! My name is <span>Kostenko Serhii</span>. I am a
                    web designer & developer, and Im very passionate and
                    dedicated to my work.
                  </p>
                </div>
                <div className={styles['info__exp__item']}>
                  <div className={styles['info__exp__number']}>
                    <h6>50+</h6>
                    <span>
                      Clients <br /> Worldwide
                    </span>
                  </div>
                  <p className={styles['info__exp__lead']}>
                    With 10+ years experience as a professional designer, I have
                    acquired the skills to make your project a success.
                  </p>
                </div>
              </div>
              <blockquote>
                <svg
                  aria-hidden='true'
                  role='img'
                  width='0.88em'
                  height='1em'
                  viewBox='0 0 448 512'
                >
                  <path
                    fill='currentColor'
                    d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64h-64c-35.3 0-64-28.7-64-64V216z'
                  ></path>
                </svg>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus sed sit ultrices et sed metus sollicitudin.”
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
