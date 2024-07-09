import "./Single.css"
import {useParams} from "react-router-dom";
import {useFetch} from "../../hooks/useFetch.jsx";
import {FaStar} from "react-icons/fa6";

const SinglePage = () => {
    const productId = useParams()
    const [data, loading] = useFetch(`/products/${productId.id}`)

    return (
        <div>
            <div>
                <img src={data.thumbnail} alt=""/>
            </div>
            <div className="card-body">
                <h2>{data.title}</h2>
                <div className="price-rating">
                    <p className="rating"><span><FaStar/></span> {data.rating}</p>
                    <div>
                        <span className="discount">${(data.price - (data.price * data.discountPercentage) / 100).toFixed(2)}</span>
                        <span className="price">${data.price}</span>
                    </div>
                </div>
                <p className="desc">{data.description}</p>
            </div>
        </div>
    )
}
export default SinglePage
