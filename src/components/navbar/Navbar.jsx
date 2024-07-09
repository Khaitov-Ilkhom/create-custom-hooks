import "./Navbar.css"
import {Link} from "react-router-dom";
import {BsSearch} from "react-icons/bs";

const Navbar = () => {
    return (
        <div className="nav">
            <Link to="/">DummyJson</Link>
            <form className="form">
                <input type="text" placeholder="Search..."/>
                <button><BsSearch/></button>
            </form>
        </div>
    )
}
export default Navbar
