/**
 * Data for a single route
 */
export type Route = { name: string, path: string }

/**
 * Type for all the routes available in the application
 */
export type Routes = {
  home: Route
  reporting: Route
  events: Route
  support: Route & {
    subroutes: {
      donate: Route
      needs: Route
      volunteer: Route
      communicate: Route
    }
  }
  contact: Route
}

/**
 * All the routes available in the application
 */
export const routes: Routes = {
  home: {
    name: 'Home',
    path: '/',
  },
  reporting: {
    name: 'Reporting',
    path: '/reporting',
  },
  events: {
    name: 'Events',
    path: '/events',
  },
  support: {
    name: 'Support',
    path: '/support',
    subroutes: {
      donate: { name: 'Donate', path: '/support/donate' },
      needs: { name: 'Current needs', path: '/resources/needs' },
      volunteer: { name: 'Volunteer', path: '/support/volunteer' },
      communicate: { name: 'Spread the word', path: '/support/communicate' }
    }
  },
  contact: { name: 'Contact us', path: '/resources/contact' }
}

/**
 * Typeguard to filter for routes which have subroutes
 * @param route Any {@link Route}
 * @returns Only routes with subroutes
 */
export function hasSubroutes(route: Route): route is Route & { subroutes: Record<string, Route> } {
  return (route as any).subroutes !== undefined
}
