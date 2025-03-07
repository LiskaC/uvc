import { FC } from 'react'
import { HashRouter, Route, Routes } from 'react-router'
import { routes } from './routes'
import { AppShell } from './components/AppShell/AppShell'
import { Home } from './views/Home/Home'
import { Reports } from './views/Reports/Reports'
import { Events } from './views/Events/Events'
import { Contact } from './views/Contact/Contact'

export const App: FC = () => (
  // To deploy a test version to Github Pages, it is necessary to use HashRouter since
  // routing with BrowserRouter is not supported
  <HashRouter>
    <Routes>
      <Route path={routes.home.path} element={<AppShell/>}>
        <Route index element={<Home/>}/>
        <Route path={routes.reporting.path} element={<Reports/>}/>
        <Route path={routes.events.path} element={<Events/>}/>
        <Route path={routes.support.path} element={<div>Support</div>}/>
        <Route path={routes.support.subroutes.volunteer.path} element={<div>Volunteer</div>}/>
        <Route path={routes.support.subroutes.donate.path} element={<div>Donate</div>}/>
        <Route path={routes.support.subroutes.communicate.path}
          element={<div>Spread the word</div>}/>
        <Route path={routes.resources.path} element={<div>resources</div>}/>
        <Route path={routes.support.subroutes.initiatives.path}
          element={<div>Initiatives</div>}/>
        <Route path={routes.resources.subroutes.membership.path} element={<div>Member</div>}/>
        <Route path={routes.resources.subroutes.contact.path} element={<Contact/>}/>
      </Route>
    </Routes>
  </HashRouter>
)
