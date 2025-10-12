import { FC } from 'react'
import { Donate } from '../../sections/Donate/Donate'
import { Communicate } from '../../sections/Communicate/Communicate'
import { Needs } from '../../sections/Needs/Needs'
import Petitions from '../Petitions/Petitions'

export const Support: FC = () => (
  <section>
    <Donate />
    <Needs />
    <Petitions />
    <Communicate />
  </section>
)
