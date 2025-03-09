import { FC } from 'react'
import { HashRouter, Route, Routes } from 'react-router'
import { routes } from './routes'
import { AppShell } from './components/AppShell/AppShell'
import { Home } from './views/Home/Home'
import { Reports } from './views/Reports/Reports'
import { Events } from './views/Events/Events'
import { Contact } from './views/Contact/Contact'
import { Initiatives } from './views/Initiatives/Initiatives'
import { Donate } from './sections/Donate/Donate'
import { Communicate } from './sections/Communicate/Communicate'
import { Support } from './views/Support/Support'
import { Volunteer } from './sections/Volunteer/Volunteer'

export const App: FC = () => (
  // To deploy a test version to Github Pages, it is necessary to use HashRouter since
  // routing with BrowserRouter is not supported
  <HashRouter>
    <Routes>
      <Route path={routes.home.path} element={<AppShell/>}>
        <Route index element={<Home/>}/>
        <Route path={routes.reporting.path} element={<Reports/>}/>
        <Route path={routes.events.path} element={<Events/>}/>
        <Route path={routes.support.path} element={<Support/>}/>
        <Route path={routes.support.subroutes.volunteer.path} element={<Volunteer/>}/>
        <Route path={routes.support.subroutes.donate.path} element={<Donate/>}/>
        <Route path={routes.support.subroutes.communicate.path}
          element={<Communicate/>}/>
        <Route path={routes.support.subroutes.initiatives.path}
          element={<Initiatives/>}/>
        <Route path={routes.contact.path} element={<Contact/>}/>
      </Route>
    </Routes>
  </HashRouter>
)
