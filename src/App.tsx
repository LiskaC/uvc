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
        <Route path={routes.events.path} element={<div>Evennts</div>}/>
        <Route path={routes.collab.path} element={<div>Collab</div>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
