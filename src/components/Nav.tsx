import { useState, useEffect } from 'react'
import logo from '@/assets/logo.svg'
import style from '@/sass/components/nav.module.scss'
import { Divide as Hamburger } from 'hamburger-react'

const links: { link: string; text: string }[] = [
  { link: '#feature', text: 'Hoe het werkt' },
  { link: '#', text: 'Vragen' },
  { link: '#aboutus', text: 'Over ons' },
]

const Nav: React.FC<{}> = () => {
  const [isOpen, setisOpen] = useState<boolean>(false)

  useEffect(() => {
    const body = document.querySelector('html') as HTMLElement
    if (isOpen) body.style.overflowY = 'hidden'
    else body.style.overflowY = 'auto'
  }, [isOpen])

  const toggleNav = () => setisOpen((prevState) => !prevState)
  const hideNav = () => setisOpen(false)

  return (
    <nav className={style.nav}>
      <div className={style.container}>
        <div className={style.navMobileContainer}>
          <a
            className={style.logoLink}
            href='/'>
            <img
              src={logo}
              alt='agency match logo'
            />
          </a>
          <div className={style.navButton}>
            <Hamburger
              toggled={isOpen}
              toggle={toggleNav}
              size={30}
              // direction='right'
              // duration={0.8}
              distance='sm'
              color='#59C538'
              rounded
              easing='ease-in-out'
            />
          </div>
        </div>
        <ul
          className={`${style.linksContainer} ${isOpen ? style.linkShow : ''}`}>
          {links.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                onClick={hideNav}>
                {item.text}
              </a>
            </li>
          ))}
          <li>
            <a
              className={style.button}
              onClick={hideNav}
              type='button'
              href='#'>
              START NU
            </a>
          </li>
        </ul>
        <div
          onClick={hideNav}
          className={`${style.backdrop} ${
            isOpen ? style.backdropShow : ''
          }`}></div>
      </div>
    </nav>
  )
}

export default Nav
