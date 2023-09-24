import React from 'react';
import styles from './Blog.module.scss';
const Blog = () => {
  return (
    <section id='blog' className={styles.blog}>
      <div className={'container'}>
        <div className={styles['blog__heading']}>
          <p
            data-aos='fade-up'
            data-aos-duration='800'
            data-aos-delay='100'
            className='aos-init aos-animate'
          >
            Our Blogs
          </p>
          <h2
            data-aos='fade-up'
            data-aos-duration='800'
            data-aos-delay='200'
            className='aos-init aos-animate'
          >
            OUR LATEST UPDATE
          </h2>
        </div>
        <div className='blog__row'>
          <div className='blog__item'></div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
