import React from 'react'
import { Link } from 'react-router-dom';
import '../../../App.css'

function ProductListing(props)
{
    return(
        <div>
          <img className="product-holder" src={props.productImage}/>
          <h1 className="artstart">{props.title}</h1>
          <h2 className="artstart">{props.description}</h2>
          <h3>{props.price}</h3>
          <h4>{props.associatedUsername}</h4>
          <Link to={{
            pathname:'/productpage',
            state:{
              title: props.title,
              description: props.description,
              price: props.price,
              associatedUsername: props.associatedUsername,
              color: props.color
            }
          }}><button/>
          </Link>
          </div>
    );
}

export default ProductListing;