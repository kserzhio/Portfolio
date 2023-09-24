import React, { useEffect, useState } from 'react';
import styles from './Nav.module.scss';
import cn from 'classnames';
const Nav = () => {
  const menuList = [
    {
      name: 'Home',
      id: 'home',
    },
    {
      name: 'About',
      id: 'about',
    },
    {
      name: 'Services',
      id: 'services',
    },
    {
      name: 'Blog',
      id: 'blog',
    },
    {
      name: 'Contact',
      id: 'contact',
    },
  ];
  const GAP_SCROLL = 200;
  const [activeSection, setActiveSection] = useState(null);
  useEffect(() => {
    // Function to handle scroll and update the active section
    const handleScroll = () => {
      const sections = document.querySelectorAll('section'); // Adjust the selector to match your section elements

      // Find the section currently in view
      let currentSection = null;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top - GAP_SCROLL <= 0 && rect.bottom >= 0) {
          currentSection = section.id;
        }
      });

      // Update the active section
      setActiveSection(currentSection);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial call to set the active section when the page loads
    handleScroll();

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <ul className={styles.nav}>
      {menuList.map((item, i) => (
        <li
          className={cn(styles.navItem, {
            [styles['navItem_active']]: activeSection === item.id,
          })}
          key={i}
        >
          <a href={`#${item.id}`}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
