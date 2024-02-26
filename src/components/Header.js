import { Link } from "react-router-dom"

function Header(props){
    return <nav className="nav">
        <Link to={localStorage.getItem("token") ? '/dashboard' : '/'}>
            <div>People App</div>
        </Link>
    </nav>

}

export default Header