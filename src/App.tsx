import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { AppShell } from './components/AppShell'
import { Home } from './views/Home'

export const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<AppShell/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
