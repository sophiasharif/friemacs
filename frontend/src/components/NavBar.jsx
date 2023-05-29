import { Link } from 'react-router-dom'
import {useLogout} from '../hooks/useLogout'

function NavBar() {
    const {logout} = useLogout() 

    const handleClick = () => {
        logout()
    }

    return (
        <header>
            <div className="container" >
                <Link to='/' >
                    <h1>Home</h1>
                </Link>
                <Link to='/survey' >
                    <h1>Survey</h1>
                </Link>
                <button onClick={handleClick}> Log out</button>
            </div>
        </header>
    )
}

export default NavBar