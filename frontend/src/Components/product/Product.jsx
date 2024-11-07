import { Link } from 'react-router-dom';

export default function Product({ product }) {
    console.log(product, "ytyygu");

    return (
        <>
          <a href='ourstays'>  <div>
                <img className='ytdfuyt6fu' src={product.images}
                    alt={product.name} />
                <div className='giuytgf76iuy'>{product.name}</div>
                <div className='yguftyitu'>{product.description}</div>
            </div>
            </a>

        </>

    )
}
