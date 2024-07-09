import Container from "../components/container/Container.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./home/Home.jsx";
import Beauty from "./home/beauty/Beauty.jsx";
import Fragrances from "./home/fragrances/Fragrances.jsx";
import Furniture from "./home/furniture/Furniture.jsx";
import Groceries from "./home/groceries/Groceries.jsx";
import Laptops from "./home/laptops/Laptops.jsx";
import All from "./home/all/All.jsx";
import SinglePage from "./single-page/SinglePage.jsx";
import Tops from "./home/tops/Tops.jsx";
import Smartphones from "./home/smartphones/Smartphones.jsx";
import Tablets from "./home/tablets/Tablets.jsx";
import Vehicle from "./home/vehicle/Vehicle.jsx";
import Motorcycle from "./home/motorcycle/Motorcycle.jsx";
import Sunglasses from "./home/sunglasses/Sunglasses.jsx";


const Index = () => {
    return (
        <Container>
            <Routes>
                <Route path="" element={<Home/>} >
                    <Route index path="" element={<All/>}/>
                    <Route path="/tops" element={<Tops/>}/>
                    <Route path="/beauty" element={<Beauty/>}/>
                    <Route path="/fragrances" element={<Fragrances/>}/>
                    <Route path="/furniture" element={<Furniture/>}/>
                    <Route path="/groceries" element={<Groceries/>}/>
                    <Route path="/laptops" element={<Laptops/>}/>
                    <Route path="/smartphones" element={<Smartphones/>}/>
                    <Route path="/tablets" element={<Tablets/>}/>
                    <Route path="/vehicle" element={<Vehicle/>}/>
                    <Route path="/motorcycle" element={<Motorcycle/>}/>
                    <Route path="/sunglasses" element={<Sunglasses/>}/>
                </Route>
                <Route path="/single/:id" element={<SinglePage/>} />
            </Routes>
        </Container>
    )
}
export default Index
