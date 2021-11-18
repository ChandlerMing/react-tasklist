import { useLocation } from 'react-router-dom'
import Button from './Button'

export const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && <Button color={showAdd ? "red" : "green"} text={showAdd ? "close" : "add"} onClick={onAdd}></Button>}
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}


export default Header
