import React from 'react'
import './NanBar.css'

export default function NavBar() {
  return (
    <div>
        <ol className='navBar'>
            <li><Link to={'/'}>Домой</Link></li>
            <li><Link to={'/players'}>игроки NBA</Link></li>
            <li><Link to={'/games'}>Игры NBA</Link></li>
            <li><Link to={'/stats'}>Статистика по NBA</Link></li>
        </ol>
    </div>
  )
}
