'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import DataInput from './DataInput';
import ChangingImages from './ChangingImages';

const Section = ({ children, onInView }: { children: React.ReactNode; onInView: () => void }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      onInView();
    }
  }, [inView, onInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-start"
    >
      {children}
    </motion.div>
  );
};

const ParallaxSection = () => {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative flex">
      <div className="w-1/2">
        <Section onInView={() => setActiveSection(0)}>
          <DataInput />
        </Section>
        <Section onInView={() => setActiveSection(1)}>
        <DataInput />
        </Section>
        <Section onInView={() => setActiveSection(2)}>
        <DataInput />
        </Section>
      </div>
      <div className="w-1/2">
        <ChangingImages activeSection={activeSection} />
      </div>
    </div>
  );
};

export default ParallaxSection;