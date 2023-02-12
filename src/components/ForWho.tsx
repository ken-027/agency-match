import { FaChevronRight } from 'react-icons/fa'
import style from '@/sass/components/forwho.module.scss'

const list: {
  title: string
  description: string
  hasButton?: boolean
}[] = [
  {
    title: 'Snel',
    description: 'Veel sneller dan in het wilde weg zoeken',
  },
  {
    title: 'Bereik',
    description: `Wij beheren een groot landelijk netwerk van online marketingbureau's`,
    hasButton: true,
  },
  {
    title: 'Ervaren',
    description: `We werken zelf al meer dan tien jaar samen met verschillende online marketingbureau's`,
  },
  {
    title: 'Onafhankelijk',
    description:
      'We matchen je met het beste passende online marketingbureau voor jouw onderneming.',
  },
]

const ForWho: React.FC<{}> = () => {
  return (
    <section
      className={style.section}
      id='forwho'>
      <div className={style.cards}>
        {list.map((item, index) => (
          <div
            key={index}
            className={style.wrapper}>
            <div
              className={`${style.card} ${
                item.hasButton ? style.greenCard : ''
              }`}>
              <p className={style.cardTitle}>{item.title}</p>
              <p className={style.cardText}>{item.description}</p>
              {item.hasButton ? (
                <a
                  href='#'
                  type='button'>
                  Start nu
                  <FaChevronRight className='icon-next' />
                </a>
              ) : (
                ''
              )}
            </div>
          </div>
        ))}
      </div>
      <div className={style.description}>
        <h3 className='green'>Lorem ipsum</h3>
        <h2>Voor wie?</h2>
        <p>
          Of je nu een stichting runt, voor een overheidsorganisatie werkt, een
          startup of een (groot) bedrijf hebt, of zzp'er bent: op basis van jouw
          behoeftes, matchen we je aan 3 passende online marketingbureaus.
        </p>
        <p>
          Jij zoekt een professioneel online marketingbureau. Waar te beginnen?
          Hier! Dat scheelt een hoop tijd en geld. De zoektocht naar het juiste
          online marketingbureau kan hier beginnen. Start je zoektocht naar het
          juiste marketingbureau bij AgencyMatch.
        </p>
        <a
          href='#'
          type='button'>
          Start nu
          <FaChevronRight className='icon-next' />
        </a>
      </div>
    </section>
  )
}

export default ForWho
