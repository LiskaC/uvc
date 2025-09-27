import { FC } from 'react'

import styles from './Constitution.module.scss'

import STATUTE from 'url:../../assets/pdfs/Ukrainian Victory Campaign Consitution (4).pdf'
import CODE_OF_CONDUCT from 'url:../../assets/pdfs/UVC Code of Conduct and Ethics 17 May 2025.pdf'

export const Constitution: FC = () => (
  <section>
    <h1>Constitution</h1>
    <p>
      💙 Over the past year, the Ukrainian Victory Campaign (UVC) has grown into a strong community
      dedicated to supporting Ukraine, raising awareness, and advocating for justice.
    </p>
    <h4>📜 What We Stand For:</h4>
    <ul className={styles['constitution__list']}>
      <li>
        🔹 Our Mission: Respond to the war in Ukraine by supporting the most vulnerable people -
        Ukrainian captives, promote cultural exchange and strengthen the Ukrainian community in
        Scotland.
      </li>
      <li>
        🔹 Our Activities: Organising demonstrations, educational workshops, cultural events, and
        fundraising initiatives.
      </li>
      <li>
        🔹 Membership: We are always open to those who share our values and commit to our ethical
        code.
      </li>
      <li>🔹 Governance: Led by an elected committee, ensuring transparency and accountability.</li>
      <li>
        🔹 Equality & Inclusivity: UVC is committed to providing equal opportunities for all,
        regardless of race, gender, or background.
      </li>
      <li>
        🔹 We turn speaking about supporting Ukraine to action as we deliver meaningful action at
        the heart of the crisis. We have set up a platform to effectively and transparently manage
        funds, with financial reports presented to members as we support the people of Ukraine and
        our Defenders.
      </li>
    </ul>
    {/* <p>
      <a href={STATUTE} target='_blank' rel='noreferrer'>
        Read the full version of our constitution
      </a>
    </p> */}
    <p>
      <a href={STATUTE} target='_blank' rel='noreferrer'>
        Read our statute
      </a>
    </p>
    <p>
      <a href={CODE_OF_CONDUCT} target='_blank' rel='noreferrer'>
        Access the Ukrainian Victory Campaign Code of Conduct and Ethics
      </a>
    </p>
  </section>
)
