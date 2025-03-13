/**
 * Data for a single route
 */
export type Route = { name: string, path: string }

/**
 * Type for all the routes available in the application
 */
export type Routes = {
  home: Route & {
    subroutes: {
      about: Route
      constitution: Route
      reports: Route
      contact: Route
    }
  }
  events: Route & {
    subroutes: {
      calendar: Route
      gallery: Route
    }
  }
  support: Route & {
    subroutes: {
      donate: Route
      needs: Route
      volunteer: Route
      communicate: Route
      partners: Route
    }
  }
}

/**
 * All the routes available in the application
 */
export const routes: Routes = {
  home: {
    name: 'Home',
    path: '/',
    subroutes: {
      about: { name: 'About us', path: '/home/about-us' },
      constitution: { name: 'Constitution', path: '/home/constitution' },
      reports: { name: 'Reports', path: '/home/reports' },
      contact: { name: 'Contact us', path: '/home/contact' }
    }
  },
  events: {
    name: 'Events',
    path: '/events',
    subroutes: {
      calendar: { name: 'Calendar', path: '/events/calendar' },
      gallery: { name: 'Gallery', path: '/events/gallery' }
    }
  },
  support: {
    name: 'Support',
    path: '/support',
    subroutes: {
      donate: { name: 'Donate', path: '/support/donate' },
      needs: { name: 'Current needs', path: '/resources/needs' },
      volunteer: { name: 'Volunteer', path: '/support/volunteer' },
      communicate: { name: 'Spread the word', path: '/support/communicate' },
      partners: { name: 'Partners', path: '/support/partners' }
    }
  }
}

/**
 * Typeguard to filter for routes which have subroutes
 * @param route Any {@link Route}
 * @returns Only routes with subroutes
 */
export function hasSubroutes(route: Route): route is Route & { subroutes: Record<string, Route> } {
  return (route as any).subroutes !== undefined
}
