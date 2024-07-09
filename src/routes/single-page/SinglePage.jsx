import "./Single.css"
import {useParams} from "react-router-dom";
import {useFetch} from "../../hooks/useFetch.jsx";
import {FaStar} from "react-icons/fa6";
import Container from "../../components/container/Container.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";

const SinglePage = () => {
    const productId = useParams()
    const [data, loading] = useFetch(`/products/${productId.id}`)

    return (
        <Container>
            <Navbar/>
            <div className="wrapper">
                <div className="single-img">
                    <img src={data.thumbnail} alt={data.title}/>
                </div>
                <div className="card-body single-body">
                    <h2>{data.title}</h2>
                    <div className="price-rating p">
                        <p className="rating"><span><FaStar/></span> {data.rating}</p>
                        <div className='prices'>
                            <span className="discount">${(data.price - (data.price * data.discountPercentage) / 100).toFixed(2)}</span>
                            <span className="price">${data.price}</span>
                        </div>
                    </div>
                    <p className="desc single-desc">{data.description}</p>
                </div>
            </div>
        </Container>
    )
}
export default SinglePage
