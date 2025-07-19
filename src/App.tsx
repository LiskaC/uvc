import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { routes } from './routes'
import { AppShell } from './components/AppShell/AppShell'
import { Home } from './views/Home/Home'
import { Reports } from './views/Reports/Reports'
import { Events } from './views/Events/Events'
import { Contact } from './views/Contact/Contact'
import { Needs } from './sections/Needs/Needs'
import { Donate } from './sections/Donate/Donate'
import { Communicate } from './sections/Communicate/Communicate'
import { Support } from './views/Support/Support'
import { Volunteer } from './sections/Volunteer/Volunteer'
import { About } from './views/About/About'
import { Constitution } from './views/Constitution/Constitution'
import { Partners } from './views/Partners/Partners'
import { Gallery } from './sections/Gallery/Gallery'

const routesConfig = [
  { path: routes.home.subroutes.about.path, element: <About /> },
  { path: routes.home.subroutes.constitution.path, element: <Constitution /> },
  { path: routes.home.subroutes.reports.path, element: <Reports /> },
  { path: routes.home.subroutes.contact.path, element: <Contact /> },
  { path: routes.events.path, element: <Events /> },
  { path: routes.events.subroutes.calendar.path, element: <Events /> },
  { path: routes.events.subroutes.gallery.path, element: <Gallery /> },
  { path: routes.support.path, element: <Support /> },
  { path: routes.support.subroutes.volunteer.path, element: <Volunteer /> },
  { path: routes.support.subroutes.donate.path, element: <Donate /> },
  { path: routes.support.subroutes.communicate.path, element: <Communicate /> },
  { path: routes.support.subroutes.needs.path, element: <Needs /> },
  { path: routes.support.subroutes.partners.path, element: <Partners /> },
]

export const App: FC = () => (
  // To deploy a test version to Github Pages, it is necessary to use HashRouter since
  // routing with BrowserRouter is not supported
  <BrowserRouter>
    <Routes>
      <Route path={routes.home.path} element={<AppShell />}>
        <Route index element={<Home />} />
        {routesConfig.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  </BrowserRouter>
)
