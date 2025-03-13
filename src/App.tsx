import { FC } from 'react'
import { HashRouter, Route, Routes } from 'react-router'
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

export const App: FC = () => (
  // To deploy a test version to Github Pages, it is necessary to use HashRouter since
  // routing with BrowserRouter is not supported
  <HashRouter>
    <Routes>
      <Route path={routes.home.path} element={<AppShell/>}>
        <Route index element={<Home/>}/>
        <Route path={routes.home.subroutes.about.path} element={<About/>}/>
        <Route path={routes.home.subroutes.constitution.path} element={<Constitution/>}/>
        <Route path={routes.home.subroutes.reports.path} element={<Reports/>}/>
        <Route path={routes.events.path} element={<Events/>}/>
        <Route path={routes.events.subroutes.calendar.path} element={<Events/>}/>
        <Route path={routes.events.subroutes.gallery.path} element={<div>Gallery</div>}/>
        <Route path={routes.support.path} element={<Support/>}/>
        <Route path={routes.support.subroutes.volunteer.path} element={<Volunteer/>}/>
        <Route path={routes.support.subroutes.donate.path} element={<Donate/>}/>
        <Route path={routes.support.subroutes.communicate.path} element={<Communicate/>}/>
        <Route path={routes.support.subroutes.needs.path} element={<Needs/>}/>
        <Route path={routes.support.subroutes.partners.path} element={<Partners/>}/>
        <Route path={routes.contact.path} element={<Contact/>}/>
      </Route>
    </Routes>
  </HashRouter>
)
