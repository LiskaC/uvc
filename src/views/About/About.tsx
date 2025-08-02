import { FC, Fragment } from 'react'
import { Team } from '../../sections/Team/Team'
import { Communicate } from '../../sections/Communicate/Communicate'

export const About: FC = () => (
  <Fragment>
    <h1>About us</h1>
    <Team />
    <Communicate />
  </Fragment>
)
