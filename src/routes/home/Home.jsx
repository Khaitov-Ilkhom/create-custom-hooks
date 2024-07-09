import "./Home.css"
import Container from "../../components/container/Container.jsx";
import {Outlet} from "react-router-dom";
import Categories from "../../components/categories/Categories.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";


const Home = () => {
    return (
        <Container>
            <div>
                <Navbar/>
            </div>
            <div>
                <Categories/>
                <Outlet/>
            </div>
        </Container>
    )
}
export default Home
