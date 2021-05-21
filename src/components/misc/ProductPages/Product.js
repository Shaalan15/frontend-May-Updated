import React from 'react'
import { Link } from 'react-router-dom';


function Product(props)
{
    return(
        <div>
          <img src={props.productImage}></img>
          <h1>{props.title}</h1>
          <h4>{props.description}</h4>
          <h5>{props.price}</h5>
          <h6>{props.associatedUsername}</h6>
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

export default Product;