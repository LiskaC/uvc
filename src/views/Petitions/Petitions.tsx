import { FC } from 'react'
import { Accordion } from '../../components/Accordion/Accordion'

import styles from './Petitions.module.scss'
import { ListItem } from '../../components/ListItem/ListItem'
import { Link } from '../../components/Link/Link'

const petitions = [
  {
    title: 'Transfer UK Warrior Infantry Fighting Vehicles to Ukraine',
    href: 'https://petition.parliament.uk/petitions/719124',
  },
  {
    title: 'Help to return Ukrainian children that have been forcibly taken by Russia',
    href: 'https://petition.parliament.uk/petitions/725804',
  },
]

const letters = [
  {
    title: 'Letter about armoured vehicles',
    content: ['Dear Ms/Mr MP', 'WHERE ARE THEY?', 'Yours Sincerely,', 'Believer in Free Europe'],
  },
  {
    title: 'Letter about visiting ruzzian sympathiser',
    content: [
      'Dear Ms/Mr MP/Head of Ballet/Opera',
      'WHY ARE THEY HERE?',
      'Yours Sincerely,',
      'Believer in Free Europe',
    ],
  },
]

const links = [
  {
    href: 'https://www.writetothem.com/',
    text: 'Write to Them - contact your MP',
  },
  {
    href: 'https://www.ukraineuk.com/letters-to-mps',
    text: 'Letters to MPs - templates and guidance',
  },
]

export const Petitions: FC = () => (
  <main>
    <h1>Petitions</h1>
    <p>
      Helping Ukraine doesn&#39;t have to be time-consuming or expensive. These are the petitions
      we&#39;re supporting - support Ukraine with us!
    </p>
    <h2>Active Online Petitions</h2>
    <p>Take two minutes to sign and/or share these petitions:</p>
    <ul>
      {petitions.map((petition, index) => (
        <ListItem key={index}>
          <Link href={petition.href} text={petition.title} />
        </ListItem>
      ))}
    </ul>
    <h2>Letters to MP</h2>
    <p>Ready-made templates for letters to your MP - feel free to use and adjust as you wish:</p>
    <div className={styles['letters']}>
      {letters.map((letter, index) => (
        <Accordion key={index} title={letter.title} content={letter.content} />
      ))}
    </div>
    <p>Useful links:</p>
    <ul>
      {links.map((link, index) => (
        <ListItem key={index}>
          <Link href={link.href} text={link.text} />
        </ListItem>
      ))}
    </ul>
  </main>
)

export default Petitions
