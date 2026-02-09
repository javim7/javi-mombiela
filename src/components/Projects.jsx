import React, { useState, useEffect } from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github, externalLink } from '../assets'
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const cardBaseClassName = 'bg-tertiary p-5 rounded-2xl w-full md:max-w-[360px] transition-transform duration-300 ease-out';

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
  disableTilt,
}) => {
  const cardContent = (
    <>
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt='project_image'
          className='w-full h-full object-cover rounded-2xl'
        />

        <div className='absolute inset-0 flex justify-end gap-2 m-3'>
          {demo_link && (
            <div
              onClick={() => window.open(demo_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              title='Visit site'
            >
              <img
                src={externalLink}
                alt='visit site'
                className='w-1/2 h-1/2 object-contain invert'
              />
            </div>
          )}
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            title='Source code'
          >
            <img
              src={github}
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </>
  );

  if (disableTilt) {
    return (
      <div className={`${cardBaseClassName} hover:scale-[1.02] active:scale-[0.99]`}>
        {cardContent}
      </div>
    );
  }

  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className={cardBaseClassName}
    >
      {cardContent}
    </Tilt>
  );
};

const Works = () => {
  const [disableTilt, setDisableTilt] = useState(true);
  useEffect(() => {
    const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
    const isNarrow = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;
    setDisableTilt(isTouch || isNarrow);
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0, 1)}
        className="w-full flex"
      >
        <p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          The following projects showcase my skills and experience through college assignments that simulate real-world problems. Each project is briefly described and includes the link to its repository. These projects reflect my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer(0.12, 0.08)}
        className="mt-20 flex flex-wrap justify-center gap-7"
      >
        {projects.map((project, index) => (
          <motion.div
            key={`project-${index}`}
            variants={fadeIn("up", "spring", 0, 0.75)}
            className="w-full md:w-[calc((100%-1.75rem)/2)] lg:w-[360px] flex justify-center"
          >
            <ProjectCard disableTilt={disableTilt} {...project} />
          </motion.div>
        ))}
      </motion.div>
    </>
  )
}

export default SectionWrapper(Works, "work")