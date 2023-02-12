import style from '@/sass/components/faq.module.scss'
import Collapse from 'antd/es/collapse'

const faqs: string[] = [
  'Lorem ipsum dolor sit amet consectetur. Interdum ac purus molestie sit. Pretium volutpat purus elit urna risus bibendum quisque dictum. Pretium volutpat purus elit urna risus bibendum quisque dictum.',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium iusto quibusdam ipsam ipsum, enim facilis, est quidem neque soluta sunt rerum porro repudiandae aliquid perferendis repellat, iure commodi minus maxime eum eius!',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sunt excepturi quibusdam, distinctio nostrum, dolore eaque ipsa sit mollitia cumque incidunt ex quo quos beatae, voluptatum tempora esse blanditiis illum.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iure, alias, commodi necessitatibus, quam dolor aliquid sint fugiat porro id natus odio rem voluptatibus modi reiciendis repellendus ex. Est, totam animi quidem consectetur atque sit!',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, itaque. Distinctio mollitia exercitationem consequatur atque, in quisquam aperiam fugit asperiores repellat perferendis voluptatibus qui eius!',
]

const FAQ: React.FC<{}> = () => {
  return (
    <section
      className={style.section}
      id='FAQ'>
      <div className={style.container}>
        <h2 className={style.title}>Veelgestelde vragen</h2>
        <h3 className={style.subTitle}>
          Vind hieronder antwoord op de meest gestelde vragen of{' '}
          <a href='#'>neem contact met ons op.</a>
        </h3>
        <Collapse
          className={style.accordion}
          bordered={false}
          defaultActiveKey={['1']}
          // activeKey={1}
          expandIconPosition='end'
          accordion>
          {faqs.map((item, index) => (
            <Collapse.Panel
              key={index}
              header={
                <h4 className={style.accordTitle}>{`Vraag #${++index}`}</h4>
              }>
              <p>{item}</p>
            </Collapse.Panel>
          ))}
        </Collapse>
      </div>
    </section>
  )
}

export default FAQ
