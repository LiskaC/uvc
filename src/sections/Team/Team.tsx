import { FC } from 'react'
import { team, Member } from './data'

import styles from './Team.module.scss'

const TeamMember: FC<{ member: Member }> = (props) => (
  <div className={styles['team-member']}>
    <img className={styles['team-member__photo']} src={props.member.photo} alt='team member' />
    <h4>{props.member.name}</h4>
    <h4>{props.member.role}</h4>
  </div>
)

export const Team: FC = () => (
  <section>
    <h2>Our Team</h2>
    <div className={styles['team']}>
      {team.map((person) => (
        <TeamMember key={person.id} member={person} />
      ))}
    </div>
  </section>
)
