import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { AppShell } from './components/AppShell/AppShell'
import { Home } from './views/Home'
import { routes } from './routes'

export const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={routes.home.path} element={<AppShell/>}>
        <Route index element={<Home/>}/>
        <Route path={routes.reporting.path} element={<div>Reporting</div>}/>
        <Route path={routes.events.path} element={<div>Evennts</div>}/>
        <Route path={routes.resources.path} element={<div>resources</div>}/>
        <Route path={routes.resources.subroutes.initiatives.path} element={<div>Initiatives</div>}/>
        <Route path={routes.resources.subroutes.membership.path} element={<div>Member</div>}/>
        <Route path={routes.resources.subroutes.contact.path} element={<div>Contact</div>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
