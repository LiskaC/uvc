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
      <h2>Donate directly to an initiative</h2>
      <p>
        We receive many requests for support, find an initiative to support via our initatives page:
      </p>
      <a href={routes.support.subroutes.initiatives.path}>browse needs</a>
    </div>
  </section>
)
