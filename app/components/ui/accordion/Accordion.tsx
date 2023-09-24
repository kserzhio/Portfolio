import React, { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import styles from './Accordion.module.scss';

interface AccordionItem {
  title: string;
  description: string;
  text: string;
  img: string;
}
interface AccordionProps {
  items: AccordionItem[];
}
const Accordion: FC<any> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [addAnimateClassToItem, setAnimateClassToItem] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimateClassToItem(false);
    }, 150);
  }, [activeIndex]);

  const handleClick = (index: number) => {
    if (index === activeIndex) {
      // Clicking the active item should close it
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
      setAnimateClassToItem(true);
    }
  };

  return (
    <div className={styles.accordion} id='accordion__services'>
      {items.map((item: any, index: number) => (
        <div
          key={index}
          data-aos='fade-up'
          data-aos-duration='800'
          className={cn(styles['accordion__item'], 'aos-init aos-animate', {
            [styles['active']]: index === activeIndex,
          })}
        >
          <div className={styles['accordion__header']}>
            <div
              className={styles['accordion__btn']}
              onClick={() => handleClick(index)}
            >
              <span className={styles['accordion__header__title']}>
                {item.title}
              </span>
              <span
                className={cn(styles['accordion__header__description'], {
                  [styles['active']]: index === activeIndex,
                })}
              >
                {item.description}
              </span>
              <span className={styles['accordion__icon']}></span>
            </div>
          </div>
          <div
            className={cn(styles['accordion__collapse'], styles['collapse'], {
              [styles['accordion__collapse_active']]: index === activeIndex,
              [styles['accordion__collapse_collapsing']]: addAnimateClassToItem,
            })}
          >
            <div className={styles['accordion__body']}>
              <div className={styles['accordion__row']}>
                <div
                  className={styles['accordion__item accordion__item_right']}
                >
                  <picture>
                    <source src={item.img} type='image/avif' />
                    <source src={item.img} type='image/webp' />
                    <img
                      src={item.img}
                      alt='Landscape picture'
                      width={300}
                      height={300}
                    />
                  </picture>
                </div>
                <div className={styles['accordion__item accordion__item_left']}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
