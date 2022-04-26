import { Outlet, Link } from 'react-router-dom'
const NavbarComponent = (props) => {
  const { resetHome } = props
  return (
      <div>
        <div className="navbar has-background-link is-align-items-center is-flex is-justify-content-flex-end pr-5 pt-2 pb-1">
            <Link onClick={resetHome} className='has-text-white has-text-right mr-5' to="/">
                <i className='material-icons-outlined pr-3'>home</i>
            </Link>
            <Link onClick={resetHome} className='has-text-white has-text-right mr-5' to="/about">
                <i className='material-icons-outlined pr-3'>info</i>
            </Link>
        </div>
        <Outlet />          
      </div>
  )
}
export default NavbarComponent