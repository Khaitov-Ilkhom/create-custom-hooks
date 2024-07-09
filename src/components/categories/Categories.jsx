import "./Categories.css"
import Container from "../container/Container.jsx";
import {NavLink} from "react-router-dom";

const Categories = () => {
    return (
        <Container>
            <div className="category">
                <ul>
                    <li><NavLink end to=""> All </NavLink></li>
                    <li><NavLink to="/tops"> Dress </NavLink></li>
                    <li><NavLink to="/beauty"> Beauty </NavLink></li>
                    <li><NavLink to="/fragrances"> Fragrances </NavLink></li>
                    <li><NavLink to="/furniture"> Furniture </NavLink></li>
                    <li><NavLink to="/groceries"> Groceries </NavLink></li>
                    <li><NavLink to="/laptops"> Laptops </NavLink></li>
                    <li><NavLink to="/smartphones"> Smartphones </NavLink></li>
                    <li><NavLink to="/tablets"> Tablets </NavLink></li>
                    <li><NavLink to="/vehicle"> Vehicle </NavLink></li>
                    <li><NavLink to="/motorcycle"> Motorcycle </NavLink></li>
                    <li><NavLink to="/sunglasses"> Sunglasses </NavLink></li>
                </ul>
            </div>
        </Container>
    )
}
export default Categories
