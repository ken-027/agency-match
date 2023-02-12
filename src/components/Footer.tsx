import style from '@/sass/components/footer.module.scss'
import footerlogo from '@/assets/footer-logo.svg'

const links: { link: string; text: string }[] = [
  { link: '#', text: 'Hoe het werkt' },
  { link: '#', text: 'Vragen' },
  { link: '#', text: 'Over ons' },
  { link: '#', text: 'Contact' },
  { link: '#', text: 'Aanmelden als bureau' },
]

const bottomLinks: { link: string; text: string }[] = [
  { link: '#', text: 'Cookies' },
  { link: '#', text: 'Privacy Policy' },
  { link: '#', text: 'Algemene Voorwaarden' },
]

const Footer: React.FC<{}> = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <img
          className={style.image}
          src={footerlogo}
          alt='footer logo'
        />
        <ul className={style.links}>
          {links.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
        <ul className={style.bottomLinks}>
          <li className={style.copyright}>&copy;2020 Direct professionals</li>
          {bottomLinks.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
