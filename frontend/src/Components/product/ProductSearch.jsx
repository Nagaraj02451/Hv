import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/productActions";
import Loader from ".././layouts/Loader";
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import 'rc-slider/assets/index.css';


export default function ProductSearch() {
    const dispatch = useDispatch();
    const { products, loading, error, productsCount, resPerPage } = useSelector((state) => state.productsState)
    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([1, 1000]);
    const [priceChanged, setPriceChanged] = useState(price);
    const [category, setCategory] = useState(null);
    const [seller, setseller] = useState(null);
    const [rating, setRating] = useState(0);
    console.log(seller, "seller");
    const { keyword } = useParams();
    const categories = [
        "cottage",
        "villas",
        "chalets"
    ];


    useEffect(() => {
        if (error) {
            return toast.error(error, {
                position: toast.POSITION.BOTTOM_CENTER
            })
        }
        dispatch(getProducts(keyword, priceChanged, category, seller, rating, currentPage))
    }, [error, dispatch, currentPage, keyword, priceChanged, category, seller, rating])


    return (
        <Fragment>


          <div className="uytr8767">
          <div className="yd6try" onClick={()=>setCategory()}>All</div>

{categories.map(category =>
                                    <>
                                    
                            
                                     <div className="ytrdyfguh">
                                     <input  type="text" id={category} name={category} value={category} onClick={() => {
                                            setCategory(category)
                                        }} key={category}  />
                                     
                                     </div>
                                    </>
                                    // <p style={{
                                    //     cursor: "pointer",
                                    //     listStyleType: "none"
                                    // }}

                                    //     key={category}
                                    //     onClick={() => {
                                    //         setCategory(category)
                                    //     }}>{category}</p>

                                )}


          </div>
        </Fragment>
    )
}
