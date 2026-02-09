import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant, staggerContainer } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon}) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0, 0.75)}
      className="w-full sm:w-[calc((100%-1.75rem)/2)] md:w-[calc((100%-2*1.75rem)/3)] xl:w-[calc((100%-3*1.75rem)/4)] flex justify-center"
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="w-full md:max-w-[360px]"
      >
        <div className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <img src={icon} alt={title} className='w-16 h-16 object-contain' />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p 
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] leading-[30px]'
      >
        I'm a recent Computer Science graduate from Guatemala with a strong foundation in programming languages, software development, and problem-solving. My academic journey at Universidad del Valle de Guatemala equipped me with the technical expertise and curiosity needed to thrive in the ever-evolving tech industry.
        I am a lifelong learner who thrives on exploring new skills, tools, and technologies. For me, every day is an opportunity to discover innovative solutions and tackle exciting challenges. My passion for continuous growth drives me to take on projects that expand my experience and push the boundaries of what's possible.
        Overall, I'm a dedicated and enthusiastic professional with a passion for technology and innovation. As I step into my career, I am excited to apply my knowledge, collaborate with like-minded professionals, and make meaningful contributions to impactful projects in the tech world.
      </motion.p>

      <motion.div
        variants={staggerContainer(0.1, 0.05)}
        className='mt-20 flex flex-wrap justify-center gap-7'
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </>
  )
}

export default SectionWrapper(About, "about")