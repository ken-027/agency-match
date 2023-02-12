import { useState, useEffect } from 'react'
import { BsStarFill } from 'react-icons/bs'
import style from '@/sass/components/poweredby.module.scss'
import { useSpring, animated } from '@react-spring/web'
import { motion } from 'framer-motion'

const PoweredBy: React.FC<{}> = () => {
  const [isViewport, setisViewport] = useState<boolean>(false)

  useEffect(() => {}, [isViewport])

  const AnimateNumber: React.FC<{}> = () => {
    const statnum = useSpring({ val: 10000, from: { val: 0 } })

    return (
      <animated.span className='green'>
        {statnum.val.to((val) =>
          Math.floor(val)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ','),
        )}
      </animated.span>
    )
  }

  return (
    <motion.section
      onViewportEnter={() => setisViewport(true)}
      onViewportLeave={() => setisViewport(false)}
      initial={{ translateY: '10vh' }}
      whileInView={{ translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={style.section}
      id='poweredby'>
      <div className={style.container}>
        <p>
          Powered by <span className='green'>LoopbaanNederland.nl</span>
        </p>
        <p>
          Meer dan {isViewport ? <AnimateNumber /> : <span>0</span>} mensen
          geholpen
        </p>
        <p>
          Uitstekend{' '}
          <span className={style.stars}>
            {Array(5)
              .fill(1)
              .map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0.1 }}
                  transition={{
                    delay: index * 0.2,
                    duration: 1.5,
                  }}
                  whileInView={{ opacity: 1 }}>
                  <BsStarFill
                    className='green'
                    key={index}
                  />
                </motion.span>
              ))}
          </span>
          <span className={style.location}> 47 Beoordelingen</span>
        </p>
      </div>
    </motion.section>
  )
}

export default PoweredBy
