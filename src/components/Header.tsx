import style from '@/sass/components/header.module.scss'
import { motion } from 'framer-motion'
import { BsCheckLg } from 'react-icons/bs'
import { FaChevronRight } from 'react-icons/fa'
import hero from '@/assets/hero.png'

const transitionOpacity = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8 },
}

const Header: React.FC<{}> = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.description}>
          <motion.h3
            {...transitionOpacity}
            className={`${style.subTitle} green`}>
            Online marketingbureau nodig?
          </motion.h3>
          <motion.h1
            {...transitionOpacity}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={style.title}>
            Vind gemakkelijk jouw online marketing bureau
          </motion.h1>
          <ul className={style.list}>
            <motion.li
              {...transitionOpacity}
              transition={{ duration: 0.8, delay: 0.3 }}>
              <BsCheckLg />
              <p>Onze service is gratis & eenvoudig.</p>
            </motion.li>
            <motion.li
              {...transitionOpacity}
              transition={{ duration: 0.8, delay: 0.4 }}>
              <BsCheckLg />
              <p>Enkel online marketingbureau’s met trackrecord.</p>
            </motion.li>
          </ul>
          <motion.a
            {...transitionOpacity}
            transition={{ duration: 0.8, delay: 0.5 }}
            href='#'
            className={style.button}
            type='button'>
            Start nu
            <FaChevronRight className='icon-next' />
          </motion.a>
        </div>
        <div className={style.image}>
          <div className={style.circles}></div>
          <motion.img
            {...transitionOpacity}
            transition={{ duration: 0.8, delay: 0.6 }}
            src={hero}
            alt='hero image'
          />
        </div>
      </div>
    </header>
  )
}

export default Header
