'use client';

import React, { ReactElement } from 'react';
import Nav from '../Layout/NavBar';
import ReactLenis from 'lenis/react';

type Props = {
  children: ReactElement;
};

const MainLayout = ({ children }: Props) => {
  return (
    <ReactLenis
      root
      options={{
        // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
        lerp: 0.05,
        //   infinite: true,
        //   syncTouch: true,
      }}
    >
      <Nav />
      <main>{children}</main>
    </ReactLenis>
  );
};

export default MainLayout;
