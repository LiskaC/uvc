import { FC } from 'react'
import { Donate } from '../../sections/Donate/Donate'
import { Communicate } from '../../sections/Communicate/Communicate'
import { Needs } from '../../sections/Needs/Needs'
import { Volunteer } from '../../sections/Volunteer/Volunteer'

export const Support: FC = () => (
  <div>
    <Donate/>
    <Needs/>
    <Volunteer/>
    <Communicate/>
  </div>
)
