import { FC } from 'react';
import { Outlet } from 'react-router'

export const AppShell: FC = () => (
  <div className='app-shell'>
    <header className='app-header'>Ukrainian Victory Campaign</header>
    <nav className='app-navigation'>Navigation</nav>
    <main className='app-content'>
      <Outlet/>
    </main>
  </div>
)
