import "./Products.css"
import { FaStar } from "react-icons/fa6";
import {Link} from "react-router-dom";

// <Skeleton.Image active className="skeloton_img" />
// <Skeleton.Input active className="skeloton_input" />

const Products = ({product}) => {
    return (
        <Link to={`/single/${product.id}`} className="card">
            <div className="card-img">
                <img src={product.thumbnail} alt={product.title}/>
            </div>
            <div className="card-body">
                <h3>{product.title}</h3>
                <div className="price-rating">
                    <p className="rating"><span><FaStar/></span> {product.rating}</p>
                    <div>
                        <span className="discount">${(product.price - (product.price * product.discountPercentage) / 100).toFixed(2)}</span>
                        <span className="price">${product.price}</span>
                    </div>
                </div>
                <p className="desc">{product.description}</p>
            </div>
        </Link>
    )
}
export default Products
