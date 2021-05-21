import React from 'react'
import { Link } from 'react-router-dom';
import ProductComponent from './Productcomp';


function ProductPage(props)
{
    const { handle } = useParams()
    const location = useLocation()
    return(
        <div>
            <h1>{location.state.title}</h1>
        </div>
    );
}

export default ProductPage;