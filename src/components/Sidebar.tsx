import { NavLink } from 'react-router-dom'
import fintech from '../assets/fintech.svg'
import resumo from '../assets/icons/resumo.svg'
import vendas from '../assets/icons/vendas.svg'

export default function Sidebar() {
  return (
    <nav className="sidebar box">
      <img className='mb' src={fintech} alt="Logo" />
      <ul>
        <li>
          <span>
            <img src={resumo} alt="" />
          </span>
          <NavLink to='/'>Resumo</NavLink>
        </li>
        <li>
          <span>
            <img src={vendas} alt="" />
          </span>
          <NavLink to='/vendas'>Vendas</NavLink>
        </li>
      </ul>
    </nav>
  )
}