import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import Loader from "./layouts/Loader";
import MetaData from "./layouts/MetaData";
import Product from "./product/Product";
import { toast } from 'react-toastify';
import Navbar1 from "./Navbar1";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
// import Search from "./product/Search";
import ProductSearch from "./product/ProductSearch";
// import "../styles/Designers.css"

export default function Sites() {
    const dispatch = useDispatch();
  
    const { products, loading, error, productsCount } = useSelector((state) => state.productsState)
    const [currentPage, setCurrentPage] = useState(1);
    console.log(products, "start");
 
    useEffect(() => {
        if (error) {
            return toast.error(error, {
                position: toast.POSITION.BOTTOM_CENTER
            })
        }
        dispatch(getProducts(null, null, null, null, currentPage))
    }, [error, dispatch, currentPage])


    return (
        <Fragment>
            <div>
                <div className='fr122'>
                    <div className='fr2'>
                        <Navbar1 />

                        {/* <MetaData title={'Propertiess'} /> */}


                     

                                <div className="productitteams">
                                    <div className="innerproductiteam">


                                        <div className="yurft768uyg7ui">
                                 
                        <ProductSearch />

                                        </div>
                                        <div className="uytf76rf7uy">
                                            <div className="yutfu67iyhi">
                                                <div>10 stays</div>
                                                <div className="yutrfi">CLEAR FILTER</div>
                                            </div>

                                            <div className="iuyf7iyug">
                                            {loading ? <Loader /> :
                            <>
                                                {products && products.map(product => (
                                                    <>
                                                        {
                                                            <Product key={product._id} product={product} />
                                                        }

                                                    </>
                                                ))}

</>
}
                                            </div>
                                        </div>





                                    </div>
                                </div>
                      
                        <Footer2 />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
