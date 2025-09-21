import { FC } from 'react'
import { Accordion } from '../../components/Accordion/Accordion'
import { ListItem } from '../../components/ListItem/ListItem'
import { Link } from '../../components/Link/Link'

import styles from './Petitions.module.scss'

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
    content: [
      'Dear [name of your MP],',
      // eslint-disable-next-line max-len
      'I am writing to you, as your constituent and as someone who believes deeply in the power of solidarity — especially in the face of violence, injustice, and tyranny. Today, the UK has hundreds of Warrior Infantry Fighting Vehicles — many of which are now mothballed or marked for disposal. But for the people of Ukraine, these are not outdated assets.',
      // eslint-disable-next-line max-len
      'Warrior IFV could mean the difference between survival and loss. 632 vehicles are enough to supply 5-6 brigades, which is over 15,000 troops. It is beyond shocking that the UK government has opted to scrap military vehicles at the peak time of war.',
      // eslint-disable-next-line max-len
      'Every day, Ukraine fights not only for its own freedom, but for the ideals we hold dear: democracy, sovereignty, and the right to live without fear. The UK has already shown great leadership in standing with Ukraine. Now, we have a chance to do even more — to give practical support with the Warrior IFVs we no longer plan to use. There is a petition before parliament calling on the government to transfer these vehicles to Ukraine rather than scrap them. I have signed it and so have over 19,000 others, with the hope of being heard: https://petition.parliament.uk/petitions/719124.',
      // eslint-disable-next-line max-len
      'Edinburgh constituencies, including Edinburgh South, have been consistently leading the country with the petition, and with time, these numbers will grow as there is no moral nor rational excuse for not sending these vehicles to Ukraine. This petition is not just about military hardware - it’s about hope. It’s about making sure that those facing the darkest days know they are not alone — that the world, and their allies, have not forgotten them.',
      // eslint-disable-next-line max-len
      'Please consider raising this issue in parliament or in conversations with the Ministry of Defence. I would be very grateful to know your position. Thank you for your time and commitment to representing us with compassion and integrity. Happy to assist with any more details to get these vehicles exactly where they are needed in Ukraine.',
      'Yours faithfully,',
      '[Your Name]',
    ],
  },
  {
    title: 'Letter about visiting ruzzian sympathiser',
    content: [
      // eslint-disable-next-line max-len
      '* Before using this template, remember to include links to evidence (news articles, public statements etc.), and, if known, mention the venue or date of the event. Feel free to add, remove, or adjust details and reasons given here to reflect your own concerns.',
      'Dear [Name of your MP],',
      // eslint-disable-next-line max-len
      'I am writing to you as a concerned constituent regarding the upcoming visit and planned appearance of [name of individual/group] in the United Kingdom.',
      // eslint-disable-next-line max-len
      'It has been widely reported that [he/she/they] maintain links to the Russian regime or have expressed views that appear to support or excuse Russian aggression against Ukraine. As a member of the UK public, I am deeply troubled that individuals who are perceived as sympathising with or normalising the actions of an aggressor state are being welcomed to perform or speak on British soil.',

      // eslint-disable-next-line max-len
      'While supporters of such appearances may claim that these figures have made neutral or ambiguous statements about the war, these declarations often fail to clearly identify Russia as the aggressor, to condemn Vladimir Putin, or to recognise Ukraine as the victim of invasion. In some cases, past actions—such as public appearances with sanctioned individuals, performances in occupied territories, or financial contributions to Kremlin-backed projects—raise serious questions about their true position.',
      // eslint-disable-next-line max-len
      'Allowing [name of individual/group] to perform or appear in the UK risks legitimising narratives that undermine Ukraine’s sovereignty and the UK’s own commitment to standing against Russian imperialism. This is not merely a political disagreement, but a matter of human rights, international law, and moral responsibility.',
      // eslint-disable-next-line max-len
      'I respectfully urge you to raise this issue in Parliament, or by any other means you deem appropriate, to ensure that venues and organisers are held accountable for giving a platform to individuals whose actions or associations contradict the UK’s stance of solidarity with Ukraine.',
      // eslint-disable-next-line max-len
      'Thank you for taking the time to consider my concerns. I look forward to your reply and to learning how you might address this matter on behalf of your constituents.',
      'Yours faithfully,',
      '[Your Name]',
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
    <p>Check these resources to find out more:</p>
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
