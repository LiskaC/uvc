import { FC } from 'react'

import styles from './Constitution.module.scss'

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
    <p>Read the full version of our constitution</p>
    <p>Read our statute</p>
    <p>Access the Ukrainian Victory Campaign Code of Conduct and Ethics</p>
  </section>
)
