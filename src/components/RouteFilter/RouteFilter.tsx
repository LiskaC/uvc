import { PropsWithChildren } from 'react'
import { Route } from '../../routes'

type Props = {
  route: Partial<Route>
}

export const RouteFilter = (props: PropsWithChildren<Props>) => {
  if (props.route.hidden) {
    return null
  }
  return props.children
}
