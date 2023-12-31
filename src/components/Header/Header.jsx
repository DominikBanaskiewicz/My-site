import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import css from '../Header/Header.module.scss';
import { useInView } from 'framer-motion';
import { Element } from 'react-scroll';
import { Navigation } from 'components/Navigation/Navigation';
import { ContactMe } from 'components/ContactMe/ContactMe';

export const Header = () => {
  const mainControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <div ref={ref} className={css.header}>
      <div className={css.header__container}>
        <Navigation className={css.header__navigation}></Navigation>
        <div className={css.header__dataContainer}>
          <motion.div
            className={css.dataContainer__label}
            whileInView="onscreen"
            variants={{
              hidden: { opacity: 0, x: -200 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <Element name="aboutMe">
              <h2 className={css.header__dataContainer_name}>
                Dominik Banaśkiewicz
              </h2>
            </Element>
            <h3> Frontend developer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illum
              unde expedita dolores! Voluptas reprehenderit nam iste a
              distinctio animi dicta similique excepturi dolorum asperiores ad
              quibusdam, laudantium non! Tempora, error laboriosam. Esse
              necessitatibus nulla, dolor enim hic in temporibus.
            </p>
          </motion.div>

          <motion.div
            className={css.dataContainer__imgContainer}
            key={2}
            whileInView="onscreen"
            variants={{
              hidden: { opacity: 0, x: 200 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1 }}
          >
            <img
              className={css.dataContainer__img}
              src={require('../../images/IMG_20220421_221813 — kopia (2).jpg')}
              alt="Dominik Banaskiewicz"
            />
          </motion.div>
        </div>
        <ContactMe></ContactMe>
      </div>
    </div>
  );
};
