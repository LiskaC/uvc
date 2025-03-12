import { FC } from 'react'

import styles from './Constitution.module.scss'

export const Constitution: FC = () => (
  <section>
    <h1>Constitution</h1>
    <h2>In brief: UVC Statute Overview 📜</h2>
    <p>
      💙 Over the past year, the Ukrainian Victory Campaign (UVC) has grown into a strong community dedicated to supporting Ukraine, raising awareness, and advocating for justice. To mark the first anniversary of our statute, we’re sharing an overview – the foundation of our mission.
    </p>
    <h4>📜 What We Stand For:</h4>
    <ul className={styles['constitution__list']}>
      <li>🔹 Our Mission: Respond to the war in Ukraine by supporting the most vulnerable people - Ukrainian captives, promote cultural exchange and strengthen the Ukrainian community in Scotland.</li>
      <li>🔹 Our Activities: Organising demonstrations, educational workshops, cultural events, and fundraising initiatives.</li>
      <li>🔹 Membership: We are always open to those who share our values and commit to our ethical code.</li>
      <li>🔹 Governance: Led by an elected committee, ensuring transparency and accountability.</li>
      <li>🔹 Equality & Inclusivity: UVC is committed to providing equal opportunities for all, regardless of race, gender, or background.</li>
      <li>🔹 Supporting Ukrainian Victory: We do not only want to talk about the importance of supporting Ukraine but to have a direct impact where it matters the most. For that we are supporting the most IMPORTANT people in Ukraine - Ukrainian Defenders. We have set up a platform to effectively and transparently manage funds, with financial reports presented to members.</li>
      <li>📅 Looking Ahead: As we enter our second year, we remain committed to advocacy, education, and direct action.</li>
      <li>📢 Join us at our AGM! Stay tuned for details on how to get involved.</li>
      <li>🔗 Want to support our work? Follow, donate, and spread the word! Every voice matters.</li>
    </ul>
    <p>
      Together to Victory! 🏴󠁧󠁢󠁳󠁣󠁴󠁿🤝🇺🇦
      <br></br>
      Слава Україні!
    </p>
    <h2>In full</h2>
    <p>full version of constitution for those who want it</p>
  </section>
)
