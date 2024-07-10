import "./Home.css"
import Container from "../../components/container/Container.jsx";
import {Outlet} from "react-router-dom";
import Categories from "../../components/categories/Categories.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import {useState} from "react";
import {useFetch} from "../../hooks/useFetch.jsx";


const Home = () => {

    const [search, setSearch] = useState("")

    const [data, loading] = useFetch(`/products/search?q=${search}`)

    return (
        <Container>
            <div>
                <Navbar search={search} setSearch={setSearch}/>
            </div>
            <div>
                <Categories/>
                <Outlet/>
            </div>
        </Container>
    )
}
export default Home
