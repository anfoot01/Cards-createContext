import React from 'react';
import User from './User';

function List(props) {
    return (
        <div className='container'>
            <div className="row">
                {
                    props.products.map((userInfo, index)=>{
                        return <User 
                        key={index} 
                        index={index} 
                        product={userInfo.product}
                        order={userInfo.order}></User>
                    })
                }
            </div>
            
        </div>
    );
}

export default List;