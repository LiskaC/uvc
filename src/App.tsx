import { FC } from 'react'
import { HashRouter, Route, Routes } from 'react-router'
import { routes } from './routes'
import { AppShell } from './components/AppShell/AppShell'
import { Home } from './views/Home'
import { Reports } from './views/Reports'
import { Events } from './views/Events'

export const App: FC = () => (
  <HashRouter>
    <Routes>
      <Route path={routes.home.path} element={<AppShell/>}>
        <Route index element={<Home/>}/>
        <Route path={routes.reporting.path} element={<Reports/>}/>
        <Route path={routes.events.path} element={<Events/>}/>
        <Route path={routes.resources.path} element={<div>resources</div>}/>
        <Route path={routes.resources.subroutes.initiatives.path} element={<div>Initiatives</div>}/>
        <Route path={routes.resources.subroutes.membership.path} element={<div>Member</div>}/>
        <Route path={routes.resources.subroutes.contact.path} element={<div>Contact</div>}/>
      </Route>
    </Routes>
  </HashRouter>
)
