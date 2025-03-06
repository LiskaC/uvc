/**
 * Data for a single route
 */
export type Route = { name: string, path: string, subroutes?: Record<ResourceSubroutes, Route> }

/**
 * List of subroutes for resources
 */
export type ResourceSubroutes = "initiatives" | "membership" | "contact"

/**
 * Type for all the routes available in the application
 */
export type Routes = {
  home: Route
  reporting: Route
  events: Route
  resources: Route
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
  resources: {
    name: 'Resources',
    path: '/resources',
    subroutes: {
      initiatives: { name: 'Initiatives', path: '/resources/initiatives' },
      membership: { name: 'Become a member', path: '/resources/member' },
      contact: { name: 'Contact us', path: '/resources/contact' }
    }
  }
}
