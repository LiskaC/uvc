/**
 * Data for a single route
 */
type Route = { name: string, path: string }

/**
 * Type for all the routes available in the application
 */
type Routes = {
  home: Route,
  events: Route,
  collab: Route
}

/**
 * All the routes available in the application
 */
export const routes: Routes = {
  home: {
    name: 'Home',
    path: '/'
  },
  events: {
    name: 'Events',
    path: '/events'
  },
  collab: {
    name: 'Collab',
    path: '/collab'
  }
}
