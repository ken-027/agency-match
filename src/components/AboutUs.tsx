import { FaChevronRight } from 'react-icons/fa'
import aboutus from '@/assets/aboutus.png'
import style from '@/sass/components//about.module.scss'

const AboutUs: React.FC<{}> = () => {
  return (
    <section
      className={style.section}
      id='aboutus'>
      <div className={style.container}>
        <div className={style.image}>
          <img
            src={aboutus}
            alt='about us'
          />
        </div>
        <div className={style.description}>
          <h3 className='green'>Over ons</h3>
          <h2>
            Over <span>agency</span>match
          </h2>
          <div className={style.text}>
            Jouw betrouwbare matchmaker Sinds 2009 helpen wij bedrijven en
            overheidsorganisatie bij het vinden van de juiste dienstverlener.
            Via dit platform hebben wij ons gespecialiseerd in het matchen van
            vraag en aanbod voor marketingdiensten.
          </div>
          <a
            href='#'
            type='button'>
            Start nu
            <FaChevronRight className='icon-next' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
