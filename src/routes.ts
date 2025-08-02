/**
 * Data for a single route
 */
export type Route = { name: string; path: string }

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
      partners: Route
    }
  }
  events: Route & {
    subroutes: {
      calendar: Route
      gallery: Route
      volunteer: Route
    }
  }
  support: Route & {
    subroutes: {
      donate: Route
      needs: Route
      petitions: Route
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
      contact: { name: 'Contact us', path: '/home/contact' },
      partners: { name: 'Partners', path: '/home/partners' },
    },
  },
  events: {
    name: 'Events',
    path: '/events',
    subroutes: {
      calendar: { name: 'Calendar', path: '/events/calendar' },
      gallery: { name: 'Gallery', path: '/events/gallery' },
      volunteer: { name: 'Volunteer', path: '/events/volunteer' },
    },
  },
  support: {
    name: 'Support',
    path: '/support',
    subroutes: {
      donate: { name: 'Donate', path: '/support/donate' },
      needs: { name: 'Current needs', path: '/support/needs' },
      petitions: { name: 'Active Petitions', path: '/support/petitions' },
    },
  },
}

/**
 * Typeguard to filter for routes which have subroutes
 * @param route Any {@link Route}
 * @returns Only routes with subroutes
 */
export function hasSubroutes(
  route: Route & { subroutes?: Record<string, Route> }
): route is Route & { subroutes: Record<string, Route> } {
  return route.subroutes !== undefined
}
