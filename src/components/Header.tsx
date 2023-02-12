import style from '@/sass/components/header.module.scss'
import { BsCheckLg } from 'react-icons/bs'
import { FaChevronRight } from 'react-icons/fa'
import hero from '@/assets/hero.png'

const Header: React.FC<{}> = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.description}>
          <h3 className={`${style.subTitle} green`}>
            Online marketingbureau nodig?
          </h3>
          <h1 className={style.title}>
            Vind gemakkelijk jouw online marketing bureau
          </h1>
          <ul className={style.list}>
            <li>
              <BsCheckLg />
              <p>Onze service is gratis & eenvoudig.</p>
            </li>
            <li>
              <BsCheckLg />
              <p>Enkel online marketingbureau’s met trackrecord.</p>
            </li>
          </ul>
          <a
            href='#'
            className={style.button}
            type='button'>
            Start nu
            <FaChevronRight className='icon-next' />
          </a>
        </div>
        <div className={style.image}>
          <div className={style.circles}></div>
          <img
            src={hero}
            alt='hero image'
          />
        </div>
      </div>
    </header>
  )
}

export default Header
