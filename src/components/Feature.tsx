import faq from '@/assets/faq.png'
import { FaChevronRight } from 'react-icons/fa'
import puzzle from '@/assets/puzzle.png'
import feedback from '@/assets/feedback.png'
import { BsCheckLg } from 'react-icons/bs'
import style from '@/sass/components/feature.module.scss'

const list: { image: string; title: string; description: string }[] = [
  {
    image: faq,
    title: 'Plaats gratis je aanvraag',
    description:
      'Onze slimme vragenlijst brengt jouw wensen in kaart, op basis hiervan zoeken wij de 3 meest passende online  marketingbureau’s.',
  },
  {
    image: puzzle,
    title: 'Ontvang offertes',
    description:
      'Van deze 3 online marketingbureaus ontvang je binnen 24 uur gratis en vrijblijvend een offerte.',
  },
  {
    image: feedback,
    title: 'Vergelijk en kies',
    description:
      'Vergelijk de offertes en kies het beste online marketingbureau voor jou.',
  },
]

const Feature: React.FC<{}> = () => {
  return (
    <section
      className={style.feature}
      id='feature'>
      <h3 className={style.subTitle}>Zo werkt het</h3>
      <h2 className={style.title}>
        In 3 stappen naar het juiste online marketingbureau
      </h2>
      <div className={style.list}>
        {list.map((item, index) => (
          <div
            className={style.item}
            key={index}>
            <img
              src={item.image}
              alt={item.title}
            />
            <p>{item.title}</p>
            <p className='description'>{item.description}</p>
          </div>
        ))}
      </div>
      <ul className={style.checkList}>
        <li>
          <BsCheckLg />
          <p>Enkel online marketingbureau's met trackrecord</p>
        </li>
        <li>
          <BsCheckLg />
          <p>Je gegevens zijn veilig bij ons</p>
        </li>
      </ul>
      <a
        href='#'
        type='button'>
        Start nu
        <FaChevronRight className='icon-next' />
      </a>
    </section>
  )
}

export default Feature
