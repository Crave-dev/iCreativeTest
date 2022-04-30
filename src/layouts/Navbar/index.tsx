import { Outlet } from 'react-router-dom'
import './navbar.scss'

export default function navbar() {
  return (
      <div>
        <nav>
        </nav>
        <Outlet />
      </div>
  )
}
