import cn from 'classnames';
import Head from 'next/head';
import React, { FC, PropsWithChildren } from 'react';

import styles from './Layout.module.scss';

const Layout: FC<PropsWithChildren<{ title: string }>> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, viewport-fit=cover'
        ></meta>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
