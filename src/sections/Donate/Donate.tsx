import { FC } from 'react'
import { routes } from '../../routes'

export const Donate: FC = () => (
  <section>
    <h1>Donate</h1>
    <div>
      <p>Donate to us directly here - we'll prioritise the spend</p>
      <a href=''>Link to donation page/paypal or whatever</a>
    </div>
    <div>
      <h2>Donate directly to fill a need</h2>
      <p>
        We receive many requests for support, find a need you can help with in our current needs page:
      </p>
      <a href={routes.support.subroutes.needs.path}>browse needs</a>
    </div>
  </section>
)
