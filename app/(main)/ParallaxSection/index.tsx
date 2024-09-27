'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import DataInput from './DataInput';
import ChangingImages from './ChangingImages';
import CardWrapper from '@/components/ui/CardWrapper';

const Section = ({ children, onInView }: { children: React.ReactNode; onInView: () => void }) => {
  const { ref, inView } = useInView({
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
      transition={{ duration: 1.25 }}
      className="flex h-screen items-center justify-center"
    >
      {children}
    </motion.div>
  );
};

const ParallaxSection = () => {
  const [activeSection, setActiveSection] = useState<0 | 1 | 2>(0);

  return (
    <CardWrapper className="flex">
      <div>
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
      <ChangingImages activeSection={activeSection} />
    </CardWrapper>
  );
};

export default ParallaxSection;
